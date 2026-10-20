import React, { useState, useEffect } from 'react';
import { Send, Phone, CheckCircle, AlertCircle, Sparkles, Copy, Check, Clock, Calendar, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

interface QuoteFormProps {
  preselectedService?: string;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  makeModel: string;
  year: string;
  vehicleType: string;
  requestedService: string;
  vehicleCondition: string;
  preferredDate: string;
  additionalDetails: string;
  consent: boolean;
  honeypot: string; // anti-spam field
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    makeModel: '',
    year: '',
    vehicleType: '',
    requestedService: 'interior-detailing',
    vehicleCondition: '',
    preferredDate: '',
    additionalDetails: '',
    consent: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync preselectedService when triggered from service card CTA
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, requestedService: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    { value: 'interior-detailing', label: 'Interior Detailing' },
    { value: 'exterior-detailing', label: 'Exterior Detailing' },
    { value: 'paint-polishing-buffing', label: 'Paint Polishing and Buffing' },
    { value: 'scratch-removal-assessment', label: 'Scratch Removal Assessment' },
    { value: 'engine-bay-detailing', label: 'Engine Bay Detailing' },
    { value: 'headlight-additional-care', label: 'Headlight Cleaning' },
    { value: 'waxing', label: 'Waxing Application' },
    { value: 'overspray-removal', label: 'Paint Overspray Removal' },
    { value: 'other', label: 'Other / Not Sure (Need Consultation)' },
  ];

  const vehicleTypes = [
    'Sedan',
    'SUV / Crossover',
    'Truck / Pickup',
    'Coupe / Sports Car',
    'Van / Minivan',
    'Commercial / Work Vehicle',
    'Other'
  ];

  const vehicleConditions = [
    'Light dust & regular maintenance',
    'Moderate everyday dirt / family use',
    'Heavy soiling / mineral or rock dust',
    'Stained upholstery / deep extraction needed',
    'Paint swirls or surface scratches to assess'
  ];

  // Simple US phone number formatter (e.g. (214) 400-7287)
  const formatPhoneNumber = (val: string) => {
    const cleaned = val.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    // Full name required
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Phone required & US validation (at least 10 digits)
    const digits = formData.phone.replace(/\D/g, '');
    if (!digits) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (digits.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit telephone number.';
    }

    // Optional email validation
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Requested service required
    if (!formData.requestedService) {
      newErrors.requestedService = 'Please select a requested service.';
    }

    // Consent required
    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted regarding this detailing inquiry.';
    }

    // Honeypot anti-spam check
    if (formData.honeypot) {
      newErrors.fullName = 'Spam submission detected.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission handling in transparent demo mode
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const generateSummaryText = () => {
    const selectedServiceLabel = serviceOptions.find(s => s.value === formData.requestedService)?.label || formData.requestedService;
    return `DALLAS DETAILING AND BUFFING INQUIRY:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Vehicle: ${formData.year ? formData.year + ' ' : ''}${formData.makeModel || 'Not specified'} (${formData.vehicleType || 'Type not specified'})
Service Requested: ${selectedServiceLabel}
Condition: ${formData.vehicleCondition || 'Not specified'}
Preferred Date: ${formData.preferredDate || 'Flexible'}
Details: ${formData.additionalDetails || 'None'}`;
  };

  const handleCopySummary = () => {
    const text = generateSummaryText();
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      makeModel: '',
      year: '',
      vehicleType: '',
      requestedService: 'interior-detailing',
      vehicleCondition: '',
      preferredDate: '',
      additionalDetails: '',
      consent: false,
      honeypot: '',
    });
    setErrors({});
  };

  return (
    <section id="quote-form" className="relative py-20 sm:py-28 bg-[#0B0B0D] border-t border-brand-border">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D1D21] border border-brand-border text-xs font-bold uppercase tracking-wider text-brand-silver mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>START YOUR INQUIRY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            LET'S TALK ABOUT <br />
            <span className="text-gradient-red">YOUR VEHICLE.</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
            Tell us what your vehicle needs, and contact our team to discuss the appropriate detailing options and pricing.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl p-1 bg-gradient-to-b from-brand-border via-brand-card to-brand-border/40 shadow-2xl">
          <div className="bg-[#151518] rounded-2xl p-6 sm:p-10 border border-brand-border/60">
            
            {/* Success State */}
            {isSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-glow-red">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Inquiry Details Prepared!
                </h3>

                <p className="text-sm text-brand-silver max-w-lg mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Since pricing and scheduling are customized for each vehicle, you can connect directly with Wilson and the team at Dallas Detailing And Buffing.
                </p>

                {/* Direct Telephone Action */}
                <div className="max-w-md mx-auto p-4 rounded-xl bg-[#1D1D21] border border-brand-border mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-xs text-brand-muted block font-medium">Direct Telephone Line</span>
                    <span className="text-base font-bold text-white">{BUSINESS_INFO.phoneDisplay}</span>
                  </div>

                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-accent to-brand-accentDeep text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-glow-red transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>

                {/* Copy Summary or New Inquiry */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleCopySummary}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1D1D21] hover:bg-[#25252b] border border-brand-border text-xs font-semibold text-brand-silver hover:text-white transition-colors"
                  >
                    {copiedSummary ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-brand-silver" />}
                    <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 text-xs font-semibold text-brand-muted hover:text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>

                {/* Transparent Notice */}
                <div className="mt-8 pt-4 border-t border-brand-border/60 text-xs text-brand-muted max-w-lg mx-auto leading-relaxed">
                  <p>
                    <strong className="text-brand-silver">Demonstration Mode Notice:</strong> In accordance with our security principles, this demo application prepares your inquiry locally. No unverified third-party email routing is executed without verified SMTP server configuration.
                  </p>
                </div>
              </div>
            ) : (
              /* Actual Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Honeypot hidden field for anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_url_check"
                    value={formData.honeypot}
                    onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Row 1: Name and Phone (Required) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Full Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, fullName: e.target.value }));
                        if (errors.fullName) setErrors(prev => ({ ...prev, fullName: undefined }));
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border text-white text-sm placeholder:text-brand-muted/50 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-brand-accent focus:border-brand-accent' : 'border-brand-border focus:border-brand-silver'
                      }`}
                      required
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-brand-accent flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Phone Number <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="(214) 000-0000"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border text-white text-sm placeholder:text-brand-muted/50 focus:outline-none transition-colors ${
                        errors.phone ? 'border-brand-accent focus:border-brand-accent' : 'border-brand-border focus:border-brand-silver'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-brand-accent flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email (Optional) and Requested Service (Required) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Email Address <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                      }}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border text-white text-sm placeholder:text-brand-muted/50 focus:outline-none transition-colors ${
                        errors.email ? 'border-brand-accent focus:border-brand-accent' : 'border-brand-border focus:border-brand-silver'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-brand-accent flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="requestedService" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Requested Service <span className="text-brand-accent">*</span>
                    </label>
                    <select
                      id="requestedService"
                      name="requestedService"
                      value={formData.requestedService}
                      onChange={(e) => setFormData(prev => ({ ...prev, requestedService: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-brand-border text-white text-sm focus:border-brand-silver focus:outline-none transition-colors"
                      required
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#1D1D21] text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Vehicle Make/Model, Year, and Type (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="makeModel" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Vehicle Make & Model <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="makeModel"
                      name="makeModel"
                      value={formData.makeModel}
                      onChange={(e) => setFormData(prev => ({ ...prev, makeModel: e.target.value }))}
                      placeholder="e.g. Ford Escape / Tacoma"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-brand-border text-white text-sm placeholder:text-brand-muted/50 focus:border-brand-silver focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Year <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      placeholder="e.g. 2021"
                      maxLength={4}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-brand-border text-white text-sm placeholder:text-brand-muted/50 focus:border-brand-silver focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicleType" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Vehicle Type <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={(e) => setFormData(prev => ({ ...prev, vehicleType: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-brand-border text-white text-sm focus:border-brand-silver focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#1D1D21] text-brand-muted">Select vehicle type</option>
                      {vehicleTypes.map((vt) => (
                        <option key={vt} value={vt} className="bg-[#1D1D21] text-white">
                          {vt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Vehicle Condition & Preferred Date (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vehicleCondition" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Current Vehicle Condition <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                    </label>
                    <select
                      id="vehicleCondition"
                      name="vehicleCondition"
                      value={formData.vehicleCondition}
                      onChange={(e) => setFormData(prev => ({ ...prev, vehicleCondition: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-brand-border text-white text-sm focus:border-brand-silver focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#1D1D21] text-brand-muted">Describe current condition</option>
                      {vehicleConditions.map((vc) => (
                        <option key={vc} value={vc} className="bg-[#1D1D21] text-white">
                          {vc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                      Preferred Date <span className="text-brand-muted text-[10px] font-normal">(Inquiry only, not confirmed booking)</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-brand-border text-white text-sm focus:border-brand-silver focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 5: Additional Details */}
                <div>
                  <label htmlFor="additionalDetails" className="block text-xs font-bold uppercase tracking-wider text-brand-silver mb-2">
                    Additional Details or Questions <span className="text-brand-muted text-[10px] font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    rows={3}
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalDetails: e.target.value }))}
                    placeholder="Tell us about specific stains, scratch locations, mineral dust, or anything you'd like our team to inspect..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-brand-border text-white text-sm placeholder:text-brand-muted/50 focus:border-brand-silver focus:outline-none transition-colors"
                  />
                </div>

                {/* Consent Checkbox (Required) */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, consent: e.target.checked }));
                        if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined }));
                      }}
                      className="mt-1 w-4 h-4 rounded border-brand-border bg-[#0B0B0D] text-brand-accent focus:ring-brand-accent cursor-pointer"
                      required
                    />
                    <span className="text-xs text-brand-silver leading-relaxed group-hover:text-white transition-colors">
                      I agree to be contacted by Dallas Detailing And Buffing regarding this detailing inquiry. I understand submitting this form does not confirm an appointment or guarantee pricing until assessed with the business. <span className="text-brand-accent">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1.5 text-xs text-brand-accent flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accentDeep text-white text-sm sm:text-base font-bold uppercase tracking-wider shadow-glow-red hover:shadow-glow-red-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT DETAILING INQUIRY</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Notice below button */}
                <p className="text-[11px] text-center text-brand-muted leading-relaxed">
                  Prefer direct phone conversation? Call us now at{' '}
                  <a href={BUSINESS_INFO.phoneTel} className="text-brand-accent hover:underline font-bold">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  . We will be happy to discuss your car.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
