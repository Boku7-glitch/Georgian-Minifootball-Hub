import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { label: string; to: string };
};

const fallback: Slide[] = [
  { image: hero1, eyebrow: "Official Federation", title: "Georgian Minifootball Federation", subtitle: "Building the future of minifootball in Georgia — from grassroots to the national stage.", cta: { label: "Learn More", to: "/about" } },
  { image: hero2, eyebrow: "2026 Season", title: "Super League Season", subtitle: "Twelve clubs. Thirty-three matchdays. One champion. Follow every goal, every standing, live.", cta: { label: "View Standings", to: "/super-league" } },
  { image: hero3, eyebrow: "Crveni Jvari", title: "National Teams", subtitle: "Backing every player who pulls on the Georgian shirt — men, women and youth.", cta: { label: "Meet the Squad", to: "/national-teams" } },
];

export function HeroSlider() {
  const { lang } = useLang();
  const { data } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("banners")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const slides: Slide[] = (data && data.length > 0)
    ? data.map((b) => ({
        image: b.image_url,
        eyebrow: (lang === "ka" ? b.eyebrow_ka : b.eyebrow_en) ?? b.eyebrow_en ?? "",
        title: (lang === "ka" ? b.title_ka : b.title_en) ?? b.title_en ?? "",
        subtitle: (lang === "ka" ? b.subtitle_ka : b.subtitle_en) ?? b.subtitle_en ?? "",
        cta: {
          label: (lang === "ka" ? b.cta_label_ka : b.cta_label_en) ?? b.cta_label_en ?? "Learn More",
          to: b.cta_to ?? "/about",
        },
      }))
    : fallback;

  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[color:var(--navy)]">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <img
            src={s.image}
            alt={s.title}
            className={cn("absolute inset-0 h-full w-full object-cover", idx === i && "animate-ken-burns")}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)]/95 via-[color:var(--navy)]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/90 via-transparent to-transparent" />

          <div className="relative h-full container-x flex flex-col justify-center pt-20">
            <div className={cn("max-w-3xl", idx === i && "animate-fade-in-up")} key={`${idx}-${i}`}>
              {s.eyebrow && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[color:var(--brand-red)] text-white text-xs font-bold uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  {s.eyebrow}
                </div>
              )}
              <h1 className="text-white font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase text-balance">
                {s.title}
              </h1>
              {s.subtitle && (
                <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
                  {s.subtitle}
                </p>
              )}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={s.cta.to}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[color:var(--brand-red)] text-white font-bold uppercase tracking-wider text-sm shadow-red hover:translate-y-[-2px] transition-all"
                >
                  {s.cta.label}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/super-league"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition"
                >
                  Super League
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <div className="absolute bottom-10 right-6 md:right-12 z-10 flex items-center gap-3">
            <button onClick={prev} aria-label="Previous" className="h-12 w-12 rounded-full bg-white/10 hover:bg-[color:var(--brand-red)] backdrop-blur text-white flex items-center justify-center transition">
              <ChevronLeft />
            </button>
            <button onClick={next} aria-label="Next" className="h-12 w-12 rounded-full bg-white/10 hover:bg-[color:var(--brand-red)] backdrop-blur text-white flex items-center justify-center transition">
              <ChevronRight />
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-32 z-10 flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={cn(
                  "h-1 rounded-full transition-all",
                  idx === i ? "w-10 bg-[color:var(--brand-red)]" : "w-5 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
