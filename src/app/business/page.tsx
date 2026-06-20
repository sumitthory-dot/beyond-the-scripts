import { PageShell } from "@/components/PageShell";
import { ArticlePageLayout } from "@/components/pages/ArticlePageLayout";
import { businessArticles, businessTopics } from "@/lib/editorial-data";

export default function BusinessPage() {
  return (
    <PageShell>
      <ArticlePageLayout
        articles={businessArticles}
        cardsTitle="Business articles and operating notes"
        description="Practical business writing for creators and entrepreneurs making sharper decisions around strategy, revenue, operations, and trust."
        eyebrow="Business"
        featuredTitle="Featured business thinking"
        pageHref="/business"
        stat={{ value: "3 reads", label: "Strategy, operations, and pricing articles ready for expansion." }}
        title="Business thinking that stays practical."
        topics={businessTopics}
        topicsTitle="Categories for better decisions"
        trendTitle="Trending business ideas"
      />
    </PageShell>
  );
}
