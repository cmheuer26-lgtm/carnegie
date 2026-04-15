"use client";

import { useState } from "react";
import { REVIEWS, RESTAURANT } from "@/lib/constants";

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  return (
    <section style={{ background: "var(--dark)", padding: "140px 0" }}>
      <div className="container-sm" style={{ textAlign: "center" }}>

        <div className="eyebrow" style={{ marginBottom: "24px" }}>Guest Reviews</div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--cream)", marginBottom: "64px" }}>
          What Our Guests Say
        </h2>

        {/* Stars */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "48px" }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--gold)">
              <path d="M7 0l1.75 5.25H14l-4.375 3.5L11.375 14 7 10.5 2.625 14l1.75-5.25L0 5.25h5.25z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <div style={{ minHeight: "160px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", padding: "0 24px" }}>
          <div>
            <blockquote style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1rem, 2.5vw, 1.35rem)", color: "var(--cream)", lineHeight: 1.7, letterSpacing: "0.02em", marginBottom: "24px" }}>
              &ldquo;{REVIEWS[current].text}&rdquo;
            </blockquote>
            <cite style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--gold)", fontStyle: "normal" }}>
              {REVIEWS[current].author} &middot; {REVIEWS[current].source}
            </cite>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "72px" }}>
          <button onClick={prev} aria-label="Previous" style={{ background: "none", border: "1px solid var(--c15)", color: "var(--c60)", cursor: "pointer", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
            ←
          </button>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Review ${i + 1}`} style={{ width: i === current ? "28px" : "6px", height: "1px", background: i === current ? "var(--gold)" : "var(--c40)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.4s ease" }} />
            ))}
          </div>
          <button onClick={next} aria-label="Next" style={{ background: "none", border: "1px solid var(--c15)", color: "var(--c60)", cursor: "pointer", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}>
            →
          </button>
        </div>

        {/* CTA */}
        <div style={{ borderTop: "1px solid var(--c08)", paddingTop: "56px" }}>
          <p style={{ color: "var(--c40)", fontSize: "0.78rem", letterSpacing: "0.12em", marginBottom: "24px" }}>
            Dined with us recently?
          </p>
          <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Leave a Review on OpenTable
          </a>
        </div>
      </div>
    </section>
  );
}
