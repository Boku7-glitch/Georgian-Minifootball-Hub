import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import { NewsGrid } from "@/components/site/NewsGrid";
import { Gallery } from "@/components/site/Gallery";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgian Minifootball Federation — Official Website" },
      { name: "description", content: "Official home of Georgian minifootball — Super League, national teams, news and statistics." },
      { property: "og:title", content: "Georgian Minifootball Federation" },
      { property: "og:description", content: "Super League, national teams, news and statistics." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSlider />
      <NewsGrid />
      <Gallery />
      <CTA />
    </>
  );
}
