import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Upload, Trash2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/gallery")({
  ssr: false,
  component: GalleryAdmin,
});

type Row = { id: string; image_url: string; alt_en: string | null; alt_ka: string | null; size: string; sort_order: number };

function GalleryAdmin() {
  const qc = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const { data = [] } = useQuery({
    queryKey: ["admin-gallery"],
    queryFn: async () => {
      const { data, error } = await supabase.from("gallery").select("*").order("sort_order");
      if (error) throw error;
      return data as Row[];
    },
  });

  const upload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop();
    const name = `gallery/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;
    const { error: uErr } = await supabase.storage.from("media").upload(name, file);
    if (uErr) { toast.error(uErr.message); setUploading(false); return; }
    const { data: pub } = supabase.storage.from("media").getPublicUrl(name);
    await supabase.from("gallery").insert({ image_url: pub.publicUrl, sort_order: data.length, size: "short" });
    setUploading(false);
    qc.invalidateQueries({ queryKey: ["admin-gallery"] });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete photo?")) return;
    await supabase.from("gallery").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin-gallery"] });
  };

  const update = async (id: string, patch: Partial<Row>) => {
    await supabase.from("gallery").update(patch).eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin-gallery"] });
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-[color:var(--navy)]">Gallery</h1>
        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[color:var(--brand-red)] text-white text-sm font-semibold">
          <Upload className="h-4 w-4" /> {uploading ? "Uploading…" : "Upload photo"}
          <input type="file" accept="image/*" hidden onChange={(e) => e.target.files && upload(e.target.files[0])} />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((g) => (
          <div key={g.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img src={g.image_url} alt={g.alt_en ?? ""} className="aspect-video w-full object-cover" />
            <div className="p-3 space-y-2">
              <Input placeholder="Alt EN" defaultValue={g.alt_en ?? ""} onBlur={(e) => update(g.id, { alt_en: e.target.value })} />
              <Input placeholder="Alt KA" defaultValue={g.alt_ka ?? ""} onBlur={(e) => update(g.id, { alt_ka: e.target.value })} />
              <div className="flex gap-2">
                <select value={g.size} onChange={(e) => update(g.id, { size: e.target.value })} className="text-xs border rounded px-2 py-1 flex-1">
                  <option value="short">Short</option><option value="tall">Tall</option>
                </select>
                <Input type="number" className="w-20" defaultValue={g.sort_order} onBlur={(e) => update(g.id, { sort_order: +e.target.value })} />
                <Button variant="outline" size="sm" onClick={() => remove(g.id)}><Trash2 className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        ))}
        {data.length === 0 && <div className="col-span-full text-center py-12 text-slate-400">No photos yet</div>}
      </div>
    </div>
  );
}
