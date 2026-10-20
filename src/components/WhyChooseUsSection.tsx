import React from 'react';
import { Star, Sparkles, Layers, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

interface WhyChooseUsSectionProps {
  onQuoteClick: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onQuoteClick }) => {
  const points = [
    {
      number: "01",
      title: "Customer Feedback",
      quote: "Rated 4.9 out of 5 based on the supplied Google listing's 270 reviews.",
      desc: "Real feedback from vehicle owners who have experienced the team's dedicated cleaning, buffing, and surface care firsthand.",
      icon: Star,
      tag: "Verified 4.9 Rating"
    },
    {
      number: "02",
      title: "Attention to Interior Condition",
      quote: "From everyday dirt to heavily soiled upholstery, tell us about your vehicle's condition and ask about appropriate cleaning options.",
      desc: "We take on challenging interiors—including mineral dust, food stains, and deeply embedded debris—with methodical extraction.",
      icon: Sparkles,
      tag: "Upholstery & Carpets"
    },
    {
      number: "03",
      title: "A Range of Detailing Inquiries",
      quote: "Discuss interior and exterior detailing, buffing, waxing, headlight cleaning, and other available services.",
      desc: "Whether you need a complete vehicle refresh or targeted attention for oxidized headlights or clear coat swirls, we tailor our consultation.",
      icon: Layers,
      tag: "Tailored Inquiries"
    },
    {
      number: "04",
      title: "Local Convenience",
      quote: "Find us at 16284 Midway Road in Addison, Texas.",
      desc: "Conveniently situated in Addison to serve car owners, commuters, and fleet vehicles across North Dallas and surrounding communities.",
      icon: MapPin,
      tag: "Midway Road Facility"
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#F3F3F4] text-[#151518] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-brand-accentDeep mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span>THE DALLAS DETAILING DIFFERENCE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0B0B0D] tracking-tight leading-tight mb-5">
            CARE YOU CAN SEE. <br />
            <span className="text-brand-accent font-extrabold">DETAILS YOU CAN FEEL.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5C5E66] leading-relaxed">
            Every vehicle has a unique history and set of needs. We focus on authentic craftsmanship, realistic assessments, and transparent communication rather than one-size-fits-all claims.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-black/8 p-8 shadow-sm hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-brand-accent/20 group-hover:text-brand-accent transition-colors">
                      {pt.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F3F3F4] text-xs font-bold text-[#151518] border border-black/5">
                      {pt.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#0B0B0D]">
                      {pt.title}
                    </h3>
                  </div>

                  {/* Evidence-Conscious Quote */}
                  <blockquote className="p-4 rounded-xl bg-[#F8F8FA] border-l-4 border-brand-accent my-4 text-sm font-semibold text-[#151518] leading-snug">
                    “{pt.quote}”
                  </blockquote>

                  <p className="text-sm text-[#5C5E66] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#151518]">
                  <span className="flex items-center gap-1.5 text-brand-accent">
                    <CheckCircle2 className="w-4 h-4" /> Honest Assessment
                  </span>
                  <span className="text-[#8A8D94]">No Inflated Claims</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with authentic photo & local CTA */}
        <div className="rounded-2xl bg-[#0B0B0D] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-brand-border">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Ready to Discuss Your Car?
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              Book a Consultation or Call for Addison Detailing.
            </h3>
            <p className="text-sm text-brand-silver leading-relaxed">
              Tell us about your vehicle make, condition, and detailing goals. Wilson and the team are ready to answer your questions.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onQuoteClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-accent to-brand-accentDeep rounded-xl shadow-glow-red hover:shadow-glow-red-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Request Detailing Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#151518] hover:bg-[#1D1D21] border border-brand-border rounded-xl transition-colors"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
