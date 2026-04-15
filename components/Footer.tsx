"use client";

import Link from "next/link";
import { RESTAURANT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", borderTop: "1px solid var(--c08)" }}>
      <div className="container" style={{ padding: "80px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "64px", marginBottom: "64px" }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "16px" }}>
              Carnegie&apos;s
            </div>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>A Place to Eat · Est. 1999</div>
            <p style={{ color: "var(--c60)", fontSize: "0.82rem", lineHeight: 1.8, marginBottom: "24px" }}>
              Set inside Greenfield&apos;s historic Carnegie Library — where elegant dining and warm Indiana hospitality have called the same home for over 25 years.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href={RESTAURANT.social.instagram} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "0.58rem", letterSpacing: "0.18em" }}>Instagram</a>
              <a href={RESTAURANT.social.facebook} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "0.58rem", letterSpacing: "0.18em" }}>Facebook</a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="eyebrow" style={{ marginBottom: "24px" }}>Navigate</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: "0.75rem", color: "var(--c60)" }}>{l.label}</Link>
              ))}
              <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "0.75rem", color: "var(--gold)" }}>
                Reservations ↗
              </a>
            </div>
          </div>

          {/* Hours + Contact */}
          <div>
            <div className="eyebrow" style={{ marginBottom: "24px" }}>Hours & Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {RESTAURANT.hours.map((h) => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--c08)" }}>
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--c40)", textTransform: "uppercase" }}>{h.day.slice(0, 3)}</span>
                  <span style={{ fontSize: "0.72rem", color: h.open ? "var(--c60)" : "var(--c40)" }}>{h.hours}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px" }}>
              <a href={`tel:${RESTAURANT.phoneRaw}`} className="nav-link" style={{ fontSize: "0.75rem", color: "var(--c60)", display: "block", marginBottom: "8px" }}>{RESTAURANT.phone}</a>
              <p style={{ fontSize: "0.72rem", color: "var(--c40)" }}>{RESTAURANT.address.street}, {RESTAURANT.address.city}, {RESTAURANT.address.state}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--c08)", paddingTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--c40)" }}>
            © 2026 Carnegie&apos;s A Place To Eat. All rights reserved.
          </p>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--c40)" }}>
            Reservations via{" "}
            <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>OpenTable</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
