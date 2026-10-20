import React, { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './config/businessInfo';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RatingStrip } from './components/RatingStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { QuoteForm } from './components/QuoteForm';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [preselectedService, setPreselectedService] = useState<string>('interior-detailing');

  const scrollToQuote = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    }
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F7F7F8] flex flex-col selection:bg-brand-accent selection:text-white relative">
      {/* Sticky Header */}
      <Header onQuoteClick={() => scrollToQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <HeroSection onQuoteClick={() => scrollToQuote()} />

        {/* 2. Verified Trust & Google Rating Strip */}
        <RatingStrip />

        {/* 3. About Section */}
        <AboutSection onQuoteClick={() => scrollToQuote()} />

        {/* 4. Detailing Services Grid */}
        <ServicesSection onSelectService={(id) => scrollToQuote(id)} />

        {/* 5. Why Choose Us (Light contrast section) */}
        <WhyChooseUsSection onQuoteClick={() => scrollToQuote()} />

        {/* 6. Authentic Before & After Comparison */}
        <BeforeAfterSection />

        {/* 7. Authentic Work Photo Gallery with Lightbox */}
        <GallerySection />

        {/* 8. Verified Google Reviews */}
        <ReviewsSection />

        {/* 9. Booking and Quote Inquiry Form */}
        <QuoteForm preselectedService={preselectedService} />

        {/* 10. Addison Location & Working Contact Actions */}
        <ContactSection />

        {/* 11. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 12. Final Call to Action */}
        <FinalCTA onQuoteClick={() => scrollToQuote()} />
      </main>

      {/* Footer */}
      <Footer onSelectService={(id) => scrollToQuote(id)} />

      {/* Floating Mobile Conversion Bar */}
      <div className="fixed bottom-3 left-3 right-3 z-30 sm:hidden flex items-center gap-2 p-2 rounded-2xl bg-[#151518]/95 backdrop-blur-xl border border-brand-border/80 shadow-2xl animate-fade-in">
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1D1D21] border border-brand-border text-white text-xs font-bold active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-brand-accent" />
          <span>Call (214) 400-7287</span>
        </a>

        <button
          onClick={() => scrollToQuote()}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accentDeep text-white text-xs font-bold uppercase tracking-wider shadow-glow-red active:scale-95 transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
};

export default App;
