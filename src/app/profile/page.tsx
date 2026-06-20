import { Bookmark, Clock, UserRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { getCurrentUser } from "@/lib/supabase/auth";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <PageShell>
      <PageHero
        eyebrow="Profile"
        title="Your saved reading system."
        description="Profile data, avatar support, bookmarks, saved articles, saved stories, and reading history are prepared for Supabase-backed user features."
        stat={{ value: user ? "Signed in" : "Reader", label: user?.email ?? "Sign in to activate profile data." }}
      />
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: UserRound, title: "Profile data", copy: "Name, email, role, and avatar metadata live in the users table." },
            { icon: Bookmark, title: "Bookmarks", copy: "Save articles and stories with a unique user/content relationship." },
            { icon: Clock, title: "Reading history", copy: "Track progress for future resume-reading experiences." },
          ].map(({ copy, icon: Icon, title }) => (
            <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/70" key={title}>
              <Icon aria-hidden="true" className="size-5 text-sky-600" />
              <h2 className="mt-4 text-lg font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
