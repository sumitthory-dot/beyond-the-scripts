import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Cpu,
  Gem,
  Handshake,
  Layers3,
  Lightbulb,
  LineChart,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wand2,
} from "lucide-react";

export type EditorialItem = {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  accent: "sky" | "purple" | "indigo" | "emerald" | "rose";
  imageLabel?: string;
};

export type Topic = {
  label: string;
  description: string;
  icon: LucideIcon;
};

export const stories: EditorialItem[] = [
  {
    title: "The founder who rewrote a career after one quiet launch",
    description:
      "A thoughtful story about rebuilding confidence, audience trust, and product judgment after shipping in public.",
    category: "Founder Story",
    date: "Jun 18, 2026",
    readTime: "7 min read",
    author: "Beyond Desk",
    accent: "sky",
    imageLabel: "quiet launch",
  },
  {
    title: "What creators learn when growth stops being the goal",
    description:
      "A reflective piece on craft, consistency, and measuring progress without losing the work that matters.",
    category: "Creator Notes",
    date: "Jun 14, 2026",
    readTime: "5 min read",
    author: "Maya Sen",
    accent: "purple",
    imageLabel: "creator craft",
  },
  {
    title: "Inside a small team building calm AI workflows",
    description:
      "How a lean studio chose durable systems over noisy automation and created more room for deep work.",
    category: "AI Work",
    date: "Jun 10, 2026",
    readTime: "8 min read",
    author: "Arin Cole",
    accent: "indigo",
    imageLabel: "AI studio",
  },
  {
    title: "A newsletter pivot that made the audience more human",
    description:
      "The editorial choices that turned a broad publication into a sharper, more useful community.",
    category: "Audience",
    date: "Jun 7, 2026",
    readTime: "6 min read",
    author: "Nora Vale",
    accent: "emerald",
    imageLabel: "newsletter room",
  },
  {
    title: "The business lesson hidden inside a failed launch",
    description:
      "A practical look at pricing, positioning, and why failure can become a cleaner operating system.",
    category: "Business",
    date: "Jun 2, 2026",
    readTime: "9 min read",
    author: "Beyond Desk",
    accent: "rose",
    imageLabel: "launch lessons",
  },
];

export const startupArticles: EditorialItem[] = [
  {
    title: "Designing a product wedge before writing the roadmap",
    description:
      "A founder-friendly framework for finding the smallest credible entry point into a real market.",
    category: "Product",
    date: "Jun 16, 2026",
    readTime: "6 min read",
    author: "Maya Sen",
    accent: "sky",
  },
  {
    title: "The quiet operating habits behind resilient early teams",
    description:
      "Rituals, decision logs, and review loops that keep a startup moving without performative urgency.",
    category: "Operations",
    date: "Jun 12, 2026",
    readTime: "7 min read",
    author: "Arin Cole",
    accent: "indigo",
  },
  {
    title: "How to validate demand without confusing activity for signal",
    description:
      "A clean approach to interviews, landing pages, and early revenue experiments.",
    category: "Validation",
    date: "Jun 8, 2026",
    readTime: "5 min read",
    author: "Nora Vale",
    accent: "purple",
  },
];

export const businessArticles: EditorialItem[] = [
  {
    title: "A sharper way to choose what your business should ignore",
    description:
      "Decision filters that protect attention and make strategic tradeoffs easier to explain.",
    category: "Strategy",
    date: "Jun 17, 2026",
    readTime: "6 min read",
    author: "Beyond Desk",
    accent: "indigo",
  },
  {
    title: "Why simple dashboards beat ambitious reporting theater",
    description:
      "Metrics, rituals, and operating reviews that reveal truth without overwhelming small teams.",
    category: "Operations",
    date: "Jun 11, 2026",
    readTime: "8 min read",
    author: "Maya Sen",
    accent: "sky",
  },
  {
    title: "Pricing confidence for creator-led companies",
    description:
      "How to package expertise, set expectations, and sell outcomes without copying SaaS playbooks.",
    category: "Revenue",
    date: "Jun 5, 2026",
    readTime: "7 min read",
    author: "Arin Cole",
    accent: "emerald",
  },
];

