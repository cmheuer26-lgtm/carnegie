"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80",
    label: "Greenfield, Indiana · Est. 1999",
  },
  {
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=1920&auto=format&fit=crop&q=80",
    label: "New American Cuisine",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=80",
    label: "Private Dining Upstairs",
  },
];

const DURATION = 6000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
      setFading(false);
    }, 800);
  }, []);

  useEffect(() => {
    timer.current = setTimeout(advance, DURATION);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [current, advance]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        background: "var(--black)",
      }}
      aria-label="Carnegie's hero"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: "opacity 1s ease",
          }}
          role="img"
          aria-label={slide.label}
        />
      ))}

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.52)" }} />

      {/* Center content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            fontFamily: "'Josefin Sans',sans-serif",
            fontSize: "clamp(0.6rem, 1.2vw, 0.72rem)",
            fontWeight: 400,
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "32px",
          }}
        >
          {SLIDES[current].label}
        </div>

        <div
          style={{
            fontFamily: "'Josefin Sans',sans-serif",
            fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--cream)",
            lineHeight: 1,
            marginBottom: "40px",
          }}
        >
          Carnegie&apos;s
        </div>

        <div
          style={{
            fontFamily: "'Josefin Sans',sans-serif",
            fontSize: "clamp(0.6rem, 1.2vw, 0.72rem)",
            fontWeight: 300,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--c60)",
            marginBottom: "56px",
          }}
        >
          A Place to Eat · Greenfield, Indiana
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="https://www.opentable.com/r/carnegies-indianapolis"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Reservations
          </a>
          <a href="/menu" className="btn btn-cream">
            View Menu
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "32px" : "6px",
              height: "1px",
              background: i === current ? "var(--gold)" : "var(--c40)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ width: "1px", height: "48px", background: "var(--gold)", opacity: 0.5 }} />
        <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--c40)", writingMode: "vertical-rl" }}>Scroll</span>
      </div>
    </section>
  );
}
