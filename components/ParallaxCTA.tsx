"use client";

import { RESTAURANT } from "@/lib/constants";

export default function ParallaxCTA() {
  return (
    <section
      className="tout"
      style={{ backgroundImage: "url(/exterior.jpg)" }}
    >
      <div className="tout-overlay" />
      <div className="tout-content">
        <div className="eyebrow" style={{ marginBottom: "28px" }}>Reserve Your Evening</div>
        <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", color: "var(--cream)", marginBottom: "20px" }}>
          An Evening Worth<br />Remembering
        </h2>
        <div style={{ width: "48px", height: "1px", background: "var(--gold)", margin: "0 auto 32px", opacity: 0.6 }} />
        <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, maxWidth: "480px", margin: "0 auto 48px" }}>
          From anniversaries and date nights to celebrations of every kind — Carnegie&apos;s is
          the kind of place where people return simply because it feels good to be here.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Book a Table
          </a>
          <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn btn-cream">
            {RESTAURANT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
