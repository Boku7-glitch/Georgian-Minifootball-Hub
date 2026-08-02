import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import { miniFootballLogo } from "@/assets/logos";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/national-teams", key: "nav.teams" },
  { to: "/super-league", key: "nav.league" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[color:var(--navy)]/95 backdrop-blur-md shadow-elevated"
          : "bg-[color:var(--navy)]/70 backdrop-blur"
      )}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={miniFootballLogo}
            alt="GMF Logo"
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/85 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {t(item.key)}
                  <span
                    className={cn(
                      "absolute left-3 right-3 -bottom-0.5 h-0.5 bg-[color:var(--brand-red)] rounded-full transition-transform origin-left",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-full bg-white/10 p-1">
            {(["ka", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1 text-xs font-bold uppercase rounded-full transition",
                  lang === l ? "bg-[color:var(--brand-red)] text-white shadow-red" : "text-white/70 hover:text-white"
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-[color:var(--brand-red)] transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[color:var(--brand-red)] transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[color:var(--brand-red)] transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("lg:hidden overflow-hidden transition-all duration-300 bg-[color:var(--navy)]", open ? "max-h-[500px]" : "max-h-0")}>
        <nav className="container-x py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-white font-semibold uppercase text-sm rounded-md hover:bg-white/10"
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="flex items-center gap-1 mt-2 self-start rounded-full bg-white/10 p-1">
            {(["ka", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-3 py-1 text-xs font-bold uppercase rounded-full",
                  lang === l ? "bg-[color:var(--brand-red)] text-white" : "text-white/70"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}