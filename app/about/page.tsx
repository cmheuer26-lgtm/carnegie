import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Carnegie's — from the historic Carnegie Library to Chef Ian Harrison's 26-year legacy, and the new chapter with Jake Burgess.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "80px", paddingTop: "160px" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>Our Story</div>
          <h1 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1 }}>
            Carnegie&apos;s
          </h1>
          <p style={{ color: "var(--c60)", fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", marginTop: "16px" }}>
            Est. 1999 · Greenfield, Indiana
          </p>
        </div>
      </section>

      {/* The Building */}
      <div className="split-grid">
        <div
          className="split-image"
          style={{
            backgroundImage: "url(/dining-room.jpg)",
          }}
        />
        <div className="split-content" style={{ background: "var(--dark)" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>The Building</div>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "32px" }}>
            A Carnegie Library
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "32px" }} />
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            At the turn of the 20th century, industrialist Andrew Carnegie funded the construction
            of over 2,500 public libraries across the English-speaking world. Greenfield&apos;s Carnegie
            Library was among them — a stately, dignified building that became the intellectual
            heart of Hancock County.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            The building carries a remarkable footnote: in the very room where our dining tables
            now sit, Indiana&apos;s beloved poet James Whitcomb Riley — a Greenfield native — once read
            to children from the stage. The same stage still stands today.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9 }}>
            When you dine at Carnegie&apos;s, you dine inside history.
          </p>
        </div>
      </div>

      {/* The Legacy */}
      <div className="split-grid">
        <div className="split-content" style={{ background: "var(--black)" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>1999 – 2025</div>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "32px" }}>
            Chef Harrison&apos;s Legacy
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "32px" }} />
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            In 1999, Chef Ian Harrison transformed the historic Carnegie Library into a restaurant
            that would define fine dining in central Indiana for over a quarter century. His vision
            was farm-to-table before the phrase became fashionable — sourcing local ingredients,
            growing garden herbs, and firing a wood-burning brick oven that became the restaurant&apos;s
            beating heart.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            Signature dishes like the cream of roasted red bell pepper soup, beef tenderloin
            medallions, and house-made crème brûlée became beloved traditions — plates that guests
            returned for year after year, decade after decade.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9 }}>
            Harrison retired in June 2025 after 26 years. His legacy is the standard by which
            Carnegie&apos;s will always be measured.
          </p>
        </div>
        <div
          className="split-image"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=80)",
          }}
        />
      </div>

      {/* New Chapter */}
      <div className="split-grid">
        <div
          className="split-image"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=900&auto=format&fit=crop&q=80)",
          }}
        />
        <div className="split-content" style={{ background: "var(--dark)" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>October 2025</div>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "32px" }}>
            A New Chapter
          </h2>
          <div style={{ width: "40px", height: "1px", background: "var(--gold)", marginBottom: "32px" }} />
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            Jake Burgess grew up in Mt. Vernon, Indiana, and got his start cooking at Mozzi&apos;s Pizza
            in Fortville at the age of 15. He went on to found FoxGardin Kitchen &amp; Ale — one of the
            most beloved restaurants in Fortville — along with Smoky&apos;s Concession Stand in Lapel and
            the legendary Bonge&apos;s Tavern.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "20px" }}>
            When Harrison retired, Burgess and the Burgess Restaurant Group acquired Carnegie&apos;s in
            August 2025 and undertook thoughtful renovations before reopening in October of that year.
            The goal: honor every inch of what Harrison built while giving the restaurant renewed
            energy and vision.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9 }}>
            With Chef Justin in the kitchen, handcrafted cocktails at the bar, and the same warm
            service Carnegie&apos;s has always been known for — the new chapter is well underway.
          </p>
        </div>
      </div>

      {/* Parallax CTA */}
      <div
        className="tout"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80)",
        }}
      >
        <div className="tout-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>Experience It Yourself</div>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "48px" }}>
            Come Be Part<br />of the Story
          </h2>
          <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Reserve a Table
          </a>
        </div>
      </div>
    </>
  );
}
