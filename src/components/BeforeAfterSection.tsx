import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, ArrowLeftRight, Check, AlertCircle, Info } from 'lucide-react';
import { BEFORE_AFTER_CASES, BeforeAfterItem } from '../config/businessInfo';

export const BeforeAfterSection: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const activeCase: BeforeAfterItem = BEFORE_AFTER_CASES[selectedCaseIndex];
  
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  // Reset slider position when changing case
  const handleSelectCase = (index: number) => {
    setSelectedCaseIndex(index);
    setSliderPosition(50);
  };

  return (
    <section id="transformations" className="relative py-20 sm:py-28 bg-[#0B0B0D] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21] border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-silver mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>AUTHENTIC VEHICLE TRANSFORMATIONS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            SEE THE DIFFERENCE <br />
            <span className="text-gradient-red">DETAILING CAN MAKE.</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Drag the interactive slider to compare documented interior cleaning results from actual customer vehicles serviced by the team.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelectCase(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCaseIndex === idx
                  ? 'bg-gradient-to-r from-brand-accent to-brand-accentDeep text-white shadow-glow-red scale-105'
                  : 'bg-[#151518] text-brand-silver hover:text-white border border-brand-border hover:border-brand-silver/30'
              }`}
            >
              {selectedCaseIndex === idx && <Check className="w-4 h-4" />}
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-1 bg-gradient-to-b from-brand-border via-brand-card to-brand-border/40 shadow-2xl">
            <div className="bg-[#151518] rounded-2xl p-4 sm:p-6 border border-brand-border/60">
              
              {/* Top Case Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-brand-border/60">
                <div>
                  <span className="text-[11px] font-bold text-brand-accent uppercase tracking-wider block">
                    {activeCase.vehicle}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {activeCase.title}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D1D21] border border-brand-border text-xs text-brand-silver">
                  <Info className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Interactive Split View</span>
                </div>
              </div>

              {/* Draggable Image Box */}
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchMove={handleTouchMove}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="slider"
                aria-label="Image comparison slider. Use arrow keys to adjust."
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPosition)}
                className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-xl overflow-hidden cursor-ew-resize select-none focus:outline-none focus:ring-2 focus:ring-brand-accent bg-black"
              >
                {/* 1. AFTER Image (Base Layer) */}
                <picture>
                  <source srcSet={activeCase.afterImage} type="image/webp" />
                  <img
                    src={activeCase.afterImage}
                    alt={activeCase.afterLabel}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05]"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-md">
                  {activeCase.afterLabel}
                </div>

                {/* 2. BEFORE Image (Clipped Overlay Layer) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <picture>
                    <source srcSet={activeCase.beforeImage} type="image/webp" />
                    <img
                      src={activeCase.beforeImage}
                      alt={activeCase.beforeLabel}
                      className="absolute inset-0 w-full h-full object-cover max-w-none filter contrast-[1.05]"
                      style={{
                        width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                        height: '100%',
                      }}
                      loading="lazy"
                    />
                  </picture>

                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-brand-accent/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-brand-accent/40 shadow-md">
                    {activeCase.beforeLabel}
                  </div>
                </div>

                {/* 3. Slider Handle Divider Line */}
                <div
                  className="absolute top-0 bottom-0 z-20 flex items-center justify-center -ml-[1.5px]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Vertical line with subtle glow */}
                  <div className="w-[3px] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                  {/* Circular Draggable Button */}
                  <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1D1D21] border-2 border-white shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform duration-150">
                    <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent" />
                  </div>
                </div>

              </div>

              {/* Slider Instruction Note & Caption */}
              <div className="mt-4 pt-3 border-t border-brand-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-brand-muted">
                <p className="leading-relaxed text-brand-silver">
                  {activeCase.description}
                </p>
                <div className="flex items-center gap-1.5 shrink-0 text-brand-muted">
                  <span className="hidden sm:inline">Tip: Use Arrow Keys or Drag</span>
                  <span className="sm:hidden">Swipe or drag to compare</span>
                </div>
              </div>

            </div>
          </div>

          {/* Transparent Verification Disclaimer */}
          <div className="mt-6 p-4 rounded-xl bg-[#151518]/60 border border-brand-border/60 flex items-start gap-3 text-xs text-brand-muted max-w-3xl mx-auto">
            <AlertCircle className="w-4 h-4 text-brand-silver shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white font-medium">Authenticity Guarantee:</strong> These photographs document genuine stages from customer and shop records. We do not manufacture artificial before-and-after pairings from unrelated vehicles. Individual outcomes depend on carpet fabric, seat material, and soil depth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
