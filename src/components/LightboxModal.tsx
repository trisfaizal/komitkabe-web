import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/gallery';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelectIndex
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      onSelectIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, hasPrev, hasNext]);

  if (!isOpen || !item) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold 50px
    if (diff > 50 && hasNext) {
      handleNext();
    } else if (diff < -50 && hasPrev) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Dokumentasi Foto Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Counter & Close */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 text-white/90 text-xs sm:text-sm font-medium border border-white/10">
          <span>{currentIndex + 1}</span>
          <span className="text-white/40">/</span>
          <span>{items.length}</span>
          <span className="ml-2 text-white/70 hidden sm:inline">• {item.event}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Tutup Galeri"
          className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Foto Sebelumnya"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-brand-red text-white transition-all border border-white/10 z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Foto Selanjutnya"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-brand-red text-white transition-all border border-white/10 z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={item.url}
          alt={item.title}
          className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl select-none"
        />

        {/* Caption Container */}
        <div className="mt-3 text-center max-w-2xl px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-white">
          <p className="font-semibold text-sm sm:text-base">{item.title}</p>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
