import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  Inbox,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Newspaper,
  Users,
} from "lucide-react";

const adminLinks = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/stories", label: "Stories", icon: BookOpen },
  { href: "/admin/articles", label: "Articles", icon: Newspaper },
  { href: "/admin/comments", label: "Comments", icon: MessageSquare },
  { href: "/admin/subscribers", label: "Subscribers", icon: Mail },
  { href: "/admin/messages", label: "Messages", icon: Inbox },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

export function AdminSidebar() {
  return (
    <aside className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/70 lg:sticky lg:top-24">
      <p className="px-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
        Admin
      </p>
      <nav aria-label="Admin navigation" className="mt-4 grid gap-1">
        {adminLinks.map(({ href, icon: Icon, label }) => (
          <Link
            className="inline-flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            href={href}
            key={href}
          >
            <Icon aria-hidden="true" className="size-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
