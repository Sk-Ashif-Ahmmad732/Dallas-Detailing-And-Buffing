import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { SERVICES, ServiceItem } from '../config/businessInfo';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#151518] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21] border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-silver mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>SERVICES TO INQUIRE ABOUT</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            PRECISION DETAILING FOR <br />
            <span className="text-gradient-silver">EVERY CORNER OF YOUR VEHICLE.</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            From comprehensive interior extractions to exterior machine buffing, explore the services our team provides in Addison, Texas. Tell us what your vehicle needs to receive personalized options and pricing.
          </p>
        </div>

        {/* 6 Service Cards Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#1D1D21] border border-brand-border/80 hover:border-brand-accent/60 overflow-hidden shadow-card-dark hover:shadow-card-dark-hover transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <picture>
                  <source srcSet={service.image} type="image/webp" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D21] via-transparent to-black/30" />

                {/* Tag Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                    {service.tag}
                  </span>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-brand-accent text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-accent transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-silver leading-relaxed mb-5">
                    {service.fullDesc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6 border-t border-brand-border/50 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-brand-muted">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specific Safety / Assessment Notices */}
                {service.id === 'scratch-removal-assessment' && (
                  <div className="mb-4 p-2.5 rounded-lg bg-[#151518] border border-amber-500/20 flex items-start gap-2 text-[11px] text-amber-200/80">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Results depend on scratch depth and paint condition. An in-person assessment is recommended.</span>
                  </div>
                )}

                {service.id === 'engine-bay-detailing' && (
                  <div className="mb-4 p-2.5 rounded-lg bg-[#151518] border border-brand-border/60 flex items-start gap-2 text-[11px] text-brand-muted">
                    <AlertCircle className="w-3.5 h-3.5 text-brand-silver shrink-0 mt-0.5" />
                    <span>Engine bay cleaning suitability depends on vehicle age, components, and condition.</span>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#151518] hover:bg-gradient-to-r hover:from-brand-accent hover:to-brand-accentDeep text-brand-silver hover:text-white font-bold text-xs uppercase tracking-wider border border-brand-border hover:border-transparent hover:shadow-glow-red transition-all duration-200"
                >
                  <span>ASK ABOUT THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & Custom Consultation Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1D1D21] border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                Need a Custom Package or Multi-Vehicle Consultation?
              </h4>
              <p className="text-xs text-brand-muted mt-0.5">
                Pricing is determined by vehicle size, condition, and requirements. Call directly to discuss your car.
              </p>
            </div>
          </div>

          <a
            href="tel:+12144007287"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#151518] hover:bg-[#25252b] border border-brand-border text-xs font-bold uppercase tracking-wider text-white transition-colors"
          >
            Call (214) 400-7287
          </a>
        </div>

      </div>
    </section>
  );
};
