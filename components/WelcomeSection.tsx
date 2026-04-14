"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "var(--color-cream)" }}
      id="home-about"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="eyebrow mb-5"
            style={{ color: "var(--color-burgundy)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Carnegie&apos;s
          </motion.p>

          <motion.h2
            className="font-display mb-6"
            style={{ color: "var(--color-charcoal)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            History, Hospitality &amp; Heart
          </motion.h2>

          {/* Ornamental divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            aria-hidden="true"
          >
            <div className="h-px w-12" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
            <svg width="10" height="10" viewBox="0 0 10 10" style={{ color: "var(--color-gold)" }}>
              <path d="M5 0L6.25 3.75L10 5L6.25 6.25L5 10L3.75 6.25L0 5L3.75 3.75Z" fill="currentColor" />
            </svg>
            <div className="h-px w-12" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
          </motion.div>

          <motion.p
            className="font-body leading-relaxed mb-12"
            style={{ color: "var(--color-text-muted)", fontSize: "1.05rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Set inside Greenfield&apos;s historic Carnegie Library, Carnegie&apos;s offers a timeless dining
            experience where history meets modern hospitality. Expertly crafted dishes, thoughtful
            wine and cocktail selections, and gracious service — never pretentious, always
            memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <Link href="/menu" className="btn-burgundy">View Our Menu</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
