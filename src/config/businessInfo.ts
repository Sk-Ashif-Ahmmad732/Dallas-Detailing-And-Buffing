export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge?: string;
  tag: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  carOrNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'paint' | 'wheels';
  image: string;
  webpImage: string;
  caption: string;
  aspect?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  vehicle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  initialSliderPos: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Dallas Detailing And Buffing",
  shortName: "Dallas Detailing",
  category: "Car detailing service",
  rating: 4.9,
  ratingMax: 5.0,
  reviewCount: 270,
  phone: "+1 214-400-7287",
  phoneDisplay: "(214) 400-7287",
  phoneTel: "tel:+12144007287",
  address: "16284 Midway Rd, Addison, TX 75001, United States",
  addressStreet: "16284 Midway Rd",
  addressCity: "Addison",
  addressState: "TX",
  addressZip: "75001",
  addressCountry: "United States",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Dallas+Detailing+And+Buffing%2C+16284+Midway+Rd%2C+Addison%2C+TX+75001",
  // Per prompt: The supplied Facebook URL is a general Facebook domain, not a verified business-specific profile.
  // Make the social media link configurable and hide it until the correct business URL is supplied.
  facebookUrl: "", 
  openingNote: "Listing indicates 8:00 AM opening. Please contact us directly to confirm current hours, service availability, and pricing.",
  disclaimerNote: "Service availability and pricing are assessed per vehicle and condition. Please call to confirm quotes.",
  coordinates: {
    lat: 32.9725393,
    lng: -96.8425936
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    shortDesc: "Give your vehicle's interior the attention it needs.",
    fullDesc: "Give your vehicle's interior the attention it needs. Ask about interior cleaning options for seats, carpets, upholstery, and other interior surfaces.",
    image: "/assets/interior_ford_escape_rear_cabin.webp",
    badge: "Popular Inquiry",
    tag: "Interior",
    features: [
      "Fabric upholstery & carpet deep cleaning",
      "Leather seating surface care & wipe-down",
      "Stain & mineral dust treatment inquiry",
      "Dashboard, console, & interior trim attention"
    ]
  },
  {
    id: "exterior-detailing",
    title: "Exterior Detailing",
    shortDesc: "Improve the cleanliness and overall appearance of your vehicle.",
    fullDesc: "Explore exterior detailing options designed to improve the cleanliness and overall appearance of your vehicle.",
    image: "/assets/alfa_romeo_stelvio_shop_front.webp",
    badge: "Frontline Care",
    tag: "Exterior",
    features: [
      "Thorough exterior wash & surface decontamination",
      "Wheel, rim, & tire cleaning and dressing",
      "Trim revival & glass cleaning",
      "Protective finish applications upon inquiry"
    ]
  },
  {
    id: "paint-polishing-buffing",
    title: "Paint Polishing and Buffing",
    shortDesc: "Enhance paint clarity and address suitable surface imperfections.",
    fullDesc: "Ask about polishing and buffing options for improving paint appearance and addressing suitable surface imperfections.",
    image: "/assets/mazda_cx9_soul_red_buffing_gloss.webp",
    badge: "Signature Finish",
    tag: "Paint Correction",
    features: [
      "Machine buffing & multi-stage polish inquiry",
      "Dull paint gloss enhancement",
      "Surface swirl mark reduction assessment",
      "High-depth mirror reflection finish"
    ]
  },
  {
    id: "scratch-removal-assessment",
    title: "Scratch Removal Assessment",
    shortDesc: "Professional evaluation of clear coat marks and surface scratches.",
    fullDesc: "Have visible scratches assessed to understand which detailing or paint-care options may be appropriate. (Results depend on scratch depth and clear coat thickness).",
    image: "/assets/paint_reflection_mirror_gloss.webp",
    badge: "Assessment",
    tag: "Paint Evaluation",
    features: [
      "Visual assessment of scratch depth & clear coat",
      "Targeted compounding & polishing consultation",
      "Transparent recommendations for realistic results",
      "No inflated promises—honest professional advice"
    ]
  },
  {
    id: "engine-bay-detailing",
    title: "Engine Bay Detailing",
    shortDesc: "Engine compartment cleaning tailored to your vehicle's condition.",
    fullDesc: "Ask about engine bay cleaning and detailing options for your vehicle. (Suitability and cleaning method depend on vehicle age, components, and condition).",
    image: "/assets/corvette_c8_emblem_hood_gloss.webp",
    badge: "Specialty",
    tag: "Engine Care",
    features: [
      "Under-hood grime & loose debris removal inquiry",
      "Component-sensitive inspection & surface cleaning",
      "Dressing of visible plastic & rubber engine trim",
      "Vehicle-specific suitability evaluation"
    ]
  },
  {
    id: "headlight-additional-care",
    title: "Headlight Cleaning & Additional Care",
    shortDesc: "Restore clarity to oxidized lenses, wax applications, and overspray removal.",
    fullDesc: "Contact the team to ask about headlight cleaning, waxing, paint overspray removal, and other available detailing services.",
    image: "/assets/bmw_wheel_detailing_tire_dressing.webp",
    badge: "Restoration",
    tag: "Add-Ons",
    features: [
      "Oxidized & cloudy headlight lens restoration inquiry",
      "Protective wax applications for enhanced shine",
      "Industrial paint overspray removal assessment",
      "Custom surface attention based on vehicle needs"
    ]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: "nissan-front-cabin",
    title: "Front Cabin Mineral Dust Extraction",
    description: "Nissan Altima front cabin documented before and after comprehensive interior extraction. The vehicle had accumulated heavy rock dust and mineral deposits from industrial work environments.",
    vehicle: "Work Vehicle — Heavy Mineral Dust Case",
    beforeImage: "/assets/nissan_front_interior_dirty_rockdust.webp",
    afterImage: "/assets/nissan_front_interior_clean.webp",
    beforeLabel: "Before: Heavy Mineral Dust",
    afterLabel: "After: Detailed & Restored",
    initialSliderPos: 50
  },
  {
    id: "nissan-rear-bench",
    title: "Rear Seat Bench & Carpet Restoration",
    description: "Rear passenger bench and floor carpets caked in dense limestone dust deposits, shown alongside the detailed outcome with clean upholstery and vacuum finish.",
    vehicle: "Rear Cabin — Heavy Soil Extraction",
    beforeImage: "/assets/nissan_rear_interior_dirty_rockdust.webp",
    afterImage: "/assets/nissan_rear_interior_clean_stripes.webp",
    beforeLabel: "Before: Soiled Fabric",
    afterLabel: "After: Cleaned & Vacuum Striped",
    initialSliderPos: 50
  },
  {
    id: "tan-rear-upholstery",
    title: "Light Upholstery & Armrest Soil Cleaning",
    description: "Light tan cloth seats with dark surface staining and soiled fold-down armrest, compared with the cleaned and refreshed fabric condition.",
    vehicle: "Sedan — Light Fabric Stain Assessment",
    beforeImage: "/assets/tan_rear_seat_armrest_stained.webp",
    afterImage: "/assets/interior_tan_rear_clean_full.webp",
    beforeLabel: "Before: Fabric Stains",
    afterLabel: "After: Cleaned Fabric",
    initialSliderPos: 50
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Alfa Romeo Stelvio at Addison Shop",
    category: "exterior",
    image: "/assets/alfa_romeo_stelvio_shop_front.jpg",
    webpImage: "/assets/alfa_romeo_stelvio_shop_front.webp",
    caption: "Red Alfa Romeo Stelvio parked outside the Dallas Detailing And Buffing facility at 16284 Midway Rd.",
    aspect: "portrait"
  },
  {
    id: "gal-2",
    title: "Ford Escape SUV Rear Cabin & Leather Care",
    category: "interior",
    image: "/assets/interior_ford_escape_rear_cabin.jpg",
    webpImage: "/assets/interior_ford_escape_rear_cabin.webp",
    caption: "Spotless rear passenger cabin, conditioned leather seats, and detailed door jambs.",
    aspect: "landscape"
  },
  {
    id: "gal-3",
    title: "Mazda CX-9 Soul Red Crystal Buffing",
    category: "paint",
    image: "/assets/mazda_cx9_soul_red_buffing_gloss.jpg",
    webpImage: "/assets/mazda_cx9_soul_red_buffing_gloss.webp",
    caption: "Deep multi-layer gloss and clarity achieved through machine polishing and paint buffing.",
    aspect: "landscape"
  },
  {
    id: "gal-4",
    title: "Corvette C8 Sebring Orange Detailed Angle",
    category: "exterior",
    image: "/assets/corvette_c8_orange_front_angle.jpg",
    webpImage: "/assets/corvette_c8_orange_front_angle.webp",
    caption: "High-performance Chevrolet Corvette C8 receiving exterior detail and paint care.",
    aspect: "portrait"
  },
  {
    id: "gal-5",
    title: "Precision Cargo Area Vacuum Striping",
    category: "interior",
    image: "/assets/ford_escape_trunk_vacuum_lines.jpg",
    webpImage: "/assets/ford_escape_trunk_vacuum_lines.webp",
    caption: "Immaculate trunk cargo carpet with clean diagonal vacuum striping.",
    aspect: "landscape"
  },
  {
    id: "gal-6",
    title: "BMW Multi-Spoke Wheel & Tire Dressing",
    category: "wheels",
    image: "/assets/bmw_wheel_detailing_tire_dressing.jpg",
    webpImage: "/assets/bmw_wheel_detailing_tire_dressing.webp",
    caption: "Brake dust decontamination, inner barrel clean, and satin rubber dressing.",
    aspect: "landscape"
  },
  {
    id: "gal-7",
    title: "Mirror Gloss Paint Reflection",
    category: "paint",
    image: "/assets/paint_reflection_mirror_gloss.jpg",
    webpImage: "/assets/paint_reflection_mirror_gloss.webp",
    caption: "Crystal-clear optical reflection on finished door panel after machine buffing.",
    aspect: "landscape"
  },
  {
    id: "gal-8",
    title: "Corvette C8 Rear Decklid & Aero Gloss",
    category: "paint",
    image: "/assets/corvette_c8_rear_spoiler_reflection.jpg",
    webpImage: "/assets/corvette_c8_rear_spoiler_reflection.webp",
    caption: "Sharp contour reflections along Corvette rear spoiler and engine decklid.",
    aspect: "landscape"
  },
  {
    id: "gal-9",
    title: "Clean Front Cabin with Floor Protectors",
    category: "interior",
    image: "/assets/ford_escape_front_cabin_leather.jpg",
    webpImage: "/assets/ford_escape_front_cabin_leather.webp",
    caption: "Clean driver seat, pedals, instrument cluster, and protective floor liners.",
    aspect: "landscape"
  },
  {
    id: "gal-10",
    title: "Black RAM Heavy Duty Exterior Clean",
    category: "exterior",
    image: "/assets/ram_truck_exterior_black.jpg",
    webpImage: "/assets/ram_truck_exterior_black.webp",
    caption: "Full exterior detail on a dual-rear-wheel heavy duty pickup truck.",
    aspect: "landscape"
  },
  {
    id: "gal-11",
    title: "Luxury Mercedes Leather Seating Clean",
    category: "interior",
    image: "/assets/luxury_interior_mercedes_leather.jpg",
    webpImage: "/assets/luxury_interior_mercedes_leather.webp",
    caption: "Premium leather passenger seating, speaker grilles, and rear climate vents.",
    aspect: "portrait"
  },
  {
    id: "gal-12",
    title: "Black Toyota Avalon Sedan Detail",
    category: "exterior",
    image: "/assets/toyota_avalon_exterior_black.jpg",
    webpImage: "/assets/toyota_avalon_exterior_black.webp",
    caption: "Deep jet-black paint finish with high front-fascia gloss.",
    aspect: "landscape"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Kevin Denhof",
    rating: 5,
    text: "Our son used our vehicle for work driving through limestone mines in Missouri for years. The vehicle was caked from top to bottom in rock dust and dirt, both inside and outside. Wilson and his team did a phenomenal job not just cleaning the car up, but making it look virtually brand new.",
    carOrNote: "Verified Google Review"
  },
  {
    id: "rev-2",
    author: "Kevin K",
    rating: 5,
    text: "Had my Tacoma detailed yesterday. Long story short it turned out beautiful. Wilson and his team did an amazing job.",
    carOrNote: "Verified Google Review"
  },
  {
    id: "rev-3",
    author: "Marlene Olmos",
    rating: 5,
    text: "Wilson and team did an awesome job! They removed very deep scratches on my car for a fair price.",
    carOrNote: "Verified Google Review"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What services does Dallas Detailing And Buffing offer?",
    answer: "Customers can inquire about interior deep cleaning, exterior vehicle detailing, machine paint polishing and buffing, scratch removal assessments, engine bay detailing, headlight restoration, waxing, and paint overspray removal."
  },
  {
    question: "How much does car detailing cost?",
    answer: "Pricing depends on vehicle size, paint condition, upholstery materials, and the specific work requested. Please call (214) 400-7287 or submit an inquiry to discuss your vehicle and get an accurate quote."
  },
  {
    question: "Can you help with heavily soiled interiors?",
    answer: "Yes. From everyday dirt and pet hair to heavily soiled upholstery or industrial mineral dust, describe your vehicle's condition to our team and we will recommend the appropriate cleaning and extraction options."
  },
  {
    question: "Can all scratches be removed?",
    answer: "Results depend on scratch depth, whether the mark penetrates through the clear coat into the primer or paint, and the overall paint thickness. We recommend bringing your vehicle in for a hands-on assessment to determine what level of improvement is safely possible."
  },
  {
    question: "How do I make an appointment?",
    answer: "You can call us directly at +1 214-400-7287 or submit the inquiry form on this website. Please note that submitting an online inquiry initiates a conversation with our team and does not automatically confirm an appointment."
  },
  {
    question: "Where are you located?",
    answer: "We are located at 16284 Midway Rd, Addison, TX 75001, United States. You can find directions using our interactive map button or Google Maps navigation."
  },
  {
    question: "What are your opening hours?",
    answer: "Available business information indicates that the business opens at 8:00 AM. Because a complete weekly schedule is not published on the listing, we kindly ask customers to contact us directly to confirm current hours and availability."
  }
];
