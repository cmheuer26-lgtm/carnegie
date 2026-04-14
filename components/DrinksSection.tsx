"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DrinksSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-beige)" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="img-hover relative overflow-hidden"
            style={{ aspectRatio: "4/3", borderRadius: "2px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="img-inner absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&auto=format&fit=crop&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Gold frame accent */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                border: "1px solid rgba(184,150,90,0.3)",
                margin: "12px",
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="eyebrow mb-4" style={{ color: "var(--color-burgundy)" }}>
              Cocktails &amp; Wine
            </p>
            <h2
              className="font-display mb-6"
              style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Crafted with Care,<br />
              <span className="font-script" style={{ color: "var(--color-burgundy)" }}>
                Poured with Warmth
              </span>
            </h2>

            <div className="flex items-center gap-4 mb-6" aria-hidden="true">
              <div className="h-px w-8" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
              <svg width="8" height="8" viewBox="0 0 8 8" style={{ color: "var(--color-gold)" }}>
                <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" fill="currentColor" />
              </svg>
            </div>

            <p className="font-body leading-relaxed mb-8" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
              Our bar is celebrated for approachable, well-made cocktails that feel like coming home.
              From the Library Old Fashioned to a thoughtful wine list featuring Napa and Provence
              favorites — drink well, stay a while.
            </p>
            <Link href="/drinks" className="btn-burgundy">
              View Drinks Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
