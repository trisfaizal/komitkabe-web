import React from 'react';
import { ShieldCheck, Cpu, Network, Users, ArrowRight, ArrowDown } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { CountdownCard } from './CountdownCard';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-center py-24 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Top-left Navy Glow */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/3 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-brand-navy/15 dark:bg-brand-navy/30 rounded-full blur-[110px]" />
        {/* Bottom-right Red Accent Glow */}
        <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-brand-red/10 dark:bg-brand-red/15 rounded-full blur-[90px]" />

        {/* Subtle Industrial Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline, Tagline, Value Props */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-dark-surface/90 border border-slate-200 dark:border-dark-border text-xs sm:text-sm font-semibold text-brand-navy dark:text-blue-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Ekosistem Praktisi IT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-blue-600 to-brand-navy dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400">
                Kawasan Industri
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Wadah silaturahmi, pertukaran pengetahuan, dan akselerasi transformasi digital praktisi teknologi informasi manufaktur di koridor <strong className="text-slate-800 dark:text-slate-100">Bekasi, Cikarang, Karawang, dan sekitarnya</strong>.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border">
                <ShieldCheck className="w-4 h-4 text-brand-navy dark:text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Cyber Resilience</span>
              </div>
              <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border">
                <Cpu className="w-4 h-4 text-brand-red dark:text-red-400 shrink-0" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">IT/OT Convergence</span>
              </div>
              <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border">
                <Network className="w-4 h-4 text-brand-navy dark:text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Smart Factory</span>
              </div>
              <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-dark-surface/70 border border-slate-200/60 dark:border-dark-border">
                <Users className="w-4 h-4 text-brand-red dark:text-red-400 shrink-0" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Solid Network</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#tentang"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-brand-navy hover:bg-brand-navy-light dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-brand-navy/25 transition-all duration-200 active:scale-95"
              >
                <span>Mengenal KOMITKABE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#program"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-dark-surface hover:bg-slate-100 dark:hover:bg-dark-card border border-slate-300 dark:border-dark-border transition-all duration-200 active:scale-95"
              >
                <span>Lihat Program Kami</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Countdown Card */}
          <div className="lg:col-span-5 max-w-md mx-auto w-full">
            <CountdownCard />
          </div>
        </div>
      </div>
    </section>
  );
};
