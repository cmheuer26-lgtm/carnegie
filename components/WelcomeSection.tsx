"use client";

import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section style={{ background: "var(--black)", padding: "140px 0" }}>
      <div className="container-sm" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: "28px" }}>Welcome to Carnegie&apos;s</div>

        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "36px", color: "var(--cream)" }}>
          Where History Meets Hospitality
        </h2>

        <div style={{ width: "48px", height: "1px", background: "var(--gold)", margin: "0 auto 40px", opacity: 0.6 }} />

        <p style={{ color: "var(--c60)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "20px", maxWidth: "560px", margin: "0 auto 20px" }}>
          Set inside Greenfield&apos;s historic Carnegie Library, Carnegie&apos;s has been a destination
          for exceptional dining since 1999. Expertly crafted dishes, thoughtful wine and cocktail
          selections, and gracious service — never pretentious, always memorable.
        </p>

        <p style={{ color: "var(--c60)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "52px", maxWidth: "560px", margin: "0 auto 52px" }}>
          In October 2025, the restaurant welcomed new ownership under Jake Burgess and the Burgess
          Restaurant Group — continuing the legacy while writing its next chapter.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/menu" className="btn btn-gold">View Menu</Link>
          <Link href="/about" className="btn btn-cream">Our Story</Link>
        </div>
      </div>
    </section>
  );
}
