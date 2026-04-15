import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

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
        style={{
          position: "relative",
          minHeight: "40vh",
          display: "flex",
          alignItems: "flex-end",
          background: "var(--dark)",
          borderBottom: "1px solid var(--c08)",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "80px", paddingTop: "160px" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>Get in Touch</div>
          <h1 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(2.4rem, 7vw, 5rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1 }}>
            Contact &amp;<br />Reservations
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section style={{ background: "var(--black)", padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>

            {/* Left: Info */}
            <div>
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "48px" }}>
                Visit Us
              </h2>

              {/* Address */}
              <div style={{ marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid var(--c08)" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Address</div>
                <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {RESTAURANT.address.street}<br />
                  {RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", marginTop: "10px", color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.1em", textDecoration: "none", textTransform: "uppercase" }}
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid var(--c08)" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Phone</div>
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  style={{ color: "var(--c60)", fontSize: "0.88rem", textDecoration: "none" }}
                >
                  {RESTAURANT.phone}
                </a>
              </div>

              {/* Hours */}
              <div style={{ marginBottom: "40px", paddingBottom: "40px", borderBottom: "1px solid var(--c08)" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Hours</div>
                <div>
                  {RESTAURANT.hours.map((h) => (
                    <div
                      key={h.day}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        borderBottom: "1px solid var(--c08)",
                        fontSize: "0.8rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      <span style={{ color: "var(--c40)", textTransform: "uppercase" }}>{h.day}</span>
                      <span style={{ color: h.open ? "var(--c60)" : "var(--c15)" }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Follow Us</div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <a
                    href={RESTAURANT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--c60)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
                  >
                    Instagram
                  </a>
                  <a
                    href={RESTAURANT.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--c60)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Reservation + Form */}
            <div>
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "48px" }}>
                Make a Reservation
              </h2>

              <div style={{ background: "var(--card)", border: "1px solid var(--c08)", padding: "32px", marginBottom: "48px" }}>
                <p style={{ color: "var(--c40)", fontSize: "0.82rem", lineHeight: 1.8, marginBottom: "24px" }}>
                  We recommend reservations, especially Friday and Saturday evenings.
                  Walk-ins are always welcome based on availability.
                </p>
                <a
                  href={RESTAURANT.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: "inline-flex" }}
                >
                  Book on OpenTable
                </a>
              </div>

              <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "28px" }}>
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
