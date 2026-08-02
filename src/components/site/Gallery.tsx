import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/mock";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[color:var(--secondary)] py-20 md:py-28">
      <div className="container-x">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--brand-red)] mb-2">Photos</p>
            <h2 className="section-title font-display text-4xl md:text-5xl uppercase">Gallery</h2>
          </div>
          <button className="text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-md bg-[color:var(--navy)] text-white hover:bg-[color:var(--brand-red)] transition">
            View All Photos
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={cn(
                "group relative overflow-hidden rounded-xl",
                g.h === "tall" ? "row-span-2" : "row-span-1",
                i === 0 && "col-span-2"
              )}
            >
              <img src={g.src} alt={g.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {g.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in-up" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setOpen(null)}><X /></button>
          <button
            className="absolute left-4 md:left-10 text-white/80 hover:text-white h-12 w-12 rounded-full bg-white/10 flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + gallery.length) % gallery.length); }}
          ><ChevronLeft /></button>
          <button
            className="absolute right-4 md:right-10 text-white/80 hover:text-white h-12 w-12 rounded-full bg-white/10 flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % gallery.length); }}
          ><ChevronRight /></button>
          <img
            src={gallery[open].src}
            alt={gallery[open].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
