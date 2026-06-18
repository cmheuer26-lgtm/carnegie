import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RESTAURANT } from "@/lib/constants";

// NOTE: update NEXT_PUBLIC_SITE_URL (or this fallback) to the real production domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carnegiesaplacetoeat.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Carnegie's A Place To Eat | Greenfield, Indiana",
    template: "%s | Carnegie's",
  },
  description:
    "Set inside Greenfield's historic Carnegie Library, Carnegie's offers timeless New American dining — steaks, pasta, seafood, craft cocktails, and warm Indiana hospitality.",
  keywords: ["Carnegie's", "Greenfield Indiana restaurant", "fine dining", "Carnegie Library", "New American"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Carnegie's A Place To Eat",
    title: "Carnegie's A Place To Eat | Greenfield, Indiana",
    description: "Where history meets hospitality. Fine dining inside the historic Carnegie Library.",
    images: [{ url: "/exterior.jpg", alt: "Carnegie's — the historic Carnegie Library at night, Greenfield, Indiana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnegie's A Place To Eat | Greenfield, Indiana",
    description: "Where history meets hospitality. Fine dining inside the historic Carnegie Library.",
    images: ["/exterior.jpg"],
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT.name,
  telephone: RESTAURANT.phoneRaw,
  url: SITE_URL,
  image: `${SITE_URL}/exterior.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT.address.street,
    addressLocality: RESTAURANT.address.city,
    addressRegion: RESTAURANT.address.state,
    postalCode: RESTAURANT.address.zip,
    addressCountry: "US",
  },
  servesCuisine: ["American", "New American"],
  priceRange: RESTAURANT.priceRange,
  acceptsReservations: RESTAURANT.reservationUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
