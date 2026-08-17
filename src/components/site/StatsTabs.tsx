import { useMemo, useState } from "react";
import { Search, ChevronUp, ChevronDown, Trophy, BarChart3, Calendar, History, Target, Award, AlertTriangle, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { standings, playerStats, matchResults, type Standing, type PlayerStat, type MatchResult } from "@/data/mock";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { ScheduleCalendar } from "./ScheduleCalendar";

type MainTab = "standings" | "statistics" | "calendars" | "results";
type StatSubTab = "scorers" | "assists" | "yellow" | "red";

const mainTabs: { key: MainTab; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "standings", labelKey: "tab.standings", icon: Trophy },
  { key: "statistics", labelKey: "tab.statistics", icon: BarChart3 },
  { key: "calendars", labelKey: "tab.calendars", icon: Calendar },
  { key: "results", labelKey: "tab.results", icon: History },
];

const statSubTabs: { key: StatSubTab; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "scorers", labelKey: "stat.scorers", icon: Target },
  { key: "assists", labelKey: "stat.assists", icon: Award },
  { key: "yellow", labelKey: "stat.yellowCards", icon: AlertTriangle },
  { key: "red", labelKey: "stat.redCards", icon: AlertTriangle },
];

export function StatsTabs() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<MainTab>("standings");
  const [activeStatTab, setActiveStatTab] = useState<StatSubTab>("scorers");

  const getTeamLogo = (teamName: string) => {
    const standing = standings.find(
      s => s.club.toLowerCase() === teamName.toLowerCase() ||
        s.short.toLowerCase() === teamName.toLowerCase()
    );
    return standing?.logo;
  };

  const currentStatData = useMemo(() => {
    let field: keyof Pick<PlayerStat, "goals" | "assists" | "yellowCards" | "redCards"> = "goals";
    let accent: "yellow" | "red" | undefined = undefined;
    let valueLabel = t("stat.goals");

    if (activeStatTab === "scorers") {
      field = "goals";
      valueLabel = t("stat.goals");
    } else if (activeStatTab === "assists") {
      field = "assists";
      valueLabel = t("stat.assistsLabel");
    } else if (activeStatTab === "yellow") {
      field = "yellowCards";
      valueLabel = t("stat.yellowLabel");
      accent = "yellow";
    } else if (activeStatTab === "red") {
      field = "redCards";
      valueLabel = t("stat.redLabel");
      accent = "red";
    }

    const sorted = [...playerStats]
      .filter((player) => player[field] > 0)
      .sort((a, b) => b[field] - a[field]);

    return {
      rows: sorted.map((player, index) => ({
        ...player,
        pos: index + 1,
        value: player[field],
        logo: getTeamLogo(player.team),
      })),
      valueLabel,
      accent,
    };
  }, [activeStatTab, t]);

  return (
    <section className="container-x py-12 md:py-16">
      <div className="rounded-2xl bg-card shadow-card overflow-hidden">
        <div className="bg-[color:var(--navy)] overflow-x-auto">
          <div className="flex w-full justify-center min-w-max">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative px-6 md:px-8 py-5 text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2",
                    active ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t(tab.labelKey)}
                  <span
                    className={cn(
                      "absolute left-0 right-0 bottom-0 h-1 bg-[color:var(--brand-red)] transition-transform origin-left",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-4 md:p-6 animate-fade-in-up" key={activeTab}>

          {/* STANDINGS */}
          {activeTab === "standings" && <StandingsTable rows={standings} />}

          {/* STATISTICS */}
          {activeTab === "statistics" && (
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-2">
                {statSubTabs.map((sub) => {
                  const Icon = sub.icon;
                  const isActive = activeStatTab === sub.key;
                  return (
                    <button
                      key={sub.key}
                      onClick={() => setActiveStatTab(sub.key)}
                      className={cn(
                        "px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2",
                        isActive
                          ? "bg-[color:var(--navy)] text-white"
                          : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {t(sub.labelKey)}
                    </button>
                  );
                })}
              </div>

              <div className="animate-fade-in-up" key={activeStatTab}>
                <PlayerTable
                  rows={currentStatData.rows}
                  valueLabel={currentStatData.valueLabel}
                  accent={currentStatData.accent}
                  activeStatTab={activeStatTab}
                />
              </div>
            </div>
          )}

          {/* CALENDARS */}
          {activeTab === "calendars" && (
            <div className="animate-fade-in-up">
              <ScheduleCalendar />
            </div>
          )}

          {/* RESULTS */}
          {activeTab === "results" && <ResultsView matches={matchResults} getTeamLogo={getTeamLogo} />}

        </div>
      </div>
    </section>
  );
}

{/* RESULTS VIEW COMPONENT */}
function ResultsView({
                       matches,
                       getTeamLogo,
                     }: {
  matches: MatchResult[];
  getTeamLogo: (name: string) => string | undefined;
}) {
  const { t } = useLang();
  const rounds = Array.from(new Set(matches.map((m) => m.round))).sort((a, b) => b - a);
  const [selectedRound, setSelectedRound] = useState<number | "all">("all");

  const filtered = selectedRound === "all"
    ? matches
    : matches.filter((m) => m.round === selectedRound);

  return (
    <div className="space-y-6">
      {/* Round Filter */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-4">
        <button
          onClick={() => setSelectedRound("all")}
          className={cn(
            "px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors",
            selectedRound === "all"
              ? "bg-[color:var(--navy)] text-white"
              : "bg-secondary text-muted-foreground hover:bg-secondary/80"
          )}
        >
          {t("results.allRounds")}
        </button>
        {rounds.map((r) => (
          <button
            key={r}
            onClick={() => setSelectedRound(r)}
            className={cn(
              "px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors",
              selectedRound === r
                ? "bg-[color:var(--navy)] text-white"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            )}
          >
            {t("results.round")} {r}
          </button>
        ))}
      </div>

      {/* Match Cards List */}
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((m) => {
          const homeLogo = getTeamLogo(m.homeTeam);
          const awayLogo = getTeamLogo(m.awayTeam);

          return (
            <div
              key={m.id}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-card shadow-sm hover:border-[color:var(--navy)]/40 transition-all"
            >
              {/* Home Team */}
              <div className="flex items-center gap-3 flex-1 justify-end text-right">
                <span className="font-bold text-sm text-foreground">{m.homeTeam}</span>
                {homeLogo ? (
                  <img src={homeLogo} alt={m.homeTeam} className="h-7 w-7 object-contain shrink-0" />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-secondary text-[10px] font-bold flex items-center justify-center shrink-0">
                    {m.homeTeam.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Score Display */}
              <div className="mx-4 flex flex-col items-center shrink-0">
                <div className="px-3.5 py-1 rounded-lg bg-[color:var(--navy)] text-white font-black text-base tracking-wider shadow-sm">
                  {m.homeScore} - {m.awayScore}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  {t("results.round")} {m.round}
                </span>
              </div>

              {/* Away Team */}
              <div className="flex items-center gap-3 flex-1 text-left">
                {awayLogo ? (
                  <img src={awayLogo} alt={m.awayTeam} className="h-7 w-7 object-contain shrink-0" />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-secondary text-[10px] font-bold flex items-center justify-center shrink-0">
                    {m.awayTeam.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <span className="font-bold text-sm text-foreground">{m.awayTeam}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type SortKey = keyof Standing;

function StandingsTable({ rows }: { rows: Standing[] }) {
  const { t } = useLang();
  const [sortKey, setSortKey] = useState<SortKey>("pts");
  const [dir, setDir] = useState<"asc" | "desc">("desc");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const f = rows.filter((r) => r.club.toLowerCase().includes(q.toLowerCase()));
    return [...f].sort((a, b) => {
      const av = a[sortKey] as number | string;
      const bv = b[sortKey] as number | string;
      if (av === bv) return 0;
      return (av < bv ? -1 : 1) * (dir === "asc" ? 1 : -1);
    });
  }, [rows, sortKey, dir, q]);

  const toggle = (k: SortKey) => {
    if (sortKey === k) setDir(dir === "asc" ? "desc" : "asc");
    else { setSortKey(k); setDir("desc"); }
  };

  const Th = ({ k, label, num = false }: { k: SortKey; label: string; num?: boolean }) => (
    <th
      onClick={() => toggle(k)}
      className={cn(
        "px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground cursor-pointer select-none hover:text-[color:var(--navy)]",
        num ? "text-center" : "text-left"
      )}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        {sortKey === k ? (dir === "asc" ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />) : null}
      </span>
    </th>
  );

  return (
    <>
      <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
        <h3 className="font-display text-2xl uppercase">{t("standings.title")}</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("standings.search")}
            className="pl-9 pr-4 py-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-red)]"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="border-b-2 border-[color:var(--navy)]">
          <tr>
            <Th k="pos" label="#" />
            <th className="px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-left">Club</th>
            <Th k="played" label="P" num />
            <Th k="w" label="W" num />
            <Th k="d" label="D" num />
            <Th k="l" label="L" num />
            <Th k="gf" label="GF" num />
            <Th k="ga" label="GA" num />
            <th className="px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-center">GD</th>
            <Th k="pts" label="Pts" num />
          </tr>
          </thead>
          <tbody>
          {filtered.map((r) => {
            let zoneColor = "border-l-transparent";

            if (r.pos === 1 || r.pos === 2) {
              zoneColor = "border-l-emerald-500";
            } else if (r.pos >= 3 && r.pos <= 6) {
              zoneColor = "border-l-sky-500";
            } else if (r.pos === 7) {
              zoneColor = "border-l-transparent";
            } else if (r.pos === 8 || r.pos === 9) {
              zoneColor = "border-l-amber-400";
            } else if (r.pos === 10) {
              zoneColor = "border-l-red-500";
            }

            return (
              <tr
                key={r.short}
                className={cn(
                  "border-b border-border hover:bg-[color:var(--secondary)] transition-colors group border-l-4",
                  zoneColor
                )}
              >
                <td className="px-4 py-3 text-sm font-bold text-foreground">
                  {r.pos}.
                </td>
                <td className="px-3 py-3">
                  <Link
                    to="/teams/$teamId"
                    params={{ teamId: r.club.toLowerCase().replace(/\s+/g, "-") }}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    {r.logo ? (
                      <img src={r.logo} alt={r.club} className="h-7 w-7 object-contain shrink-0" />
                    ) : (
                      <span
                        className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                        style={{ background: r.color }}
                      >
                        {r.short}
                      </span>
                    )}
                    <span className="font-semibold hover:underline group-hover:text-[color:var(--brand-red)] transition-colors">{r.club}</span>
                  </Link>
                </td>
                <td className="px-3 py-3 text-center">{r.played}</td>
                <td className="px-3 py-3 text-center">{r.w}</td>
                <td className="px-3 py-3 text-center">{r.d}</td>
                <td className="px-3 py-3 text-center">{r.l}</td>
                <td className="px-3 py-3 text-center">{r.gf}</td>
                <td className="px-3 py-3 text-center">{r.ga}</td>
                <td className="px-3 py-3 text-center font-medium">{r.gf - r.ga > 0 ? `+${r.gf - r.ga}` : r.gf - r.ga}</td>
                <td className="px-3 py-3 text-center font-bold text-[color:var(--navy)]">{r.pts}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-5 mt-4 text-xs text-muted-foreground font-medium">
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-emerald-500" /> {t("standings.pos12")}</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-sky-500" /> {t("standings.pos36")}</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-amber-400" /> {t("standings.pos89")}</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-red-500" /> {t("standings.pos10")}</span>
      </div>
    </>
  );
}

interface PlayerRowItem extends PlayerStat {
  pos: number;
  value: number;
  logo?: string;
}

function PlayerTable({
                       rows,
                       valueLabel,
                       accent,
                       activeStatTab,
                     }: {
  rows: PlayerRowItem[];
  valueLabel: string;
  accent?: "yellow" | "red";
  activeStatTab: StatSubTab;
}) {
  const { t } = useLang();

  if (rows.length === 0) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        <ShieldCheck className="h-12 w-12 mx-auto mb-3 opacity-30 text-[color:var(--navy)]" />
        <h4 className="text-base font-bold text-foreground mb-1">
          {activeStatTab === "red"
            ? t("stat.noRedCards")
            : t("stat.noData")}
        </h4>
        <p className="text-xs text-muted-foreground">
          {activeStatTab === "red" ? t("stat.cleanRecord") : ""}
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="border-b-2 border-[color:var(--navy)]">
        <tr>
          <th className="px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-left">#</th>
          <th className="px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-left">Player</th>
          <th className="px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-center">{valueLabel}</th>
        </tr>
        </thead>
        <tbody>
        {rows.map((r) => {
          const initials = r.name.split(" ").map((s) => s[0]).slice(0, 2).join("");
          return (
            <tr key={`${r.id}-${r.name}`} className="border-b border-border hover:bg-[color:var(--secondary)] transition-colors">
              <td className="px-4 py-3 text-sm font-bold text-foreground">
                {r.pos}.
              </td>
              <td className="px-3 py-3">
                <div className="flex items-center gap-3">
                  {r.logo ? (
                    <img src={r.logo} alt={r.team} className="h-8 w-8 object-contain shrink-0" title={r.team} />
                  ) : (
                    <span className="h-9 w-9 rounded-full bg-gradient-navy text-white text-xs font-bold flex items-center justify-center shrink-0">{initials}</span>
                  )}
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground capitalize">{r.team}</div>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3 text-center">
                  <span className={cn(
                    "inline-flex items-center justify-center min-w-9 px-2.5 h-7 rounded-md font-bold",
                    accent === "yellow" ? "bg-yellow-400 text-yellow-950" :
                      accent === "red" ? "bg-[color:var(--brand-red)] text-white" :
                        "bg-[color:var(--navy)] text-white"
                  )}>{r.value}</span>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}