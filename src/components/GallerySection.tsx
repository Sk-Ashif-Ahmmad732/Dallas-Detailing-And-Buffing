import React, { useState } from 'react';
import { Camera, Eye, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../config/businessInfo';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'exterior', label: 'Exterior Care' },
    { id: 'paint', label: 'Paint & Buffing' },
    { id: 'interior', label: 'Interior Deep Clean' },
    { id: 'wheels', label: 'Wheels & Accents' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#151518] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21] border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-silver mb-4">
            <Camera className="w-3.5 h-3.5 text-brand-accent" />
            <span>REAL WORK PORTFOLIO</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            DETAILS WORTH <br />
            <span className="text-gradient-silver">A CLOSER LOOK.</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Browse authentic photographs from our Addison detailing shop and customer vehicles. No stock models, no synthetic placeholders—just genuine detailing results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-brand-accent text-white shadow-glow-red scale-105'
                  : 'bg-[#1D1D21] text-brand-silver hover:text-white border border-brand-border hover:border-brand-silver/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#1D1D21] border border-brand-border/80 hover:border-brand-accent/60 shadow-card-dark hover:shadow-card-dark-hover transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <picture>
                  <source srcSet={item.webpImage} type="image/webp" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption Card Footer */}
              <div className="p-4 sm:p-5 bg-[#1D1D21] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-brand-border/40 flex items-center justify-between text-[11px] text-brand-silver">
                  <span>Authentic Asset</span>
                  <span className="text-brand-accent group-hover:underline">View Fullscreen &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
