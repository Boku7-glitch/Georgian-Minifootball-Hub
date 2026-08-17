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
  { pos: 1, club: "Old Stars", short: "OS", color: "#D71920", logo: oldStarsLogo, played: 9, w: 8, d: 0, l: 1, gf: 52, ga: 28, pts: 24 },
  { pos: 2, club: "Everstone", short: "EV", color: "#0B1F3A", logo: everstoneLogo, played: 9, w: 6, d: 1, l: 2, gf: 36, ga: 16, pts: 19 },
  { pos: 3, club: "Saburtalo", short: "SA", color: "#F59E0B", logo: saburtaloLogo, played: 9, w: 6, d: 1, l: 2, gf: 39, ga: 25, pts: 19 },
  { pos: 4, club: "Iberia 1999", short: "IB", color: "#1E40AF", logo: iberiaLogo, played: 9, w: 5, d: 1, l: 3, gf: 35, ga: 36, pts: 16 },
  { pos: 5, club: "GFDF", short: "GD", color: "#059669", logo: gfdfLogo, played: 9, w: 5, d: 0, l: 4, gf: 48, ga: 29, pts: 15 },
  { pos: 6, club: "Glovo", short: "FG", color: "#FFC244", logo: glovoLogo, played: 9, w: 4, d: 0, l: 5, gf: 34, ga: 34, pts: 12 },
  { pos: 7, club: "Adjara Group", short: "AG", color: "#0EA5E9", logo: ajaraLogo, played: 9, w: 3, d: 2, l: 4, gf: 27, ga: 33, pts: 11 },
  { pos: 8, club: "Grand Avlabari", short: "GA", color: "#DC2626", logo: avlabariLogo, played: 9, w: 1, d: 2, l: 6, gf: 27, ga: 47, pts: 5 },
  { pos: 9, club: "Derby", short: "DE", color: "#475569", logo: derbyLogo, played: 9, w: 1, d: 2, l: 6, gf: 25, ga: 61, pts: 5 },
  { pos: 10, club: "Lentekhi", short: "LE", color: "#92400E", logo: lentehiLogo, played: 9, w: 1, d: 1, l: 7, gf: 30, ga: 44, pts: 4 },
];

export type PlayerStat = {
  id: number;
  name: string;
  team: string;
  matchesPlayed?: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
};

