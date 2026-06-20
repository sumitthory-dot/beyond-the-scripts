import {
  Bot,
  BriefcaseBusiness,
  Building2,
  Contact,
  Home,
  Landmark,
  Mail,
  PenLine,
  Rocket,
  Sparkles,
  Send,
  Video,
} from "lucide-react";

export const siteConfig = {
  name: "Beyond The Scripts",
  tagline:
    "Stories, Startups, Business, Affiliate Marketing and AI - helping creators and entrepreneurs build something meaningful.",
  description:
    "A premium publication for creators and entrepreneurs building meaningful companies, content, and AI-powered workflows.",
};

export const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Stories", href: "/stories", icon: PenLine },
  { label: "Startups", href: "/startups", icon: Rocket },
  { label: "Business", href: "/business", icon: BriefcaseBusiness },
  { label: "Affiliate Marketing", href: "/affiliate-marketing", icon: Landmark },
  { label: "AI Tools", href: "/ai-tools", icon: Bot },
  { label: "About", href: "/about", icon: Building2 },
  { label: "Contact", href: "/contact", icon: Contact },
];

export const categoryLinks = navLinks.slice(1, 6);

export const socialLinks = [
  { label: "Updates", href: "/stories", icon: Send },
  { label: "Video", href: "/ai-tools", icon: Video },
  { label: "Newsletter", href: "mailto:hello@beyondthescripts.com", icon: Mail },
  { label: "Community", href: "/contact", icon: Sparkles },
];
