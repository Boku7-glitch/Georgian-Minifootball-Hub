import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import gal6 from "@/assets/gallery-6.jpg";

import {
  ajaraLogo,
  avlabariLogo,
  derbyLogo,
  everstoneLogo,
  gfdfLogo,
  glovoLogo,
  iberiaLogo,
  lentehiLogo,
  oldStarsLogo,
  saburtaloLogo,
} from "@/assets/logos";

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
};

export const news: NewsItem[] = [
  { id: "1", title: "Super League Matchday 12 Recap", date: "2026-06-10", excerpt: "Dramatic late winners and a new leader at the top of the table after a thrilling weekend of action.", image: news3, category: "Super League" },
  { id: "2", title: "National Team Squad Announced", date: "2026-06-08", excerpt: "Head coach unveils 14-man squad ahead of the upcoming UEFA Futsal qualifier double-header.", image: news2, category: "National Team" },
  { id: "3", title: "Youth Development Camp Opens in Tbilisi", date: "2026-06-05", excerpt: "Over 120 young players join the federation's flagship academy programme this summer.", image: news5, category: "Youth" },
  { id: "4", title: "Goalkeeper of the Month: Beridze", date: "2026-06-02", excerpt: "Five clean sheets and a save percentage of 89% earn the keeper the monthly honour.", image: news4, category: "Awards" },
  { id: "5", title: "New Sponsorship Deal Signed", date: "2026-05-28", excerpt: "Federation announces multi-year partnership to grow grassroots minifootball nationwide.", image: news1, category: "Federation" },
];

export const gallery = [
  { src: gal1, alt: "Indoor futsal court aerial view", h: "tall" as const },
  { src: gal2, alt: "Player celebrating goal", h: "short" as const },
  { src: gal3, alt: "Team huddle", h: "short" as const },
  { src: gal4, alt: "Ball close up", h: "short" as const },
  { src: gal5, alt: "Stadium crowd at night", h: "tall" as const },
  { src: gal6, alt: "Referee on pitch", h: "short" as const },
];

// Super League standings
export type Standing = {
  pos: number;
  club: string;
  short: string;
  color: string;
  logo?: string;
  played: number; w: number; d: number; l: number;
  gf: number; ga: number; pts: number;
};

export const standings: Standing[] = [
  { pos: 1, club: "Old Stars", short: "OS", color: "#D71920", logo: oldStarsLogo, played: 18, w: 14, d: 1, l: 3, gf: 98, ga: 55, pts: 43 },
  { pos: 2, club: "Everstone", short: "EV", color: "#0B1F3A", logo: everstoneLogo, played: 18, w: 13, d: 2, l: 3, gf: 75, ga: 27, pts: 41 },
  { pos: 3, club: "Iberia 1999", short: "IB", color: "#1E40AF", logo: iberiaLogo, played: 18, w: 13, d: 1, l: 4, gf: 90, ga: 62, pts: 40 },
  { pos: 4, club: "Glovo", short: "FG", color: "#FFC244", logo: glovoLogo, played: 18, w: 9, d: 2, l: 7, gf: 81, ga: 56, pts: 29 },
  { pos: 5, club: "GFDF", short: "GD", color: "#059669", logo: gfdfLogo, played: 18, w: 9, d: 0, l: 9, gf: 70, ga: 51, pts: 27 },
  { pos: 6, club: "Grand Avlabari", short: "GA", color: "#DC2626", logo: avlabariLogo, played: 18, w: 7, d: 3, l: 8, gf: 72, ga: 85, pts: 24 },
  { pos: 7, club: "Adjara Group", short: "AG", color: "#0EA5E9", logo: ajaraLogo, played: 18, w: 7, d: 2, l: 9, gf: 60, ga: 63, pts: 23 },
  { pos: 8, club: "Derby", short: "DE", color: "#475569", logo: derbyLogo, played: 18, w: 5, d: 3, l: 10, gf: 57, ga: 92, pts: 18 },
  { pos: 9, club: "Lentekhi", short: "LE", color: "#92400E", logo: lentehiLogo, played: 18, w: 4, d: 0, l: 14, gf: 64, ga: 106, pts: 12 },
];

export type PlayerStat = {
  id: number;
  name: string;
  team: string;
  position?: string;
  matchesPlayed?: number;
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
};

