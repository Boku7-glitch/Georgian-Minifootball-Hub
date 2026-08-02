import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { news as mockNews } from "@/data/mock";
import { useLang } from "@/lib/i18n";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

type Item = { id: string; title: string; excerpt: string; image: string; category: string; date: string };

export function NewsGrid() {
  const { lang } = useLang();
  const { data } = useQuery({
    queryKey: ["public-news", lang],
    queryFn: async () => {
      const { data, error } = await supabase.from("news").select("*").eq("published", true).order("published_at", { ascending: false }).limit(5);
      if (error || !data?.length) return null;
      return data.map<Item>((r) => ({
        id: r.id,
        title: (lang === "ka" ? r.title_ka : r.title_en) || r.title_en,
        excerpt: (lang === "ka" ? r.excerpt_ka : r.excerpt_en) || r.excerpt_en || "",
        image: r.image_url || mockNews[0].image,
        category: r.category || "News",
        date: r.published_at,
      }));
    },
  });

  const items: Item[] = data ?? mockNews.map((n) => ({ id: n.id, title: n.title, excerpt: n.excerpt, image: n.image, category: n.category, date: n.date }));
  const [featured, ...rest] = items;
  if (!featured) return null;

  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--brand-red)] mb-2">News</p>
          <h2 className="section-title font-display text-4xl md:text-5xl uppercase">Latest News</h2>
        </div>
        <a href="#" className="text-sm font-semibold uppercase tracking-wider text-[color:var(--navy)] hover:text-[color:var(--brand-red)] inline-flex items-center gap-2 transition">
          All News <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-shadow bg-card">
          <a href="#" className="block">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 rounded-full bg-[color:var(--brand-red)] text-white text-xs font-bold uppercase tracking-wider">{featured.category}</span>
            </div>
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
              </div>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-tight group-hover:text-[color:var(--brand-red)] transition-colors">{featured.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[color:var(--brand-red)]">
                Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </article>

        {rest.map((n) => (
          <article key={n.id} className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition-shadow">
            <a href="#" className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={n.image} alt={n.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[color:var(--navy)] text-white text-[10px] font-bold uppercase tracking-wider">{n.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground uppercase tracking-wider mb-2">
                  <Calendar className="h-3 w-3" /> {formatDate(n.date)}
                </div>
                <h3 className="font-display text-xl uppercase leading-snug group-hover:text-[color:var(--brand-red)] transition-colors line-clamp-2">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
