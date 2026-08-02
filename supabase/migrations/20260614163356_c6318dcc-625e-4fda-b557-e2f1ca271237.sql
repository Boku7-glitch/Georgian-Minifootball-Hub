
CREATE TABLE public.banners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  eyebrow_en text,
  eyebrow_ka text,
  title_en text NOT NULL,
  title_ka text,
  subtitle_en text,
  subtitle_ka text,
  cta_label_en text,
  cta_label_ka text,
  cta_to text DEFAULT '/about',
  sort_order int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.banners TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.banners TO authenticated;
GRANT ALL ON public.banners TO service_role;

ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read active banners" ON public.banners
  FOR SELECT USING (is_active = true);

CREATE POLICY "Editors can read all banners" ON public.banners
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Editors can insert banners" ON public.banners
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Editors can update banners" ON public.banners
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Editors can delete banners" ON public.banners
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE TRIGGER trg_banners_updated_at
  BEFORE UPDATE ON public.banners
  FOR EACH ROW EXECUTE FUNCTION public.tg_set_updated_at();

INSERT INTO public.banners (image_url, eyebrow_en, eyebrow_ka, title_en, title_ka, subtitle_en, subtitle_ka, cta_label_en, cta_label_ka, cta_to, sort_order) VALUES
  ('/src/assets/hero-1.jpg', 'Official Federation', 'ოფიციალური ფედერაცია', 'Georgian Minifootball Federation', 'საქართველოს მინი-ფეხბურთის ფედერაცია', 'Building the future of minifootball in Georgia — from grassroots to the national stage.', 'ვაშენებთ მინი-ფეხბურთის მომავალს საქართველოში.', 'Learn More', 'გაიგე მეტი', '/about', 0),
  ('/src/assets/hero-2.jpg', '2026 Season', '2026 სეზონი', 'Super League Season', 'სუპერ ლიგის სეზონი', 'Twelve clubs. Thirty-three matchdays. One champion. Follow every goal, every standing, live.', 'თორმეტი კლუბი. ერთი ჩემპიონი.', 'View Standings', 'ცხრილი', '/super-league', 1),
  ('/src/assets/hero-3.jpg', 'Crveni Jvari', 'წითელი ჯვარი', 'National Teams', 'ნაკრებები', 'Backing every player who pulls on the Georgian shirt — men, women and youth.', 'მხარს ვუჭერთ ყველა მოთამაშეს ეროვნულ ნაკრებში.', 'Meet the Squad', 'ნაკრები', '/national-teams', 2);