export const playerStats: PlayerStat[] = [
  // --- GRAND AVLABARI ---
  { id: 3, name: "კახაბერ გოგოხია", team: "grand avlabari", matchesPlayed: 9, goals: 7, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 30, name: "ლაშა სანაია", team: "grand avlabari", matchesPlayed: 8, goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 11, name: "სპარტაკ ლომიძე", team: "grand avlabari", matchesPlayed: 9, goals: 4, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 41, name: "ბახვა ბიწაძე", team: "grand avlabari", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 36, name: "თორნიკე თაბაგარი", team: "grand avlabari", matchesPlayed: 7, goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ოთარ ყაიტიშვილი", team: "grand avlabari", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 21, name: "გიორგი გაბრიაძე", team: "grand avlabari", matchesPlayed: 8, goals: 3, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 30, name: "ზურაბ ვარდიაშვილი", team: "grand avlabari", matchesPlayed: 9, goals: 1, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 41, name: "გიორგი ასოევი", team: "grand avlabari", matchesPlayed: 6, goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ბექა ონიანი", team: "grand avlabari", matchesPlayed: 5, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ომარ ასაშვილი", team: "grand avlabari", matchesPlayed: 4, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 26, name: "გიორგი ნატროშვილი", team: "grand avlabari", matchesPlayed: 7, goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 41, name: "დიმა ბაიიშვილი", team: "grand avlabari", matchesPlayed: 3, goals: 0, assists: 1, yellowCards: 0, redCards: 0 },

  // --- IBERIA 1999 ---
  { id: 25, name: "დავით ხეჩიკაშვილი", team: "iberia 1999", matchesPlayed: 8, goals: 2, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 9, name: "ვახტანგ კეკელია", team: "iberia 1999", matchesPlayed: 9, goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 37, name: "მალხაზ მურცხვალაძე", team: "iberia 1999", matchesPlayed: 7, goals: 0, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 31, name: "ნიკა ნოზაძე", team: "iberia 1999", matchesPlayed: 6, goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 2, name: "ლაშა-გიორგი ობოლაძე", team: "iberia 1999", matchesPlayed: 9, goals: 9, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 19, name: "ნუკრი ჭუმბურიძე", team: "iberia 1999", matchesPlayed: 8, goals: 3, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 39, name: "ლაშა კურტანიძე", team: "iberia 1999", matchesPlayed: 5, goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 37, name: "კონსტანტინე სეფაშვილი", team: "iberia 1999", matchesPlayed: 8, goals: 0, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 11, name: "გიორგი სილაგავა", team: "iberia 1999", matchesPlayed: 9, goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 37, name: "იური ჩანგელია", team: "iberia 1999", matchesPlayed: 4, goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "გიორგი კურტანიძე", team: "iberia 1999", matchesPlayed: 5, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 5, name: "არჩილ სებისკვერაძე", team: "iberia 1999", matchesPlayed: 9, goals: 5, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 28, name: "გიორგი ობოლაძე", team: "iberia 1999", matchesPlayed: 6, goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 37, name: "სანდრო ობოლაძე", team: "iberia 1999", matchesPlayed: 4, goals: 0, assists: 1, yellowCards: 2, redCards: 0 },

  // --- GFDF ---
  { id: 10, name: "ვარე ალფოიძე", team: "gfdf", matchesPlayed: 8, goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 15, name: "სანდრო კაიდარაშვილი", team: "gfdf", matchesPlayed: 7, goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 23, name: "ირაკლი მხატურაძე", team: "gfdf", matchesPlayed: 8, goals: 2, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 39, name: "ლაშა კაპანაძე", team: "gfdf", matchesPlayed: 5, goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 17, name: "ზურა ბიძინაშვილი", team: "gfdf", matchesPlayed: 9, goals: 3, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 4, name: "ბექა რაზმაძე", team: "gfdf", matchesPlayed: 9, goals: 6, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 22, name: "კახა ტოგონიძე", team: "gfdf", matchesPlayed: 9, goals: 2, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 32, name: "ნიკა შანიძე", team: "gfdf", matchesPlayed: 6, goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 29, name: "ზვიად მეტრეველი", team: "gfdf", matchesPlayed: 8, goals: 1, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 36, name: "გიგა ჭანკვეტაძე", team: "gfdf", matchesPlayed: 7, goals: 1, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 26, name: "გოგიტა უგულავა", team: "gfdf", matchesPlayed: 6, goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 36, name: "არჩილ კელეხაშვილი", team: "gfdf", matchesPlayed: 5, goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 3, name: "ნიკა ფანჩულია", team: "gfdf", matchesPlayed: 9, goals: 9, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 5, name: "რატი ცაგურილაშვილი", team: "gfdf", matchesPlayed: 9, goals: 5, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ილია გორდაძე", team: "gfdf", matchesPlayed: 4, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 36, name: "ლაშა ჟღენტი", team: "gfdf", matchesPlayed: 5, goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 31, name: "ირაკლი კლიმიაშვილი", team: "gfdf", matchesPlayed: 6, goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 41, name: "ლუკა ბადეგაძე", team: "gfdf", matchesPlayed: 4, goals: 0, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 37, name: "გიორგი ფვანია", team: "gfdf", matchesPlayed: 3, goals: 0, assists: 1, yellowCards: 1, redCards: 0 },

  // --- OLD STARS ---
  { id: 7, name: "გიორგი ქურდაძე", team: "old stars", matchesPlayed: 9, goals: 4, assists: 8, yellowCards: 1, redCards: 0 },
  { id: 5, name: "ვანო ბექაური", team: "old stars", matchesPlayed: 8, goals: 5, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 1, name: "გიორგი ზუნტუროვი", team: "old stars", matchesPlayed: 9, goals: 10, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 18, name: "ლუკა ელიოზარაშვილი", team: "old stars", matchesPlayed: 8, goals: 3, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 33, name: "ბექა მურღული", team: "old stars", matchesPlayed: 6, goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 6, name: "შაკო გუგუნავა", team: "old stars", matchesPlayed: 9, goals: 5, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 3, name: "ლევან ქურდაძე", team: "old stars", matchesPlayed: 9, goals: 7, assists: 7, yellowCards: 0, redCards: 0 },
  { id: 28, name: "ვაკო გახარია", team: "old stars", matchesPlayed: 5, goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 28, name: "ბექა ბექაური", team: "old stars", matchesPlayed: 7, goals: 1, assists: 4, yellowCards: 1, redCards: 0 },

  // --- DERBY ---
  { id: 27, name: "ფელიქპ აზოიანი", team: "derby", matchesPlayed: 6, goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 40, name: "ნიკოლოზ ელოშვილი", team: "derby", matchesPlayed: 5, goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 17, name: "საბა აბრამიშვილი", team: "derby", matchesPlayed: 9, goals: 3, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 17, name: "ლუკა ბოგველი", team: "derby", matchesPlayed: 9, goals: 3, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ნოდარი ბაჟრაძე", team: "derby", matchesPlayed: 4, goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 26, name: "თამაზ ვახანია", team: "derby", matchesPlayed: 8, goals: 2, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 37, name: "სერგო ფალელაშვილი", team: "derby", matchesPlayed: 5, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ვასკა შერაზადიშვილი", team: "derby", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "თორნიკე კირკიტაძე", team: "derby", matchesPlayed: 8, goals: 0, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 19, name: "გიგა ესიოტაშვილი", team: "derby", matchesPlayed: 8, goals: 3, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 7, name: "დათო ბუბუტა", team: "derby", matchesPlayed: 9, goals: 5, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ნიკა ელიოზიშვილი", team: "derby", matchesPlayed: 4, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ივა მიქავა", team: "derby", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },

  // --- SABURTALO ---
  { id: 24, name: "ერეკლე სულთანანიშვილი", team: "saburtalo", matchesPlayed: 8, goals: 2, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 8, name: "თეიმურაზ ეჯიბაშვილი", team: "saburtalo", matchesPlayed: 9, goals: 4, assists: 4, yellowCards: 1, redCards: 0 },
  { id: 34, name: "ლაშა სიგუენავა", team: "saburtalo", matchesPlayed: 7, goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 36, name: "მიხეილ თევზაძე", team: "saburtalo", matchesPlayed: 5, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 41, name: "ლაშა ხომასურიძე", team: "saburtalo", matchesPlayed: 4, goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 17, name: "ლევან სვანიძე", team: "saburtalo", matchesPlayed: 9, goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ნიკოლოზ ფხაკაძე", team: "saburtalo", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 2, redCards: 0 },
  { id: 31, name: "გოგლიკო ჯოხონელიძე", team: "saburtalo", matchesPlayed: 6, goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 4, name: "გიორგი აფციაური", team: "saburtalo", matchesPlayed: 9, goals: 6, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 21, name: "ნიკოლოზ კოპლატაძე", team: "saburtalo", matchesPlayed: 7, goals: 3, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 37, name: "გიორგი ჯოხონელიძე", team: "saburtalo", matchesPlayed: 2, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },

  // --- ADJARA GROUP ---
  { id: 2, name: "გიორგი პატარიძე", team: "adjara group", matchesPlayed: 8, goals: 2, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 16, name: "დავით კოტაძე", team: "adjara group", matchesPlayed: 9, goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 7, name: "ლევან იასტინიშვილი", team: "adjara group", matchesPlayed: 9, goals: 0, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 11, name: "გიგა მახარაშვილი", team: "adjara group", matchesPlayed: 6, goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 1, name: "მამუკა სალიაშვილი", team: "adjara group", matchesPlayed: 7, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 28, name: "ნიკოლოზ შავლაძე", team: "adjara group", matchesPlayed: 5, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 13, name: "ლუკა აბდუშელიშვილი", team: "adjara group", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 10, name: "ზურა ბიგანიშვილი", team: "adjara group", matchesPlayed: 8, goals: 3, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 9, name: "დავით ჯერანოვი", team: "adjara group", matchesPlayed: 6, goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 25, name: "გიორგი ქალიაშვილი", team: "adjara group", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 15, name: "ნიკა ახობაძე", team: "adjara group", matchesPlayed: 8, goals: 4, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 19, name: "სანდრო ამირიძე", team: "adjara group", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ილია ქემაშვილი", team: "adjara group", matchesPlayed: 8, goals: 1, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 4, name: "ლევან ჯიქონია", team: "adjara group", matchesPlayed: 7, goals: 3, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 22, name: "კონსტანტინე მაისურაძე", team: "adjara group", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 6, name: "ვალერიანე მურცხვალაძე", team: "adjara group", matchesPlayed: 5, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 8, name: "დავით ცხონდია", team: "adjara group", matchesPlayed: 6, goals: 1, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 30, name: "ნიკა ბერიაშვილი", team: "adjara group", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 31, name: "სანდრო ალავიძე", team: "adjara group", matchesPlayed: 2, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 18, name: "ნიკოლოზ ბურნაძე", team: "adjara group", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 23, name: "ნიკოლოზ სულხანიშვილი", team: "adjara group", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 26, name: "შოთა ღვინიაშვილი", team: "adjara group", matchesPlayed: 2, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 77, name: "ირაკლი მოსულიშვილი", team: "adjara group", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 88, name: "გიორგი ფანგანი", team: "adjara group", matchesPlayed: 2, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 99, name: "თამაზ ლავრელაშვილი", team: "adjara group", matchesPlayed: 1, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 35, name: "გიორგი ქალდანიშვილი", team: "adjara group", matchesPlayed: 6, goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 31, name: "ვაჟა კვარაცხელია", team: "adjara group", matchesPlayed: 7, goals: 1, assists: 2, yellowCards: 2, redCards: 0 },

  // --- GLOVO ---
  { id: 24, name: "ნიკა ბუნტიანი", team: "glovo", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 8, name: "გიორგი დიდებაშვილი", team: "glovo", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 6, name: "თორნიკე ალიხანოვი", team: "glovo", matchesPlayed: 6, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 23, name: "ლუკა თავგორაშვილი", team: "glovo", matchesPlayed: 9, goals: 6, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 10, name: "გოდერძი მარგიანი", team: "glovo", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 1, name: "საბა ჟამერაშვილი", team: "glovo", matchesPlayed: 7, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 3, name: "გურამი ადამაძე", team: "glovo", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 11, name: "ნიკა ჟამერაშვილი", team: "glovo", matchesPlayed: 8, goals: 2, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 9, name: "ალეკო თავშავაძე", team: "glovo", matchesPlayed: 9, goals: 4, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 13, name: "გიორგი თამაზაშვილი", team: "glovo", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 17, name: "სანდრო ჭანტურიშვილი", team: "glovo", matchesPlayed: 9, goals: 12, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 16, name: "ანატოლი მესირენკო", team: "glovo", matchesPlayed: 8, goals: 5, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 7, name: "ნუგზარი მაისურაძე", team: "glovo", matchesPlayed: 8, goals: 4, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 2, name: "დათო მაისურაძე", team: "glovo", matchesPlayed: 6, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 5, name: "ვასილ მგელაძე", team: "glovo", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 27, name: "ლევან ყურაშვილი", team: "glovo", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 20, name: "გიგა გულდედავა", team: "glovo", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 22, name: "ირაკლი ქადაგიშვილი", team: "glovo", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 38, name: "ნიკა ნაცვლიშვილი", team: "glovo", matchesPlayed: 7, goals: 0, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 43, name: "ლევან ჯიქშაშვილი", team: "glovo", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 2, redCards: 0 },
  { id: 43, name: "თენგიზ ფხაკაძე", team: "glovo", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },

  // --- LENTEKHI ---
  { id: 1, name: "ლუკა ჯანხოთელი", team: "lentekhi", matchesPlayed: 7, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 12, name: "დავით ტვილდიანი", team: "lentekhi", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 2, name: "ბესიკი ლიპარტელიანი", team: "lentekhi", matchesPlayed: 9, goals: 1, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 7, name: "რატი ლიპარტელიანი", team: "lentekhi", matchesPlayed: 8, goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 80, name: "ზურაბ ლიპარტელიანი", team: "lentekhi", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 4, name: "გიორგი გაზდელიანი", team: "lentekhi", matchesPlayed: 6, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 8, name: "გიორგი გაზდელიანი", team: "lentekhi", matchesPlayed: 9, goals: 3, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 10, name: "გიორგი ლიპარტელიანი", team: "lentekhi", matchesPlayed: 8, goals: 1, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 88, name: "პაატა ლიპარტელიანი", team: "lentekhi", matchesPlayed: 5, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ნიკა კარიაული", team: "lentekhi", matchesPlayed: 6, goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 77, name: "ლუკა ტვილდიანი", team: "lentekhi", matchesPlayed: 8, goals: 3, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 13, name: "არჩილ ტვილდიანი", team: "lentekhi", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 9, name: "მირიან მეშველიანი", team: "lentekhi", matchesPlayed: 9, goals: 4, assists: 0, yellowCards: 2, redCards: 0 },
  { id: 22, name: "ილამაზ გაზდელიანი", team: "lentekhi", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 44, name: "გოჩა ტვილდიანი", team: "lentekhi", matchesPlayed: 7, goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 11, name: "გიორგი გვიჩიანი", team: "lentekhi", matchesPlayed: 5, goals: 0, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 66, name: "საბა ფურცელიანი", team: "lentekhi", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 99, name: "ნოდო აფაქიძე", team: "lentekhi", matchesPlayed: 2, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 69, name: "გივიკო მეშველიანი", team: "lentekhi", matchesPlayed: 3, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 3, name: "ილია გაზდელიანი", team: "lentekhi", matchesPlayed: 9, goals: 8, assists: 3, yellowCards: 0, redCards: 0 },

  // --- EVERSTONE ---
  { id: 25, name: "ჯონი შეროზია", team: "everstone", matchesPlayed: 7, goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 33, name: "ნიკა ნოზაძე", team: "everstone", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 1, name: "ალი ასლანი", team: "everstone", matchesPlayed: 8, goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 77, name: "ირაკლი კიგნაძე", team: "everstone", matchesPlayed: 9, goals: 1, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 13, name: "გიორგი კოკოშაშვილი", team: "everstone", matchesPlayed: 6, goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 21, name: "დავით ჯანაშივილი", team: "everstone", matchesPlayed: 4, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 5, name: "ალექსანდრე ღვინჯილია", team: "everstone", matchesPlayed: 7, goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 6, name: "ვახტანგ ჯავახიშვილი", team: "everstone", matchesPlayed: 5, goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 22, name: "ნიკა ხარჩილავა", team: "everstone", matchesPlayed: 8, goals: 1, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 14, name: "ცოტნე ბუკია", team: "everstone", matchesPlayed: 9, goals: 3, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 9, name: "თორნიკე ქართველიშვილი", team: "everstone", matchesPlayed: 9, goals: 3, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 10, name: "თორნიკე ბახტაძე", team: "everstone", matchesPlayed: 8, goals: 4, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 11, name: "ბაჩანა ტარულიშვილი", team: "everstone", matchesPlayed: 7, goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 26, name: "თორნიკე ჯანაშივილი", team: "everstone", matchesPlayed: 9, goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 7, name: "დათო დალაქიშვილი", team: "everstone", matchesPlayed: 9, goals: 4, assists: 4, yellowCards: 1, redCards: 0 },
  { id: 8, name: "ლაშა კაკაურია", team: "everstone", matchesPlayed: 9, goals: 4, assists: 3, yellowCards: 0, redCards: 0 }
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
  { id: 1, name: "გიორგი მიქაძე", role: "მთავარი მწვრთნელი", team: "saburtalo" },
  { id: 2, name: "ლევან კორღალიძე", role: "ასისტენტი", team: "saburtalo" },
  { id: 3, name: "დავით გელაშვილი", role: "ექიმი", team: "saburtalo" },

  // Adjara Group
  { id: 4, name: "მირიან ჯანგავაძე", role: "მთავარი მწვრთნელი", team: "adjara group" },
  { id: 5, name: "გიორგი ბერუაშვილი", role: "ასისტენტი", team: "adjara group" },

  // Glovo
  { id: 6, name: "ლევანი ჯიხვაშვილი", role: "მთავარი მწვრთნელი", team: "glovo" },
  { id: 7, name: "იოსებ ნემსიაშვილი", role: "ასისტენტი", team: "glovo" },
  { id: 8, name: "ანზორი გოდერძიშვილი", role: "PR მენეჯერი", team: "glovo" },

  // Lentekhi
  { id: 9, name: "გოჩა ტვილდიანი", role: "მთავარი მწვრთნელი", team: "lentekhi" },
  { id: 10, name: "ივანე ჯანხოთელი", role: "ასისტენტი", team: "lentekhi" },

  // Everstone
  { id: 11, name: "გიგა დანელია", role: "მთავარი მწვრთნელი", team: "everstone" },
  { id: 12, name: "გიორგი აბრამიშვილი", role: "მენეჯერი", team: "everstone" }
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
  { id: "1", homeTeam: "Old Stars", awayTeam: "Everstone", homeScore: 4, awayScore: 2, date: "2026-06-10", round: "Matchday 9" },
  { id: "2", homeTeam: "Saburtalo", awayTeam: "Iberia 1999", homeScore: 3, awayScore: 3, date: "2026-06-09", round: "Matchday 9" },
  { id: "3", homeTeam: "GFDF", awayTeam: "Glovo", homeScore: 5, awayScore: 2, date: "2026-06-08", round: "Matchday 9" },
  { id: "4", homeTeam: "Adjara Group", awayTeam: "Grand Avlabari", homeScore: 4, awayScore: 1, date: "2026-06-07", round: "Matchday 9" },
  { id: "5", homeTeam: "Derby", awayTeam: "Lentekhi", homeScore: 2, awayScore: 2, date: "2026-06-06", round: "Matchday 9" },
];