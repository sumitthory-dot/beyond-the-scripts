import { PageShell } from "@/components/PageShell";
import { ArticlePageLayout } from "@/components/pages/ArticlePageLayout";
import { aiToolReviews, aiToolTopics } from "@/lib/editorial-data";

export default function AiToolsPage() {
  return (
    <PageShell>
      <ArticlePageLayout
        articles={aiToolReviews}
        cardsTitle="Reviews, comparisons, and guides"
        description="AI tool coverage focused on real workflows, clear tradeoffs, practical reviews, and thoughtful implementation for creators and small teams."
        eyebrow="AI Tools"
        featuredTitle="Featured AI tools review"
        pageHref="/ai-tools"
        stat={{ value: "4 systems", label: "Writing, research, automation, and evaluation workflows." }}
        title="AI tools explained for builders."
        topics={aiToolTopics}
        topicsTitle="Featured tool categories"
        trendTitle="Popular AI workflows"
      />
    </PageShell>
  );
}
