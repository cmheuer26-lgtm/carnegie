import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "Carnegie's A Place To Eat | Greenfield, Indiana",
    template: "%s | Carnegie's Greenfield",
  },
  description:
    "Set inside Greenfield's historic Carnegie Library, Carnegie's offers a timeless New American dining experience. Steaks, pasta, seafood, craft cocktails. Reserve on OpenTable.",
  keywords: ["Carnegie's", "Greenfield Indiana restaurant", "fine dining Greenfield", "Carnegie Library restaurant", "New American restaurant Indiana"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Carnegie's A Place To Eat",
    title: "Carnegie's A Place To Eat | Greenfield, Indiana",
    description: "Where history meets hospitality. Fine dining inside the historic Carnegie Library.",
  },
  other: {
    "schema:Restaurant": JSON.stringify({
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
      geo: { "@type": "GeoCoordinates", latitude: RESTAURANT.coordinates.lat, longitude: RESTAURANT.coordinates.lng },
      servesCuisine: ["American", "New American", "Fine Dining"],
      priceRange: RESTAURANT.priceRange,
      acceptsReservations: RESTAURANT.reservationUrl,
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "11:00", closes: "21:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "22:00" },
      ],
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ background: "var(--color-cream)" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
