import React, { useEffect, useState } from 'react';
import { ExternalLink, Users, MapPin, Sparkles, Building2 } from 'lucide-react';
import { itcgUpcoming } from '../data/itcgUpcoming';
import { siteConfig } from '../data/siteConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownCard: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(itcgUpcoming.targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border border-slate-200/80 dark:border-dark-border shadow-2xl p-5 sm:p-7 transition-all space-y-5">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-navy via-brand-red to-brand-navy" />

      {/* Header Badge */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-dark-border/60 pb-3">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-navy/10 text-brand-navy dark:bg-blue-500/20 dark:text-blue-300 border border-brand-navy/20 dark:border-blue-400/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Ekosistem & Kanal Resmi</span>
        </div>

        <span className="text-[11px] font-mono text-slate-500 dark:text-dark-muted">
          KOMITKABE Hub
        </span>
      </div>

      {/* Channel 1: Membership & Monthly Tech Events (Connect) */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-surface/80 border border-slate-200/70 dark:border-dark-border space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-brand-navy/10 dark:bg-blue-500/20 text-brand-navy dark:text-blue-400">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                KOMITKABE Connect
              </h4>
              <span className="text-[11px] text-slate-500 dark:text-dark-muted font-mono">
                connect.komitkabe.id
              </span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-red/10 text-brand-red dark:bg-brand-red/20 dark:text-red-400 shrink-0">
            Wajib Member
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Platform resmi registrasi keanggotaan praktisi IT kawasan serta informasi & pendaftaran pertemuan rutin bulanan (tech & vendor sharing).
        </p>

        <a
          href={siteConfig.connectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy dark:text-blue-400 hover:text-brand-red dark:hover:text-red-400 transition-colors pt-1"
        >
          <span>Akses Portal Connect</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Channel 2: Industrial Network Footprint */}
      <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/60 dark:bg-dark-surface/40 border border-slate-200/60 dark:border-dark-border/60">
        <div className="p-1.5 rounded-lg bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-red-400 shrink-0 mt-0.5">
          <Building2 className="w-4 h-4" />
        </div>
        <div>
          <h5 className="text-xs font-bold text-slate-900 dark:text-white">
            Jejaring 12+ Kawasan Industri
          </h5>
          <p className="text-[11px] text-slate-500 dark:text-dark-muted mt-0.5 leading-snug">
            Kolaborasi aktif 467+ praktisi di koridor Bekasi, Cikarang, Karawang, dan sekitarnya sejak 2006.
          </p>
        </div>
      </div>

      {/* Channel 3: Compact ITCG Countdown Widget */}
      <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-dark-surface dark:to-dark-card border border-slate-200 dark:border-dark-border space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Flagship Gathering: {itcgUpcoming.edition}</span>
          </div>
          <span className="text-[10px] font-semibold text-slate-500 dark:text-dark-muted">
            Periodik
          </span>
        </div>

        {/* Compact Countdown timer boxes */}
        {timeLeft.isPast ? (
          <p className="text-xs text-brand-navy dark:text-blue-400 font-semibold py-1">
            Edisi sedang berlangsung / silakan cek portal ITCG.
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-1.5 rounded-lg bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-dark-border">
              <span className="block text-base font-extrabold text-brand-navy dark:text-blue-400 tabular-nums leading-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Hari</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-dark-border">
              <span className="block text-base font-extrabold text-brand-navy dark:text-blue-400 tabular-nums leading-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Jam</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-dark-border">
              <span className="block text-base font-extrabold text-brand-navy dark:text-blue-400 tabular-nums leading-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Menit</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white dark:bg-dark-bg border border-slate-200/80 dark:border-dark-border">
              <span className="block text-base font-extrabold text-brand-red dark:text-red-400 tabular-nums leading-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Detik</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-dark-muted pt-1">
          <div className="flex items-center gap-1 truncate">
            <MapPin className="w-3 h-3 text-brand-red shrink-0" />
            <span className="truncate">{itcgUpcoming.location.venue}</span>
          </div>
          <a
            href={siteConfig.itcgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-brand-navy dark:text-blue-400 hover:text-brand-red shrink-0 ml-2"
          >
            <span>itcg.komitkabe.id</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
