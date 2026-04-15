import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
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
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: RESTAURANT.name,
      telephone: RESTAURANT.phoneRaw,
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
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
