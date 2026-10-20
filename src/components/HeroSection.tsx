import React, { useState } from 'react';
import { Phone, ArrowRight, Star, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

interface HeroSectionProps {
  onQuoteClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuoteClick }) => {
  const [activeTab, setActiveTab] = useState<'interior' | 'exterior'>('interior');

  const heroImages = {
    interior: {
      url: '/assets/interior_ford_escape_rear_cabin.webp',
      fallback: '/assets/interior_ford_escape_rear_cabin.jpg',
      badge: 'Authentic Customer Interior Detail',
      sub: 'Conditioned Leather & Upholstery Deep Cleaning'
    },
    exterior: {
      url: '/assets/alfa_romeo_stelvio_shop_front.webp',
      fallback: '/assets/alfa_romeo_stelvio_shop_front.jpg',
      badge: 'Addison Facility (16284 Midway Rd)',
      sub: 'Exterior Detailing & Paint Buffing Services'
    }
  };

  const currentHero = heroImages[activeTab];

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0D]">
      {/* Background Image Container with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={currentHero.url} type="image/webp" />
          <img
            src={currentHero.fallback}
            alt="Dallas Detailing And Buffing Professional Auto Detailing"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12] transition-all duration-700 scale-105"
          />
        </picture>

        {/* Sophisticated Gradients for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/70 to-[#0B0B0D]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Copy, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D1D21]/90 border border-brand-accent/40 text-brand-silver text-xs font-semibold uppercase tracking-wider mb-6 shadow-glow-red backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              <span>PREMIUM AUTO DETAILING · ADDISON, TEXAS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-6">
              YOUR CAR DESERVES <br className="hidden sm:inline" />
              <span className="text-gradient-silver">EVERY DETAIL.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-silver font-normal leading-relaxed max-w-2xl mb-8">
              Bring back the clean, cared-for feel of your vehicle with professional detailing services in Addison, Texas. From interior cleaning to exterior care, tell us what your vehicle needs.
            </p>

            {/* CTA Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onQuoteClick}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accentDeep rounded-xl shadow-glow-red hover:shadow-glow-red-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>GET A DETAILING QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-sm sm:text-base font-bold text-white bg-[#151518]/90 hover:bg-[#1D1D21] border border-brand-border hover:border-brand-silver/40 rounded-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Indicator Pill */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-brand-border/60">
              <div className="flex items-center gap-1.5 bg-[#151518]/80 px-3 py-1.5 rounded-lg border border-brand-border">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  4.9/5 GOOGLE RATING · 270 REVIEWS
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>Verified Addison, TX Facility</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Authentic Asset Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-brand-border to-brand-card/40 shadow-2xl backdrop-blur-xl">
              <div className="bg-[#151518]/90 rounded-2xl p-5 sm:p-6 border border-brand-border/60 flex flex-col gap-4">
                
                {/* Header Switcher for Authentic Showcase */}
                <div className="flex items-center justify-between pb-3 border-b border-brand-border/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                      Authentic Work Showcase
                    </span>
                  </div>
                  
                  {/* Toggle between Interior & Exterior real photos */}
                  <div className="flex items-center gap-1 bg-[#0B0B0D] p-1 rounded-lg border border-brand-border/60">
                    <button
                      onClick={() => setActiveTab('interior')}
                      className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-all ${
                        activeTab === 'interior'
                          ? 'bg-brand-accent text-white shadow-sm'
                          : 'text-brand-muted hover:text-white'
                      }`}
                    >
                      Interior
                    </button>
                    <button
                      onClick={() => setActiveTab('exterior')}
                      className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-all ${
                        activeTab === 'exterior'
                          ? 'bg-brand-accent text-white shadow-sm'
                          : 'text-brand-muted hover:text-white'
                      }`}
                    >
                      Exterior
                    </button>
                  </div>
                </div>

                {/* Image Preview Box */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black border border-brand-border/50 group">
                  <img
                    src={currentHero.url}
                    alt={currentHero.badge}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-brand-accent text-white text-[11px] font-bold uppercase tracking-wider mb-1">
                      {currentHero.badge}
                    </span>
                    <p className="text-xs text-white/90 font-medium">
                      {currentHero.sub}
                    </p>
                  </div>
                </div>

                {/* Key Quick Inquiries Summary */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1D1D21]/80 border border-brand-border/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span className="text-brand-silver text-[11px] font-medium leading-tight">
                      Upholstery & Carpet Deep Clean
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1D1D21]/80 border border-brand-border/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span className="text-brand-silver text-[11px] font-medium leading-tight">
                      Paint Polishing & Buffing
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1D1D21]/80 border border-brand-border/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span className="text-brand-silver text-[11px] font-medium leading-tight">
                      Scratch Assessment Inquiries
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1D1D21]/80 border border-brand-border/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span className="text-brand-silver text-[11px] font-medium leading-tight">
                      Midway Rd Local Addison Shop
                    </span>
                  </div>
                </div>

                {/* Bottom Address Link */}
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#1D1D21] hover:bg-[#25252b] border border-brand-border/50 text-xs text-brand-silver hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                    <span>16284 Midway Rd, Addison, TX 75001</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-muted" />
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
