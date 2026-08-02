import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useIsAdmin() {
  return useQuery({
    queryKey: ["my-roles"],
    queryFn: async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return { isAdmin: false, isEditor: false, userId: null as string | null, email: null as string | null };
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id);
      const roles = (data ?? []).map((r) => r.role);
      // Bootstrap: if no admin exists yet, first signed-in user becomes admin
      if (roles.length === 0) {
        const { count } = await supabase.from("user_roles").select("*", { count: "exact", head: true }).eq("role", "admin");
        if ((count ?? 0) === 0) {
          await supabase.from("user_roles").insert({ user_id: u.user.id, role: "admin" });
          roles.push("admin");
        }
      }
      return {
        isAdmin: roles.includes("admin"),
        isEditor: roles.includes("admin") || roles.includes("editor"),
        userId: u.user.id,
        email: u.user.email ?? null,
      };
    },
  });
}
