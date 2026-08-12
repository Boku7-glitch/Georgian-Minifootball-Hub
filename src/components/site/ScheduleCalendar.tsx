// src/components/site/ScheduleCalendar.tsx
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLang } from '@/lib/i18n';

import {
  ajaraLogo,
  avlabariLogo,
  derbyLogo,
  everstoneLogo,
  gfdfLogo,
  glovoLogo,
  iberiaLogo,
  lentehiLogo,
  miniFootballLogo,
  oldStarsLogo,
  saburtaloLogo,
} from '@/assets/logos';

interface Match {
  id: string;
  round: number | string;
  day: string;
  time: string;
  home_team: string;
  away_team: string;
  home_score: number | null;
  away_score: number | null;
  status: string;
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
  'lentechi': lentehiLogo,
  'ლენტეხი': lentehiLogo,
  'mini football': miniFootballLogo,
  'old stars': oldStarsLogo,
  'saburtalo': saburtaloLogo,
};

const getTeamLogo = (teamName: string) => {
  if (!teamName) return undefined;
  const cleanName = teamName.toLowerCase().trim();

  if (logoMap[cleanName]) return logoMap[cleanName];

  if (cleanName.includes('lent') || cleanName.includes('letek') || cleanName.includes('ლენტეხ')) {
    return lentehiLogo;
  }
  if (cleanName.includes('glovo')) return glovoLogo;
  if (cleanName.includes('iberia')) return iberiaLogo;
  if (cleanName.includes('adjara')) return ajaraLogo;
  if (cleanName.includes('avlabari')) return avlabariLogo;
  if (cleanName.includes('derby')) return derbyLogo;
  if (cleanName.includes('everstone')) return everstoneLogo;
  if (cleanName.includes('gfdf')) return gfdfLogo;
  if (cleanName.includes('saburtalo')) return saburtaloLogo;
  if (cleanName.includes('old star')) return oldStarsLogo;
  if (cleanName.includes('mini')) return miniFootballLogo;

  return undefined;
};

export const ScheduleCalendar: React.FC = () => {
  const { lang } = useLang() as { lang?: string };
  const [allMatches, setAllMatches] = useState<Match[]>([]);
  const [selectedRound, setSelectedRound] = useState<number | string>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const currentLang = lang || (typeof window !== 'undefined' && localStorage.getItem('language')) || 'ka';
  const isEn = currentLang === 'en';

  useEffect(() => {
    async function fetchAllMatches() {
      setLoading(true);
      const { data, error } = await supabase
        .from('matches')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Error fetching matches:', error);
      } else if (data && data.length > 0) {
        setAllMatches(data);
      }
      setLoading(false);
    }

    fetchAllMatches();
  }, []);

  const matches = allMatches.filter((m) => String(m.round) === String(selectedRound));
  const uniqueDays = Array.from(new Set(matches.map((m) => m.day).filter(Boolean)));

  const formatDayName = (day: string) => {
    if (!day) return '';
    const lower = day.toLowerCase();
    if (isEn) {
      if (lower.includes('შაბათ') || lower.includes('saturday')) return 'Saturday';
      if (lower.includes('კვირ') || lower.includes('sunday')) return 'Sunday';
    } else {
      if (lower.includes('sat') || lower.includes('შაბათ')) return 'შაბათი';
      if (lower.includes('sun') || lower.includes('კვირ')) return 'კვირა';
    }
    return day;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {/* Round Selector Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none border-b border-border">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((roundNum) => (
          <button
            key={roundNum}
            onClick={() => setSelectedRound(roundNum)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
              String(selectedRound) === String(roundNum)
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-accent'
            }`}
          >
            {isEn ? `Round ${roundNum}` : `ტური ${roundNum}`}
          </button>
        ))}
      </div>

      {/* Match Schedule Body */}
      {loading ? (
        <div className="text-center py-12 text-muted-foreground">
          {isEn ? 'Loading...' : 'იტვირთება...'}
        </div>
      ) : matches.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground bg-card rounded-xl border border-border/50">
          <p className="font-semibold text-base">
            {isEn ? 'No matches scheduled for this round.' : 'ამ ტურში მატჩები ჯერ არ არის დამატებული.'}
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {uniqueDays.map((day) => {
            const dayMatches = matches.filter((m) => m.day === day);
            if (dayMatches.length === 0) return null;

            return (
              <div key={day} className="space-y-3">
                <h3 className="text-lg font-bold text-primary border-l-4 border-primary pl-3">
                  {formatDayName(day)}
                </h3>

                <div className="grid gap-3">
                  {dayMatches.map((match) => {
                    const homeLogo = getTeamLogo(match.home_team);
                    const awayLogo = getTeamLogo(match.away_team);

                    return (
                      <div
                        key={match.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:border-primary/40 transition-all"
                      >
                        {/* Home Team */}
                        <div className="flex items-center gap-3 w-5/12 justify-end text-right">
                          <span className="font-semibold text-sm sm:text-base">
                            {match.home_team}
                          </span>
                          {homeLogo ? (
                            <img
                              src={homeLogo}
                              alt={match.home_team}
                              className="w-8 h-8 object-contain shrink-0"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-secondary text-[10px] font-bold flex items-center justify-center shrink-0">
                              {match.home_team.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>

                        {/* Time / Score */}
                        <div className="flex flex-col items-center justify-center w-2/12 px-2">
                          {match.status === 'finished' ? (
                            <div className="text-base font-bold text-primary bg-primary/10 px-3 py-1 rounded-md">
                              {match.home_score} - {match.away_score}
                            </div>
                          ) : (
                            <div className="text-xs sm:text-sm font-medium bg-muted px-3 py-1 rounded-md text-muted-foreground whitespace-nowrap">
                              {match.time}
                            </div>
                          )}
                        </div>

                        {/* Away Team */}
                        <div className="flex items-center gap-3 w-5/12 justify-start text-left">
                          {awayLogo ? (
                            <img
                              src={awayLogo}
                              alt={match.away_team}
                              className="w-8 h-8 object-contain shrink-0"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-secondary text-[10px] font-bold flex items-center justify-center shrink-0">
                              {match.away_team.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                          <span className="font-semibold text-sm sm:text-base">
                            {match.away_team}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};