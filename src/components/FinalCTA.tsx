import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

interface FinalCTAProps {
  onQuoteClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0D] overflow-hidden border-t border-brand-border">
      {/* Background with Authentic Photo Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/assets/mazda_cx9_soul_red_buffing_gloss.webp" type="image/webp" />
          <img
            src="/assets/mazda_cx9_soul_red_buffing_gloss.jpg"
            alt="Dallas Detailing Machine Buffing and Paint Gloss"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2]"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-[#0B0B0D]/60" />
        <div className="absolute inset-0 bg-radial-gradient-hero pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21]/90 border border-brand-accent/40 text-xs font-bold uppercase tracking-wider text-brand-silver mb-6 shadow-glow-red backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
          <span>ADDISON, TEXAS AUTOMOTIVE CARE</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6 leading-tight">
          YOUR NEXT DETAIL <br />
          <span className="text-gradient-red">STARTS HERE.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-brand-silver max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us about your vehicle and discover the detailing options available for your needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accentDeep rounded-xl shadow-glow-red hover:shadow-glow-red-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#151518]/90 hover:bg-[#1D1D21] border border-brand-border hover:border-brand-silver/50 rounded-xl transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-accent" />
            <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Bottom Sub-text */}
        <p className="text-xs text-brand-muted mt-8">
          16284 Midway Rd · Addison, TX 75001 · Google Rating 4.9/5 (270 Reviews)
        </p>

      </div>
    </section>
  );
};
