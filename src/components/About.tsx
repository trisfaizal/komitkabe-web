import React from 'react';
import { Target, Compass, Award, Factory } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { AnimatedCounter } from './AnimatedCounter';

export const About: React.FC = () => {
  const industrialEstates = [
    'Jababeka (Cikarang)',
    'MM2100 Industrial Town',
    'EJIP (East Jakarta Industrial Park)',
    'GIIC (Greenland International)',
    'BIIE / Hyundai Cikarang',
    'Delta Silicon 1 - 8',
    'Suryacipta City of Industry',
    'KIIC (Karawang International)',
    'KIM (Kawasan Industri Mitrakarawang)',
    'Kawasan Industri Marunda & Sekitarnya'
  ];

  return (
    <section id="tentang" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-navy/10 text-brand-navy dark:bg-blue-500/20 dark:text-blue-300 border border-brand-navy/20 dark:border-blue-400/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Tentang Komunitas • Berdiri Sejak 2006</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Menghubungkan Praktisi IT di Jantung Manufaktur Nasional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        {/* Animated Community Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {siteConfig.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow group text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy dark:text-blue-400 mb-2 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-dark-muted leading-relaxed mt-1">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Vision Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-light text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="p-3 w-fit rounded-xl bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-blue-200">
                Visi Organisasi
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 leading-snug">
                {siteConfig.vision}
              </h3>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-xs text-blue-100 flex items-center justify-between">
              <span>KOMITKABE Indonesia</span>
              <span className="font-semibold">Est. 2006</span>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
          </div>

          {/* Mission Box */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-red-400">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand-red dark:text-red-400">
                    Misi & Fokus Gerakan
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    5 Misi Utama Organisasi
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {siteConfig.missions.map((mission, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50/80 dark:bg-dark-surface/60 border border-slate-100 dark:border-dark-border/60 hover:border-slate-200 dark:hover:border-dark-border transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-brand-navy/10 dark:bg-blue-500/20 text-brand-navy dark:text-blue-300 text-xs font-bold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {mission}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-dark-border/60 text-xs text-slate-500 dark:text-dark-muted">
              Saling berbagi solusi, bukan sekadar teori implementasi.
            </div>
          </div>
        </div>

        {/* Industrial Estates Footprint */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-100/70 dark:bg-dark-surface/60 border border-slate-200/80 dark:border-dark-border">
          <div className="flex items-center gap-2.5 mb-4">
            <Factory className="w-5 h-5 text-brand-navy dark:text-blue-400" />
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Kawasan Industri Terwakili di KOMITKABE
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {industrialEstates.map((estate, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-dark-border shadow-2xs"
              >
                {estate}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
