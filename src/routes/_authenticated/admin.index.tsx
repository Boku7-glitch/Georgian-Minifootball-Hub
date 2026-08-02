import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Newspaper, BarChart3, Users, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  ssr: false,
  component: Dashboard,
});

function Dashboard() {
  const { data } = useQuery({
    queryKey: ["admin-counts"],
    queryFn: async () => {
      const [n, s, p, g] = await Promise.all([
        supabase.from("news").select("*", { count: "exact", head: true }),
        supabase.from("standings").select("*", { count: "exact", head: true }),
        supabase.from("player_stats").select("*", { count: "exact", head: true }),
        supabase.from("gallery").select("*", { count: "exact", head: true }),
      ]);
      return { news: n.count ?? 0, standings: s.count ?? 0, players: p.count ?? 0, gallery: g.count ?? 0 };
    },
  });

  const cards = [
    { label: "News articles", value: data?.news, icon: Newspaper, color: "bg-red-500" },
    { label: "Standings rows", value: data?.standings, icon: BarChart3, color: "bg-blue-600" },
    { label: "Player stats", value: data?.players, icon: Users, color: "bg-emerald-600" },
    { label: "Gallery photos", value: data?.gallery, icon: ImageIcon, color: "bg-amber-500" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-[color:var(--navy)]">Dashboard</h1>
      <p className="mt-1 text-slate-600">Welcome to the GMF content management area.</p>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="bg-white rounded-xl shadow-sm p-5">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-white ${c.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-3xl font-bold text-[color:var(--navy)]">{c.value ?? "—"}</div>
              <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">{c.label}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-bold text-[color:var(--navy)]">Quick tips</h2>
        <ul className="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-1">
          <li>All content fields support both English (EN) and Georgian (KA).</li>
          <li>News images can be uploaded directly — they are served from your secure storage.</li>
          <li>Standings & stats edits go live on the Super League page immediately.</li>
        </ul>
      </div>
    </div>
  );
}
