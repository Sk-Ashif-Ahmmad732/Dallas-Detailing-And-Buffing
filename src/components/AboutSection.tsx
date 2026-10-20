import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, MapPin, Eye, MessageSquareText } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

interface AboutSectionProps {
  onQuoteClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onQuoteClick }) => {
  const highlights = [
    {
      title: "Attention to Vehicle Appearance",
      desc: "Taking the time to inspect and address the visible details that elevate how your vehicle looks and feels.",
      icon: Eye
    },
    {
      title: "Interior-Cleaning Inquiries",
      desc: "From everyday dirt to heavily soiled seats and carpets, we invite you to describe your upholstery's needs.",
      icon: Sparkles
    },
    {
      title: "Exterior Detailing Inquiries",
      desc: "Options designed to restore cleanliness, enhance gloss, and preserve the exterior surfaces of your car.",
      icon: ShieldCheck
    },
    {
      title: "Scratch-Related Detailing Inquiries",
      desc: "Hands-on assessment of surface scratches to recommend safe and realistic paint polishing approaches.",
      icon: CheckCircle2
    },
    {
      title: "Customer-Focused Service",
      desc: "Every vehicle is treated with direct attention and genuine care from arrival to completion.",
      icon: MessageSquareText
    },
    {
      title: "Clear Communication About Work Needed",
      desc: "Transparent discussions about vehicle condition, achievable outcomes, and what your car actually requires.",
      icon: MapPin
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#0B0B0D] overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Assets with Shop Sign & Authentic Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-brand-border shadow-2xl bg-[#151518]">
              {/* Main Photo: Alfa Romeo Stelvio in front of Addison Shop */}
              <div className="relative aspect-[4/3] overflow-hidden group">
                <picture>
                  <source srcSet="/assets/alfa_romeo_stelvio_shop_front.webp" type="image/webp" />
                  <img
                    src="/assets/alfa_romeo_stelvio_shop_front.jpg"
                    alt="Dallas Detailing And Buffing storefront in Addison, Texas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />
                
                {/* Shop Sign callout badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#151518]/90 backdrop-blur-md p-3.5 rounded-xl border border-brand-border/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Addison Detailing Facility</span>
                      <span className="text-[11px] text-brand-silver">16284 Midway Rd · Phone on Sign: 214-400-7287</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-accent/20 text-brand-accent border border-brand-accent/40 uppercase">
                    Verified
                  </span>
                </div>
              </div>

              {/* Inset Authentic Interior Quality Detail */}
              <div className="p-4 sm:p-6 bg-[#151518] border-t border-brand-border flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-brand-border/80">
                  <img
                    src="/assets/ford_escape_trunk_vacuum_lines.webp"
                    alt="Precision vacuum striping in vehicle cargo area"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Attention to Every Surface</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    From carpet fiber extraction and leather conditioning to tight trim lines, we take pride in thorough work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Values & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21] border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-silver mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              <span>ABOUT OUR DETAILING SERVICE</span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              THE DIFFERENCE IS <br />
              <span className="text-gradient-red">IN THE DETAILS.</span>
            </h2>

            {/* Narrative Body Copy */}
            <div className="space-y-4 text-brand-silver text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Located at 16284 Midway Road in Addison, Texas, <strong className="text-white font-semibold">Dallas Detailing And Buffing</strong> provides dedicated automotive detailing services designed to bring out the very best in your vehicle.
              </p>
              <p>
                Whether your car has accumulated everyday dust, stains from family use, heavy mineral dust from work environments, or light exterior swirls and clear coat scratches, we believe in honest communication and meticulous attention to every surface.
              </p>
              <p className="text-brand-muted text-xs sm:text-sm">
                We invite vehicle owners throughout Addison and the North Dallas area to contact our team, share their vehicle's condition, and discuss the detailing options that match their expectations.
              </p>
            </div>

            {/* Core Service Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {highlights.slice(0, 4).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#151518] border border-brand-border/60 hover:border-brand-accent/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="w-4 h-4 text-brand-accent shrink-0" />
                      <h4 className="text-xs font-bold text-white tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-brand-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accentDeep rounded-xl shadow-glow-red hover:shadow-glow-red-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>DISCUSS YOUR VEHICLE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-brand-silver hover:text-white bg-[#151518] border border-brand-border hover:border-brand-silver/40 rounded-xl transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-silver" />
                <span>Visit Us in Addison</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
