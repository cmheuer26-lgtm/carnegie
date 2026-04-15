"use client";

const IMAGES = [
  { src: "/dining-room.jpg", alt: "Carnegie's main dining room" },
  { src: "/upstairs.jpg", alt: "Carnegie's upstairs private dining room" },
  { src: "/steak.jpg", alt: "Hand-cut steak with green beans and mashed potatoes" },
  { src: "/pasta.jpg", alt: "Pasta with grilled fish" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&auto=format&fit=crop&q=80", alt: "Craft cocktail" },
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
