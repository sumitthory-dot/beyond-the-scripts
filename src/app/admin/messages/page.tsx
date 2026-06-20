import { Inbox } from "lucide-react";

export default function AdminMessagesPage() {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <Inbox aria-hidden="true" className="size-6 text-sky-600" />
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Messages and feedback</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Contact messages and user feedback are stored in dedicated tables and
        ready for filtering, replies, and workflow states.
      </p>
    </section>
  );
}
