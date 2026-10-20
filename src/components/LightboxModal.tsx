import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../config/businessInfo';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl transition-opacity animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-brand-accent text-white text-xs font-bold uppercase tracking-wider">
            {currentItem.category}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-brand-silver">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#1D1D21] border border-brand-border text-brand-silver hover:text-white hover:border-brand-accent transition-colors"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] w-full mx-4 flex items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <picture>
          <source srcSet={currentItem.webpImage} type="image/webp" />
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </picture>

        {/* Prev & Next Controls */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1D1D21]/90 border border-brand-border text-white hover:bg-brand-accent transition-all shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1D1D21]/90 border border-brand-border text-white hover:bg-brand-accent transition-all shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1">
          {currentItem.title}
        </h4>
        <p className="text-xs sm:text-sm text-brand-silver max-w-2xl leading-relaxed">
          {currentItem.caption}
        </p>
      </div>
    </div>
  );
};
