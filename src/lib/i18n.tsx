import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ka";

type Dict = Record<string, { en: string; ka: string }>;

const dict: Dict = {
  // Navigation & General
  "nav.home": { en: "Home", ka: "მთავარი" },
  "nav.teams": { en: "National Teams", ka: "ნაკრებები" },
  "nav.league": { en: "Super League", ka: "სუპერ ლიგა" },
  "nav.about": { en: "About Us", ka: "ჩვენ შესახებ" },
  "nav.contact": { en: "Contact", ka: "კონტაქტი" },
  "hero.cta": { en: "Learn More", ka: "გაიგე მეტი" },
  "news.title": { en: "Latest News", ka: "უახლესი ამბები" },
  "news.read": { en: "Read More", ka: "გაიგე მეტი" },
  "gallery.title": { en: "Gallery", ka: "გალერეა" },
  "gallery.all": { en: "View All Photos", ka: "ყველა ფოტო" },
  "cta.title": { en: "Join the Georgian Minifootball Community", ka: "შემოგვიერთდი" },
  "cta.button": { en: "Learn More", ka: "გაიგე მეტი" },

  // Super League Tabs
  "tab.standings": { en: "Standings", ka: "ცხრილი" },
  "tab.statistics": { en: "Statistics", ka: "სტატისტიკა" },
  "tab.calendars": { en: "Calendars", ka: "კალენდარი" },
  "tab.results": { en: "Results", ka: "შედეგები" },

  // Super League Stat Sub-Tabs
  "stat.scorers": { en: "Top Scorers", ka: "ბომბარდირები" },
  "stat.assists": { en: "Assists", ka: "ასისტები" },
  "stat.yellowCards": { en: "Yellow Cards", ka: "ყვითელი ბარათები" },
  "stat.redCards": { en: "Red Cards", ka: "წითელი ბარათები" },

  // Stat Labels & Empty States
  "stat.goals": { en: "Goals", ka: "გოლები" },
  "stat.assistsLabel": { en: "Assists", ka: "ასისტები" },
  "stat.yellowLabel": { en: "Yellow Cards", ka: "ყვითელი ბ." },
  "stat.redLabel": { en: "Red Cards", ka: "წითელი ბ." },
  "stat.noRedCards": { en: "Not a single player has gotten a red card yet", ka: "ჯერჯერობით არცერთ მოთამაშეს არ მიუღია წითელი ბარათი" },
  "stat.cleanRecord": { en: "Clean disciplinary record for all teams.", ka: "ყველა გუნდს სუფთა დისციპლინური მაჩვენებელი აქვს." },
  "stat.noData": { en: "No statistics registered yet", ka: "სტატისტიკა ჯერ არ არის ხელმისაწვდომი" },

  // Standings
  "standings.title": { en: "Super League Standings", ka: "სუპერ ლიგის ცხრილი" },
  "standings.search": { en: "Search club", ka: "მოძებნე კლუბი" },
  "standings.pos12": { en: "1st - 2nd Place", ka: "1 - მე-2 ადგილი" },
  "standings.pos36": { en: "3rd - 6th Place", ka: "მე-3 - მე-6 ადგილი" },
  "standings.pos89": { en: "8th - 9th Place", ka: "მე-8 - მე-9 ადგილი" },
  "standings.pos10": { en: "10th Place", ka: "მე-10 ადგილი" },

  // Calendars & Results
  "calendars.empty": { en: "Calendars Coming Soon", ka: "კალენდარი მალე დაემატება" },
  "calendars.emptyDesc": { en: "Match schedules will be available soon.", ka: "მატჩების განრიგი მალე გახდება ცნობილი" },
  "results.empty": { en: "Results Coming Soon", ka: "შედეგები მალე დაემატება" },
  "results.allRounds": { en: "All Rounds", ka: "ყველა ტური" },
  "results.round": { en: "MD", ka: "ტური" },
};

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (k: string) => dict[k]?.[lang] ?? k;
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);