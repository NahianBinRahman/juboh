"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { setAdminSessionCookie, clearAdminSessionCookie, getAdminSession } from "./session";

const loginSchema = z.object({
  email: z.string().email("Please provide a valid corporate email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export interface LoginActionResult {
  success: boolean;
  error?: string;
}

export async function loginAdminAction(
  prevState: LoginActionResult | null,
  formData: FormData
): Promise<LoginActionResult> {
  const emailInput = formData.get("email");
  const passwordInput = formData.get("password");

  const parsed = loginSchema.safeParse({
    email: emailInput,
    password: passwordInput,
  });

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.errors[0]?.message || "Invalid credentials provided.",
    };
  }

  const { email, password } = parsed.data;

  // Expected Bootstrap Credentials
  const expectedEmail = process.env.ADMIN_DEFAULT_EMAIL || "admin@juboh.com";
  const expectedPassword = process.env.ADMIN_DEFAULT_PASSWORD || "ChangeMeInProduction2026!";

  // Email match check
  const isEmailMatch = email.toLowerCase() === expectedEmail.toLowerCase();

  // Password verification (supports plain bootstrap fallback or hashed comparison)
  let isPasswordMatch = false;
  if (expectedPassword.startsWith("$2a$") || expectedPassword.startsWith("$2b$")) {
    isPasswordMatch = await bcrypt.compare(password, expectedPassword);
  } else {
    isPasswordMatch = password === expectedPassword;
  }

  if (!isEmailMatch || !isPasswordMatch) {
    // Artificial delay to prevent timing analysis
    await new Promise((r) => setTimeout(r, 400));
    return {
      success: false,
      error: "Invalid enterprise credentials or access not authorized.",
    };
  }

  // Set session cookie
  await setAdminSessionCookie({
    email: expectedEmail,
    name: "JUBOH Administrator",
    role: "SUPER_ADMIN",
  });

  redirect("/admin");
}

export async function logoutAdminAction(): Promise<void> {
  await clearAdminSessionCookie();
  redirect("/admin/login");
}
