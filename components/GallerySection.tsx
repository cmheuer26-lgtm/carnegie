"use client";

import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&auto=format&fit=crop&q=80", alt: "Plated entrée" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80", alt: "Dining room ambiance" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&auto=format&fit=crop&q=80", alt: "Craft cocktail" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80", alt: "Restaurant interior" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80", alt: "Chef's plate" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&auto=format&fit=crop&q=80", alt: "Wine and cheese" },
];

export default function GallerySection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-beige)" }}>
      <div className="section-container mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4" style={{ color: "var(--color-burgundy)" }}>
            The Experience
          </p>
          <h2 className="font-display" style={{ color: "var(--color-charcoal)", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            A Feast for the Eyes
          </h2>
        </motion.div>
      </div>

      {/* Masonry grid */}
      <div className="masonry-grid px-1">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={img.src}
            className="masonry-item img-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            {/* TODO: Replace with actual Carnegie's photography */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full block"
              loading="lazy"
              style={{ display: "block" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
