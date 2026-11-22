import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { itcgUpcoming } from '../data/itcgUpcoming';

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

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      }).format(date);
    } catch {
      return isoString;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border border-slate-200/80 dark:border-dark-border shadow-2xl p-6 sm:p-8 transition-all">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-navy via-brand-red to-brand-navy" />

      {/* Header Badge & Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red dark:bg-brand-red/20 dark:text-red-400 border border-brand-red/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
          </span>
          {itcgUpcoming.registration.statusLabel}
        </div>

        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          {itcgUpcoming.edition}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
        {itcgUpcoming.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        {itcgUpcoming.theme}
      </p>

      {/* Countdown Box or Fallback State */}
      {timeLeft.isPast ? (
        <div className="p-4 mb-6 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-center">
          <p className="text-sm font-semibold text-brand-navy dark:text-blue-400 mb-1">
            Event Sedang Berlangsung / Tahap Pelaksanaan
          </p>
          <p className="text-xs text-slate-500 dark:text-dark-muted">
            Kunjungi portal resmi ITCG untuk live stream, materi presentasi, dan update terbaru.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6">
          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-dark-surface/90 border border-slate-200/80 dark:border-dark-border shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-blue-400 tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Hari
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-dark-surface/90 border border-slate-200/80 dark:border-dark-border shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-blue-400 tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Jam
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-dark-surface/90 border border-slate-200/80 dark:border-dark-border shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-blue-400 tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Menit
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-dark-surface/90 border border-slate-200/80 dark:border-dark-border shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-brand-red dark:text-red-400 tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Detik
            </span>
          </div>
        </div>
      )}

      {/* Info Details */}
      <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 border-t border-slate-100 dark:border-dark-border/60 pt-4">
        <div className="flex items-start gap-2.5">
          <Calendar className="w-4 h-4 text-brand-navy dark:text-blue-400 mt-0.5 shrink-0" />
          <span>{formatDate(itcgUpcoming.targetDate)}</span>
        </div>
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-brand-red dark:text-red-400 mt-0.5 shrink-0" />
          <span>{itcgUpcoming.location.venue}, {itcgUpcoming.location.city}</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-dark-muted">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>{itcgUpcoming.registration.quotaText}</span>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={itcgUpcoming.registration.portalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-navy to-brand-navy-light hover:from-brand-navy-light hover:to-brand-navy dark:from-blue-600 dark:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 shadow-lg shadow-brand-navy/20 dark:shadow-none transition-all duration-200 active:scale-[0.99]"
      >
        <span>Kunjungi Website ITCG</span>
        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};
