"use client";

import { motion } from "framer-motion";
import { RESTAURANT } from "@/lib/constants";

export default function ParallaxCTA() {
  return (
    <section
      className="parallax-section relative py-56 lg:py-72"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80)",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,3,3,0.62)" }}
        aria-hidden="true"
      />
      {/* Warm burgundy tint */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(107,45,62,0.15)" }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 text-center">
        <motion.p
          className="eyebrow mb-5"
          style={{ color: "var(--color-gold)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Reserve Your Evening
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          aria-hidden="true"
        >
          <div className="h-px w-16" style={{ background: "var(--color-gold)", opacity: 0.4 }} />
          <svg width="10" height="10" viewBox="0 0 10 10" style={{ color: "var(--color-gold)" }}>
            <path d="M5 0L6.25 3.75L10 5L6.25 6.25L5 10L3.75 6.25L0 5L3.75 3.75Z" fill="currentColor" />
          </svg>
          <div className="h-px w-16" style={{ background: "var(--color-gold)", opacity: 0.4 }} />
        </motion.div>

        <motion.h2
          className="font-display mb-6"
          style={{ color: "var(--color-cream)", fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          An Evening Worth<br />Remembering
        </motion.h2>

        <motion.p
          className="font-body leading-relaxed mx-auto mb-10"
          style={{
            color: "rgba(245,240,232,0.72)",
            maxWidth: "500px",
            fontSize: "1rem",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          From anniversaries and date nights to celebrations of every kind — Carnegie&apos;s is
          the kind of place where people return simply because it feels good to be here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a
            href={RESTAURANT.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            Book a Table
          </a>
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            className="btn-outline-gold"
          >
            Call {RESTAURANT.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
