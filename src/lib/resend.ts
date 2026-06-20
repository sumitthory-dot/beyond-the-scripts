import "server-only";

import { Resend } from "resend";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

export async function sendWelcomeEmail(email: string, name: string) {
  const resend = getResendClient();

  if (!resend) {
    return { skipped: true };
  }

  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Beyond The Scripts <hello@beyondthescripts.com>";

  return resend.emails.send({
    from,
    to: email,
    subject: "Welcome to Beyond The Scripts",
    html: `<p>Hi ${escapeHtml(name)},</p><p>Welcome to Beyond The Scripts. You are on the list for useful stories, startup thinking, business notes, affiliate systems, and AI workflows.</p>`,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
