"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-cream)" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-4" style={{ color: "var(--color-burgundy)" }}>
              Our Story
            </p>
            <h2
              className="font-display mb-6"
              style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Carnegie&apos;s —<br />
              <span className="font-script" style={{ color: "var(--color-burgundy)" }}>
                A Place to Eat
              </span>
            </h2>

            <div className="flex items-center gap-4 mb-6" aria-hidden="true">
              <div className="h-px w-8" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
              <svg width="8" height="8" viewBox="0 0 8 8" style={{ color: "var(--color-gold)" }}>
                <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" fill="currentColor" />
              </svg>
            </div>

            <p className="font-body leading-relaxed mb-6" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
              Originally opened in 1999 by Chef Ian Harrison inside the historic Greenfield Carnegie
              Library, Carnegie&apos;s quickly became a destination for exceptional dining. For over 25
              years, Harrison built a legacy of farm-to-table fine dining in one of Hancock County&apos;s
              most beloved buildings.
            </p>
            <p className="font-body leading-relaxed mb-10" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
              In October 2025, the restaurant was lovingly revived under new ownership by Jake
              Burgess and the Burgess Restaurant Group — continuing the legacy while writing its
              next chapter with fresh energy and the same warmth that made Carnegie&apos;s a community
              institution.
            </p>

            <Link href="/about" className="btn-burgundy">
              Our Full Story
            </Link>
          </motion.div>

          {/* Image — right */}
          <motion.div
            className="img-hover relative overflow-hidden"
            style={{ aspectRatio: "3/4", maxHeight: "520px", borderRadius: "2px" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              className="img-inner absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Caption tag */}
            <div
              className="absolute bottom-0 left-0 right-0 py-3 px-5"
              style={{ background: "rgba(26,26,26,0.85)" }}
            >
              <p className="eyebrow text-center" style={{ color: "var(--color-gold)", fontSize: "0.6rem" }}>
                Historic Carnegie Library · Est. 1999
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
