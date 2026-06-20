import { PageShell } from "@/components/PageShell";
import { ArticlePageLayout } from "@/components/pages/ArticlePageLayout";
import { startupArticles, startupTopics } from "@/lib/editorial-data";

export default function StartupsPage() {
  return (
    <PageShell>
      <ArticlePageLayout
        articles={startupArticles}
        cardsTitle="Startup articles for early momentum"
        description="Founder-friendly articles about product clarity, validation, go-to-market choices, and the systems that help small teams move with confidence."
        eyebrow="Startups"
        featuredTitle="Featured startup article"
        pageHref="/startups"
        stat={{ value: "4 topics", label: "Product wedges, validation, founder systems, and market clarity." }}
        title="Startup ideas with useful operating depth."
        topics={startupTopics}
        topicsTitle="Popular startup topics"
        trendTitle="What builders are reading"
      />
    </PageShell>
  );
}