export const affiliateGuides: EditorialItem[] = [
  {
    title: "The trust-first affiliate review framework",
    description:
      "How to compare tools with proof, disclose clearly, and recommend only what genuinely helps.",
    category: "Guide",
    date: "Jun 15, 2026",
    readTime: "9 min read",
    author: "Nora Vale",
    accent: "purple",
  },
  {
    title: "Building evergreen comparison pages that stay useful",
    description:
      "A maintenance system for rankings, screenshots, pricing changes, and reader intent.",
    category: "SEO",
    date: "Jun 9, 2026",
    readTime: "7 min read",
    author: "Beyond Desk",
    accent: "sky",
  },
  {
    title: "Monetization without turning every article into a funnel",
    description:
      "A calmer model for revenue that respects readers and protects the editorial voice.",
    category: "Monetization",
    date: "Jun 4, 2026",
    readTime: "6 min read",
    author: "Maya Sen",
    accent: "rose",
  },
];

export const aiToolReviews: EditorialItem[] = [
  {
    title: "Choosing an AI writing stack for real editorial work",
    description:
      "A practical comparison of ideation, outlining, drafting, and review workflows for creators.",
    category: "Comparison",
    date: "Jun 18, 2026",
    readTime: "8 min read",
    author: "Beyond Desk",
    accent: "sky",
  },
  {
    title: "The automation checks that keep AI workflows trustworthy",
    description:
      "Quality gates, human review points, and prompt patterns that reduce avoidable mistakes.",
    category: "Workflow",
    date: "Jun 13, 2026",
    readTime: "7 min read",
    author: "Arin Cole",
    accent: "indigo",
  },
  {
    title: "AI research tools for small teams with high standards",
    description:
      "How to evaluate retrieval, citations, collaboration, and knowledge management fit.",
    category: "Reviews",
    date: "Jun 6, 2026",
    readTime: "6 min read",
    author: "Maya Sen",
    accent: "purple",
  },
];

export const startupTopics: Topic[] = [
  { label: "Product Wedges", description: "Find a focused entry point.", icon: Rocket },
  { label: "Validation", description: "Separate signal from activity.", icon: Target },
  { label: "Founder Systems", description: "Build calm operating cadence.", icon: Layers3 },
  { label: "Market Clarity", description: "Explain why now and why you.", icon: Compass },
];

export const businessTopics: Topic[] = [
  { label: "Strategy", description: "Better tradeoffs and clearer focus.", icon: BriefcaseBusiness },
  { label: "Revenue", description: "Packaging, pricing, and retention.", icon: LineChart },
  { label: "Operations", description: "Rituals that keep teams aligned.", icon: BarChart3 },
  { label: "Trust", description: "Durable reputation and customer care.", icon: ShieldCheck },
];

export const affiliateTools: Topic[] = [
  { label: "Disclosure Systems", description: "Make trust visible and consistent.", icon: ShieldCheck },
  { label: "Comparison Pages", description: "Help readers choose with context.", icon: Trophy },
  { label: "Offer Fit", description: "Match products to actual reader needs.", icon: Handshake },
  { label: "Revenue Maps", description: "Track monetization without clutter.", icon: BadgeDollarSign },
];

export const aiToolTopics: Topic[] = [
  { label: "Writing Assistants", description: "Drafting and editing workflows.", icon: Wand2 },
  { label: "Research Tools", description: "Source-aware exploration systems.", icon: BrainCircuit },
  { label: "Automation", description: "Repeatable checks and handoffs.", icon: Cpu },
  { label: "Evaluation", description: "Clear scoring before adoption.", icon: CheckCircle2 },
];

export const aboutTimeline = [
  {
    year: "2024",
    title: "The question",
    description:
      "What would a publication look like if it treated creators as serious builders?",
  },
  {
    year: "2025",
    title: "The editorial system",
    description:
      "Stories, startup thinking, business strategy, affiliate trust, and AI workflows became the core lanes.",
  },
  {
    year: "2026",
    title: "The community",
    description:
      "Beyond The Scripts is expanding into a practical library for people building meaningful work.",
  },
];

export const values: Topic[] = [
  { label: "Clarity", description: "Useful thinking beats performative complexity.", icon: Lightbulb },
  { label: "Trust", description: "Recommendations should earn attention slowly.", icon: ShieldCheck },
  { label: "Craft", description: "Good work deserves patient structure.", icon: Gem },
  { label: "Community", description: "Builders move further when lessons are shared.", icon: Users },
];

export const communitySignals: Topic[] = [
  { label: "Reader notes", description: "Feedback loops shape better guides.", icon: MessageCircle },
  { label: "Founder rooms", description: "Small conversations around real decisions.", icon: Users },
  { label: "Tool labs", description: "Shared experiments with AI and workflows.", icon: Bot },
  { label: "Field reports", description: "Lessons from launches, pivots, and systems.", icon: Sparkles },
];
