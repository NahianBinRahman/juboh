import { InquiryRecord } from "@/lib/inquiries/schema";

/**
 * Enterprise Transactional Email Dispatcher
 * Integrates with Resend API when RESEND_API_KEY is provided in .env.
 * Falls back cleanly to console log dispatch in development/staging environments.
 */
export async function sendInquiryNotification(inquiry: InquiryRecord): Promise<{ success: boolean; messageId?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.NOTIFICATION_EMAIL || "inquiries@juboh.com";

  if (!apiKey) {
    // In local development or until Resend key is configured, log standard audit receipt
    console.log(
      `[Transactional Email Audit] Inquiry Transmitted: Ref #${inquiry.referenceCode} | From: ${inquiry.fullName} (${inquiry.email}) | Discipline: ${inquiry.inquiryType} | Destination: ${toEmail}`
    );
    return { success: true, messageId: `mock-${Date.now()}` };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "JUBOH Communications <notifications@juboh.com>",
        to: [toEmail],
        reply_to: inquiry.email,
        subject: `[JUBOH Inquiry: ${inquiry.referenceCode}] ${inquiry.inquiryType} - ${inquiry.organization || inquiry.fullName}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 4px; background: #ffffff;">
            <div style="border-bottom: 2px solid #B49360; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #101D2C; font-size: 20px;">JUBOH Companies International</h2>
              <p style="margin: 4px 0 0; color: #B49360; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Official Institutional Inquiry Transmission</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #666; width: 140px;"><strong>Reference:</strong></td>
                <td style="padding: 6px 0; color: #101D2C;">${inquiry.referenceCode}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Principal / Sender:</strong></td>
                <td style="padding: 6px 0; color: #101D2C;">${inquiry.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Corporate Email:</strong></td>
                <td style="padding: 6px 0; color: #101D2C;"><a href="mailto:${inquiry.email}">${inquiry.email}</a></td>
              </tr>
              ${inquiry.phone ? `<tr><td style="padding: 6px 0; color: #666;"><strong>Phone:</strong></td><td style="padding: 6px 0; color: #101D2C;">${inquiry.phone}</td></tr>` : ""}
              ${inquiry.organization ? `<tr><td style="padding: 6px 0; color: #666;"><strong>Organization:</strong></td><td style="padding: 6px 0; color: #101D2C;">${inquiry.organization}</td></tr>` : ""}
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Discipline:</strong></td>
                <td style="padding: 6px 0; color: #101D2C;">${inquiry.inquiryType}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #666;"><strong>Timestamp:</strong></td>
                <td style="padding: 6px 0; color: #101D2C;">${new Date(inquiry.createdAt).toUTCString()}</td>
              </tr>
            </table>

            <div style="background: #F6F3ED; padding: 16px; border-left: 3px solid #101D2C; margin-bottom: 24px;">
              <h4 style="margin: 0 0 8px; color: #101D2C; font-size: 13px; text-transform: uppercase;">Inquiry Scope</h4>
              <p style="margin: 0; color: #252A2F; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${inquiry.message}</p>
            </div>

            <p style="font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 16px; margin: 0;">
              This transmission was captured securely via the official JUBOH Enterprise portal. Access the Admin CMS to manage status or archive.
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[Resend Email Error]", err);
      return { success: false };
    }

    const data = await res.json();
    return { success: true, messageId: data.id };
  } catch (error) {
    console.error("[Email Dispatch Exception]", error);
    return { success: false };
  }
}
