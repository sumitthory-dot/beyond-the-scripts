import { PageShell } from "@/components/PageShell";
import { ArticlePageLayout } from "@/components/pages/ArticlePageLayout";
import { affiliateGuides, affiliateTools } from "@/lib/editorial-data";

export default function AffiliateMarketingPage() {
  return (
    <PageShell>
      <ArticlePageLayout
        articles={affiliateGuides}
        cardsTitle="Guides and popular articles"
        description="Ethical affiliate marketing guidance for useful comparisons, reader-first reviews, and monetization systems that protect trust."
        eyebrow="Affiliate Marketing"
        featuredTitle="Featured affiliate guide"
        pageHref="/affiliate-marketing"
        stat={{ value: "Trust first", label: "Disclosures, comparisons, and monetization built around reader usefulness." }}
        title="Affiliate systems built around usefulness."
        topics={affiliateTools}
        topicsTitle="Tools and comparison systems"
        trendTitle="Popular monetization reads"
      />
    </PageShell>
  );
}
