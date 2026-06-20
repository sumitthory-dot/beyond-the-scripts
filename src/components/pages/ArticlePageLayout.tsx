import type { EditorialItem, Topic } from "@/lib/editorial-data";
import { ArticleCard } from "@/components/ArticleCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { TopicGrid } from "@/components/pages/TopicGrid";
import { CategoryBadge } from "@/components/CategoryBadge";
import { Newsletter } from "@/components/Newsletter";
import { SearchExperience } from "@/components/SearchExperience";

type ArticlePageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  stat: { value: string; label: string };
  featuredTitle: string;
  cardsTitle: string;
  topicsTitle: string;
  trendTitle: string;
  articles: EditorialItem[];
  topics: Topic[];
  pageHref: string;
};

export function ArticlePageLayout({
  articles,
  cardsTitle,
  description,
  eyebrow,
  featuredTitle,
  pageHref,
  stat,
  title,
  topics,
  topicsTitle,
  trendTitle,
}: ArticlePageLayoutProps) {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        stat={stat}
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Featured" title={featuredTitle}>
            A strong entry point into the page theme, designed for a future
            editorial CMS without changing the layout.
          </SectionTitle>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50 to-purple-50 p-8 shadow-xl shadow-slate-200/70">
              <CategoryBadge tone={featured.accent}>{featured.category}</CategoryBadge>
              <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                {featured.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
                <span>{featured.author}</span>
              </div>
            </div>
            <div className="grid gap-5">
              {rest.slice(0, 2).map((article) => (
                <ArticleCard href={pageHref} item={article} key={article.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle eyebrow="Search" title={`Search ${eyebrow}`}>
            A reusable search surface prepared for future article indexing and
            backend-powered discovery.
          </SectionTitle>
          <SearchExperience
            suggestions={[...articles.map((article) => article.title), ...topics.map((topic) => topic.label)]}
          />
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Articles" title={cardsTitle}>
            Practical, polished cards for future story collections and article
            routes.
          </SectionTitle>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard href={pageHref} item={article} key={article.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Topics" title={topicsTitle}>
            Clear content lanes make the page scannable now and scalable later.
          </SectionTitle>
          <div className="mt-10">
            <TopicGrid topics={topics} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle align="center" eyebrow="Trending" title={trendTitle}>
            A compact signal board for the ideas readers are likely to return
            to.
          </SectionTitle>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {articles.map((article, index) => (
              <div
                className="rounded-3xl border border-white bg-white p-6 shadow-sm shadow-slate-200/70"
                key={article.title}
              >
                <span className="text-sm font-semibold text-purple-600">
                  0{index + 1}
                </span>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">
                  {article.category}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
