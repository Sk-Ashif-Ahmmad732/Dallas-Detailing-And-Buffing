import React from 'react';
import { Star, MapPin, HeartHandshake, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

export const RatingStrip: React.FC = () => {
  return (
    <section className="relative z-20 border-y border-brand-border bg-[#151518]/95 backdrop-blur-md py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          
          {/* 1. Google Rating */}
          <div className="flex items-center gap-3.5 border-r border-brand-border/60 pr-4 last:border-r-0">
            <div className="w-12 h-12 rounded-xl bg-[#1D1D21] border border-brand-border flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">4.9</span>
                <span className="text-xs text-brand-muted font-medium">/ 5.0</span>
              </div>
              <p className="text-xs font-semibold text-brand-silver">Google Rating</p>
            </div>
          </div>

          {/* 2. Review Count */}
          <div className="flex items-center gap-3.5 md:border-r border-brand-border/60 pr-4 last:border-r-0">
            <div className="w-12 h-12 rounded-xl bg-[#1D1D21] border border-brand-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">270</span>
                <span className="text-xs text-brand-accent font-bold">+</span>
              </div>
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand-silver hover:text-white flex items-center gap-1 group transition-colors"
                title="View reviews on Google Maps"
              >
                <span>Google Reviews</span>
                <ExternalLink className="w-3 h-3 text-brand-muted group-hover:text-brand-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* 3. Addison, Texas Location */}
          <div className="flex items-center gap-3.5 border-r border-brand-border/60 pr-4 last:border-r-0">
            <div className="w-12 h-12 rounded-xl bg-[#1D1D21] border border-brand-border flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-brand-silver" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl text-white block leading-tight">
                Addison, TX
              </span>
              <p className="text-xs font-medium text-brand-muted">
                16284 Midway Road
              </p>
            </div>
          </div>

          {/* 4. Customer-Focused Experience */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#1D1D21] border border-brand-border flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl text-white block leading-tight">
                Dedicated Care
              </span>
              <p className="text-xs font-medium text-brand-muted">
                Customer-Focused Experience
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
