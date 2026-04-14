"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS, RESTAURANT } from "@/lib/constants";

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-beige)" }}>
      <div className="section-container max-w-3xl mx-auto text-center">
        <motion.p
          className="eyebrow mb-4"
          style={{ color: "var(--color-burgundy)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Guest Reviews
        </motion.p>
        <motion.h2
          className="font-display mb-12"
          style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What Our Guests Say
        </motion.h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="var(--color-gold)" color="var(--color-gold)" />
          ))}
        </div>

        {/* Review carousel */}
        <div className="relative min-h-[220px] flex items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-x-0"
            >
              <blockquote
                className="font-script leading-relaxed mb-6"
                style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
              >
                &ldquo;{REVIEWS[current].text}&rdquo;
              </blockquote>
              <cite className="not-italic">
                <p className="eyebrow" style={{ color: "var(--color-burgundy)", fontSize: "0.6rem" }}>
                  {REVIEWS[current].author} · {REVIEWS[current].source}
                </p>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <div className="flex items-center justify-center gap-6">
          <button onClick={prev} aria-label="Previous review" style={{ color: "var(--color-text-muted)", background: "none", border: "none", cursor: "pointer" }}>
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "1.5rem" : "0.4rem",
                  height: "2px",
                  background: i === current ? "var(--color-burgundy)" : "rgba(44,44,44,0.25)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next review" style={{ color: "var(--color-text-muted)", background: "none", border: "none", cursor: "pointer" }}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Leave a review CTA */}
        <motion.div
          className="mt-12 pt-10 border-t"
          style={{ borderColor: "rgba(44,44,44,0.12)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body mb-4" style={{ color: "var(--color-text-muted)" }}>
            Dined with us recently?
          </p>
          <a
            href={RESTAURANT.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-burgundy"
          >
            Leave a Review on OpenTable
          </a>
        </motion.div>
      </div>
    </section>
  );
}
