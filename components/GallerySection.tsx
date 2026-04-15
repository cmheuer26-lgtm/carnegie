"use client";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&auto=format&fit=crop&q=80", alt: "Plated entrée" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80", alt: "Dining room" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&auto=format&fit=crop&q=80", alt: "Craft cocktail" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80", alt: "Restaurant interior" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80", alt: "Chef's plate" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&auto=format&fit=crop&q=80", alt: "Wine service" },
];

export default function GallerySection() {
  return (
    <section style={{ background: "var(--black)", padding: "140px 0 0" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="eyebrow" style={{ marginBottom: "20px" }}>The Experience</div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--cream)" }}>A Feast for the Eyes</h2>
      </div>

      {/* Masonry */}
      <div style={{ columns: 3, columnGap: "4px" }}>
        {IMAGES.map((img) => (
          <div key={img.src} className="img-zoom" style={{ breakInside: "avoid", marginBottom: "4px", overflow: "hidden" }}>
            <img src={img.src} alt={img.alt} style={{ width: "100%", display: "block" }} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
