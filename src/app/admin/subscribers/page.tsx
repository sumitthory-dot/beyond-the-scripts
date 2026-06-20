import { Mail } from "lucide-react";

export default function AdminSubscribersPage() {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <Mail aria-hidden="true" className="size-6 text-sky-600" />
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Newsletter subscribers</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Subscriber records, newsletter logs, welcome emails, and campaign
        architecture are prepared for Supabase and Resend.
      </p>
    </section>
  );
}
