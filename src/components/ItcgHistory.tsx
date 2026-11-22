import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Building2, Tag, Layers, ExternalLink } from 'lucide-react';
import { itcgHistory } from '../data/itcgHistory';
import { siteConfig } from '../data/siteConfig';

interface ItcgHistoryProps {
  onPhotoClick: (photoUrl: string, caption: string, title: string) => void;
}

export const ItcgHistory: React.FC<ItcgHistoryProps> = ({ onPhotoClick }) => {
  const [activeTab, setActiveTab] = useState(itcgHistory[0].id);

  const currentEvent = itcgHistory.find((item) => item.id === activeTab) || itcgHistory[0];

  return (
    <section id="itcg" className="py-20 md:py-24 lg:py-28 relative scroll-mt-20 md:scroll-mt-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#060d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red dark:bg-brand-red/20 dark:text-red-400 border border-brand-red/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Jejak Flagship Gathering (ITCG)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            IT Community Gathering (ITCG)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Konferensi akbar berkala praktisi IT kawasan industri, tempat bertemunya gagasan teknologi manufaktur, pameran vendor solusi, dan networking eksekutif. Detail rundown, pendaftaran delegasi, dan pemesanan booth dikelola terpusat di portal resmi ITCG.
          </p>
        </div>

        {/* Interactive Year Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {itcgHistory.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-5 sm:px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white/70 dark:bg-dark-card/70 border border-slate-200 dark:border-dark-border'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-brand-navy dark:bg-blue-600 rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{item.edition || `ITCG ${item.year}`}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 dark:bg-dark-surface text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {item.year}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content with Framer Motion AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEvent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start"
          >
            {/* Event Details Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-dark-border/60 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red dark:text-red-400 bg-brand-red/10 dark:bg-brand-red/20 px-3 py-1 rounded-full">
                  {currentEvent.badge}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-dark-muted flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-navy dark:text-blue-400" />
                  {currentEvent.date || `Tahun ${currentEvent.year}`}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {currentEvent.title}
                </h3>
                <p className="text-base font-semibold text-brand-navy dark:text-blue-400 mt-1">
                  "{currentEvent.theme}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/70 dark:border-dark-border">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-dark-muted text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>Venue</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-2">
                    {currentEvent.venue}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/70 dark:border-dark-border">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-dark-muted text-xs mb-1">
                    <Users className="w-3.5 h-3.5 text-brand-navy dark:text-blue-400" />
                    <span>Peserta</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {currentEvent.attendeesCount}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/70 dark:border-dark-border">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-dark-muted text-xs mb-1">
                    <Building2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Perusahaan</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {currentEvent.companiesCount}
                  </span>
                </div>
              </div>

              <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentEvent.summary}
              </div>

              {/* Topics */}
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-500 dark:text-dark-muted tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Highlight Topik Pembahasan</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentEvent.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-border"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Speakers if any */}
              {currentEvent.keySpeakers && (
                <div className="pt-2">
                  <h4 className="text-xs uppercase font-bold text-slate-500 dark:text-dark-muted tracking-wider mb-2">
                    Keynote & Pembicara Edisi Ini
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                    {currentEvent.keySpeakers.map((sp, idx) => (
                      <li key={idx}>{sp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Photos & Portal Banner Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Photo Preview Grid */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                  <span>Dokumentasi Kegiatan</span>
                  <span className="text-xs text-slate-400 font-normal">Klik untuk perbesar</span>
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {currentEvent.photos.map((photo, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => onPhotoClick(photo.url, photo.caption, `${currentEvent.title} — Dokumentasi ${pIdx + 1}`)}
                      className="group relative aspect-video rounded-xl overflow-hidden bg-slate-200 dark:bg-dark-surface border border-slate-200 dark:border-dark-border cursor-pointer focus:outline-none"
                    >
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                        <span className="text-[11px] font-medium text-white line-clamp-2">
                          {photo.caption}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Next Edition Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-navy to-indigo-900 text-white shadow-lg space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-200">
                  Agenda Terdekat // ITCG 2027
                </span>
                <h4 className="text-lg font-bold leading-snug">
                  Menuju 6th IT Community Gathering 2027
                </h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  <strong>Tema:</strong> <em>INTELLIGENCE IN MOTION — Driving Smart Industry. Securing the Future.</em> Dilaksanakan di Sutan Raja Hotel & Convention Centre, Soreang, Bandung (16-17 Januari 2027). Slot delegasi & pameran booth industri kini telah dibuka!
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.itcgPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-red hover:bg-brand-red-hover text-white shadow-md transition-all active:scale-95"
                  >
                    <span>Kunjungi Portal Resmi ITCG 2027</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
