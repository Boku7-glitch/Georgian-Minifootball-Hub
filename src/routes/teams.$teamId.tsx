import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Trophy, Loader2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { staff, type Standing, type PlayerStat } from '@/data/mock'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/i18n'
import { useEffect, useMemo } from 'react'

import {
  ajaraLogo,
  avlabariLogo,
  derbyLogo,
  everstoneLogo,
  gfdfLogo,
  glovoLogo,
  iberiaLogo,
  lentehiLogo,
  oldStarsLogo,
  saburtaloLogo,
} from '@/assets/logos'

const translations = {
  ka: {
    notFoundTitle: "გუნდი არ მოიძებნა",
    notFoundDesc: "მსგავსი იდენტიფიკატორით მონაცემები არ არსებობს.",
    backToHome: "მთავარ გვერდზე დაბრუნება",
    backToTable: "ცხრილში დაბრუნება",
    position: "პოზიცია",
    played: "თამაში",
    win: "მოგება (W)",
    draw: "ფრე (D)",
    loss: "წაგება (L)",
    gf: "გატანილი (GF)",
    ga: "მიღებული (GA)",
    gd: "სხვაობა (GD)",
    pts: "ქულა (Pts)",
    squad: "შემადგენლობა",
    players: "მოთამაშეები",
    staff: "სამწვრთნელო შტაბი",
    number: "#",
    fullName: "სახელი გვარი",
    goal: "გოლი",
    assist: "ასისტი",
    role: "პოზიცია",
    noPlayers: "მოთამაშეები ვერ მოიძებნა",
    noStaff: "ინფორმაცია სტაფის შესახებ ჯერ არ არის დამატებული"
  },
  en: {
    notFoundTitle: "Team Not Found",
    notFoundDesc: "No data exists for this identifier.",
    backToHome: "Return to Homepage",
    backToTable: "Back to Standings",
    position: "Position",
    played: "Played",
    win: "Wins (W)",
    draw: "Draws (D)",
    loss: "Losses (L)",
    gf: "Goals For (GF)",
    ga: "Goals Against (GA)",
    gd: "Goal Diff (GD)",
    pts: "Points (Pts)",
    squad: "Squad",
    players: "Players",
    staff: "Coaching Staff",
    number: "#",
    fullName: "Full Name",
    goal: "Goals",
    assist: "Assists",
    role: "Role",
    noPlayers: "No players found",
    noStaff: "No staff information added yet"
  }
}

const logoMap: Record<string, string> = {
  'adjara group': ajaraLogo,
  'ajara': ajaraLogo,
  'grand avlabari': avlabariLogo,
  'avlabari': avlabariLogo,
  'derby': derbyLogo,
  'everstone': everstoneLogo,
  'gfdf': gfdfLogo,
  'glovo': glovoLogo,
  'fc glovo': glovoLogo,
  'iberia': iberiaLogo,
  'iberia 1999': iberiaLogo,
  'lentehi': lentehiLogo,
  'letekhi': lentehiLogo,
  'lentekhi': lentehiLogo,
  'lentechi': lentehiLogo,
  'ლენტეხი': lentehiLogo,
  'old stars': oldStarsLogo,
  'saburtalo': saburtaloLogo,
};

const normalize = (str: string) =>
  str
    .toLowerCase()
    .replace(/\bfc\b|\bfk\b|\bsc\b|[.\-_]/g, '')
    .replace(/\s+/g, '')
    .trim();

const getTeamLogo = (teamName: string) => {
  if (!teamName) return undefined;
  const target = normalize(teamName);

  if (logoMap[target]) return logoMap[target];

  for (const [key, logo] of Object.entries(logoMap)) {
    const cleanKey = normalize(key);
    if (cleanKey === target || target.includes(cleanKey) || cleanKey.includes(target)) {
      return logo;
    }
  }
  return undefined;
};

export const Route = createFileRoute('/teams/$teamId')({
  component: TeamDetailComponent,
})

