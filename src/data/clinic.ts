/**
 * Single source of truth for everything shown on the site.
 * Collected from the clinic's Google Business Profile, Instagram
 * (@renodermclinic, @drvyoma_dermatologist) and LinkedIn listings.
 */

export const clinic = {
  name: "RenoDerm",
  fullName: "RenoDerm – Kidney & Skin Clinic",
  googleListingName:
    "Renoderm skin and kidney clinic - Dr. Vyoma Mehta Dholakia",
  tagline: "Specialised kidney & skin care, under one roof.",
  description:
    "RenoDerm is a specialist clinic in Gota, Ahmedabad bringing together a board-certified dermatologist and a consultant nephrologist so that your skin, hair, nail and kidney concerns are cared for by the right expert, in one place.",
  address: {
    line1: "112, Anand Sapphire",
    line2: "Opp. Vishwas City-7, Opp. Anutham Apartment",
    area: "Gota",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "382481",
    full: "112, Anand Sapphire, Opp. Vishwas City-7, Opp. Anutham Apartment, Gota, Ahmedabad, Gujarat 382481",
  },
  phones: [
    { label: "Appointments", number: "+91 94266 87022", href: "tel:+919426687022" },
    { label: "Enquiry", number: "+91 98799 43023", href: "tel:+919879943023" },
  ],
  whatsapp:
    "https://wa.me/919426687022?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20RenoDerm.",
  email: "drvyoma95@gmail.com",
  hours: {
    clinic: "Mon – Sat, 3:30 PM – 8:00 PM · Sunday by appointment",
    note: "Sunday consultations are on an appointment basis. Call or WhatsApp to confirm a slot.",
    /** Per-doctor consulting hours, Monday to Saturday. */
    schedule: [
      {
        doctor: "Dr. Vyoma Mehta Dholakia",
        speciality: "Dermatology",
        days: "Mon – Sat",
        time: "3:30 PM – 8:00 PM",
        short: "Mon–Sat · 3:30–8 PM",
      },
      {
        doctor: "Dr. Akash Dholakia",
        speciality: "Nephrology",
        days: "Mon – Sat",
        time: "6:00 PM – 8:00 PM",
        short: "Mon–Sat · 6–8 PM",
      },
    ],
    sunday: "Appointment basis",
  },
  rating: { value: 5.0, count: 29, source: "Google" },
  maps: {
    directions: "https://maps.google.com/?cid=11094565210879821662",
    embed:
      "https://www.google.com/maps?q=Renoderm+skin+and+kidney+clinic+Dr.+Vyoma+Mehta+Dholakia,+Anand+Sapphire,+Gota,+Ahmedabad+382481&z=16&output=embed",
  },
  social: {
    instagramClinic: "https://www.instagram.com/renodermclinic/",
    instagramDoctor: "https://www.instagram.com/drvyoma_dermatologist/",
    googleReviews: "https://maps.google.com/?cid=11094565210879821662",
  },
} as const;

/** Brand assets served from /public/brand (logo and Instagram QR). */
export const brand = {
  logo: { src: "/brand/logo.png", width: 1024, height: 1024 },
  logoMark: { src: "/brand/logo-mark.png", width: 640, height: 555 },
  instagramQr: {
    image: { src: "/brand/instagram-qr-v2.png", width: 561, height: 587 },
    handle: "@renodermclinic",
  },

} as const;

export type Doctor = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  degrees: string;
  speciality: "Dermatology" | "Nephrology";
  bio: string;
  highlights: string[];
  training: string[];
  instagram?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-vyoma-mehta-dholakia",
    name: "Dr. Vyoma Mehta Dholakia",
    initials: "VM",
    role: "Consultant Dermatologist & Cosmetologist",
    degrees: "M.D. (Skin & V.D.)",
    speciality: "Dermatology",
    bio: "A board-certified dermatologist known for listening first and explaining clearly, Dr. Vyoma treats medical, surgical and aesthetic skin concerns with a practical, evidence-led approach. Patients repeatedly mention how comfortable and well-informed they feel through every stage of treatment.",
    highlights: [
      "Board-certified dermatologist",
      "Medical, surgical & aesthetic dermatology",
      "Acne scar subcision, PRP & microneedling",
      "Nail surgery and skin biopsies",
    ],
    training: [
      "M.D. Dermatology, Venereology & Leprosy",
      "GMERS Medical College, Ahmedabad",
    ],
    instagram: "https://www.instagram.com/drvyoma_dermatologist/",
  },
  {
    slug: "dr-akash-dholakia",
    name: "Dr. Akash Dholakia",
    initials: "AD",
    role: "Consultant Nephrologist & Kidney Transplant Physician",
    degrees: "M.D. (General Medicine), DrNB (Nephrology)",
    speciality: "Nephrology",
    bio: "Dr. Akash manages the full spectrum of kidney disease, from early hypertension and diabetes-related kidney risk through chronic kidney disease, dialysis and transplant care. He trained at Muljibhai Patel Urological Hospital (MPUH), Nadiad, one of India's leading kidney institutes.",
    highlights: [
      "Chronic kidney disease & dialysis care",
      "Acute kidney injury & glomerular diseases",
      "Kidney transplant physician",
      "Hypertension & diabetes kidney protection",
    ],
    training: [
      "DrNB Nephrology, Muljibhai Patel Urological Hospital, Nadiad",
      "M.D. General Medicine",
    ],
  },
];

