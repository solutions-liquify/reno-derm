import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { clinic, doctors } from "@/data/clinic";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const siteUrl = "https://renoderm.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinic.fullName} | Dr. Vyoma Mehta Dholakia, Gota, Ahmedabad`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  keywords: [
    "dermatologist in Gota Ahmedabad",
    "nephrologist in Ahmedabad",
    "Dr. Vyoma Mehta Dholakia",
    "Dr. Akash Dholakia",
    "RenoDerm clinic",
    "skin clinic Ahmedabad",
    "kidney clinic Ahmedabad",
    "acne scar treatment Ahmedabad",
    "PRP hair treatment Ahmedabad",
    "dialysis doctor Ahmedabad",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: clinic.fullName,
    title: `${clinic.fullName} | Gota, Ahmedabad`,
    description: clinic.tagline,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: clinic.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: clinic.fullName,
    description: clinic.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.googleListingName,
  alternateName: clinic.fullName,
  description: clinic.description,
  url: siteUrl,
  telephone: clinic.phones[0].number.replace(/\s/g, ""),
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
    addressLocality: `${clinic.address.area}, ${clinic.address.city}`,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.pincode,
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.rating.value,
    reviewCount: clinic.rating.count,
    bestRating: 5,
  },
  medicalSpecialty: ["Dermatology", "Nephrology"],
  sameAs: [clinic.social.instagramClinic, clinic.social.instagramDoctor, clinic.maps.directions],
  employee: doctors.map((d) => ({
    "@type": "Physician",
    name: d.name,
    jobTitle: d.role,
    medicalSpecialty: d.speciality,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
