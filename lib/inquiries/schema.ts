import { z } from "zod";

export const INQUIRY_TYPES = [
  "Real Estate Development",
  "Business Strategy & Capital Advisory",
  "Government Contracting",
  "Strategic Investments",
  "Executive Education & Academy",
  "Foundation & Community Impact",
  "Press & Institutional Media",
  "Other Enterprise Inquiries",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export const INQUIRY_STATUSES = ["NEW", "IN_PROGRESS", "RESOLVED", "ARCHIVED"] as const;
export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];

export const InquirySubmissionSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please provide a valid corporate email address")
    .max(120, "Email cannot exceed 120 characters")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(30, "Phone number cannot exceed 30 characters")
    .optional()
    .or(z.literal("")),
  organization: z
    .string()
    .max(150, "Organization cannot exceed 150 characters")
    .optional()
    .or(z.literal("")),
  inquiryType: z.enum(INQUIRY_TYPES, {
    errorMap: () => ({ message: "Please select a valid operating discipline" }),
  }),
  message: z
    .string()
    .min(15, "Please provide sufficient detail (minimum 15 characters)")
    .max(4000, "Inquiry scope cannot exceed 4,000 characters")
    .trim(),
  // Anti-spam honeypot field (must remain empty for human submissions)
  website_url_hp: z.string().max(0, "Automated submission detected").optional(),
  // Submission timestamp for rate/speed anomaly detection (must be at least 1.5 seconds)
  timestamp_start: z.string().optional(),
});

export type InquirySubmissionInput = z.infer<typeof InquirySubmissionSchema>;

export interface InquiryRecord {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: InquiryType;
  message: string;
  status: InquiryStatus;
  internalNotes?: string;
  createdAt: string;
  updatedAt: string;
}
