import type { Metadata } from "next";
import { MENU_SECTIONS, RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Carnegie's full menu — starters, soups, pastas, steaks, seafood, and our signature crème brûlée.",
};

export default function MenuPage() {
  return (
    <>
      {/* Half-height hero */}
      <section
        className="relative flex items-center justify-center"
        style={{
          minHeight: "45vh",
          backgroundImage: "url(https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=1920&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,3,3,0.65)" }} />
        <div className="relative z-10 text-center px-6 pt-20">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Carnegie&apos;s</p>
          <h1 className="font-display" style={{ color: "var(--color-cream)", fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
            Our Menu
          </h1>
          <p className="font-script mt-3" style={{ color: "var(--color-gold-light)", fontSize: "1.4rem" }}>
            Seasonal · Chef-Crafted · Locally Inspired
          </p>
        </div>
      </section>

      {/* Menu note */}
      <div className="py-8 text-center" style={{ background: "var(--color-beige)", borderBottom: "1px solid rgba(44,44,44,0.1)" }}>
        <p className="font-body text-sm" style={{ color: "var(--color-text-muted)" }}>
          Our menu changes seasonally. Ask your server about tonight&apos;s chef specials.
        </p>
      </div>

      {/* Menu sections */}
      <div style={{ background: "var(--color-cream)" }}>
        {MENU_SECTIONS.map((section, si) => (
          <section
            key={section.title}
            className="py-16 lg:py-20"
            style={{ borderBottom: si < MENU_SECTIONS.length - 1 ? "1px solid rgba(44,44,44,0.08)" : "none" }}
          >
            <div className="section-container">
              <div className="flex items-center gap-6 mb-10">
                <h2
                  className="font-display"
                  style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", flexShrink: 0 }}
                >
                  {section.title}
                </h2>
                <div className="h-px flex-1" style={{ background: "rgba(44,44,44,0.12)" }} />
                <div className="w-2 h-2 rotate-45 flex-shrink-0" style={{ background: "var(--color-gold)" }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-6 py-4 border-b" style={{ borderColor: "rgba(44,44,44,0.08)" }}>
                    <div>
                      <h3 className="font-display text-lg mb-1" style={{ color: "var(--color-charcoal)" }}>
                        {item.name}
                      </h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                        {item.description}
                      </p>
                    </div>
                    <span className="font-mono text-sm flex-shrink-0 mt-1" style={{ color: "var(--color-burgundy)" }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Reserve CTA */}
      <section className="py-20 text-center" style={{ background: "var(--color-charcoal)" }}>
        <div className="section-container">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Ready to Dine?</p>
          <h2 className="font-display mb-8" style={{ color: "var(--color-cream)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Make a Reservation
          </h2>
          <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn-burgundy">
            Book on OpenTable
          </a>
        </div>
      </section>
    </>
  );
}
