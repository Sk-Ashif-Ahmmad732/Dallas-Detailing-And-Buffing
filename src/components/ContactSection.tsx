import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Copy, Check, ExternalLink, Clock, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#151518] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21] border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-silver mb-4">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>VISIT OUR ADDISON FACILITY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            FIND US IN <br />
            <span className="text-gradient-red">ADDISON, TEXAS.</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Conveniently located along Midway Road. Get directions, call directly, or copy our address for your navigation app.
          </p>
        </div>

        {/* Contact Info Grid & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Phone & Actions Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#1D1D21] border border-brand-border p-6 sm:p-8 shadow-card-dark">
              
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Dallas Detailing And Buffing
              </h3>

              {/* Address Row */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-muted block">
                    Physical Address
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-white mt-1">
                    {BUSINESS_INFO.addressStreet}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-silver">
                    {BUSINESS_INFO.addressCity}, {BUSINESS_INFO.addressState} {BUSINESS_INFO.addressZip}, {BUSINESS_INFO.addressCountry}
                  </p>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-muted block">
                    Direct Telephone
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-base sm:text-lg font-bold text-white hover:text-brand-accent transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-brand-muted">
                    Click to call directly from your device
                  </span>
                </div>
              </div>

              {/* Hours / Schedule Notice */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#151518] border border-brand-border mb-6">
                <Clock className="w-5 h-5 text-brand-silver shrink-0 mt-0.5" />
                <div className="text-xs text-brand-silver leading-relaxed">
                  <strong className="text-white block font-semibold mb-0.5">Operating Hours</strong>
                  Available business listing indicates an 8:00 AM opening. Please contact us to confirm current weekly schedule, service availability, and pricing.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accentDeep text-white text-xs font-bold uppercase tracking-wider shadow-glow-red hover:shadow-glow-red-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#151518] hover:bg-[#25252b] border border-brand-border text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4 text-brand-accent" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="w-full mt-3 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-transparent hover:bg-white/5 border border-brand-border/60 text-xs font-semibold text-brand-silver hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-brand-muted" />}
                <span>{copied ? 'Address Copied to Clipboard!' : 'Copy Full Address'}</span>
              </button>

            </div>

            {/* Note Box */}
            <div className="p-4 rounded-xl bg-[#1D1D21]/80 border border-brand-border/60 flex items-start gap-3 text-xs text-brand-muted">
              <AlertCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <span>Please contact us to confirm current hours, service availability, and pricing before visiting.</span>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-brand-border shadow-2xl bg-[#1D1D21] p-2 flex flex-col">
              <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-black">
                {/* Responsive Google Maps Iframe */}
                <iframe
                  title="Dallas Detailing And Buffing Location Map"
                  src="https://maps.google.com/maps?q=16284+Midway+Rd,+Addison,+TX+75001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.05]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Inset Map Footer */}
              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#1D1D21]">
                <div className="flex items-center gap-2 text-xs text-brand-silver">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span>16284 Midway Rd, Addison, TX 75001</span>
                </div>

                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
