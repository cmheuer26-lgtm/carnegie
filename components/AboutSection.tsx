"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section style={{ background: "var(--black)" }}>
      <div className="split-grid">
        {/* Image */}
        <div
          className="img-zoom"
          style={{ overflow: "hidden" }}
        >
          <div
            className="img-bg split-image"
            style={{ backgroundImage: "url(/dining-room.jpg)" }}
          />
        </div>

        {/* Content */}
        <div className="split-content" style={{ background: "var(--dark)" }}>
          <div className="eyebrow" style={{ marginBottom: "24px" }}>Est. 1999 · Greenfield, Indiana</div>

          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--cream)", marginBottom: "24px" }}>
            A Carnegie<br />Library
          </h2>

          <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "32px", opacity: 0.7 }} />

          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            At the turn of the 20th century, industrialist Andrew Carnegie funded over 2,500 public
            libraries across the English-speaking world. Greenfield&apos;s was among them — a stately
            building that became the intellectual heart of Hancock County.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "40px" }}>
            In the very room where our dining tables now sit, Indiana&apos;s beloved poet James Whitcomb
            Riley once read to children from the stage. That same stage still stands today. When you
            dine at Carnegie&apos;s, you dine inside history.
          </p>

          <Link href="/about" className="btn btn-gold" style={{ alignSelf: "flex-start" }}>
            Our Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}