export type Service = {
  title: string;
  desc: string;
  icon: string; // lucide icon name
};

export type ServiceGroup = {
  heading: string;
  doctor: string;
  intro: string;
  /** Sub-groups shown under one tab, e.g. medical vs aesthetic dermatology. */
  sections: { title: string; items: Service[] }[];
};

/** Services as printed on the clinic's service board and Dr. Akash's practice poster. */
export const services: Record<"dermatology" | "nephrology", ServiceGroup> = {
  dermatology: {
    heading: "Dermatology",
    doctor: "Dr. Vyoma Mehta Dholakia",
    intro:
      "Medical, surgical and aesthetic care for skin, hair and nails with Dr. Vyoma Mehta Dholakia, M.D. (Skin & V.D.).",
    sections: [
      {
        title: "Skin, hair & nail conditions",
        items: [
          { title: "Acne & Acne Scars", desc: "Active acne control, plus subcision, PRP and microneedling for scars.", icon: "Sparkles" },
          { title: "Pigmentation & Melasma", desc: "Evidence-based protocols to even out tone and prevent recurrence.", icon: "Sun" },
          { title: "Hair & Scalp Disorders", desc: "Hair fall, dandruff, alopecia and other scalp conditions.", icon: "Wind" },
          { title: "Skin Infections", desc: "Fungal, bacterial and viral infections treated at the root.", icon: "Bug" },
          { title: "Psoriasis & Eczema", desc: "Long-term control of chronic, flaring skin conditions.", icon: "ShieldCheck" },
          { title: "Mole / Wart / Skin Lesion Treatment", desc: "Safe removal of moles, warts, skin tags and other lesions.", icon: "CircleDot" },
          { title: "Nail Surgery", desc: "Ingrown toenail and other nail procedures, done gently.", icon: "Scissors" },
          { title: "Vitiligo Surgery", desc: "Surgical options for stable vitiligo patches.", icon: "Palette" },
          { title: "Earlobe Repair & Ear Piercing", desc: "Torn or stretched earlobe repair and sterile piercing.", icon: "Ear" },
          { title: "Minor Skin Procedures & Scar Revision", desc: "Cyst excision, skin biopsies and scar improvement.", icon: "Bandage" },
        ],
      },
      {
        title: "Aesthetic dermatology",
        items: [
          { title: "Botox", desc: "Softens fine lines and wrinkles for a refreshed look.", icon: "Syringe" },
          { title: "Dermal Fillers", desc: "Restores volume and contours lips, cheeks and under-eyes.", icon: "Droplets" },
          { title: "PRP", desc: "Platelet-rich plasma for hair regrowth and skin rejuvenation.", icon: "FlaskConical" },
          { title: "Hair Reduction", desc: "Laser hair reduction for smooth, lasting results.", icon: "Zap" },
          { title: "Microneedling", desc: "Collagen induction for scars, open pores and texture.", icon: "Layers" },
          { title: "Skin Boosters", desc: "Injectable hydration for glow and elasticity.", icon: "Gem" },
          { title: "Chemical Peels", desc: "Graded peels for tone, texture and radiance.", icon: "Feather" },
        ],
      },
    ],
  },
  nephrology: {
    heading: "Nephrology",
    doctor: "Dr. Akash Dholakia",
    intro:
      "Kidney care from early risk through dialysis and transplant, plus general medicine, with Dr. Akash Dholakia, M.D., DrNB (Nephrology).",
    sections: [
      {
        title: "Kidney care",
        items: [
          { title: "Kidney Disease", desc: "Early detection and comprehensive care for all kidney-related problems.", icon: "Activity" },
          { title: "Diabetes & Hypertension", desc: "Screening, treatment and long-term management to protect the kidneys.", icon: "HeartPulse" },
          { title: "Kidney Stones Consultation", desc: "Evaluation, prevention plans and metabolic work-up.", icon: "Hexagon" },
          { title: "Urinary & Renal Problems", desc: "Recurrent UTIs, blood or protein in urine and reduced urine output.", icon: "Droplet" },
          { title: "Dialysis / Transplant Consultation", desc: "Haemodialysis, peritoneal dialysis and pre- and post-transplant care.", icon: "RefreshCw" },
          { title: "Electrolyte & Mineral Disorders", desc: "Sodium, potassium, calcium and other electrolyte imbalances.", icon: "Beaker" },
        ],
      },
      {
        title: "General medicine",
        items: [
          { title: "Thyroid Disorders", desc: "Hypothyroidism, hyperthyroidism and related metabolic problems.", icon: "Scale" },
          { title: "Anemia & Nutritional Deficiencies", desc: "Iron, Vitamin B12, Vitamin D and other deficiencies.", icon: "Pill" },
          { title: "Fever & Infections", desc: "Viral and bacterial infections, dengue, malaria, typhoid, UTI and more.", icon: "Thermometer" },
          { title: "Respiratory Problems", desc: "Cough, cold, asthma, bronchitis and COPD.", icon: "Wind" },
          { title: "Digestive & Gastric Disorders", desc: "Acidity, gastritis, constipation, IBS and liver-function abnormalities.", icon: "Utensils" },
          { title: "Joint & Musculoskeletal Problems", desc: "Joint pain, arthritis, gout and back pain.", icon: "Bone" },
          { title: "Lifestyle & Metabolic Disorders", desc: "Obesity, high cholesterol and overall health optimisation.", icon: "Footprints" },
          { title: "Preventive Health Check-ups", desc: "General health screening and risk assessment.", icon: "ClipboardCheck" },
          { title: "Chronic Disease Follow-up", desc: "Long-term care for diabetes, hypertension, kidney and other chronic conditions.", icon: "Users" },
        ],
      },
    ],
  },
};

