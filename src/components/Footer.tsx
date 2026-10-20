import React, { useState } from 'react';
import { Phone, MapPin, Navigation, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../config/businessInfo';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Before & After Transformations', href: '#transformations' },
    { name: 'Our Work Gallery', href: '#gallery' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'About The Service', href: '#about' },
    { name: 'Frequently Asked Questions', href: '#faq' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <>
      <footer className="relative bg-[#070709] border-t border-brand-border text-brand-silver text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Col 1: Brand & Logo (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo_transparent.png"
                  alt="Dallas Detailing And Buffing"
                  className="h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(214,40,40,0.4)]"
                />
                <div>
                  <span className="font-display font-extrabold text-base tracking-tight text-white block">
                    DALLAS DETAILING & BUFFING
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-brand-muted">
                    Automotive Detailing · Addison, TX
                  </span>
                </div>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed max-w-sm">
                Dedicated automotive detailing and machine buffing services in Addison, Texas. Specializing in upholstery extraction, carpet cleaning, paint appearance enhancement, and surface scratch assessments.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#151518] border border-brand-border text-white text-[11px] font-bold">
                  <span className="text-amber-400">★</span> 4.9 Rating (270 Google Reviews)
                </div>
              </div>
            </div>

            {/* Col 2: Services Links (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Detailing Services
              </h4>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => onSelectService(s.id)}
                      className="text-brand-silver hover:text-white hover:text-brand-accent transition-colors text-left text-xs"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact & Directions (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                Location & Phone
              </h4>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Dallas Detailing And Buffing</span>
                    <span className="text-brand-muted block">16284 Midway Rd</span>
                    <span className="text-brand-muted block">Addison, TX 75001</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-white font-bold hover:text-brand-accent transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>

                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-accent hover:underline font-semibold text-xs pt-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Privacy */}
          <div className="mt-12 pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-muted">
            <p>
              &copy; {currentYear} Dallas Detailing And Buffing. All rights reserved. Addison, Texas.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-white underline transition-colors"
              >
                Privacy Notice & Terms
              </button>
              <span>·</span>
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Google Business Search
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Notice Modal */}
      {privacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="bg-[#151518] border border-brand-border rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-brand-border mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <h3 className="font-display font-bold text-lg text-white">
                  Privacy Notice & Information Handling
                </h3>
              </div>
              <button
                onClick={() => setPrivacyOpen(false)}
                className="p-1 rounded-lg text-brand-muted hover:text-white"
                aria-label="Close Privacy Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-brand-silver leading-relaxed">
              <p>
                <strong className="text-white">Customer Data Collection:</strong> Dallas Detailing And Buffing only collects personal details (such as your name, telephone number, email, and vehicle specifications) that you voluntarily submit through our quote and contact forms.
              </p>
              <p>
                <strong className="text-white">Use of Information:</strong> The submitted data is used solely to assess your vehicle detailing requirements, provide price estimates, and schedule appointments with our Addison team. We never sell, rent, or transfer customer information to third parties.
              </p>
              <p>
                <strong className="text-white">Direct Communication:</strong> You may contact us at any time at (214) 400-7287 to update your contact details or inquire about services.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border flex justify-end">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#1D1D21] border border-brand-border text-white text-xs font-semibold hover:border-brand-silver transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