export const playerStats: PlayerStat[] = [
  // --- IBERIA 1999 ---
  { id: 25, name: "დავით ხეჩიკაშვილი", team: "iberia 1999", position: "მოთამაშე", goals: 3, assists: 4, yellowCards: 1, redCards: 0 },
  { id: 9, name: "ვახტანგ კეკელია", team: "iberia 1999", position: "მოთამაშე", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 37, name: "მალხაზ მურცხვალაძე", team: "iberia 1999", position: "მოთამაშე", goals: 0, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 31, name: "ნიკა ნოზაძე", team: "iberia 1999", position: "მოთამაშე", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 2, name: "ლაშა-გიორგი ობოლაძე", team: "iberia 1999", position: "მოთამაშე", goals: 19, assists: 8, yellowCards: 0, redCards: 0 },
  { id: 19, name: "ნუკრი ჭუმბურიძე", team: "iberia 1999", position: "მოთამაშე", goals: 3, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 39, name: "ლაშა კურტანიძე", team: "iberia 1999", position: "მოთამაშე", goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 37, name: "კონსტანტინე სეფიაშვილი", team: "iberia 1999", position: "მოთამაშე", goals: 0, assists: 6, yellowCards: 1, redCards: 0 },
  { id: 11, name: "გიორგი სილაგავა", team: "iberia 1999", position: "მოთამაშე", goals: 7, assists: 7, yellowCards: 0, redCards: 0 },
  { id: 37, name: "იური ჩანგელია", team: "iberia 1999", position: "მოთამაშე", goals: 2, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "გიორგი კურტანიძე", team: "iberia 1999", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 5, name: "არჩილ სებისკვერაძე", team: "iberia 1999", position: "მოთამაშე", goals: 12, assists: 6, yellowCards: 1, redCards: 0 },
  { id: 28, name: "გიორგი ჯინიკაშვილი", team: "iberia 1999", position: "მოთამაშე", goals: 13, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 37, name: "სანდრო ობოლაძე", team: "iberia 1999", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ირაკლი ლელაძე", team: "iberia 1999", position: "ნახევარმცველი", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 171, name: "ზაურ კოტრიკაძე", team: "iberia 1999", position: "მოთამაშე", goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 23, name: "გიორგი მჭედლიშვილი", team: "iberia 1999", position: "მოთამაშე", goals: 3, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 8, name: "ნიკა ჩალაძე", team: "iberia 1999", position: "თავდამსხმელი", goals: 4, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 9, name: "ნიკოლოზ ხაჩიძე", team: "iberia 1999", position: "თავდამსხმელი", goals: 2, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 187, name: "სანდრო აბრამიშვილი", team: "iberia 1999", position: "მოთამაშე", goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 192, name: "დავით სიჭინავა", team: "iberia 1999", position: "მოთამაშე", goals: 3, assists: 1, yellowCards: 0, redCards: 0 },

  // --- OLD STARS ---
  { id: 7, name: "გიორგი ქურდაძე", team: "old stars", position: "მოთამაშე", goals: 16, assists: 15, yellowCards: 1, redCards: 0 },
  { id: 5, name: "ვანო ბექაური", team: "old stars", position: "მოთამაშე", goals: 5, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 4, name: "გიორგი ზუნტუროვი", team: "old stars", position: "მოთამაშე", goals: 13, assists: 9, yellowCards: 0, redCards: 0 },
  { id: 33, name: "ლუკა ელიზბარაშვილი", team: "old stars", position: "მოთამაშე", goals: 3, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 33, name: "ბექა მურღული", team: "old stars", position: "მოთამაშე", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 6, name: "შაკო გუგუნავა", team: "old stars", position: "მოთამაშე", goals: 8, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 3, name: "ლევან ქურდაძე", team: "old stars", position: "მოთამაშე", goals: 14, assists: 16, yellowCards: 0, redCards: 0 },
  { id: 28, name: "ვაკო გახარია", team: "old stars", position: "მოთამაშე", goals: 3, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 8, name: "ბექა ბექაური", team: "old stars", position: "მოთამაშე", goals: 3, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 128, name: "ვახო ჭიკაიძე", team: "old stars", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 9, name: "დათო ჯაბაური", team: "old stars", position: "მოთამაშე", goals: 5, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 130, name: "ლუკა ჩიტაური", team: "old stars", position: "მოთამაშე", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 131, name: "ლაზარე ჯავაშვილი", team: "old stars", position: "მოთამაშე", goals: 3, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 140, name: "ნოდო ქურცაძე", team: "old stars", position: "მოთამაშე", goals: 3, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 141, name: "თორნიკე თოდრია", team: "old stars", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 142, name: "გიორგი გურული", team: "old stars", position: "მოთამაშე", goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 143, name: "გიორგი ქავთრაძე", team: "old stars", position: "მოთამაშე", goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 146, name: "ნოდო მწითური", team: "old stars", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 147, name: "საბა ეგრისელაშვილი", team: "old stars", position: "მოთამაშე", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 18, name: "ლუკა ტუღოშვილი", team: "old stars", position: "მოთამაშე", goals: 2, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 1, name: "გიორგი ნადირაძე", team: "old stars", position: "მეკარე", goals: 0, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 11, name: "ლაშა ფოფხაძე", team: "old stars", position: "მოთამაშე", goals: 3, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 14, name: "გარი წერეთელი", team: "old stars", position: "მოთამაშე", goals: 4, assists: 2, yellowCards: 1, redCards: 0 },

  // --- DERBY ---
  { id: 36, name: "ფილიპ აზომა", team: "derby", position: "მოთამაშე", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 21, name: "ნიკოლოზ ელოშვილი", team: "derby", position: "მცველი", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 6, name: "საბა აბრამიშვილი", team: "derby", position: "ნახევარმცველი", goals: 3, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 92, name: "ნოდარი ბაქრაძე", team: "derby", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 17, name: "თამაზ ვახანია", team: "derby", position: "ნახევარმცველი", goals: 2, assists: 6, yellowCards: 0, redCards: 0 },
  { id: 113, name: "სერგო ფალელაშვილი", team: "derby", position: "მოთამაშე", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 31, name: "ვასკა შერაზადიშვილი", team: "derby", position: "მეკარე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 8, name: "თორნიკე კირკიტაძე", team: "derby", position: "ნახევარმცველი", goals: 0, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 9, name: "გიგა ესიტაშვილი", team: "derby", position: "თავდამსხმელი", goals: 10, assists: 4, yellowCards: 2, redCards: 0 },
  { id: 10, name: "დათო ხუბუტია", team: "derby", position: "თავდამსხმელი", goals: 6, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 77, name: "იკა მიქავა", team: "derby", position: "მცველი", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 20, name: "დაჩი ბუცხრიკიძე", team: "derby", position: "მცველი", goals: 2, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 148, name: "გიგა ცაგარეიშვილი", team: "derby", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 27, name: "ბორის ესებუა", team: "derby", position: "თავდამსხმელი", goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 4, name: "გელა შენგელია", team: "derby", position: "მცველი", goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 11, name: "გიორგი დიაკონიშვილი", team: "derby", position: "ნახევარმცველი", goals: 2, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 1, name: "ლუკა ვარძელაშვილი", team: "derby", position: "მეკარე", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 14, name: "ირაკლი ცაგარეიშვილი", team: "derby", position: "ნახევარმცველი", goals: 4, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 162, name: "ვასილ შერაზადიშვილი", team: "derby", position: "მოთამაშე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 7, name: "ვარლამ შადური", team: "derby", position: "თავდამსხმელი", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 18, name: "ლაშა ჯინჭარაშვილი", team: "derby", position: "მცველი", goals: 1, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 186, name: "ალექსანდრე ღარიბოვი", team: "derby", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },

  // --- ADJARA GROUP ---
  { id: 25, name: "გიორგი ქალიაშვილი", team: "adjara group", position: "მცველი", goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 13, name: "ლუკა აბდუშელიშვილი", team: "adjara group", position: "მცველი", goals: 3, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 4, name: "ლევან ჯიჭონაია", team: "adjara group", position: "ნახევარმცველი", goals: 6, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 11, name: "გიგა მახარაშვილი", team: "adjara group", position: "მცველი", goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ილია ქემაშვილი", team: "adjara group", position: "თავდამსხმელი", goals: 1, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 10, name: "ზურაბ ხიზანიშვილი", team: "adjara group", position: "ნახევარმცველი", goals: 4, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 28, name: "ნიკოლოზ შავლაძე", team: "adjara group", position: "თავდამსხმელი", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 15, name: "ნიკოლოზ ახობაძე", team: "adjara group", position: "მცველი", goals: 5, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 8, name: "დავით ცხონდია", team: "adjara group", position: "ნახევარმცველი", goals: 1, assists: 2, yellowCards: 2, redCards: 0 },
  { id: 2, name: "გიორგი პატარიძე", team: "adjara group", position: "მცველი", goals: 4, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 7, name: "ლევან იახტნიშვილი", team: "adjara group", position: "თავდამსხმელი", goals: 0, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 9, name: "დავით ჯერანოვი", team: "adjara group", position: "ნახევარმცველი", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 32, name: "ვაჟა კვარაცხელია", team: "adjara group", position: "მოთამაშე", goals: 1, assists: 2, yellowCards: 2, redCards: 0 },
  { id: 6, name: "ვალერიან მურცხვალაძე", team: "adjara group", position: "მცველი", goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 16, name: "დავით კოტაძე", team: "adjara group", position: "ნახევარმცველი", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 22, name: "კოტე მაისურაძე", team: "adjara group", position: "მეკარე", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 99, name: "თაზო ლავრელაშვილი", team: "adjara group", position: "მცველი", goals: 3, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 26, name: "შოთა ღვინიაშვილი", team: "adjara group", position: "თავდამსხმელი", goals: 3, assists: 1, yellowCards: 3, redCards: 0 },
  { id: 30, name: "ნიკა ბერიაშვილი", team: "adjara group", position: "მცველი", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },

  // --- GLOVO ---
  { id: 7, name: "ნუგზარ მაისურაძე", team: "glovo", position: "თავდამსხმელი", goals: 7, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 9, name: "ალეკო თავშავაძე", team: "glovo", position: "თავდამსხმელი", goals: 4, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 38, name: "ნიკა ნაცვლიშვილი", team: "glovo", position: "მოთამაშე", goals: 0, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 17, name: "სანდრო ჭანტურიშვილი", team: "glovo", position: "თავდამსხმელი", goals: 26, assists: 11, yellowCards: 1, redCards: 0 },
  { id: 23, name: "ლუკა თაგორაშვილი", team: "glovo", position: "ნახევარმცველი", goals: 6, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 11, name: "ნიკა ჟამერაშვილი", team: "glovo", position: "თავდამსხმელი", goals: 4, assists: 6, yellowCards: 0, redCards: 0 },
  { id: 16, name: "ანატოლი მესიაჩენკო", team: "glovo", position: "ნახევარმცველი", goals: 11, assists: 6, yellowCards: 1, redCards: 0 },
  { id: 2, name: "დათო მაისურაძე", team: "glovo", position: "მცველი", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 5, name: "ვასილ მგელაძე", team: "glovo", position: "მცველი", goals: 0, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 43, name: "ლევან ჯიხვაშვილი", team: "glovo", position: "მოთამაშე", goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 44, name: "თენგიზ ფხაკაძე", team: "glovo", position: "მოთამაშე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 27, name: "ლევან ყურაშვილი", team: "glovo", position: "მეკარე", goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 3, name: "გურამ ადამაძე", team: "glovo", position: "მცველი", goals: 1, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 8, name: "გიორგი დიდებაშვილი", team: "glovo", position: "მცველი", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 20, name: "გიგა გულდედავა", team: "glovo", position: "თავდამსხმელი", goals: 7, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 22, name: "ირაკლი ქადაგიშვილი", team: "glovo", position: "ნახევარმცველი", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 6, name: "თორნიკე ალიხამოვი", team: "glovo", position: "მცველი", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 13, name: "გიორგი თამაზაშვილი", team: "glovo", position: "თავდამსხმელი", goals: 0, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 196, name: "სოსო ნემსიაშვილი", team: "glovo", position: "მოთამაშე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },

  // --- LENTEKHI ---
  { id: 77, name: "ლუკა ტვილდიანი", team: "lentekhi", position: "ნახ.მცველი", goals: 6, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ნიკა კარაული", team: "lentekhi", position: "ნახ.მცველი", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 9, name: "მირიან მეშველიანი", team: "lentekhi", position: "შეტევა", goals: 5, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 2, name: "ბესო ლიპარტელიანი", team: "lentekhi", position: "მცველი", goals: 1, assists: 10, yellowCards: 0, redCards: 0 },
  { id: 8, name: "გიორგი გაზდელიანი", team: "lentekhi", position: "ნახ.მცველი", goals: 5, assists: 8, yellowCards: 2, redCards: 1 },
  { id: 10, name: "გიორგი ლიპარტელიანი", team: "lentekhi", position: "ნახ.მცველი", goals: 6, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 3, name: "ილია გაზდელიანი", team: "lentekhi", position: "მოთამაშე", goals: 14, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 11, name: "გიორგი გვიჭიანი", team: "lentekhi", position: "შეტევა", goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 44, name: "გოჩა ტვილდიანი", team: "lentekhi", position: "შეტევა", goals: 3, assists: 2, yellowCards: 3, redCards: 0 },
  { id: 7, name: "რატი ლიპარტელიანი", team: "lentekhi", position: "მცველი", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 88, name: "პაატა ლიპარტელიანი", team: "lentekhi", position: "ნახ.მცველი", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 126, name: "ოთო კვიციანი", team: "lentekhi", position: "მოთამაშე", goals: 4, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 99, name: "ნოდო აფაქიძე", team: "lentekhi", position: "მცველი", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 1, name: "ლუკა ჯანხოთელი", team: "lentekhi", position: "მეკარე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 165, name: "ოთარ კვასტიანი", team: "lentekhi", position: "მოთამაშე", goals: 2, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 80, name: "გიორგი ონიანი", team: "lentekhi", position: "შეტევა", goals: 4, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 66, name: "გურამ მუსელიანი", team: "lentekhi", position: "მეკარე", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 13, name: "არჩილ ტვილდიანი", team: "lentekhi", position: "შეტევა", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },

  // --- EVERSTONE ---
  { id: 77, name: "ირაკლი კიკნაძე", team: "everstone", position: "მცველი", goals: 3, assists: 4, yellowCards: 2, redCards: 0 },
  { id: 5, name: "ბუთა ღვინჯილია", team: "everstone", position: "მცველი", goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 14, name: "ცოტნე ბუკია", team: "everstone", position: "ნახევარმცველი", goals: 3, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 10, name: "თორნიკე ბახტაძე", team: "everstone", position: "ნახევარმცველი", goals: 10, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 9, name: "თორნიკე ქართველიშვილი", team: "everstone", position: "ნახევარმცველი", goals: 3, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 26, name: "თორნიკე ჯანაშვილი", team: "everstone", position: "თავდამსხმელი", goals: 5, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 13, name: "გიორგი კოკოზაშვილი", team: "everstone", position: "მცველი", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 25, name: "ჯონი შეროზია", team: "everstone", position: "მეკარე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 7, name: "დათა ღაღაიშვილი", team: "everstone", position: "თავდამსხმელი", goals: 13, assists: 6, yellowCards: 0, redCards: 0 },
  { id: 8, name: "ლაშა კაკაჩია", team: "everstone", position: "თავდამსხმელი", goals: 6, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 11, name: "ბაჩო ტარუღიშვილი", team: "everstone", position: "ნახევარმცველი", goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 22, name: "ნიკა ხარჩილავა", team: "everstone", position: "ნახევარმცველი", goals: 6, assists: 6, yellowCards: 1, redCards: 0 },
  { id: 1, name: "ალი ასლანი", team: "everstone", position: "მეკარე", goals: 4, assists: 1, yellowCards: 1, redCards: 0 },

  // --- SABURTALO ---
  { id: 8, name: "ერეკლე სულთანიშვილი", team: "saburtalo", position: "მოთამაშე", goals: 7, assists: 6, yellowCards: 0, redCards: 0 },
  { id: 3, name: "თეიმურაზ ექიზაშვილი", team: "saburtalo", position: "მოთამაშე", goals: 7, assists: 6, yellowCards: 1, redCards: 0 },
  { id: 10, name: "ლაშა სიგუნავა", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 21, name: "მიხეილ თევზაძე", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 22, name: "ლაშა ხომასურიძე", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 83, name: "ლევან სვანიძე", team: "saburtalo", position: "მოთამაშე", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 1, name: "ნიკოლოზ ფხაკაძე", team: "saburtalo", position: "მეკარე", goals: 0, assists: 0, yellowCards: 2, redCards: 0 },
  { id: 85, name: "გოგლიკო ჭოხონელიძე", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 17, name: "გიორგი აფციაური", team: "saburtalo", position: "მოთამაშე", goals: 6, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ნიკოლოზ კოპლატაძე", team: "saburtalo", position: "მოთამაშე", goals: 6, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 11, name: "გიორგი ჭოხონელიძე", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 7, name: "ნიკოლოზ კურტანიძე", team: "saburtalo", position: "მოთამაშე", goals: 2, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 135, name: "გიორგი ენუქიძე", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 6, name: "ლევან სარდანაშვილი", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 20, name: "გიორგი ლუკავა", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 164, name: "ემზარ ნადირაძე", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 176, name: "პანტალეიმონ ჯიშკარიანი", team: "saburtalo", position: "მოთამაშე", goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 21, name: "ნიკა კუპრაშვილი", team: "saburtalo", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },

  // --- GRAND AVLABARI ---
  { id: 1, name: "კახაბერ გოგოხია", team: "grand avlabari", position: "მცველი", goals: 14, assists: 7, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ლაშა სანაია", team: "grand avlabari", position: "ნახევარმცველი", goals: 2, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 9, name: "სპარტაკ ლომიძე", team: "grand avlabari", position: "ნახევარმცველი", goals: 8, assists: 6, yellowCards: 1, redCards: 0 },
  { id: 14, name: "ბახვა ბიწაძე", team: "grand avlabari", position: "მეკარე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 3, name: "თორნიკე თაბაგარი", team: "grand avlabari", position: "თავდამსხმელი", goals: 2, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 44, name: "ოთარ ყაყიტაშვილი", team: "grand avlabari", position: "მოთამაშე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 15, name: "გიორგი გაბრიაძე", team: "grand avlabari", position: "თავდამსხმელი", goals: 7, assists: 11, yellowCards: 1, redCards: 0 },
  { id: 8, name: "ზურაბ ვარდიაშვილი", team: "grand avlabari", position: "ნახევარმცველი", goals: 1, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 81, name: "გიორგი ასოევი", team: "grand avlabari", position: "მოთამაშე", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 13, name: "ბექა ონიანი", team: "grand avlabari", position: "თავდამსხმელი", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 16, name: "ომარ ასაშვილი", team: "grand avlabari", position: "ნახევარმცველი", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 7, name: "გიორგი ნატროშვილი", team: "grand avlabari", position: "მცველი", goals: 8, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 116, name: "დიმა ბაღიშვილი", team: "grand avlabari", position: "მოთამაშე", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 6, name: "გუგა შეწირული", team: "grand avlabari", position: "თავდამსხმელი", goals: 5, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 12, name: "დიმა მეგრელიშვილი", team: "grand avlabari", position: "მეკარე", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 144, name: "ლუკა იაშვილი", team: "grand avlabari", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 10, name: "ლუკა გოგიტაძე", team: "grand avlabari", position: "მცველი", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 11, name: "ლევან ხორბალაძე", team: "grand avlabari", position: "მცველი", goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 4, name: "ლევან ცხვარიაშვილი", team: "grand avlabari", position: "მცველი", goals: 11, assists: 3, yellowCards: 0, redCards: 0 },

  // --- GFDF ---
  { id: 6, name: "ვაჩე ალფაიძე", team: "gfdf", position: "მოთამაშე", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 13, name: "სანდრო კაიდარაშვილი", team: "gfdf", position: "მოთამაშე", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 8, name: "ირაკლი მსახურაძე", team: "gfdf", position: "მოთამაშე", goals: 2, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 5, name: "ლაშა კაპანაძე", team: "gfdf", position: "მოთამაშე", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 88, name: "ზურა ბიძინაშვილი", team: "gfdf", position: "მოთამაშე", goals: 5, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 4, name: "ბექა რაზმაძე", team: "gfdf", position: "მოთამაშე", goals: 6, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 11, name: "კახა ტოგონიძე", team: "gfdf", position: "მოთამაშე", goals: 2, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 22, name: "ნიკა შანიძე", team: "gfdf", position: "მოთამაშე", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 9, name: "ზვიად მეტრეველი", team: "gfdf", position: "მოთამაშე", goals: 4, assists: 7, yellowCards: 0, redCards: 0 },
  { id: 1, name: "გიგა ჭანკვეტაძე", team: "gfdf", position: "მეკარე", goals: 1, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 19, name: "გოგიტა უგულავა", team: "gfdf", position: "მოთამაშე", goals: 2, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 77, name: "არჩილ კელიხაშვილი", team: "gfdf", position: "მოთამაშე", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 7, name: "ნიკა ფანცულაია", team: "gfdf", position: "მოთამაშე", goals: 9, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 10, name: "რატი ცაცკრიალაშვილი", team: "gfdf", position: "მოთამაშე", goals: 6, assists: 4, yellowCards: 1, redCards: 0 },
  { id: 20, name: "ლუკა ბოგველი", team: "gfdf", position: "მოთამაშე", goals: 8, assists: 6, yellowCards: 0, redCards: 0 },
  { id: 21, name: "ილია გორდაძე", team: "gfdf", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 80, name: "ლაშა ჟღენტი", team: "gfdf", position: "მოთამაშე", goals: 2, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 104, name: "ირაკლი კლიმიაშვილი", team: "gfdf", position: "მოთამაშე", goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 2, name: "ლუკა ბადაგაძე", team: "gfdf", position: "მოთამაშე", goals: 0, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 49, name: "ვაჟა გეგეშიძე", team: "gfdf", position: "მოთამაშე", goals: 5, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 99, name: "გიორგი ჟვანია", team: "gfdf", position: "მოთამაშე", goals: 5, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 16, name: "მიშო გათაშვილი", team: "gfdf", position: "მოთამაშე", goals: 4, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 18, name: "ირაკლი ბაბლიძე", team: "gfdf", position: "მოთამაშე", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 12, name: "ნიკა მუშკუდიანი", team: "gfdf", position: "მეკარე", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
];

// Staff Type
export type StaffMember = {
  id: number;
  name: string;
  role: string;
  team: string;
};

// Staff Massive
export const staff: StaffMember[] = [
  // Saburtalo
  { id: 1, name: "ლაშა სიგუენავა", role: "მწვრთნელი", team: "saburtalo" },
  { id: 2, name: "ნიკოლოზ კოპლატაძე", role: "დამხმარე მწვრთნელი", team: "saburtalo" },
  // Derby
  { id: 3, name: "სერგო ფალელაშვილი", role: "სტაფი", team: "derby" },
  { id: 4, name: "კახა კეკელიძე", role: "სტაფი", team: "derby" },
  // Adjara Group
  { id: 5, name: "მირიან ჯანგავაძე", role: "მთავარი მწვრთნელი", team: "adjara group" },
  { id: 6, name: "გიორგი ბერუაშვილი", role: "ასისტენტი", team: "adjara group" },
  // Glovo
  { id: 7, name: "ლევანი ჯიხვაშვილი", role: "მთავარი მწვრთნელი", team: "glovo" },
  { id: 8, name: "იოსებ ნემსიაშვილი", role: "ასისტენტი", team: "glovo" },
  { id: 9, name: "ანზორი გოდერძიშვილი", role: "PR მენეჯერი", team: "glovo" },
  // Lentekhi
  { id: 10, name: "გოჩა ტვილდიანი", role: "მთავარი მწვრთნელი", team: "lentekhi" },
  { id: 11, name: "ივანე ჯანხოთელი", role: "ასისტენტი", team: "lentekhi" },
  // Everstone
  { id: 12, name: "გიგა დანელია", role: "მთავარი მწვრთნელი", team: "everstone" },
  { id: 13, name: "გიორგი აბრამიშვილი", role: "მენეჯერი", team: "everstone" },
  // Grand Avlabari
  { id: 14, name: "ლევან ცერცვაძე", role: "მთავარი მწვრთნელი", team: "grand avlabari" },
  { id: 15, name: "ზურაბ ცერცვაძე", role: "ასისტენტი", team: "grand avlabari" },
  // GFDF
  { id: 16, name: "დავით ჯიშკარიანი", role: "მთ.მწვრთნელი", team: "gfdf" },
  { id: 17, name: "ზურაბ ბაბლიძე", role: "ასისტენტი", team: "gfdf" },
  { id: 18, name: "მაკა ხურციძე", role: "PR/Social media", team: "gfdf" },
  // Iberia 1999
  { id: 19, name: "კახაბერ მაისაია", role: "მთ.მწვრთნელი", team: "iberia 1999" },
  // Old Stars
  { id: 20, name: "გიორგი ქურდაძე", role: "გუნდის კაპიტანი, მენეჯერი", team: "old stars" }
];

export type MatchResult = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
  round?: string;
};

export const matchResults: MatchResult[] = [
  // --- MATCHDAY 9 ---
  { id: "1", homeTeam: "Old Stars", awayTeam: "Everstone", homeScore: 4, awayScore: 2, date: "2026-06-10", round: "Matchday 9" },
  { id: "2", homeTeam: "Saburtalo", awayTeam: "Iberia 1999", homeScore: 3, awayScore: 3, date: "2026-06-09", round: "Matchday 9" },
  { id: "3", homeTeam: "GFDF", awayTeam: "Glovo", homeScore: 5, awayScore: 2, date: "2026-06-08", round: "Matchday 9" },
  { id: "4", homeTeam: "Adjara Group", awayTeam: "Grand Avlabari", homeScore: 4, awayScore: 1, date: "2026-06-07", round: "Matchday 9" },
  { id: "5", homeTeam: "Derby", awayTeam: "Lentekhi", homeScore: 2, awayScore: 2, date: "2026-06-06", round: "Matchday 9" },

  // --- MATCHDAY 10 ---
  { id: "6", homeTeam: "Glovo", awayTeam: "Iberia 1999", homeScore: 4, awayScore: 5, date: "2026-06-17", round: "Matchday 10" },
  { id: "7", homeTeam: "Adjara Group", awayTeam: "Grand Avlabari", homeScore: 3, awayScore: 7, date: "2026-06-17", round: "Matchday 10" },
  { id: "8", homeTeam: "Derby", awayTeam: "Lentekhi", homeScore: 10, awayScore: 6, date: "2026-06-17", round: "Matchday 10" },
  { id: "9", homeTeam: "Old Stars", awayTeam: "Everstone", homeScore: 1, awayScore: 4, date: "2026-06-17", round: "Matchday 10" },
  { id: "10", homeTeam: "Saburtalo", awayTeam: "GFDF", homeScore: 6, awayScore: 6, date: "2026-06-17", round: "Matchday 10" },

  // --- MATCHDAY 11 ---
  { id: "11", homeTeam: "Saburtalo", awayTeam: "Adjara Group", homeScore: 4, awayScore: 1, date: "2026-06-24", round: "Matchday 11" },
  { id: "12", homeTeam: "Glovo", awayTeam: "Everstone", homeScore: 2, awayScore: 2, date: "2026-06-24", round: "Matchday 11" },
  { id: "13", homeTeam: "GFDF", awayTeam: "TBD", homeScore: 4, awayScore: 1, date: "2026-06-24", round: "Matchday 11" },

  // --- MATCHDAY 12 ---
  { id: "14", homeTeam: "Iberia 1999", awayTeam: "Everstone", homeScore: 3, awayScore: 0, date: "2026-07-01", round: "Matchday 12" },
  { id: "15", homeTeam: "Glovo", awayTeam: "Lentekhi", homeScore: 10, awayScore: 3, date: "2026-07-01", round: "Matchday 12" },
  { id: "16", homeTeam: "Saburtalo", awayTeam: "Grand Avlabari", homeScore: 2, awayScore: 2, date: "2026-07-01", round: "Matchday 12" },
  { id: "17", homeTeam: "Derby", awayTeam: "Adjara Group", homeScore: 5, awayScore: 2, date: "2026-07-01", round: "Matchday 12" },
  { id: "18", homeTeam: "Old Stars", awayTeam: "GFDF", homeScore: 3, awayScore: 1, date: "2026-07-01", round: "Matchday 12" },

  // --- MATCHDAY 13 ---
  { id: "19", homeTeam: "Saburtalo", awayTeam: "Derby", homeScore: 5, awayScore: 5, date: "2026-09-13", round: "Matchday 13" },
  { id: "20", homeTeam: "Adjara Group", awayTeam: "Old Stars", homeScore: 1, awayScore: 4, date: "2026-09-13", round: "Matchday 13" },
  { id: "21", homeTeam: "GFDF", awayTeam: "Glovo", homeScore: 4, awayScore: 3, date: "2026-09-13", round: "Matchday 13" },
  { id: "22", homeTeam: "Lentekhi", awayTeam: "Iberia 1999", homeScore: 1, awayScore: 15, date: "2026-09-12", round: "Matchday 13" },
  { id: "23", homeTeam: "Grand Avlabari", awayTeam: "Everstone", homeScore: 2, awayScore: 7, date: "2026-09-12", round: "Matchday 13" },

  // --- MATCHDAY 14 ---
  { id: "24", homeTeam: "Iberia 1999", awayTeam: "GFDF", homeScore: 5, awayScore: 0, date: "2026-09-20", round: "Matchday 14" },
  { id: "25", homeTeam: "Everstone", awayTeam: "Lentekhi", homeScore: 5, awayScore: 3, date: "2026-09-20", round: "Matchday 14" },
  { id: "26", homeTeam: "Derby", awayTeam: "Grand Avlabari", homeScore: 4, awayScore: 4, date: "2026-09-20", round: "Matchday 14" },

  // --- MATCHDAY 15 ---
  { id: "27", homeTeam: "Grand Avlabari", awayTeam: "Lentekhi", homeScore: 4, awayScore: 8, date: "2026-09-26", round: "Matchday 15" },
  { id: "28", homeTeam: "Adjara Group", awayTeam: "Iberia 1999", homeScore: 4, awayScore: 5, date: "2026-09-27", round: "Matchday 15" },
  { id: "29", homeTeam: "Derby", awayTeam: "Old Stars", homeScore: 1, awayScore: 4, date: "2026-09-27", round: "Matchday 15" },

  // --- MATCHDAY 16 ---
  { id: "30", homeTeam: "Lentekhi", awayTeam: "GFDF", homeScore: 2, awayScore: 3, date: "2026-10-04", round: "Matchday 16" },
  { id: "31", homeTeam: "Everstone", awayTeam: "Adjara Group", homeScore: 5, awayScore: 0, date: "2026-10-04", round: "Matchday 16" },
  { id: "32", homeTeam: "Old Stars", awayTeam: "Grand Avlabari", homeScore: 8, awayScore: 3, date: "2026-10-04", round: "Matchday 16" },

  // --- MATCHDAY 17 ---
  { id: "33", homeTeam: "Old Stars", awayTeam: "Glovo", homeScore: 5, awayScore: 5, date: "2026-10-11", round: "Matchday 17" },
  { id: "34", homeTeam: "Grand Avlabari", awayTeam: "GFDF", homeScore: 6, awayScore: 5, date: "2026-10-11", round: "Matchday 17" },
  { id: "35", homeTeam: "Adjara Group", awayTeam: "Lentekhi", homeScore: 11, awayScore: 2, date: "2026-10-10", round: "Matchday 17" },
  { id: "36", homeTeam: "Derby", awayTeam: "Iberia 1999", homeScore: 3, awayScore: 7, date: "2026-10-10", round: "Matchday 17" },

  // --- MATCHDAY 18 ---
  { id: "37", homeTeam: "Glovo", awayTeam: "Grand Avlabari", homeScore: 5, awayScore: 7, date: "2026-10-17", round: "Matchday 18" },
  { id: "38", homeTeam: "GFDF", awayTeam: "Adjara Group", homeScore: 1, awayScore: 2, date: "2026-10-18", round: "Matchday 18" },
  { id: "39", homeTeam: "Iberia 1999", awayTeam: "Old Stars", homeScore: 8, awayScore: 7, date: "2026-10-18", round: "Matchday 18" },
];