export const stats = [
  { value: 5.0, suffix: "", label: "Google rating", decimals: 1 },
  { value: 29, suffix: "+", label: "Five-star reviews", decimals: 0 },
  { value: 2, suffix: "", label: "Specialists, one roof", decimals: 0 },
  { value: 6, suffix: " days", label: "A week, Sundays by appointment", decimals: 0 },
];

export type Review = { name: string; when: string; text: string; tag: string };

export const reviews: Review[] = [
  {
    name: "Shreya Singh",
    when: "3 months ago",
    tag: "Toenail treatment",
    text: "From the very first consultation, she made me feel comfortable, listened patiently to my concerns, and explained everything in a way that was easy to understand. The entire experience, from consultation to follow-up, was professional, reassuring, and personalized.",
  },
  {
    name: "Patel Meet",
    when: "2 months ago",
    tag: "Acne scars · Subcision + PRP",
    text: "I was suffering with severe and deep acne scars. Despite multiple therapies the scars remained the same. Dr. Vyoma advised subcision, and within one session I could literally see the difference along with the PRP and Dermapen treatment. The results are wonderful.",
  },
  {
    name: "Ayushi Rajvanshi",
    when: "5 months ago",
    tag: "Dermatology",
    text: "Hands down the best dermat you can find! She is very well skilled and has good knowledge in the field. She is also patient and listens to problems carefully and provides resolution for the same. Must visit!",
  },
  {
    name: "Mamta Arora",
    when: "3 months ago",
    tag: "Family care",
    text: "Dr. Vyoma Mehta is an excellent dermatologist. She has treated me, my son, and other members of my family, and we have seen great results. She is knowledgeable, patient, and genuinely cares about her patients.",
  },
  {
    name: "Meet Patel",
    when: "4 months ago",
    tag: "Nail surgery",
    text: "I recently had my toenail removal surgery conducted by Dr. Vyoma Mehta. I truly appreciate her job as she never made me feel in pain. She was well composed and completed the surgery without any complications.",
  },
  {
    name: "Komal Dholakia",
    when: "5 months ago",
    tag: "Consultation",
    text: "Dr. Vyoma is a very kind and intelligent dermatologist. She listened carefully, answered all my questions, and made me feel at ease throughout my visit. I have never felt more comfortable discussing my health concerns.",
  },
  {
    name: "Bijal Patel",
    when: "5 months ago",
    tag: "Hair treatment",
    text: "I am extremely happy with the results. Dr. Vyoma is friendly and highly knowledgeable. I got treatment for hair dryness and it is effective.",
  },
  {
    name: "Dr. Janki Dave",
    when: "5 months ago",
    tag: "Skin treatment",
    text: "Really nice doctor! Very polite. Got very nice results for my skin.",
  },
];

export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Yes. Dr. Vyoma (dermatology) consults Monday to Saturday, 3:30 PM to 8:00 PM, and Dr. Akash (nephrology) Monday to Saturday, 6:00 PM to 8:00 PM. Sundays are on an appointment basis. Call or WhatsApp us and we will confirm a slot, usually the same or next day.",
  },
  {
    q: "Can I see both doctors in one visit?",
    a: "Absolutely. That is the whole idea behind RenoDerm. Skin problems in kidney patients, medication-related rashes or metabolic issues can be reviewed by both specialists during a single visit.",
  },
  {
    q: "Which kidney tests should I bring?",
    a: "Bring any recent serum creatinine, eGFR, urine routine, urine protein and ultrasound reports along with your current medicine list. If you have none, we will advise the right tests on your first visit.",
  },
  {
    q: "Are aesthetic procedures done at the clinic?",
    a: "Yes. Chemical peels, PRP, microneedling, subcision, skin boosters, glutathione drips and minor surgeries such as nail, wart and mole removal are performed in-clinic by Dr. Vyoma.",
  },
  {
    q: "Is online consultation available?",
    a: "Online follow-ups and second opinions are available for suitable cases. Message us on Instagram or WhatsApp to arrange one.",
  },
  {
    q: "Where exactly is the clinic?",
    a: "112, Anand Sapphire, opposite Vishwas City-7 and Anutham Apartment in Gota, Ahmedabad 382481. Use the Directions button on this page for turn-by-turn navigation.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
