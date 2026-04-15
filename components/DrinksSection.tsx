"use client";

import Link from "next/link";

export default function DrinksSection() {
  return (
    <section style={{ background: "var(--black)" }}>
      <div className="split-grid">
        {/* Content — left on desktop */}
        <div className="split-content" style={{ background: "var(--dark)", order: 0 }}>
          <div className="eyebrow" style={{ marginBottom: "24px" }}>Cocktails &amp; Wine</div>

          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--cream)", marginBottom: "24px" }}>
            Crafted with Care,<br />Poured with Warmth
          </h2>

          <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "32px", opacity: 0.7 }} />

          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            Our bar is celebrated for approachable, well-made cocktails that feel like coming home.
            From the Library Old Fashioned to a thoughtful wine list featuring Napa and Provence
            favorites — drink well, stay a while.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "40px" }}>
            Handcrafted cocktails, curated wines, and local Indiana beers. There&apos;s always something
            worth raising a glass to at Carnegie&apos;s.
          </p>

          <Link href="/drinks" className="btn btn-gold" style={{ alignSelf: "flex-start" }}>
            View Drinks Menu
          </Link>
        </div>

        {/* Image — right on desktop */}
        <div className="img-zoom" style={{ overflow: "hidden", order: 1 }}>
          <div
            className="img-bg split-image"
            style={{ backgroundImage: "url(/sandwich2.jpg)" }}
          />
        </div>
      </div>
    </section>
  );
}
