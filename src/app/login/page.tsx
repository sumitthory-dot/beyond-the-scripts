import { AuthPanel } from "@/components/AuthPanel";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export default function LoginPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Login"
        title="Access your saved reading and admin tools."
        description="Supabase Auth is wired for email login links and Google OAuth. Configure the environment variables to activate real sessions."
        stat={{ value: "Secure", label: "Auth architecture prepared for bookmarks, history, profiles, and protected admin routes." }}
      />
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <AuthPanel />
        </div>
      </section>
    </PageShell>
  );
}
