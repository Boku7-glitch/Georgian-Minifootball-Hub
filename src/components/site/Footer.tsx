import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/gmf-logo.svg.asset.json";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] text-white/80 mt-24">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo.url} alt="GMF" className="h-16 brightness-0 invert mb-4" />
          <p className="text-sm leading-relaxed">
            Georgian Minifootball Federation — the official governing body for minifootball in Georgia.
          </p>
        </div>

        <div>
          <h4 className="text-white font-display text-xl mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[color:var(--brand-red)] transition">Home</Link></li>
            <li><Link to="/national-teams" className="hover:text-[color:var(--brand-red)] transition">National Teams</Link></li>
            <li><Link to="/super-league" className="hover:text-[color:var(--brand-red)] transition">Super League</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--brand-red)] transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--brand-red)] transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-xl mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--brand-red)]" /> 76 Chavchavadze Ave, Tbilisi, Georgia</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-[color:var(--brand-red)]" /> +995 32 2 00 00 00</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[color:var(--brand-red)]" /> info@gmf.ge</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-xl mb-4 uppercase tracking-wider">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 hover:bg-[color:var(--brand-red)] flex items-center justify-center transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/10 hover:bg-[color:var(--brand-red)] flex items-center justify-center transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="h-10 w-10 rounded-full bg-white/10 hover:bg-[color:var(--brand-red)] flex items-center justify-center transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Georgian Minifootball Federation. All Rights Reserved.</p>
          <p>Built with passion for the beautiful game.</p>
        </div>
      </div>
    </footer>
  );
}
