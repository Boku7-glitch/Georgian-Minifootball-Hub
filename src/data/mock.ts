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
  position?: string;
  matchesPlayed?: number;
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
};

export const playerStats: PlayerStat[] = [
  // --- IBERIA 1999 ---
  { id: 25, name: "დავით ხეჩიკაშვილი", team: "iberia 1999", position: "მოთამაშე" },
  { id: 9, name: "ვახტანგ კეკელია", team: "iberia 1999", position: "მოთამაშე" },
  { id: 37, name: "მალხაზ მურცხვალაძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 31, name: "ნიკა ნოზაძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 2, name: "ლაშა-გიორგი ობოლაძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 19, name: "ნუკრი ჭუმბურიძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 39, name: "ლაშა კურტანიძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 37, name: "კონსტანტინე სეფაშვილი", team: "iberia 1999", position: "მოთამაშე" },
  { id: 11, name: "გიორგი სილაგავა", team: "iberia 1999", position: "მოთამაშე" },
  { id: 37, name: "იური ჩანგელია", team: "iberia 1999", position: "მოთამაშე" },
  { id: 37, name: "გიორგი კურტანიძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 5, name: "არჩილ სებისკვერაძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 28, name: "გიორგი ობოლაძე", team: "iberia 1999", position: "მოთამაშე" },
  { id: 37, name: "სანდრო ობოლაძე", team: "iberia 1999", position: "მოთამაშე" },

  // --- OLD STARS ---
  { id: 1, name: "გიორგი ნადირაძე", team: "old stars", position: "მეკარე" },
  { id: 12, name: "ფაცი ბაქრაძე", team: "old stars", position: "მეკარე" },
  { id: 5, name: "ვანო ბექაური", team: "old stars", position: "მოთამაშე" },
  { id: 8, name: "ბექა ბექაური", team: "old stars", position: "მოთამაშე" },
  { id: 7, name: "გიორგი ქურდაძე", team: "old stars", position: "მოთამაშე" },
  { id: 3, name: "ლევან ქურდაძე", team: "old stars", position: "მოთამაშე" },
  { id: 4, name: "გიორგი ზუნტუროვი", team: "old stars", position: "მოთამაშე" },
  { id: 6, name: "შაკო გუგუნავა", team: "old stars", position: "მოთამაშე" },
  { id: 9, name: "დათო კაბაური", team: "old stars", position: "მოთამაშე" },
  { id: 28, name: "ვაკო გახარია", team: "old stars", position: "მოთამაშე" },
  { id: 10, name: "ნიკა მნათობიშვილი", team: "old stars", position: "მოთამაშე" },
  { id: 11, name: "ლაშა ფოფხაძე", team: "old stars", position: "მოთამაშე" },
  { id: 33, name: "ბექა მურღული", team: "old stars", position: "მოთამაშე" },
  { id: 14, name: "გარი წერეთელი", team: "old stars", position: "მოთამაშე" },
  { id: 18, name: "ლუკა ცუციშვილი", team: "old stars", position: "მოთამაშე" },

  // --- DERBY ---
  { id: 31, name: "ვასიკო შერაზადიშვილი", team: "derby", position: "მეკარე" },
  { id: 1, name: "ირაკლი ვარძელაშვილი", team: "derby", position: "მეკარე" },
  { id: 10, name: "დათო ბუბუტია", team: "derby", position: "თავდამსხმელი" },
  { id: 21, name: "ნიკოლოზ ელოშვილი", team: "derby", position: "მცველი" },
  { id: 23, name: "გიორგი ბუბუტია", team: "derby", position: "ნახევარმცველი" },
  { id: 18, name: "ლაშა ჯინჭარაძვილი", team: "derby", position: "მცველი" },
  { id: 6, name: "საბა აბრამიშვილი", team: "derby", position: "ნახევარმცველი" },
  { id: 17, name: "თამაზი ვახანია", team: "derby", position: "ნახევარმცველი" },
  { id: 77, name: "ირაკლი მიქავა", team: "derby", position: "მცველი" },
  { id: 27, name: "ბორის ესებუა", team: "derby", position: "თავდამსხმელი" },
  { id: 11, name: "გიორგი დიაკვნიშვილი", team: "derby", position: "ნახევარმცველი" },
  { id: 20, name: "დაჩი ბუცხრიკიძე", team: "derby", position: "მცველი" },
  { id: 4, name: "გელა შენგელია", team: "derby", position: "მცველი" },
  { id: 8, name: "თორნიკე კირკიტაძე", team: "derby", position: "ნახევარმცველი" },
  { id: 9, name: "გიგა ესიოტაშვილი", team: "derby", position: "თავდამსხმელი" },
  { id: 25, name: "დავით დვალი", team: "derby", position: "მცველი" },
  { id: 14, name: "ირაკლი ცაგარეიშვილი", team: "derby", position: "ნახევარმცველი" },
  { id: 7, name: "ვარლამ შადური", team: "derby", position: "თავდამსხმელი" },

  // --- ADJARA GROUP ---
  { id: 2, name: "გიორგი პატარიძე", team: "adjara group", position: "მცველი" },
  { id: 16, name: "დავით კოტაძე", team: "adjara group", position: "ნახევარმცველი" },
  { id: 7, name: "ლევან იახტნიშვილი", team: "adjara group", position: "თავდამსხმელი" },
  { id: 11, name: "გიგა მახარაშვილი", team: "adjara group", position: "მცველი" },
  { id: 1, name: "მამუკა საღირიშვილი", team: "adjara group", position: "მეკარე" },
  { id: 28, name: "ნიკოლოზ შავლაძე", team: "adjara group", position: "თავდამსხმელი" },
  { id: 13, name: "ლუკა აბდუშელიშვილი", team: "adjara group", position: "მცველი" },
  { id: 10, name: "ზურა ბიზანიშვილი", team: "adjara group", position: "ნახევარმცველი" },
  { id: 9, name: "დავით ჯეირანოვი", team: "adjara group", position: "ნახევარმცველი" },
  { id: 25, name: "გიორგი ქალიაშვილი", team: "adjara group", position: "მცველი" },
  { id: 15, name: "ნიკა ახობაძე", team: "adjara group", position: "მცველი" },
  { id: 19, name: "სანდრო ამირიძე", team: "adjara group", position: "ნახევარმცველი" },
  { id: 5, name: "ილია ქემაშვილი", team: "adjara group", position: "თავდამსხმელი" },
  { id: 4, name: "ლევან ჯიქონია", team: "adjara group", position: "ნახევარმცველი" },
  { id: 22, name: "კონსტანტინე მაისურაძე", team: "adjara group", position: "მეკარე" },
  { id: 6, name: "ვალერიანე მურცხვალაძე", team: "adjara group", position: "მცველი" },
  { id: 8, name: "დავით ცხონდია", team: "adjara group", position: "ნახევარმცველი" },
  { id: 30, name: "ნიკა ბერიაშვილი", team: "adjara group", position: "მცველი" },
  { id: 31, name: "სანდრო ალავიძე", team: "adjara group", position: "თავდამსხმელი" },
  { id: 18, name: "ნიკოლოზ ბურნაძე", team: "adjara group", position: "მცველი" },
  { id: 23, name: "ნიკოლოზ სულხანიშვილი", team: "adjara group", position: "ნახევარმცველი" },
  { id: 26, name: "შოთა ღვინიაშვილი", team: "adjara group", position: "თავდამსხმელი" },
  { id: 77, name: "ირაკლი მოსულიშვილი", team: "adjara group", position: "მეკარე" },
  { id: 88, name: "გიორგი ფანგანი", team: "adjara group", position: "მცველი" },
  { id: 99, name: "თამაზ ლავრელაშვილი", team: "adjara group", position: "მცველი" },
  { id: 35, name: "გიორგი ქალდანიშვილი", team: "adjara group", position: "მოთამაშე" },
  { id: 32, name: "ვაჟა კვარაცხელია", team: "adjara group", position: "მოთამაშე" },

  // --- GLOVO ---
  { id: 24, name: "ნიკა ბუნთიანი", team: "glovo", position: "ნახევარმცველი" },
  { id: 8, name: "გიორგი დიდებაშვილი", team: "glovo", position: "მცველი" },
  { id: 6, name: "თორნიკე ალიხანოვი", team: "glovo", position: "მცველი" },
  { id: 23, name: "ლუკა თავგორაშვილი", team: "glovo", position: "ნახევარმცველი" },
  { id: 10, name: "გოდერძი მარგიანი", team: "glovo", position: "ნახევარმცველი" },
  { id: 1, name: "საბა ჟამერაშვილი", team: "glovo", position: "მეკარე" },
  { id: 3, name: "გურამი ადამაძე", team: "glovo", position: "მცველი" },
  { id: 11, name: "ნიკა ჟამერაშვილი", team: "glovo", position: "თავდამსხმელი" },
  { id: 9, name: "ალეკო თავშავაძე", team: "glovo", position: "თავდამსხმელი" },
  { id: 13, name: "გიორგი თამაზაშვილი", team: "glovo", position: "თავდამსხმელი" },
  { id: 17, name: "სანდრო ჭანტურიშვილი", team: "glovo", position: "თავდამსხმელი" },
  { id: 16, name: "ანატოლი მესიჩენკო", team: "glovo", position: "ნახევარმცველი" },
  { id: 7, name: "ნუგზარი მაისურაძე", team: "glovo", position: "თავდამსხმელი" },
  { id: 2, name: "დათო მაისურაძე", team: "glovo", position: "მცველი" },
  { id: 5, name: "ვასილ მგელაძე", team: "glovo", position: "მცველი" },
  { id: 27, name: "ლევან ყურაშვილი", team: "glovo", position: "მეკარე" },
  { id: 20, name: "გიგა გულდედავა", team: "glovo", position: "თავდამსხმელი" },
  { id: 22, name: "ირაკლი ქადაგიშვილი", team: "glovo", position: "ნახევარმცველი" },
  { id: 38, name: "ნიკა ნაცვლიშვილი", team: "glovo", position: "მოთამაშე" },
  { id: 43, name: "ლევან ჯიქშაშვილი", team: "glovo", position: "მოთამაშე" },
  { id: 44, name: "თენგიზ ფხაკაძე", team: "glovo", position: "მოთამაშე" },

  // --- LENTEKHI ---
  { id: 1, name: "ლუკა ჯანხოთელი", team: "lentekhi", position: "მეკარე" },
  { id: 12, name: "დავით ტვილდიანი", team: "lentekhi", position: "მეკარე" },
  { id: 2, name: "ბესიკი ლიპარტელიანი", team: "lentekhi", position: "მცველი" },
  { id: 7, name: "რატი ლიპარტელიანი", team: "lentekhi", position: "მცველი" },
  { id: 80, name: "ზურაბ ლიპარტელიანი", team: "lentekhi", position: "მცველი" },
  { id: 4, name: "გიორგი გაზდელიანი", team: "lentekhi", position: "მცველი" },
  { id: 8, name: "გიორგი გაზდელიანი", team: "lentekhi", position: "ნახ.მცველი" },
  { id: 10, name: "გიორგი ლიპარტელიანი", team: "lentekhi", position: "ნახ.მცველი" },
  { id: 88, name: "პაატა ლიპარტელიანი", team: "lentekhi", position: "ნახ.მცველი" },
  { id: 5, name: "ნიკა კარიაული", team: "lentekhi", position: "ნახ.მცველი" },
  { id: 77, name: "ლუკა ტვილდიანი", team: "lentekhi", position: "ნახ.მცველი" },
  { id: 13, name: "არჩილ ტვილდიანი", team: "lentekhi", position: "შეტევა" },
  { id: 9, name: "მირიან მეშველიანი", team: "lentekhi", position: "შეტევა" },
  { id: 22, name: "ილამაზ გაზდელიანი", team: "lentekhi", position: "შეტევა" },
  { id: 44, name: "გოჩა ტვილდიანი", team: "lentekhi", position: "შეტევა" },
  { id: 11, name: "გიორგი გვიჩიანი", team: "lentekhi", position: "შეტევა" },
  { id: 66, name: "საბა ფურცელიანი", team: "lentekhi", position: "ნახ.მცველი" },
  { id: 99, name: "ნოდო აფაქიძე", team: "lentekhi", position: "მცველი" },
  { id: 69, name: "გივიკო მეშველიანი", team: "lentekhi", position: "მცველი" },
  { id: 3, name: "ილია გაზდელიანი", team: "lentekhi", position: "მოთამაშე" },

  // --- EVERSTONE ---
  { id: 25, name: "ჯონი შეროზია", team: "everstone", position: "მეკარე" },
  { id: 33, name: "ნიკა ნოზაძე", team: "everstone", position: "მეკარე" },
  { id: 1, name: "ალი ასლანი", team: "everstone", position: "მეკარე" },
  { id: 77, name: "ირაკლი კიკნაძე", team: "everstone", position: "მცველი" },
  { id: 13, name: "გიორგი კოკოზაშვილი", team: "everstone", position: "მცველი" },
  { id: 21, name: "დავით ჯანაშვილი", team: "everstone", position: "მცველი" },
  { id: 5, name: "ალექსანდრე ღვინჯილია", team: "everstone", position: "მცველი" },
  { id: 6, name: "ვახტანგ ჯავახიშვილი", team: "everstone", position: "მცველი" },
  { id: 22, name: "ნიკა ხარჩილავა", team: "everstone", position: "ნახევარმცველი" },
  { id: 14, name: "ცოტნე ბუკია", team: "everstone", position: "ნახევარმცველი" },
  { id: 9, name: "თორნიკე ქართველიშვილი", team: "everstone", position: "ნახევარმცველი" },
  { id: 10, name: "თორნიკე ბახტაძე", team: "everstone", position: "ნახევარმცველი" },
  { id: 11, name: "ბაჩანა ტარუღიშვილი", team: "everstone", position: "ნახევარმცველი" },
  { id: 26, name: "თორნიკე ჯანაშვილი", team: "everstone", position: "თავდამსხმელი" },
  { id: 7, name: "დათო დალაიშვილი", team: "everstone", position: "თავდამსხმელი" },
  { id: 8, name: "ლაშა კაკაჩია", team: "everstone", position: "თავდამსხმელი" },

  // --- SABURTALO ---
  { id: 8, name: "ერეკლე სულთანნიშვილი", team: "saburtalo", position: "მოთამაშე" },
  { id: 3, name: "თეიმურაზ ექიზაშვილი", team: "saburtalo", position: "მოთამაშე" },
  { id: 10, name: "ლაშა სიგუენავა", team: "saburtalo", position: "მოთამაშე" },
  { id: 21, name: "მიხეილ თევზაძე", team: "saburtalo", position: "მოთამაშე" },
  { id: 22, name: "ლაშა ხომასურიძე", team: "saburtalo", position: "მოთამაშე" },
  { id: 6, name: "ლევან სარდანაშვილი", team: "saburtalo", position: "მოთამაშე" },
  { id: 1, name: "ნიკოლოზ ფხაკაძე", team: "saburtalo", position: "მეკარე" },
  { id: 7, name: "ნიკოლოზ კურტანიძე", team: "saburtalo", position: "მოთამაშე" },
  { id: 17, name: "გიორგი აფციაური", team: "saburtalo", position: "მოთამაშე" },
  { id: 5, name: "ნიკოლოზ კოპლატაძე", team: "saburtalo", position: "მოთამაშე" },
  { id: 11, name: "გიორგი ჯოხონელიძე", team: "saburtalo", position: "მოთამაშე" },

  // --- GRAND AVLABARI ---
  { id: 1, name: "კახაბერ გოგოხია", team: "grand avlabari", position: "მცველი" },
  { id: 2, name: "მიხეილ ყიასაშვილი", team: "grand avlabari", position: "ნახევარმცველი" },
  { id: 3, name: "თორნიკე ტაბაგარი", team: "grand avlabari", position: "თავდამსხმელი" },
  { id: 4, name: "ლევან ცხვარიაშვილი", team: "grand avlabari", position: "მცველი" },
  { id: 5, name: "ლაშა სანაია", team: "grand avlabari", position: "ნახევარმცველი" },
  { id: 6, name: "გუგა შეწირული", team: "grand avlabari", position: "თავდამსხმელი" },
  { id: 7, name: "გიორგი ნატროშვილი", team: "grand avlabari", position: "მცველი" },
  { id: 8, name: "ზურაბ ვარდუაშვილი", team: "grand avlabari", position: "ნახევარმცველი" },
  { id: 9, name: "სპარტაკ ლომიძე", team: "grand avlabari", position: "ნახევარმცველი" },
  { id: 10, name: "ლუკა გოგიტაძე", team: "grand avlabari", position: "მცველი" },
  { id: 11, name: "ლევან ხორბალაძე", team: "grand avlabari", position: "მცველი" },
  { id: 12, name: "დიმიტრი მეგრელიშვილი", team: "grand avlabari", position: "მეკარე" },
  { id: 13, name: "ბექა ონიანი", team: "grand avlabari", position: "თავდამსხმელი" },
  { id: 14, name: "ბახვა ბიწაძე", team: "grand avlabari", position: "მეკარე" },
  { id: 15, name: "გიორგი გაბრიაძე", team: "grand avlabari", position: "თავდამსხმელი" },
  { id: 16, name: "ომარ ასაშვილი", team: "grand avlabari", position: "ნახევარმცველი" },

  // --- GFDF ---
  { id: 7, name: "ნიკა ფანცულაია", team: "gfdf", position: "მოთამაშე" },
  { id: 22, name: "ნიკა შანიძე", team: "gfdf", position: "მოთამაშე" },
  { id: 19, name: "გოგიტა უგულავა", team: "gfdf", position: "მოთამაშე" },
  { id: 9, name: "ზვიად მეტრეველი", team: "gfdf", position: "მოთამაშე" },
  { id: 88, name: "ზურაბ ბიბინაშვილი", team: "gfdf", position: "მოთამაშე" },
  { id: 21, name: "ილია გორდაძე", team: "gfdf", position: "მოთამაშე" },
  { id: 8, name: "ირაკლი მასხურაძე", team: "gfdf", position: "მოთამაშე" },
  { id: 5, name: "ლაშა კაპანაძე", team: "gfdf", position: "მოთამაშე" },
  { id: 10, name: "რატი ცაცკრიალაშვილი", team: "gfdf", position: "მოთამაშე" },
  { id: 1, name: "გიგა ჭანკვეტაძე", team: "gfdf", position: "მეკარე" },
  { id: 12, name: "ნიკოლოზ მუშკუდიანი", team: "gfdf", position: "მეკარე" },
  { id: 13, name: "სანდრო კაიდარაშვილი", team: "gfdf", position: "მოთამაშე" },
  { id: 11, name: "კახა ტოგონიძე", team: "gfdf", position: "მოთამაშე" },
  { id: 80, name: "ლაშა ჟღენტი", team: "gfdf", position: "მოთამაშე" },
  { id: 77, name: "არჩილ კელისაშვილი", team: "gfdf", position: "მოთამაშე" },
  { id: 6, name: "ვარე ალფაიძე", team: "gfdf", position: "მოთამაშე" },
  { id: 2, name: "ლუკა ბადაგაძე", team: "gfdf", position: "მოთამაშე" },
  { id: 49, name: "ვაჟა გეგეშიძე", team: "gfdf", position: "მოთამაშე" },
  { id: 99, name: "გიორგი ჟვანია", team: "gfdf", position: "მოთამაშე" },
  { id: 4, name: "ბექა რაზმაძე", team: "gfdf", position: "მოთამაშე" },
  { id: 18, name: "ირაკლი ბაბლიძე", team: "gfdf", position: "მოთამაშე" },
  { id: 20, name: "ლუკას ბოგველი", team: "gfdf", position: "მოთამაშე" },
  { id: 16, name: "მიხეილ გათაშვილი", team: "gfdf", position: "მოთამაშე" },
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
  { id: "1", homeTeam: "Old Stars", awayTeam: "Everstone", homeScore: 4, awayScore: 2, date: "2026-06-10", round: "Matchday 9" },
  { id: "2", homeTeam: "Saburtalo", awayTeam: "Iberia 1999", homeScore: 3, awayScore: 3, date: "2026-06-09", round: "Matchday 9" },
  { id: "3", homeTeam: "GFDF", awayTeam: "Glovo", homeScore: 5, awayScore: 2, date: "2026-06-08", round: "Matchday 9" },
  { id: "4", homeTeam: "Adjara Group", awayTeam: "Grand Avlabari", homeScore: 4, awayScore: 1, date: "2026-06-07", round: "Matchday 9" },
  { id: "5", homeTeam: "Derby", awayTeam: "Lentekhi", homeScore: 2, awayScore: 2, date: "2026-06-06", round: "Matchday 9" },
];