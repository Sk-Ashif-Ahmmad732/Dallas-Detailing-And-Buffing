# Dallas Detailing And Buffing — Production Website

A high-performance, conversion-optimized automotive detailing website built for **Dallas Detailing And Buffing** in Addison, Texas.

---

## 🌟 Key Features & Implementation Highlights

1. **Authentic Photographic Assets**
   - Extracted directly from the verified Google Maps listing PDF documentation.
   - Features actual storefront at 16284 Midway Rd (with the official phone number sign `214-400-7287` visible), real interior mineral dust transformations (referencing customer mining vehicle reviews), Corvette C8 paint buffing, Mazda CX-9 Soul Red gloss, and Ford Escape cabin detailing.
   - Formatted into modern **WebP** with high-resolution JPEG fallbacks.

2. **Official Business Identity & Color Palette**
   - Reconstructed authentic business graphic logo featuring the Dallas skyline (Reunion Tower neon silhouette) and aerodynamic chrome car profile.
   - **Primary Background:** `#0B0B0D`
   - **Secondary Background:** `#151518`
   - **Card Background:** `#1D1D21`
   - **Accent Red:** `#D62828` & **Deep Red:** `#9F1717`
   - **Metallic Silver:** `#C5C8CE`
   - **Light Contrast Section:** `#F3F3F4` (introduced in *Why Choose Us* for visual relief and readability)
   - **Typography:** Space Grotesk for bold automotive headings & Inter for body copy.

3. **Interactive Components**
   - **Sticky Navigation:** Glassmorphic navigation bar with scroll detection, telephone quick-dial, and mobile hamburger drawer.
   - **Cinematic Hero:** Features authentic interior and exterior photo toggles, primary quote CTA, direct phone link, and 4.9 Google rating pill.
   - **Verified Trust Strip:** Compact 4-column badge displaying 4.9/5 rating, 270 Google reviews, Addison location, and dedicated care.
   - **Interactive Before & After Slider:** Draggable split-view slider with keyboard arrow accessibility and touch support, documenting real limestone rock dust extraction.
   - **Filterable Work Gallery & Lightbox:** 12 authentic photos across Exterior, Interior, Paint Buffing, and Wheels, complete with fullscreen lightbox (Esc key, next/prev, zoom).
   - **Verified Reviews Section:** Exact quotes from Kevin Denhof, Kevin K, and Marlene Olmos with direct Google Maps search link.
   - **Quote & Booking Inquiry Form:** Accessible fields, automatic US phone formatting (`(214) 400-7287`), required consent check, anti-spam honeypot, service preselection sync, and transparent demo mode with copy summary and direct call triggers.
   - **Addison Location & Interactive Map:** 16284 Midway Rd address card, copy-address with feedback, responsive Google Maps embed, and verified schedule disclaimer.
   - **Accessible FAQ Accordion:** Expandable panels with verified answers.
   - **Floating Mobile Conversion Bar:** Pinned bottom bar for one-tap calling and quote submission on small screens.

4. **Local SEO & Accessibility**
   - Semantic HTML5 hierarchy (`<h1>` to `<h4>`).
   - JSON-LD Schema.org `AutoRepair` / `LocalBusiness` structured data.
   - Meta title, description, keywords, Open Graph, and Twitter Cards.
   - `sitemap.xml` and `robots.txt`.
   - WCAG-compliant color contrast ratios and visible keyboard focus rings.
   - `prefers-reduced-motion` media query support.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Asset Processing:** Pillow (Python 3.11) + PyMuPDF

---

## 🚀 Running Locally

### Development Server
```bash
npm run dev
```
The server will start at `http://localhost:3000/`.

### Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
├── client_assets/                 # Processed raw photographs from PDF
├── public/
│   ├── assets/                    # Web-optimized WebP and JPEG images + logo
│   │   ├── logo_transparent.png  # Reconstructed skyline + car graphic
│   │   ├── logo_dark.png         # High-res solid logo graphic
│   │   ├── alfa_romeo_stelvio_shop_front.webp
│   │   ├── nissan_front_interior_dirty_rockdust.webp
│   │   ├── nissan_front_interior_clean.webp
│   │   └── ... (20+ authentic assets)
│   ├── favicon.png                # Custom automotive favicon
│   ├── robots.txt                 # Search engine directives
│   └── sitemap.xml                # SEO sitemap
├── src/
│   ├── config/
│   │   └── businessInfo.ts        # Central verified business source of truth
│   ├── components/
│   │   ├── Header.tsx             # Sticky navigation & mobile drawer
│   │   ├── HeroSection.tsx        # Cinematic hero & photo switcher
│   │   ├── RatingStrip.tsx        # 4.9★ / 270 review badge strip
│   │   ├── AboutSection.tsx       # About narrative & shopfront photo
│   │   ├── ServicesSection.tsx    # 6 service cards with preselect triggers
│   │   ├── WhyChooseUsSection.tsx # Light contrast value proposition
│   │   ├── BeforeAfterSection.tsx # Interactive comparison slider
│   │   ├── GallerySection.tsx     # Filterable photo grid
│   │   ├── LightboxModal.tsx      # Fullscreen image viewer
│   │   ├── ReviewsSection.tsx     # Verified Google testimonials
│   │   ├── QuoteForm.tsx          # Validated inquiry form & demo handling
│   │   ├── ContactSection.tsx     # Addison map embed & contact controls
│   │   ├── FAQSection.tsx         # Accessible accordion
│   │   ├── FinalCTA.tsx           # Closing conversion banner
│   │   └── Footer.tsx             # Brand footer & privacy policy modal
│   ├── App.tsx                    # Main layout coordinator
│   ├── index.css                  # Design tokens, scrollbar, animations
│   └── main.tsx                   # React root entry
├── index.html                     # SEO metadata, Open Graph, & JSON-LD
├── tailwind.config.js             # Brand color system & fonts
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🔒 Verified Business Details Reference

- **Business Name:** Dallas Detailing And Buffing
- **Address:** 16284 Midway Rd, Addison, TX 75001, United States
- **Phone:** +1 214-400-7287 (`(214) 400-7287`)
- **Google Rating:** 4.9 out of 5 (270 reviews)
- **Schedule:** Opens at 8:00 AM (disclaimer included to confirm weekly schedule with business)
