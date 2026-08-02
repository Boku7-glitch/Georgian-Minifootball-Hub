import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Upload, Trash2, Plus, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/banners")({
  ssr: false,
  component: BannersAdmin,
});

type Row = {
  id: string;
  image_url: string;
  eyebrow_en: string | null;
  eyebrow_ka: string | null;
  title_en: string;
  title_ka: string | null;
  subtitle_en: string | null;
  subtitle_ka: string | null;
  cta_label_en: string | null;
  cta_label_ka: string | null;
  cta_to: string | null;
  sort_order: number;
  is_active: boolean;
};

function BannersAdmin() {
  const qc = useQueryClient();
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  const { data = [] } = useQuery({
    queryKey: ["admin-banners"],
    queryFn: async () => {
      const { data, error } = await supabase.from("banners").select("*").order("sort_order");
      if (error) throw error;
      return data as Row[];
    },
  });

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["admin-banners"] });
    qc.invalidateQueries({ queryKey: ["banners"] });
  };

  const addBanner = async () => {
    const { error } = await supabase.from("banners").insert({
      title_en: "New banner",
      cta_to: "/about",
      sort_order: data.length,
      image_url: "",
    });
    if (error) toast.error(error.message);
    else invalidate();
  };

  const update = async (id: string, patch: Partial<Row>) => {
    const { error } = await supabase.from("banners").update(patch).eq("id", id);
    if (error) toast.error(error.message);
    else invalidate();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this banner?")) return;
    const { error } = await supabase.from("banners").delete().eq("id", id);
    if (error) toast.error(error.message);
    else invalidate();
  };

  const uploadImage = async (id: string, file: File) => {
    setUploadingId(id);
    const ext = file.name.split(".").pop();
    const name = `banners/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error: uErr } = await supabase.storage.from("media").upload(name, file);
    if (uErr) {
      toast.error(uErr.message);
      setUploadingId(null);
      return;
    }
    const { data: pub } = supabase.storage.from("media").getPublicUrl(name);
    await update(id, { image_url: pub.publicUrl });
    setUploadingId(null);
    toast.success("Image uploaded");
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold text-[color:var(--navy)]">Home Banners</h1>
          <p className="text-sm text-slate-500 mt-1">Hero slider on the home page. Empty list = built-in defaults are shown.</p>
        </div>
        <Button onClick={addBanner} className="bg-[color:var(--brand-red)]">
          <Plus className="h-4 w-4 mr-1" /> Add banner
        </Button>
      </div>

      <div className="mt-6 space-y-4">
        {data.map((b) => (
          <BannerCard
            key={b.id}
            row={b}
            uploading={uploadingId === b.id}
            onUpload={(f) => uploadImage(b.id, f)}
            onSave={(patch) => update(b.id, patch)}
            onRemove={() => remove(b.id)}
          />
        ))}
        {data.length === 0 && (
          <div className="text-center py-16 text-slate-400 bg-white rounded-xl">
            No custom banners — built-in defaults are showing on the home page. Click "Add banner" to start.
          </div>
        )}
      </div>
    </div>
  );
}

function BannerCard({
  row,
  uploading,
  onUpload,
  onSave,
  onRemove,
}: {
  row: Row;
  uploading: boolean;
  onUpload: (f: File) => void;
  onSave: (patch: Partial<Row>) => void;
  onRemove: () => void;
}) {
  const [draft, setDraft] = useState<Row>(row);
  const set = (patch: Partial<Row>) => setDraft({ ...draft, ...patch });

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="grid md:grid-cols-[200px_1fr] gap-5">
        <div>
          <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
            {draft.image_url ? (
              <img src={draft.image_url} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-slate-400">No image</span>
            )}
          </div>
          <label className="mt-2 cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold w-full justify-center">
            <Upload className="h-3.5 w-3.5" /> {uploading ? "Uploading…" : "Upload image"}
            <input type="file" accept="image/*" hidden onChange={(e) => e.target.files && onUpload(e.target.files[0])} />
          </label>
        </div>

        <div className="space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <Label>Eyebrow EN</Label>
              <Input value={draft.eyebrow_en ?? ""} onChange={(e) => set({ eyebrow_en: e.target.value })} />
            </div>
            <div>
              <Label>Eyebrow KA</Label>
              <Input value={draft.eyebrow_ka ?? ""} onChange={(e) => set({ eyebrow_ka: e.target.value })} />
            </div>
            <div>
              <Label>Title EN *</Label>
              <Input value={draft.title_en} onChange={(e) => set({ title_en: e.target.value })} />
            </div>
            <div>
              <Label>Title KA</Label>
              <Input value={draft.title_ka ?? ""} onChange={(e) => set({ title_ka: e.target.value })} />
            </div>
            <div>
              <Label>Subtitle EN</Label>
              <Textarea rows={2} value={draft.subtitle_en ?? ""} onChange={(e) => set({ subtitle_en: e.target.value })} />
            </div>
            <div>
              <Label>Subtitle KA</Label>
              <Textarea rows={2} value={draft.subtitle_ka ?? ""} onChange={(e) => set({ subtitle_ka: e.target.value })} />
            </div>
            <div>
              <Label>CTA label EN</Label>
              <Input value={draft.cta_label_en ?? ""} onChange={(e) => set({ cta_label_en: e.target.value })} />
            </div>
            <div>
              <Label>CTA label KA</Label>
              <Input value={draft.cta_label_ka ?? ""} onChange={(e) => set({ cta_label_ka: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <Label>CTA link (e.g. /about, /super-league)</Label>
              <Input value={draft.cta_to ?? ""} onChange={(e) => set({ cta_to: e.target.value })} />
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch checked={draft.is_active} onCheckedChange={(v) => set({ is_active: v })} />
                <span className="text-sm">{draft.is_active ? "Active" : "Hidden"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Label className="text-xs">Order</Label>
                <Input
                  type="number"
                  className="w-20"
                  value={draft.sort_order}
                  onChange={(e) => set({ sort_order: +e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onRemove}>
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button size="sm" onClick={() => onSave(draft)}>
                <Save className="h-4 w-4 mr-1" /> Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
