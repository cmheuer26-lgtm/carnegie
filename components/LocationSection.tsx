"use client";

import { RESTAURANT } from "@/lib/constants";

export default function LocationSection() {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(RESTAURANT.address.full)}`;

  return (
    <section style={{ background: "var(--black)", padding: "140px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>Find Us</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--cream)" }}>Come Visit</h2>
        </div>

        <div className="location-grid">

          {/* Address */}
          <div>
            <div className="eyebrow" style={{ marginBottom: "28px" }}>Address</div>
            <p style={{ color: "var(--c60)", fontSize: "0.85rem", lineHeight: 1.9, marginBottom: "16px" }}>
              {RESTAURANT.address.street}<br />
              {RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}
            </p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
              Get Directions ↗
            </a>
            <div style={{ marginTop: "20px" }}>
              <a href={`tel:${RESTAURANT.phoneRaw}`} style={{ color: "var(--c60)", fontSize: "0.85rem", textDecoration: "none" }}>
                {RESTAURANT.phone}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="eyebrow" style={{ marginBottom: "28px" }}>Hours</div>
            <div>
              {RESTAURANT.hours.map((h) => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--c08)" }}>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: h.open ? "var(--c60)" : "var(--c40)" }}>
                    {h.day}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: h.open ? "var(--c60)" : "var(--c40)" }}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Reserve */}
          <div>
            <div className="eyebrow" style={{ marginBottom: "28px" }}>Reservations</div>
            <p style={{ color: "var(--c60)", fontSize: "0.85rem", lineHeight: 1.9, marginBottom: "32px" }}>
              We recommend reservations, especially on Friday and Saturday evenings. Walk-ins are
              always welcome based on availability.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ justifyContent: "center" }}>
                Book on OpenTable
              </a>
              <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn btn-cream" style={{ justifyContent: "center" }}>
                Call to Reserve
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
