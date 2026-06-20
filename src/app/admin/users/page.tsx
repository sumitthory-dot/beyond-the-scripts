import { Users } from "lucide-react";

export default function AdminUsersPage() {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <Users aria-hidden="true" className="size-6 text-sky-600" />
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Users and profiles</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Supabase Auth users can be extended with profile data, avatars, roles,
        bookmarks, and reading history.
      </p>
    </section>
  );
}
