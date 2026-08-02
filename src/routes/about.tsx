import { createFileRoute } from "@tanstack/react-router";
import { Target, Users, Trophy, Globe2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Georgian Minifootball Federation" },
      { name: "description", content: "Learn about the Georgian Minifootball Federation — our mission, vision, goals and milestones." },
      { property: "og:title", content: "About Us — GMF" },
      { property: "og:description", content: "Mission, vision and milestones of the GMF." },
    ],
  }),
  component: About,
});

const goals = [
  { icon: Target, title: "Development of Minifootball", text: "Grow the game across every region of Georgia with structured competitions and modern facilities." },
  { icon: Users, title: "Youth Engagement", text: "Invest in academies and school programmes to discover and develop the next generation." },
  { icon: Trophy, title: "Organization of Competitions", text: "Run the Super League and national cup with world-class operational standards." },
  { icon: Globe2, title: "International Representation", text: "Represent Georgia on the European and global minifootball stage with pride." },
];

const milestones = [
  { year: "2008", title: "Federation Founded", text: "The Georgian Minifootball Federation is officially established in Tbilisi." },
  { year: "2012", title: "Super League Launched", text: "Inaugural season of the national Super League with eight founding clubs." },
  { year: "2016", title: "UEFA Affiliation", text: "Joined the European minifootball family with full membership." },
  { year: "2019", title: "First European Medal", text: "National team secures a historic podium finish at the European Championship." },
  { year: "2024", title: "National Youth Programme", text: "Launch of a country-wide youth academy network." },
  { year: "2026", title: "New Era", text: "Twelve-team Super League and expanded women's and youth competitions." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="The Federation"
        title="About the Georgian Minifootball Federation"
        subtitle="The official governing body for minifootball in Georgia since 2008."
      />

      {/* Mission & Vision */}
      <section className="container-x py-20 grid md:grid-cols-2 gap-10">
        <div className="rounded-2xl bg-card p-10 shadow-card border-l-4 border-[color:var(--brand-red)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--brand-red)] mb-3">Our Mission</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-4">Grow the game we love</h2>
          <p className="text-muted-foreground leading-relaxed">
            To develop, regulate and promote minifootball at every level in Georgia — building inclusive
            opportunities for players, coaches and fans, and competing with pride internationally.
          </p>
        </div>
        <div className="rounded-2xl bg-[color:var(--navy)] text-white p-10 shadow-elevated">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--brand-red)] mb-3">Our Vision</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-4">Georgia among Europe's best</h2>
          <p className="text-white/80 leading-relaxed">
            A modern, transparent and ambitious federation that delivers world-class competitions
            and lifts Georgian minifootball into the European elite by 2030.
          </p>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-[color:var(--secondary)] py-20">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--brand-red)] mb-2">Our Goals</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Federation Goals</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group rounded-2xl bg-card p-8 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-gradient-red flex items-center justify-center mb-5 shadow-red group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--brand-red)] mb-2">Our Journey</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase">Milestones</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          {milestones.map((m, i) => (
            <div key={m.year} className={`relative pl-12 md:pl-0 md:flex md:items-center mb-10 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 md:px-8">
                <div className="rounded-2xl bg-card p-6 shadow-card hover:shadow-elevated transition">
                  <p className="font-display text-3xl text-[color:var(--brand-red)]">{m.year}</p>
                  <h3 className="font-display text-xl uppercase mt-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{m.text}</p>
                </div>
              </div>
              <span className="absolute left-2.5 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 h-4 w-4 rounded-full bg-[color:var(--brand-red)] ring-4 ring-background" />
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
