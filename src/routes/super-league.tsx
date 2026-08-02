import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { StatsTabs } from "@/components/site/StatsTabs";
import hero from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/super-league")({
  head: () => ({
    meta: [
      { title: "Super League — Standings, Scorers & Stats | GMF" },
      { name: "description", content: "Live Super League standings, top scorers, assists and disciplinary statistics." },
      { property: "og:title", content: "Super League — GMF" },
      { property: "og:description", content: "Standings, scorers, assists and discipline." },
    ],
  }),
  component: SuperLeague,
});

function SuperLeague() {
  return (
    <>
      <PageHero
        eyebrow="2026 Season"
        title="Super League"
        subtitle="The top tier of Georgian minifootball. Twelve clubs competing for the championship."
        image={hero}
      />
      <StatsTabs />
    </>
  );
}
