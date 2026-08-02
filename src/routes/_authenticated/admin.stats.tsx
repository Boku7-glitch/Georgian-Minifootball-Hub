import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Save, Trash2, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/stats")({
  ssr: false,
  component: StatsAdmin,
});

type Row = { id: string; kind: "scorer"|"assist"|"yellow"|"red"; pos: number; name: string; team: string; value: number; matches: number };

const KINDS = [
  { v: "scorer", label: "Top Scorers" },
  { v: "assist", label: "Top Assists" },
  { v: "yellow", label: "Yellow Cards" },
  { v: "red", label: "Red Cards" },
] as const;

function StatsAdmin() {
  const qc = useQueryClient();
  const [kind, setKind] = useState<Row["kind"]>("scorer");
  const { data = [] } = useQuery({
    queryKey: ["admin-stats", kind],
    queryFn: async () => {
      const { data, error } = await supabase.from("player_stats").select("*").eq("kind", kind).order("pos");
      if (error) throw error;
      return data as Row[];
    },
  });
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => setRows(data), [data]);

  const update = (id: string, patch: Partial<Row>) => setRows(rows.map((r) => r.id === id ? { ...r, ...patch } : r));

  const saveAll = async () => {
    for (const r of rows) {
      const { id, ...rest } = r;
      await supabase.from("player_stats").update(rest).eq("id", id);
    }
    toast.success("Saved");
    qc.invalidateQueries({ queryKey: ["admin-stats"] });
    qc.invalidateQueries({ queryKey: ["public-stats"] });
  };

  const addRow = async () => {
    await supabase.from("player_stats").insert({ kind, pos: rows.length + 1, name: "New player", team: "—", value: 0, matches: 0 });
    qc.invalidateQueries({ queryKey: ["admin-stats", kind] });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete?")) return;
    await supabase.from("player_stats").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin-stats", kind] });
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-[color:var(--navy)]">Player Statistics</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={addRow}><Plus className="h-4 w-4 mr-1" /> Add</Button>
          <Button onClick={saveAll} className="bg-[color:var(--brand-red)]"><Save className="h-4 w-4 mr-1" /> Save</Button>
        </div>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        {KINDS.map((k) => (
          <button key={k.v} onClick={() => setKind(k.v)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${kind === k.v ? "bg-[color:var(--navy)] text-white" : "bg-white border"}`}>
            {k.label}
          </button>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>{["#","Player","Team","Value","Matches",""].map((h) => <th key={h} className="p-2 text-left">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-1"><Input type="number" className="w-14" value={r.pos} onChange={(e) => update(r.id, { pos: +e.target.value })} /></td>
                <td className="p-1"><Input value={r.name} onChange={(e) => update(r.id, { name: e.target.value })} /></td>
                <td className="p-1"><Input value={r.team} onChange={(e) => update(r.id, { team: e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-20" value={r.value} onChange={(e) => update(r.id, { value: +e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-20" value={r.matches} onChange={(e) => update(r.id, { matches: +e.target.value })} /></td>
                <td className="p-1"><button onClick={() => remove(r.id)} className="text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
