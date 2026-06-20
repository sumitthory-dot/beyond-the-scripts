import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Navbar } from "@/components/Navbar";
import { isCurrentUserAdmin } from "@/lib/supabase/auth";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = await isCurrentUserAdmin();
  const configured = isSupabaseConfigured();

  return (
    <main className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950">
      <Navbar />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[18rem_1fr] lg:px-8">
        <AdminSidebar />
        <div>
          {isAdmin ? (
            children
          ) : (
            <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 text-amber-950 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                Protected admin
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                Admin access is locked.
              </h1>
              <p className="mt-4 text-sm leading-7">
                {configured
                  ? "Sign in with a Supabase Auth account listed in ADMIN_EMAILS to manage content, comments, subscribers, messages, users, and analytics."
                  : "Configure NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, and ADMIN_EMAILS to activate protected admin access."}
              </p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
