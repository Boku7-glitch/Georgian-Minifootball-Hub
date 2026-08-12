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
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
};

export const playerStats: PlayerStat[] = [
  { id: 3, name: "კახაბერ გოგოხია", team: "grand avlabari", goals: 7, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 30, name: "ლაშა სანაია", team: "grand avlabari", goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 11, name: "სპარტაკ ლომიძე", team: "grand avlabari", goals: 4, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 41, name: "ბახვა ბიწაძე", team: "grand avlabari", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 25, name: "დავით ხეჩიკაშვილი", team: "iberia 1999", goals: 2, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 9, name: "ვახტანგ კეკელია", team: "iberia 1999", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 37, name: "მალხაზ მურცხვალაძე", team: "iberia 1999", goals: 0, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 31, name: "ნიკა ნოზაძე", team: "iberia 1999", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 2, name: "ლაშა-გიორგი ობოლაძე", team: "iberia 1999", goals: 9, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 19, name: "ნუკრი ჭუმბურიძე", team: "iberia 1999", goals: 3, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 28, name: "ირაკლი კიგნაძე", team: "everstone", goals: 1, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 26, name: "ბუთა ღვინჯილია", team: "everstone", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 21, name: "ცოტნე ბუცია", team: "everstone", goals: 3, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 13, name: "თორნიკე ბახტაძე", team: "everstone", goals: 4, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 10, name: "ვარე ალფოიძე", team: "gfdf", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 15, name: "სანდრო კაიდარაშვილი", team: "gfdf", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 23, name: "ირაკლი მხატურაძე", team: "gfdf", goals: 2, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 39, name: "ლაშა კაპანაძე", team: "gfdf", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 17, name: "ზურა ბიძინაშვილი", team: "gfdf", goals: 3, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 4, name: "ბექა რაზმაძე", team: "gfdf", goals: 6, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 22, name: "კახა ტოგონიძე", team: "gfdf", goals: 2, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 32, name: "ნიკა შანიძე", team: "gfdf", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 29, name: "ზვიად მეტრეველი", team: "gfdf", goals: 1, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 20, name: "ლუკა ტვილდიანი", team: "lentekhi", goals: 3, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 42, name: "ნიკა კარავული", team: "lentekhi", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 16, name: "მირიან მეშველიანი", team: "lentekhi", goals: 4, assists: 0, yellowCards: 2, redCards: 0 },
  { id: 12, name: "ნუგზარ მაისურაძე", team: "glovo", goals: 4, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 14, name: "ალექსი თავშავაძე", team: "glovo", goals: 4, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 38, name: "ნიკა ნაცვლიშვილი", team: "glovo", goals: 0, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 7, name: "გიორგი ქურდაძე", team: "old stars", goals: 4, assists: 8, yellowCards: 1, redCards: 0 },
  { id: 5, name: "ვანო ბექაური", team: "old stars", goals: 5, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 1, name: "გიორგი ზუნტუროვი", team: "old stars", goals: 10, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 18, name: "ლუკა ელიოზარაშვილი", team: "old stars", goals: 3, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 33, name: "ბექა მურღული", team: "old stars", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 6, name: "შაკო გუგუნავა", team: "old stars", goals: 5, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 27, name: "ფელიქპ აზოიანი", team: "derby", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 40, name: "ნიკოლოზ ელოშვილი", team: "derby", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 24, name: "ერეკლე სულთანანიშვილი", team: "saburtalo", goals: 2, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 8, name: "თეიმურაზ ეჯიბაშვილი", team: "saburtalo", goals: 4, assists: 4, yellowCards: 1, redCards: 0 },
  { id: 34, name: "ლაშა სიგუენავა", team: "saburtalo", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 36, name: "მიხეილ თევზაძე", team: "saburtalo", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 35, name: "გიორგი ქალდანიშვილი", team: "adjara group", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 36, name: "თორნიკე თაბაგარი", team: "grand avlabari", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ოთარ ყაიტიშვილი", team: "grand avlabari", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 21, name: "გიორგი გაბრიაძე", team: "grand avlabari", goals: 3, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 36, name: "გიგა ჭანკვეტაძე", team: "gfdf", goals: 1, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 26, name: "გოგიტა უგულავა", team: "gfdf", goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 36, name: "არჩილ კელეხაშვილი", team: "gfdf", goals: 1, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 3, name: "ნიკა ფანჩულია", team: "gfdf", goals: 9, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 5, name: "რატი ცაგურილაშვილი", team: "gfdf", goals: 5, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 1, name: "სანდრო ჭანტურიშვილი", team: "glovo", goals: 12, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 18, name: "თორნიკე ქართველიშვილი", team: "everstone", goals: 3, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 11, name: "თორნიკე ჯანაშივილი", team: "everstone", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 37, name: "გიორგი კოკოშაშვილი", team: "everstone", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 28, name: "ბესო ლიპარტელიანი", team: "lentekhi", goals: 1, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 17, name: "გიორგი გაზდელიანი", team: "lentekhi", goals: 3, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 30, name: "გიორგი ლიპარტელიანი", team: "lentekhi", goals: 1, assists: 3, yellowCards: 2, redCards: 0 },
  { id: 43, name: "ლუკა აბდუშელიშვილი", team: "adjara group", goals: 0, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 39, name: "ლაშა კურტანიძე", team: "iberia 1999", goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 37, name: "კონსტანტინე სეფაშვილი", team: "iberia 1999", goals: 0, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 11, name: "გიორგი სილაგავა", team: "iberia 1999", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 37, name: "იური ჩანგელია", team: "iberia 1999", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "ჯონი შეროზია", team: "everstone", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 9, name: "დათა დალაქიშვილი", team: "everstone", goals: 4, assists: 4, yellowCards: 1, redCards: 0 },
  { id: 17, name: "საბა აბრამიშვილი", team: "derby", goals: 3, assists: 5, yellowCards: 1, redCards: 0 },
  { id: 17, name: "ლუკა ბოგველი", team: "derby", goals: 3, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 4, name: "ლუკა თავგორაშვილი", team: "glovo", goals: 6, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 25, name: "ნიკა ჟამერაშვილი", team: "glovo", goals: 2, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 7, name: "ანატოლი მესირენკო", team: "glovo", goals: 5, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ილია გორდაძე", team: "gfdf", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 37, name: "გიორგი კურტანიძე", team: "iberia 1999", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 3, name: "ლევან ქურდაძე", team: "old stars", goals: 7, assists: 7, yellowCards: 0, redCards: 0 },
  { id: 28, name: "ვაკო გახარია", team: "old stars", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 22, name: "ლევან ჯიქონია", team: "adjara group", goals: 3, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 39, name: "გიგა მახარაშვილი", team: "adjara group", goals: 0, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 30, name: "ილია ქემაშვილი", team: "adjara group", goals: 1, assists: 3, yellowCards: 1, redCards: 0 },
  { id: 19, name: "ზურაბ ბიგანიშვილი", team: "adjara group", goals: 3, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 37, name: "ნიკოლოზ შავლაძე", team: "adjara group", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 17, name: "ნიკოლოზ ახობაძე", team: "adjara group", goals: 4, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 30, name: "ზურაბ ვარდიაშვილი", team: "grand avlabari", goals: 1, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 41, name: "გიორგი ასოევი", team: "grand avlabari", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 41, name: "ლაშა ხომასურიძე", team: "saburtalo", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 17, name: "ლევან სვანიძე", team: "saburtalo", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ნიკოლოზ ფხაკაძე", team: "saburtalo", goals: 0, assists: 0, yellowCards: 2, redCards: 0 },
  { id: 31, name: "გოგლიკო ჯოხონელიძე", team: "saburtalo", goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 3, name: "ილია გაზდელიანი", team: "lentekhi", goals: 8, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 41, name: "გიორგი გვიჩიანი", team: "lentekhi", goals: 0, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 26, name: "გოჩა ტვილდიანი", team: "lentekhi", goals: 2, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 11, name: "ლაშა კაკაურია", team: "everstone", goals: 4, assists: 3, yellowCards: 0, redCards: 0 },
  { id: 36, name: "ბარო ტარუნიშვილი", team: "everstone", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 31, name: "ნიკა ხარჩილავა", team: "everstone", goals: 1, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 37, name: "ნოდარი ბაჟრაძე", team: "derby", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "დავით ცხონდია", team: "adjara group", goals: 1, assists: 1, yellowCards: 2, redCards: 0 },
  { id: 26, name: "გიორგი პატარიძე", team: "adjara group", goals: 2, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 37, name: "ლევან იასტინაშვილი", team: "adjara group", goals: 0, assists: 5, yellowCards: 0, redCards: 0 },
  { id: 28, name: "დავით ჯერანოვი", team: "adjara group", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 31, name: "ვაჟა კვარაცხელია", team: "adjara group", goals: 1, assists: 2, yellowCards: 2, redCards: 0 },
  { id: 43, name: "დათო მაისურაძე", team: "glovo", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 43, name: "ვასილ მგელაძე", team: "glovo", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 43, name: "ლევან ჯიქშაშვილი", team: "glovo", goals: 0, assists: 0, yellowCards: 2, redCards: 0 },
  { id: 37, name: "რატი ლიპარტელიანი", team: "lentekhi", goals: 1, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "ბექა ონიანი", team: "grand avlabari", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 36, name: "ლაშა ჟღენტი", team: "gfdf", goals: 1, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 31, name: "ირაკლი კლიმიაშვილი", team: "gfdf", goals: 1, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 5, name: "არჩილ სებისკვერაძე", team: "iberia 1999", goals: 5, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 28, name: "გიორგი ობოლაძე", team: "iberia 1999", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 37, name: "პაატა ლიპარტელიანი", team: "lentekhi", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 43, name: "თენგიზ ფხაკაძე", team: "glovo", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 4, name: "გიორგი აფციაური", team: "saburtalo", goals: 6, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 21, name: "ნიკოლოზ კოპლატაძე", team: "saburtalo", goals: 3, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 28, name: "ბექა ბექაური", team: "old stars", goals: 1, assists: 4, yellowCards: 1, redCards: 0 },
  { id: 28, name: "ალი ასლანი", team: "everstone", goals: 2, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 26, name: "თამაზ ვახანია", team: "derby", goals: 2, assists: 2, yellowCards: 0, redCards: 0 },
  { id: 37, name: "სერგო ფალელაშვილი", team: "derby", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ომარ ასაშვილი", team: "grand avlabari", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 26, name: "გიორგი ნატროშვილი", team: "grand avlabari", goals: 2, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 41, name: "დიმა ბაიიშვილი", team: "grand avlabari", goals: 0, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 41, name: "ლუკა ბადეგაძე", team: "gfdf", goals: 0, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 37, name: "გიორგი ჯოხონელიძე", team: "saburtalo", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ვალერიან მურცხვალაძე", team: "adjara group", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 17, name: "დავით კოტაძე", team: "adjara group", goals: 4, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ვასკა შერაზადიშვილი", team: "derby", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "თორნიკე კირკიტაძე", team: "derby", goals: 0, assists: 4, yellowCards: 0, redCards: 0 },
  { id: 19, name: "გიგა ესიოტაშვილი", team: "derby", goals: 3, assists: 2, yellowCards: 1, redCards: 0 },
  { id: 7, name: "დათო ბუბუტა", team: "derby", goals: 5, assists: 1, yellowCards: 0, redCards: 0 },
  { id: 37, name: "ნიკა ელიოზიშვილი", team: "derby", goals: 1, assists: 0, yellowCards: 0, redCards: 0 },
  { id: 43, name: "ივა მიქავა", team: "derby", goals: 0, assists: 0, yellowCards: 1, redCards: 0 },
  { id: 37, name: "გიორგი ფვანია", team: "gfdf", goals: 0, assists: 1, yellowCards: 1, redCards: 0 },
  { id: 37, name: "სანდრო ობოლაძე", team: "iberia 1999", goals: 0, assists: 1, yellowCards: 2, redCards: 0 }
];

// Match Results Data
export type MatchResult = {
  id: string;
  round: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
};

export const matchResults: MatchResult[] = [
  // --- MATCHDAY 4 ---
  { id: "md4-1", round: 4, homeTeam: "Saburtalo", awayTeam: "Iberia 1999", homeScore: 5, awayScore: 0 },
  { id: "md4-2", round: 4, homeTeam: "Lentekhi", awayTeam: "Grand Avlabari", homeScore: 3, awayScore: 4 },
  { id: "md4-3", round: 4, homeTeam: "Adjara Group", awayTeam: "Glovo", homeScore: 3, awayScore: 0 },
  { id: "md4-4", round: 4, homeTeam: "Derby", awayTeam: "Everstone", homeScore: 1, awayScore: 9 },
  { id: "md4-5", round: 4, homeTeam: "Old Stars", awayTeam: "GFDF", homeScore: 6, awayScore: 5 },

  // --- MATCHDAY 5 ---
  { id: "md5-1", round: 5, homeTeam: "Saburtalo", awayTeam: "Grand Avlabari", homeScore: 6, awayScore: 3 },
  { id: "md5-2", round: 5, homeTeam: "Old Stars", awayTeam: "Everstone", homeScore: 3, awayScore: 2 },
  { id: "md5-3", round: 5, homeTeam: "Adjara Group", awayTeam: "Derby", homeScore: 2, awayScore: 2 },
  { id: "md5-4", round: 5, homeTeam: "Iberia 1999", awayTeam: "GFDF", homeScore: 3, awayScore: 1 },
  { id: "md5-5", round: 5, homeTeam: "Lentekhi", awayTeam: "Glovo", homeScore: 4, awayScore: 6 },
];