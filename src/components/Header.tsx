import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#transformations' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0B0B0D]/95 via-[#0B0B0D]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg p-1"
            >
              <div className="relative h-10 w-auto flex items-center">
                <img
                  src="/assets/logo_transparent.png"
                  alt="Dallas Detailing And Buffing Logo"
                  className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(214,40,40,0.4)]"
                  onError={(e) => {
                    // Fallback if image fails to render
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-brand-text group-hover:text-white transition-colors">
                  DALLAS DETAILING
                  <span className="text-brand-accent text-sm sm:text-base font-semibold block leading-none tracking-widest uppercase">
                    & Buffing
                  </span>
                </span>
                <span className="text-[10px] text-brand-muted uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-brand-accent inline" /> Addison, TX
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium text-brand-silver hover:text-white transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-brand-accent after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-silver hover:text-white px-3 py-2 rounded-lg border border-brand-border hover:border-brand-silver/40 transition-all bg-[#151518]/60"
                title="Call Dallas Detailing And Buffing"
              >
                <Phone className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                <span className="font-semibold">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={onQuoteClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-brand-accent to-brand-accentDeep rounded-lg shadow-glow-red hover:shadow-glow-red-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Get A Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="p-2 rounded-lg bg-[#151518] border border-brand-border text-brand-accent"
                aria-label="Call business"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#151518] border border-brand-border text-brand-text hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 right-4 left-4 max-w-sm ml-auto bg-[#151518] border border-brand-border rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-semibold text-brand-silver">
                  4.9★ Google Verified (270 Reviews)
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-muted hover:text-white p-1"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-brand-text hover:bg-[#1D1D21] hover:text-white font-medium text-sm transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-brand-muted" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-brand-border flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1D1D21] border border-brand-border text-white text-sm font-semibold hover:border-brand-silver/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accentDeep text-white text-sm font-bold uppercase tracking-wider shadow-glow-red hover:shadow-glow-red-lg transition-all"
              >
                Get A Detailing Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
