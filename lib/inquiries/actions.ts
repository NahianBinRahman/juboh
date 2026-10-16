"use server";

import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/auth/session";
import {
  InquirySubmissionSchema,
  InquiryStatus,
  InquiryRecord,
} from "./schema";
import {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "./store";
import { sendInquiryNotification } from "@/lib/email";

export interface InquiryActionResult {
  success: boolean;
  message?: string;
  referenceCode?: string;
  errors?: Record<string, string[]>;
}

export async function submitInquiryAction(
  _prevState: InquiryActionResult | null,
  formData: FormData
): Promise<InquiryActionResult> {
  const rawData = {
    fullName: formData.get("fullName")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    phone: formData.get("phone")?.toString() || "",
    organization: formData.get("organization")?.toString() || "",
    inquiryType: formData.get("inquiryType")?.toString() || "",
    message: formData.get("message")?.toString() || "",
    website_url_hp: formData.get("website_url_hp")?.toString() || "",
    timestamp_start: formData.get("timestamp_start")?.toString() || "",
  };

  // 1. Honeypot Anti-Spam Check:
  // If the hidden website_url_hp input contains any value, it's a bot submission.
  if (rawData.website_url_hp && rawData.website_url_hp.trim().length > 0) {
    // Return false positive to prevent bot from adapting
    return {
      success: true,
      referenceCode: "JUBOH-INQ-2026-0000",
      message: "Inquiry received.",
    };
  }

  // 2. Human Speed Check:
  // If form was submitted in less than 1200ms from mounting, flag as automated bot
  if (rawData.timestamp_start) {
    const elapsed = Date.now() - parseInt(rawData.timestamp_start, 10);
    if (!isNaN(elapsed) && elapsed > 0 && elapsed < 1200) {
      return {
        success: true,
        referenceCode: "JUBOH-INQ-2026-0000",
        message: "Inquiry received.",
      };
    }
  }

  // 3. Strict Zod Validation
  const validation = InquirySubmissionSchema.safeParse(rawData);
  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please correct the highlighted fields before transmitting.",
      errors: fieldErrors,
    };
  }

  try {
    // 4. Persist to Supabase / resilient store
    const inquiry = await createInquiry(validation.data);

    // 5. Send Transactional Notification
    await sendInquiryNotification(inquiry);

    // 6. Revalidate admin inquiries view
    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");

    return {
      success: true,
      referenceCode: inquiry.referenceCode,
      message: `Your inquiry has been recorded under Reference #${inquiry.referenceCode}. Our executive office will review and respond promptly.`,
    };
  } catch (error) {
    console.error("[Inquiry Submission Failure]", error);
    return {
      success: false,
      message: "An institutional communication gateway timeout occurred. Please try again or email inquiries@juboh.com directly.",
    };
  }
}

export async function updateInquiryStatusAction(
  id: string,
  status: InquiryStatus,
  internalNotes?: string
): Promise<{ success: boolean; message?: string }> {
  const session = await getAdminSession();
  if (!session) {
    return { success: false, message: "Unauthorized. Admin session required." };
  }

  try {
    await updateInquiryStatus(id, status, internalNotes);
    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");
    return { success: true };
  } catch (err: any) {
    return { success: false, message: err.message || "Failed to update inquiry status." };
  }
}

export async function deleteInquiryAction(
  id: string
): Promise<{ success: boolean; message?: string }> {
  const session = await getAdminSession();
  if (!session) {
    return { success: false, message: "Unauthorized. Admin session required." };
  }

  try {
    await deleteInquiry(id);
    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");
    return { success: true };
  } catch (err: any) {
    return { success: false, message: err.message || "Failed to delete inquiry." };
  }
}

export async function getInquiriesAction(): Promise<InquiryRecord[]> {
  return await getAllInquiries();
}
