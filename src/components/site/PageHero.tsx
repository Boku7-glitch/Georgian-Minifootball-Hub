import type { ReactNode } from "react";
import hero1 from "@/assets/hero-1.jpg";

export function PageHero({ eyebrow, title, subtitle, image = hero1, children }: { eyebrow?: string; title: string; subtitle?: string; image?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[color:var(--navy)]">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--navy)]/80 to-transparent" />
      </div>
      <div className="relative container-x text-white animate-fade-in-up">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.4em] text-[color:var(--brand-red)] mb-4">{eyebrow}</p>}
        <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] text-balance max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
