import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Save, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/pages")({
  ssr: false,
  component: PagesAdmin,
});

type Row = { id: string; key: string; title_en: string | null; title_ka: string | null; body_en: string | null; body_ka: string | null };

function PagesAdmin() {
  const qc = useQueryClient();
  const { data = [] } = useQuery({
    queryKey: ["admin-pages"],
    queryFn: async () => {
      const { data, error } = await supabase.from("page_content").select("*").order("key");
      if (error) throw error;
      return data as Row[];
    },
  });
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => setRows(data), [data]);

  const update = (id: string, patch: Partial<Row>) => setRows(rows.map((r) => r.id === id ? { ...r, ...patch } : r));

  const saveOne = async (r: Row) => {
    const { id, ...rest } = r;
    const { error } = await supabase.from("page_content").update(rest).eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success(`Saved: ${r.key}`); qc.invalidateQueries({ queryKey: ["public-page", r.key] }); }
  };

  const addBlock = async () => {
    const key = prompt("Block key (e.g. about.history)");
    if (!key) return;
    await supabase.from("page_content").insert({ key, title_en: "", title_ka: "", body_en: "", body_ka: "" });
    qc.invalidateQueries({ queryKey: ["admin-pages"] });
  };

  const remove = async (id: string, key: string) => {
    if (!confirm(`Delete block "${key}"?`)) return;
    await supabase.from("page_content").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin-pages"] });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[color:var(--navy)]">Page Content</h1>
        <Button onClick={addBlock} className="bg-[color:var(--brand-red)]"><Plus className="h-4 w-4 mr-1" /> Add block</Button>
      </div>

      <div className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.id} className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <code className="text-xs bg-slate-100 px-2 py-1 rounded font-mono">{r.key}</code>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => saveOne(r)}><Save className="h-4 w-4 mr-1" /> Save</Button>
                <Button size="sm" variant="outline" onClick={() => remove(r.id, r.key)}><Trash2 className="h-4 w-4" /></Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div><Label>Title EN</Label><Input value={r.title_en ?? ""} onChange={(e) => update(r.id, { title_en: e.target.value })} /></div>
              <div><Label>Title KA</Label><Input value={r.title_ka ?? ""} onChange={(e) => update(r.id, { title_ka: e.target.value })} /></div>
              <div><Label>Body EN</Label><Textarea rows={4} value={r.body_en ?? ""} onChange={(e) => update(r.id, { body_en: e.target.value })} /></div>
              <div><Label>Body KA</Label><Textarea rows={4} value={r.body_ka ?? ""} onChange={(e) => update(r.id, { body_ka: e.target.value })} /></div>
            </div>
          </div>
        ))}
        {rows.length === 0 && <div className="text-center py-12 text-slate-400">No content blocks</div>}
      </div>
    </div>
  );
}
