"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section style={{ background: "var(--dark)", padding: "120px 0", borderTop: "1px solid var(--c08)" }}>
      <div className="container-sm" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: "24px" }}>Est. 1999 · Greenfield, Indiana</div>

        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--cream)", marginBottom: "24px" }}>
          A Carnegie Library
        </h2>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "var(--c15)" }} />
          <div style={{ width: "6px", height: "6px", background: "var(--gold)", transform: "rotate(45deg)" }} />
          <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "var(--c15)" }} />
        </div>

        <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
          At the turn of the 20th century, industrialist Andrew Carnegie funded over 2,500 public
          libraries across the English-speaking world. Greenfield&apos;s was among them — a stately
          building that became the intellectual heart of Hancock County.
        </p>
        <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "48px" }}>
          In the very room where our dining tables now sit, Indiana&apos;s beloved poet James Whitcomb
          Riley once read to children from the stage. That same stage still stands today. When you
          dine at Carnegie&apos;s, you dine inside history.
        </p>

        <Link href="/about" className="btn btn-gold">
          Our Full Story
        </Link>
      </div>
    </section>
  );
}
