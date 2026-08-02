import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { LogOut, Newspaper, BarChart3, Users, Image as ImageIcon, FileText, LayoutDashboard, Layers } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/lib/admin/useRole";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/admin")({
  ssr: false,
  head: () => ({ meta: [{ title: "Admin — GMF" }, { name: "robots", content: "noindex" }] }),
  component: AdminLayout,
});

const tabs: { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean }[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/banners", label: "Home Banners", icon: Layers },
  { to: "/admin/news", label: "News", icon: Newspaper },
  { to: "/admin/standings", label: "Standings", icon: BarChart3 },
  { to: "/admin/stats", label: "Player Stats", icon: Users },
  { to: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  { to: "/admin/pages", label: "Page Content", icon: FileText },
];

function AdminLayout() {
  const { data, isLoading } = useIsAdmin();
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!isLoading && data && !data.isAdmin && !data.isEditor) {
      // logged in but no role
    }
  }, [isLoading, data]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center pt-20">Loading…</div>;
  }

  if (!data?.isAdmin && !data?.isEditor) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="max-w-md text-center bg-white rounded-xl shadow p-8">
          <h2 className="text-xl font-bold text-[color:var(--navy)]">No access</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your account ({data?.email}) has no admin/editor role. Ask the administrator to grant it.
          </p>
          <button onClick={signOut} className="mt-4 text-sm text-[color:var(--brand-red)] font-semibold">Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-slate-50">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-60 shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <div className="px-2 pb-3 border-b">
                <div className="text-xs uppercase tracking-wider text-slate-400">Signed in</div>
                <div className="text-sm font-semibold text-[color:var(--navy)] truncate">{data.email}</div>
                <div className="text-[10px] uppercase mt-1 inline-block px-2 py-0.5 rounded bg-[color:var(--brand-red)] text-white">
                  {data.isAdmin ? "admin" : "editor"}
                </div>
              </div>
              <nav className="mt-3 flex flex-col gap-1">
                {tabs.map((t) => {
                  const Icon = t.icon;
                  const active = t.exact ? path === t.to : path.startsWith(t.to);
                  return (
                    <Link
                      key={t.to}
                      to={t.to as "/admin"}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition",
                        active ? "bg-[color:var(--navy)] text-white" : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      <Icon className="h-4 w-4" /> {t.label}
                    </Link>
                  );
                })}
              </nav>
              <button onClick={signOut} className="mt-4 w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-100">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </div>
          </aside>
          <main className="flex-1 min-w-0 pb-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
