import type { Metadata } from "next";
import { DRINKS_MENU, RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Drinks",
  description: "Carnegie's craft cocktails, wine list, and beer selection. The Library Old Fashioned is a must.",
};

export default function DrinksPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: "url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "80px", paddingTop: "160px" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>Carnegie&apos;s</div>
          <h1 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1 }}>
            Drinks
          </h1>
          <p style={{ color: "var(--c60)", fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", marginTop: "16px" }}>
            Cocktails · Wine · Beer
          </p>
        </div>
      </section>

      {/* Menu note */}
      <div style={{ background: "var(--dark)", borderBottom: "1px solid var(--c08)", padding: "24px 0", textAlign: "center" }}>
        <p style={{ color: "var(--c40)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Ask your server about tonight&apos;s seasonal cocktail specials
        </p>
      </div>

      {/* Sections */}
      <div style={{ background: "var(--black)" }}>
        {DRINKS_MENU.map((section, si) => (
          <section
            key={section.title}
            style={{
              borderBottom: si < DRINKS_MENU.length - 1 ? "1px solid var(--c08)" : "none",
              padding: "80px 0",
            }}
          >
            <div className="container">
              {/* Section heading */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream)", flexShrink: 0 }}>
                  {section.title}
                </h2>
                <div style={{ flex: 1, height: "1px", background: "var(--c08)" }} />
                <div style={{ width: "6px", height: "6px", background: "var(--gold)", transform: "rotate(45deg)", flexShrink: 0 }} />
              </div>

              {/* Items grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 80px" }}>
                {section.items.map((item) => (
                  <div key={item.name} className="menu-item">
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "0.88rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "6px" }}>
                        {item.name}
                      </h3>
                      <p style={{ color: "var(--c40)", fontSize: "0.78rem", lineHeight: 1.7 }}>
                        {item.description}
                      </p>
                    </div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section style={{ background: "var(--dark)", padding: "100px 0", textAlign: "center" }}>
        <div className="container-sm">
          <div className="eyebrow" style={{ marginBottom: "20px" }}>Ready to Dine?</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--cream)", marginBottom: "40px" }}>Make a Reservation</h2>
          <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Book on OpenTable
          </a>
        </div>
      </section>
    </>
  );
}