function TeamDetailComponent() {
  const { teamId } = Route.useParams()

  const { lang } = useLang();
  const currentLang = (lang as 'ka' | 'en') || 'ka';
  const t = translations[currentLang] || translations.ka;

  // 1. Fetch live Standings from Supabase
  const { data: dbStandings = [], isLoading: isStandingsLoading } = useQuery({
    queryKey: ['standings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('standings')
        .select('*')
        .order('pos', { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });

  // 2. Fetch live Players from Supabase
  const { data: dbPlayers = [], isLoading: isPlayersLoading } = useQuery({
    queryKey: ['players'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('players')
        .select('*');
      if (error) throw error;
      return data ?? [];
    },
  });

  // Match the current team
  const team: Standing | undefined = useMemo(() => {
    return dbStandings.find((s: any) => {
      const slug = s.club.toLowerCase().replace(/\s+/g, '-');
      const cleanClub = normalize(s.club);
      const cleanParam = normalize(teamId);
      return slug === teamId || cleanClub === cleanParam || cleanClub.includes(cleanParam);
    }) ? {
      pos: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.pos ?? 1),
      club: dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.club ?? '',
      short: dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.short ?? '',
      color: dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.color ?? '#0B1F3A',
      played: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.played ?? 0),
      w: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.w ?? 0),
      d: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.d ?? 0),
      l: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.l ?? 0),
      gf: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.gf ?? 0),
      ga: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.ga ?? 0),
      pts: Number(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.pts ?? 0),
      logo: getTeamLogo(dbStandings.find((s: any) => normalize(s.club) === normalize(teamId) || s.club.toLowerCase().replace(/\s+/g, '-') === teamId)?.club),
    } : undefined;
  }, [dbStandings, teamId]);

  useEffect(() => {
    if (team) {
      document.title = `${team.club} | Georgian Minifootball`;
    } else {
      document.title = `${t.notFoundTitle} | Georgian Minifootball`;
    }

    return () => {
      document.title = "Georgian Minifootball";
    };
  }, [team, t.notFoundTitle]);

  if (isStandingsLoading) {
    return (
      <div className="container-x py-40 text-center">
        <Loader2 className="h-10 w-10 animate-spin mx-auto text-[color:var(--navy)]" />
      </div>
    );
  }

  if (!team) {
    return (
      <div className="container-x py-24 text-center animate-fade-in-up pt-40">
        <Trophy className="h-16 w-16 mx-auto mb-4 opacity-20 text-[color:var(--navy)]" />
        <h2 className="text-2xl font-bold mb-4 font-display uppercase">{t.notFoundTitle}</h2>
        <p className="text-muted-foreground mb-8">{t.notFoundDesc}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[color:var(--navy)] text-white font-bold tracking-wider hover:bg-[color:var(--navy)]/90 transition-colors"
        >
          {t.backToHome}
        </Link>
      </div>
    )
  }

  // Filter players for this team from live Supabase data
  const teamPlayers: PlayerStat[] = dbPlayers
    .filter((p: any) => {
      const cleanPlayerTeam = normalize(p.team);
      const cleanClub = normalize(team.club);
      return cleanPlayerTeam === cleanClub || cleanClub.includes(cleanPlayerTeam) || cleanPlayerTeam.includes(cleanClub);
    })
    .map((p: any) => ({
      id: Number(p.shirt_number || p.id),
      name: p.name,
      team: p.team,
      position: p.position,
      matchesPlayed: Number(p.matches_played ?? 0),
      goals: Number(p.goals ?? 0),
      assists: Number(p.assists ?? 0),
      yellowCards: Number(p.yellow_cards ?? 0),
      redCards: Number(p.red_cards ?? 0),
    }))
    .sort((a: PlayerStat, b: PlayerStat) => (b.goals || 0) - (a.goals || 0) || a.id - b.id);

  const teamStaff = staff.filter((s) => {
    const cleanStaffTeam = normalize(s.team);
    const cleanClub = normalize(team.club);
    return cleanStaffTeam === cleanClub || cleanClub.includes(cleanStaffTeam) || cleanStaffTeam.includes(cleanClub);
  });

  return (
    <div className="container-x pt-32 pb-12 md:pt-40 md:pb-16 animate-fade-in-up">
      <Link
        to="/super-league"
        className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground mb-8 transition-colors cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.backToTable}
      </Link>

      <div className="bg-card rounded-2xl shadow-card overflow-hidden border border-border p-6 md:p-10 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
          {team.logo ? (
            <img src={team.logo} alt={team.club} className="h-32 w-32 object-contain shrink-0" />
          ) : (
            <div
              className="h-32 w-32 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-lg shrink-0"
              style={{ background: team.color || 'var(--navy)' }}
            >
              {team.short}
            </div>
          )}

          <div className="flex-1 mt-2 md:mt-4">
            <div className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-white bg-[color:var(--brand-red)] rounded-sm">
              {t.position}: #{team.pos}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold uppercase text-foreground">
              {team.club}
            </h1>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard label={t.played} value={team.played} />
          <StatCard label={t.win} value={team.w} />
          <StatCard label={t.draw} value={team.d} />
          <StatCard label={t.loss} value={team.l} />
          <StatCard label={t.gf} value={team.gf} />
          <StatCard label={t.ga} value={team.ga} />
          <StatCard label={t.gd} value={team.gf - team.ga} />
          <StatCard label={t.pts} value={team.pts} highlight />
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-card overflow-hidden border border-border p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground border-b border-border pb-4 font-display uppercase">
          {t.squad}
        </h2>

        <div className="mb-12">
          <h3 className="text-lg font-bold mb-4 text-muted-foreground font-display uppercase">{t.players}</h3>

          {isPlayersLoading ? (
            <div className="py-12 text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-[color:var(--navy)]" />
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left border-collapse">
                <thead className="bg-secondary/50 text-muted-foreground">
                <tr>
                  <th className="p-4 border-b border-border font-bold text-sm">{t.number}</th>
                  <th className="p-4 border-b border-border font-bold text-sm">{t.fullName}</th>
                  <th className="p-4 border-b border-border font-bold text-sm text-center">{t.played}</th>
                  <th className="p-4 border-b border-border font-bold text-sm text-center">{t.goal}</th>
                  <th className="p-4 border-b border-border font-bold text-sm text-center">{t.assist}</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-border">
                {teamPlayers.length > 0 ? (
                  teamPlayers.map((player) => (
                    <tr key={`${player.id}-${player.name}`} className="hover:bg-secondary/30 transition-colors">
                      <td className="p-4 text-sm font-bold text-muted-foreground">{player.id}</td>
                      <td className="p-4 text-sm font-bold text-foreground">{player.name}</td>
                      <td className="p-4 text-sm font-medium text-muted-foreground text-center">{player.matchesPlayed || 0}</td>
                      <td className="p-4 text-sm font-medium text-muted-foreground text-center font-bold text-[color:var(--navy)]">{player.goals}</td>
                      <td className="p-4 text-sm font-medium text-muted-foreground text-center">{player.assists}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-sm text-muted-foreground">
                      {t.noPlayers}
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-muted-foreground font-display uppercase">{t.staff}</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse">
              <thead className="bg-secondary/50 text-muted-foreground">
              <tr>
                <th className="p-4 border-b border-border font-bold text-sm">{t.fullName}</th>
                <th className="p-4 border-b border-border font-bold text-sm">{t.role}</th>
              </tr>
              </thead>
              <tbody className="divide-y divide-border">
              {teamStaff.length > 0 ? (
                teamStaff.map((member) => (
                  <tr key={member.id} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 text-sm font-bold text-foreground">{member.name}</td>
                    <td className="p-4 text-sm font-medium text-muted-foreground">{member.role}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="p-6 text-center text-sm text-muted-foreground">
                    {t.noStaff}
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

function StatCard({ label, value, highlight = false }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "p-5 rounded-xl border flex flex-col items-center justify-center text-center transition-all",
        highlight
          ? "border-[color:var(--navy)] bg-[color:var(--navy)] text-white shadow-md scale-[1.02]"
          : "border-border bg-secondary/30 hover:bg-secondary/60"
      )}
    >
      <div
        className={cn(
          "text-[11px] font-bold uppercase tracking-wider mb-2",
          highlight ? "text-white/80" : "text-muted-foreground"
        )}
      >
        {label}
      </div>
      <div
        className={cn(
          "text-3xl font-black",
          highlight ? "text-white" : "text-foreground"
        )}
      >
        {value > 0 && label.includes("GD") ? `+${value}` : value}
      </div>
    </div>
  )
}