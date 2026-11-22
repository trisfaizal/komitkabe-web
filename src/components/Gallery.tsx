import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, ZoomIn, Calendar } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '../data/gallery';

interface GalleryProps {
  onSelectPhoto: (item: GalleryItem, allFilteredItems: GalleryItem[]) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectPhoto }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'semua') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="galeri" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-navy/10 text-brand-navy dark:bg-blue-500/20 dark:text-blue-300 border border-brand-navy/20 dark:border-blue-400/20 mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Dokumentasi Komunitas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Galeri Kegiatan & Silaturahmi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Momen kebersamaan, diskusi teknologi, seminar, dan workshop praktisi IT lintas kawasan industri.
          </p>
        </div>

        {/* Filter Categories Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-brand-navy dark:bg-blue-600 text-white border-brand-navy dark:border-blue-500 shadow-sm'
                    : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border-slate-200 dark:border-dark-border hover:bg-slate-50 dark:hover:bg-dark-surface'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => onSelectPhoto(item, filteredItems)}
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-dark-surface">
                  <img
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {item.tag || item.event}
                    </span>
                  </div>

                  {/* Hover Overlay Zoom Icon */}
                  <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 text-brand-navy shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-dark-muted mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                      <span>•</span>
                      <span>{item.event}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-navy dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
