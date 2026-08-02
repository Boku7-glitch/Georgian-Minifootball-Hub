import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Plus, Trash2, Pencil, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/news")({
  ssr: false,
  component: NewsAdmin,
});

type NewsRow = {
  id: string; slug: string; title_en: string; title_ka: string;
  excerpt_en: string | null; excerpt_ka: string | null;
  body_en: string | null; body_ka: string | null;
  category: string | null; image_url: string | null;
  published: boolean; published_at: string;
};

const empty: Partial<NewsRow> = {
  slug: "", title_en: "", title_ka: "", excerpt_en: "", excerpt_ka: "",
  body_en: "", body_ka: "", category: "", image_url: "", published: true,
};

function NewsAdmin() {
  const qc = useQueryClient();
  const [editing, setEditing] = useState<Partial<NewsRow> | null>(null);
  const [uploading, setUploading] = useState(false);

  const { data: rows = [] } = useQuery({
    queryKey: ["admin-news"],
    queryFn: async () => {
      const { data, error } = await supabase.from("news").select("*").order("published_at", { ascending: false });
      if (error) throw error;
      return data as NewsRow[];
    },
  });

  const save = async () => {
    if (!editing) return;
    const payload = {
      slug: editing.slug!, title_en: editing.title_en!, title_ka: editing.title_ka!,
      excerpt_en: editing.excerpt_en, excerpt_ka: editing.excerpt_ka,
      body_en: editing.body_en, body_ka: editing.body_ka,
      category: editing.category, image_url: editing.image_url,
      published: editing.published ?? true,
      published_at: editing.published_at ?? new Date().toISOString(),
    };
    const res = editing.id
      ? await supabase.from("news").update(payload).eq("id", editing.id)
      : await supabase.from("news").insert(payload);
    if (res.error) toast.error(res.error.message);
    else {
      toast.success("Saved");
      setEditing(null);
      qc.invalidateQueries({ queryKey: ["admin-news"] });
      qc.invalidateQueries({ queryKey: ["public-news"] });
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this article?")) return;
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted"); qc.invalidateQueries({ queryKey: ["admin-news"] }); }
  };

  const upload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop();
    const name = `news/${Date.now()}-${Math.random().toString(36).slice(2,8)}.${ext}`;
    const { error } = await supabase.storage.from("media").upload(name, file);
    if (error) { toast.error(error.message); setUploading(false); return; }
    const { data } = supabase.storage.from("media").getPublicUrl(name);
    setEditing((e) => ({ ...(e ?? {}), image_url: data.publicUrl }));
    setUploading(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[color:var(--navy)]">News</h1>
        <Button onClick={() => setEditing({ ...empty })} className="bg-[color:var(--brand-red)]">
          <Plus className="h-4 w-4 mr-1" /> New article
        </Button>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase text-slate-500">
            <tr><th className="p-3">Title (EN)</th><th className="p-3">KA</th><th className="p-3">Category</th><th className="p-3">Date</th><th className="p-3 w-32"></th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t hover:bg-slate-50">
                <td className="p-3 font-medium">{r.title_en}</td>
                <td className="p-3 text-slate-600">{r.title_ka}</td>
                <td className="p-3 text-slate-500">{r.category}</td>
                <td className="p-3 text-slate-500">{new Date(r.published_at).toLocaleDateString()}</td>
                <td className="p-3 text-right">
                  <button onClick={() => setEditing(r)} className="p-1.5 hover:text-[color:var(--brand-red)]"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => remove(r.id)} className="p-1.5 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-slate-400">No articles yet</td></tr>}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b sticky top-0 bg-white">
              <h2 className="text-xl font-bold">{editing.id ? "Edit article" : "New article"}</h2>
            </div>
            <div className="p-6 space-y-4">
              <div><Label>Slug (URL)</Label><Input value={editing.slug ?? ""} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label>Title — English</Label><Input value={editing.title_en ?? ""} onChange={(e) => setEditing({ ...editing, title_en: e.target.value })} /></div>
                <div><Label>Title — ქართული</Label><Input value={editing.title_ka ?? ""} onChange={(e) => setEditing({ ...editing, title_ka: e.target.value })} /></div>
                <div><Label>Excerpt — English</Label><Textarea rows={3} value={editing.excerpt_en ?? ""} onChange={(e) => setEditing({ ...editing, excerpt_en: e.target.value })} /></div>
                <div><Label>Excerpt — ქართული</Label><Textarea rows={3} value={editing.excerpt_ka ?? ""} onChange={(e) => setEditing({ ...editing, excerpt_ka: e.target.value })} /></div>
                <div><Label>Body — English</Label><Textarea rows={6} value={editing.body_en ?? ""} onChange={(e) => setEditing({ ...editing, body_en: e.target.value })} /></div>
                <div><Label>Body — ქართული</Label><Textarea rows={6} value={editing.body_ka ?? ""} onChange={(e) => setEditing({ ...editing, body_ka: e.target.value })} /></div>
                <div><Label>Category</Label><Input value={editing.category ?? ""} onChange={(e) => setEditing({ ...editing, category: e.target.value })} /></div>
                <div><Label>Publish date</Label><Input type="date" value={(editing.published_at ?? "").slice(0,10)} onChange={(e) => setEditing({ ...editing, published_at: new Date(e.target.value).toISOString() })} /></div>
              </div>
              <div>
                <Label>Cover image</Label>
                {editing.image_url && <img src={editing.image_url} alt="" className="mt-2 h-32 rounded-md object-cover" />}
                <label className="mt-2 inline-flex items-center gap-2 cursor-pointer text-sm px-3 py-2 border rounded-md hover:bg-slate-50">
                  <Upload className="h-4 w-4" /> {uploading ? "Uploading…" : "Upload image"}
                  <input type="file" accept="image/*" hidden onChange={(e) => e.target.files && upload(e.target.files[0])} />
                </label>
                <Input className="mt-2" placeholder="or paste URL" value={editing.image_url ?? ""} onChange={(e) => setEditing({ ...editing, image_url: e.target.value })} />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={editing.published ?? true} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} />
                Published
              </label>
            </div>
            <div className="p-6 border-t flex justify-end gap-2 sticky bottom-0 bg-white">
              <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
              <Button onClick={save} className="bg-[color:var(--brand-red)]">Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
