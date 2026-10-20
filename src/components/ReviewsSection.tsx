import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck, MapPin } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../config/businessInfo';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 bg-[#0B0B0D] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21] border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-silver mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>CUSTOMER EXPERIENCES</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            TRUST BUILT <br />
            <span className="text-gradient-red">ONE DETAIL AT A TIME.</span>
          </h2>

          {/* Rating Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#151518] border border-brand-border mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-white">4.9/5</span>
            <span className="text-xs text-brand-muted">· 270 Google reviews</span>
          </div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Read direct feedback from customers who brought their vehicles to Dallas Detailing And Buffing in Addison, Texas.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative rounded-2xl bg-[#151518] border border-brand-border p-6 sm:p-8 shadow-card-dark hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Quote Icon & 5 Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-accent/30 group-hover:text-brand-accent transition-colors" />
                </div>

                {/* Review Narrative */}
                <p className="text-sm text-brand-silver leading-relaxed mb-6 font-normal">
                  “{rev.text}”
                </p>
              </div>

              {/* Author & Source */}
              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-brand-muted">
                    {rev.carOrNote}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-silver">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent CTA to Read All Reviews on Google */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#151518] hover:bg-[#1D1D21] border border-brand-border hover:border-brand-silver/50 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-glow-red transition-all duration-200"
          >
            <span>READ GOOGLE REVIEWS (270)</span>
            <ExternalLink className="w-4 h-4 text-brand-accent" />
          </a>
          <p className="text-xs text-brand-muted mt-3">
            Opens Google Maps listing search for Dallas Detailing And Buffing in Addison, TX
          </p>
        </div>

      </div>
    </section>
  );
};
