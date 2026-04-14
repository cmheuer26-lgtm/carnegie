import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";
import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description: "Contact Carnegie's in Greenfield, Indiana. Reserve a table on OpenTable or call (317) 462-8480.",
};

export default function ContactPage() {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(RESTAURANT.address.full)}`;

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{
          minHeight: "40vh",
          background: "var(--color-charcoal)",
        }}
      >
        <div className="relative z-10 text-center px-6 pt-20">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Get in Touch</p>
          <h1 className="font-display" style={{ color: "var(--color-cream)", fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
            Contact &amp; Reservations
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-32 lg:py-44" style={{ background: "var(--color-cream)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-display text-2xl mb-8" style={{ color: "var(--color-charcoal)" }}>
                Visit Us
              </h2>

              <div className="space-y-10">
                <div className="flex gap-4">
                  <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: "var(--color-burgundy)" }} />
                  <div>
                    <p className="eyebrow mb-1" style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}>Address</p>
                    <p className="font-body" style={{ color: "var(--color-text)" }}>{RESTAURANT.address.street}</p>
                    <p className="font-body" style={{ color: "var(--color-text)" }}>{RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}</p>
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="font-body text-sm mt-1 inline-block" style={{ color: "var(--color-burgundy)", textDecoration: "none" }}>
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone size={18} className="flex-shrink-0" style={{ color: "var(--color-burgundy)" }} />
                  <div>
                    <p className="eyebrow mb-1" style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}>Phone</p>
                    <a href={`tel:${RESTAURANT.phoneRaw}`} className="font-body" style={{ color: "var(--color-text)", textDecoration: "none" }}>
                      {RESTAURANT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock size={18} className="mt-1 flex-shrink-0" style={{ color: "var(--color-burgundy)" }} />
                  <div>
                    <p className="eyebrow mb-3" style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}>Hours</p>
                    <ul className="space-y-1.5">
                      {RESTAURANT.hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-8">
                          <span className="font-mono text-sm" style={{ color: "var(--color-text-muted)" }}>{h.day}</span>
                          <span className="font-body text-sm" style={{ color: h.open ? "var(--color-text)" : "var(--color-text-muted)", opacity: h.open ? 1 : 0.5 }}>
                            {h.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <p className="eyebrow mb-3" style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}>Follow Us</p>
                  <div className="flex gap-4">
                    <a href={RESTAURANT.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm" style={{ color: "var(--color-burgundy)", textDecoration: "none" }}>
                      <IconInstagram /> @eatatcarnegies
                    </a>
                    <a href={RESTAURANT.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm" style={{ color: "var(--color-burgundy)", textDecoration: "none" }}>
                      <IconFacebook /> Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation + form */}
            <div>
              <h2 className="font-display text-2xl mb-8" style={{ color: "var(--color-charcoal)" }}>
                Make a Reservation
              </h2>

              <div className="p-6 mb-8" style={{ background: "var(--color-beige)", borderLeft: "3px solid var(--color-burgundy)" }}>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                  We recommend reservations, especially Friday and Saturday evenings. Walk-ins are
                  always welcome based on availability.
                </p>
                <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn-burgundy">
                  Book on OpenTable
                </a>
              </div>

              <h3 className="font-display text-xl mb-5" style={{ color: "var(--color-charcoal)" }}>Send a Message</h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: "360px", background: "var(--color-beige)" }}
      >
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-burgundy"
        >
          Open in Google Maps →
        </a>
        {/* TODO: Embed Google Maps iframe with API key */}
      </div>
    </>
  );
}
