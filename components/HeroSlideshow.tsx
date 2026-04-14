"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Pause, Play } from "lucide-react";
import { HERO_SLIDES } from "@/lib/constants";

const DURATION = 7000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (idx: number) => setCurrent((idx + HERO_SLIDES.length) % HERO_SLIDES.length),
    []
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-roledescription="carousel"
      aria-label="Carnegie's highlights"
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Dark overlay — warm candlelight feel */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,5,5,0.55) 0%, rgba(10,5,5,0.35) 40%, rgba(10,5,5,0.65) 100%)",
            }}
          />
          {/* Subtle warm vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(26,10,10,0.5) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative corner ornament */}
      <div className="absolute top-24 left-8 opacity-20 hidden lg:block" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="var(--color-gold)" strokeWidth="0.8">
          <path d="M0 60 L0 0 L60 0" />
          <path d="M8 52 L8 8 L52 8" />
        </svg>
      </div>
      <div className="absolute top-24 right-8 opacity-20 hidden lg:block rotate-90" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="var(--color-gold)" strokeWidth="0.8">
          <path d="M0 60 L0 0 L60 0" />
          <path d="M8 52 L8 8 L52 8" />
        </svg>
      </div>

      {/* Content */}
      <div
        className="section-container relative z-10 flex flex-col items-center justify-center text-center"
        style={{ minHeight: "100svh", paddingTop: "120px", paddingBottom: "120px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow */}
            <motion.p
              className="eyebrow mb-5"
              style={{ color: "var(--color-gold)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {slide.eyebrow}
            </motion.p>

            {/* Gold ornament divider */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              aria-hidden="true"
            >
              <div className="h-px w-16" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
              <svg width="12" height="12" viewBox="0 0 12 12" style={{ color: "var(--color-gold)" }}>
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="currentColor" />
              </svg>
              <div className="h-px w-16" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="font-display leading-none mb-4"
              style={{
                color: "var(--color-cream)",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                whiteSpace: "pre-line",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              {slide.heading}
            </motion.h1>

            {/* Script subheading */}
            <motion.p
              className="font-script mb-8"
              style={{ color: "var(--color-gold-light)", fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
            >
              {slide.subheading}
            </motion.p>

            {/* Body */}
            <motion.p
              className="font-body leading-relaxed mx-auto mb-10"
              style={{
                color: "rgba(245,240,232,0.75)",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                maxWidth: "520px",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.6 }}
            >
              {slide.body}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6 }}
            >
              {"external" in slide.cta && slide.cta.external ? (
                <a href={slide.cta.href} target="_blank" rel="noopener noreferrer" className="btn-burgundy">
                  {slide.cta.label}
                </a>
              ) : (
                <Link href={slide.cta.href} className="btn-burgundy">{slide.cta.label}</Link>
              )}
              {"external" in slide.ctaSecondary && slide.ctaSecondary.external ? (
                <a href={slide.ctaSecondary.href} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                  {slide.ctaSecondary.label}
                </a>
              ) : (
                <Link href={slide.ctaSecondary.href} className="btn-outline-gold">{slide.ctaSecondary.label}</Link>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators + pause */}
      <div className="absolute bottom-20 left-0 right-0 z-20 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2" role="tablist">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "2px",
                background: i === current ? "var(--color-gold)" : "rgba(245,240,232,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setPaused(!paused)}
          style={{ color: "rgba(245,240,232,0.4)", background: "none", border: "none", cursor: "pointer" }}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="eyebrow" style={{ color: "rgba(245,240,232,0.3)", fontSize: "0.5rem" }}>Scroll</span>
        <ChevronDown size={14} style={{ color: "rgba(245,240,232,0.3)" }} />
      </motion.div>
    </section>
  );
}
