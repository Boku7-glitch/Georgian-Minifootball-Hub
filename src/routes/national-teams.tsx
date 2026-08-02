import { createFileRoute } from "@tanstack/react-router";
import { Users, Trophy, GraduationCap, UserCircle2, CalendarCheck } from "lucide-react";
import hero from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/national-teams")({
  head: () => ({
    meta: [
      { title: "National Teams — Georgian Minifootball Federation" },
      { name: "description", content: "Information about Georgia's men's, women's and youth minifootball national teams." },
      { property: "og:title", content: "National Teams — GMF" },
      { property: "og:description", content: "Georgia's men's, women's and youth minifootball squads." },
    ],
  }),
  component: NationalTeams,
});

const sections = [
  { icon: Users, label: "Men's National Team" },
  { icon: UserCircle2, label: "Women's National Team" },
  { icon: GraduationCap, label: "Youth National Teams" },
  { icon: CalendarCheck, label: "Match Results" },
  { icon: Trophy, label: "Player Profiles" },
];

function NationalTeams() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-20 bg-[color:var(--navy)] overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy)] via-[color:var(--navy)]/90 to-[color:var(--navy)]" />
      </div>

      <div className="relative container-x text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[color:var(--brand-red)] mb-4 animate-fade-in-up">Coming Soon</p>
        <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] animate-fade-in-up">
          National Teams
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up">
          National Team information will be available soon.
        </p>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {sections.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 hover:border-[color:var(--brand-red)]/50 transition-all"
            >
              <Icon className="h-8 w-8 text-[color:var(--brand-red)] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold uppercase tracking-wider text-white/90 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-white/60 uppercase tracking-widest">In Preparation</p>
      </div>
    </section>
  );
}
