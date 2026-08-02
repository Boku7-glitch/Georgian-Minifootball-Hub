import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Save, Trash2, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/standings")({
  ssr: false,
  component: StandingsAdmin,
});

type Row = {
  id: string; pos: number; club: string; short_code: string; color: string;
  played: number; w: number; d: number; l: number; gf: number; ga: number; pts: number;
};

function StandingsAdmin() {
  const qc = useQueryClient();
  const { data = [] } = useQuery({
    queryKey: ["admin-standings"],
    queryFn: async () => {
      const { data, error } = await supabase.from("standings").select("*").order("pos");
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
      await supabase.from("standings").update(rest).eq("id", id);
    }
    toast.success("Standings saved");
    qc.invalidateQueries({ queryKey: ["admin-standings"] });
    qc.invalidateQueries({ queryKey: ["public-standings"] });
  };

  const addRow = async () => {
    const { error } = await supabase.from("standings").insert({ pos: rows.length + 1, club: "New club", short_code: "NEW", color: "#0B1F3A" });
    if (error) toast.error(error.message);
    else qc.invalidateQueries({ queryKey: ["admin-standings"] });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this row?")) return;
    await supabase.from("standings").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin-standings"] });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[color:var(--navy)]">Super League Standings</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={addRow}><Plus className="h-4 w-4 mr-1" /> Add</Button>
          <Button onClick={saveAll} className="bg-[color:var(--brand-red)]"><Save className="h-4 w-4 mr-1" /> Save all</Button>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              {["#","Club","Code","Color","P","W","D","L","GF","GA","Pts",""].map((h) => <th key={h} className="p-2 text-left font-medium">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-1"><Input type="number" className="w-14" value={r.pos} onChange={(e) => update(r.id, { pos: +e.target.value })} /></td>
                <td className="p-1"><Input value={r.club} onChange={(e) => update(r.id, { club: e.target.value })} /></td>
                <td className="p-1"><Input className="w-16" value={r.short_code} onChange={(e) => update(r.id, { short_code: e.target.value })} /></td>
                <td className="p-1"><Input type="color" className="w-14 p-1" value={r.color} onChange={(e) => update(r.id, { color: e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-14" value={r.played} onChange={(e) => update(r.id, { played: +e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-14" value={r.w} onChange={(e) => update(r.id, { w: +e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-14" value={r.d} onChange={(e) => update(r.id, { d: +e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-14" value={r.l} onChange={(e) => update(r.id, { l: +e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-14" value={r.gf} onChange={(e) => update(r.id, { gf: +e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-14" value={r.ga} onChange={(e) => update(r.id, { ga: +e.target.value })} /></td>
                <td className="p-1"><Input type="number" className="w-14" value={r.pts} onChange={(e) => update(r.id, { pts: +e.target.value })} /></td>
                <td className="p-1"><button onClick={() => remove(r.id)} className="text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
