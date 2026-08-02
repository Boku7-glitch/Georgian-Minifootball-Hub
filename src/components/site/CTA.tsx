import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero2} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)]/95 via-[color:var(--navy)]/85 to-[color:var(--brand-red)]/70" />
      </div>
      <div className="relative container-x py-24 md:py-32 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[color:var(--brand-red)] mb-4">Get Involved</p>
        <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl mx-auto text-balance">
          Join the Georgian Minifootball Community
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
          From kids on the pitch to the national team. Become part of the story.
        </p>
        <Link
          to="/about"
          className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-md bg-[color:var(--brand-red)] hover:bg-white hover:text-[color:var(--navy)] text-white font-bold uppercase tracking-wider shadow-red transition-all"
        >
          Learn More <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
