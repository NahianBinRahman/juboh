import fs from "fs";
import path from "path";
import { getServerSupabase } from "@/lib/supabase/server";
import { InquiryRecord, InquirySubmissionInput, InquiryStatus } from "./schema";

const DATA_DIR = path.join(process.cwd(), "data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

const INITIAL_INQUIRIES: InquiryRecord[] = [
  {
    id: "inq-101",
    referenceCode: "JUBOH-INQ-2026-8491",
    fullName: "Marcus Holloway",
    email: "m.holloway@southeastplanning.gov",
    organization: "Southeastern Municipal Council",
    phone: "+1 (404) 555-0192",
    inquiryType: "Government Contracting",
    message: "We are preparing a qualification packet for a 120,000 sq ft regional civic facility and would like to formally invite JUBOH to submit an institutional qualification portfolio.",
    status: "NEW",
    createdAt: "2026-10-15T14:32:00.000Z",
    updatedAt: "2026-10-15T14:32:00.000Z",
  },
  {
    id: "inq-102",
    referenceCode: "JUBOH-INQ-2026-4720",
    fullName: "David Vance",
    email: "dvance@vanceholdings.com",
    organization: "Vance Real Estate Holdings",
    phone: "+1 (212) 555-8831",
    inquiryType: "Real Estate Development",
    message: "Seeking a co-development master partner for an 18-acre urban infill parcel with approved zoning for mixed-use residential. Requesting preliminary advisory review.",
    status: "IN_PROGRESS",
    internalNotes: "Initial review assigned to real estate development division.",
    createdAt: "2026-10-12T11:20:00.000Z",
    updatedAt: "2026-10-13T09:15:00.000Z",
  },
  {
    id: "inq-103",
    referenceCode: "JUBOH-INQ-2026-1184",
    fullName: "Dr. Evelyn Reed",
    email: "ereed@universityendowment.edu",
    organization: "University Endowment Foundation",
    phone: "+1 (617) 555-3920",
    inquiryType: "Business Strategy & Capital Advisory",
    message: "Requesting a strategic advisory consultation regarding our campus real estate asset portfolio and potential P3 capitalization models for upcoming capital campaign.",
    status: "RESOLVED",
    internalNotes: "Consultation call concluded. Term sheet pending next board cycle.",
    createdAt: "2026-10-08T16:45:00.000Z",
    updatedAt: "2026-10-11T17:00:00.000Z",
  },
];

function ensureFileStorage(): InquiryRecord[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(INQUIRIES_FILE)) {
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(INITIAL_INQUIRIES, null, 2), "utf-8");
      return INITIAL_INQUIRIES;
    }
    const content = fs.readFileSync(INQUIRIES_FILE, "utf-8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : INITIAL_INQUIRIES;
  } catch (error) {
    console.error("[Inquiry File Storage Read Error]", error);
    return INITIAL_INQUIRIES;
  }
}

function saveFileStorage(records: InquiryRecord[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(records, null, 2), "utf-8");
  } catch (error) {
    console.error("[Inquiry File Storage Write Error]", error);
  }
}

export function generateReferenceCode(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `JUBOH-INQ-${year}-${random}`;
}

export async function createInquiry(input: InquirySubmissionInput): Promise<InquiryRecord> {
  const referenceCode = generateReferenceCode();
  const now = new Date().toISOString();
  const newRecord: InquiryRecord = {
    id: `inq-${Date.now()}`,
    referenceCode,
    fullName: input.fullName.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone?.trim() || undefined,
    organization: input.organization?.trim() || undefined,
    inquiryType: input.inquiryType,
    message: input.message.trim(),
    status: "NEW",
    createdAt: now,
    updatedAt: now,
  };

  // 1. Try Supabase if configured
  const supabase = getServerSupabase();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .insert({
          reference_code: newRecord.referenceCode,
          full_name: newRecord.fullName,
          email: newRecord.email,
          phone: newRecord.phone || null,
          organization: newRecord.organization || null,
          inquiry_type: newRecord.inquiryType,
          message: newRecord.message,
          status: newRecord.status,
          created_at: newRecord.createdAt,
          updated_at: newRecord.updatedAt,
        })
        .select()
        .single();

      if (!error && data) {
        newRecord.id = data.id;
      } else if (error) {
        console.warn("[Supabase Insert Warning, falling back to local file]", error.message);
      }
    } catch (e) {
      console.warn("[Supabase Insert Exception, falling back to local file]", e);
    }
  }

  // 2. Always persist to resilient local file storage
  const current = ensureFileStorage();
  const updated = [newRecord, ...current];
  saveFileStorage(updated);

  return newRecord;
}

export async function getAllInquiries(): Promise<InquiryRecord[]> {
  const supabase = getServerSupabase();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data.map((item) => ({
          id: item.id,
          referenceCode: item.reference_code || `JUBOH-${item.id.slice(0, 6)}`,
          fullName: item.full_name,
          email: item.email,
          phone: item.phone || undefined,
          organization: item.organization || undefined,
          inquiryType: item.inquiry_type as any,
          message: item.message,
          status: (item.status as InquiryStatus) || "NEW",
          internalNotes: item.internal_notes || undefined,
          createdAt: item.created_at,
          updatedAt: item.updated_at,
        }));
      }
    } catch (e) {
      console.warn("[Supabase Fetch Inquiries Exception, falling back to local file]", e);
    }
  }

  return ensureFileStorage();
}

export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus,
  internalNotes?: string
): Promise<InquiryRecord | null> {
  const now = new Date().toISOString();

  // 1. Try Supabase
  const supabase = getServerSupabase();
  if (supabase) {
    try {
      const payload: any = { status, updated_at: now };
      if (internalNotes !== undefined) {
        payload.internal_notes = internalNotes;
      }
      await supabase.from("inquiries").update(payload).eq("id", id);
    } catch (e) {
      console.warn("[Supabase Update Status Exception]", e);
    }
  }

  // 2. Update local file storage
  const current = ensureFileStorage();
  let updatedRecord: InquiryRecord | null = null;
  const updated = current.map((item) => {
    if (item.id === id || item.referenceCode === id) {
      updatedRecord = {
        ...item,
        status,
        internalNotes: internalNotes !== undefined ? internalNotes : item.internalNotes,
        updatedAt: now,
      };
      return updatedRecord;
    }
    return item;
  });

  if (updatedRecord) {
    saveFileStorage(updated);
  }

  return updatedRecord;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const supabase = getServerSupabase();
  if (supabase) {
    try {
      await supabase.from("inquiries").delete().eq("id", id);
    } catch (e) {
      console.warn("[Supabase Delete Inquiry Exception]", e);
    }
  }

  const current = ensureFileStorage();
  const filtered = current.filter((item) => item.id !== id && item.referenceCode !== id);
  saveFileStorage(filtered);
  return true;
}
