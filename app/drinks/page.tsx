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
        className="relative flex items-center justify-center"
        style={{
          minHeight: "45vh",
          backgroundImage: "url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,3,3,0.68)" }} />
        <div className="relative z-10 text-center px-6 pt-20">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Carnegie&apos;s</p>
          <h1 className="font-display" style={{ color: "var(--color-cream)", fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
            Drinks
          </h1>
          <p className="font-script mt-3" style={{ color: "var(--color-gold-light)", fontSize: "1.4rem" }}>
            Cocktails · Wine · Beer
          </p>
        </div>
      </section>

      {/* Drinks sections */}
      <div style={{ background: "var(--color-cream)" }}>
        {DRINKS_MENU.map((section, si) => (
          <section
            key={section.title}
            className="py-28 lg:py-36"
            style={{ borderBottom: si < DRINKS_MENU.length - 1 ? "1px solid rgba(44,44,44,0.08)" : "none" }}
          >
            <div className="section-container">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="font-display" style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", flexShrink: 0 }}>
                  {section.title}
                </h2>
                <div className="h-px flex-1" style={{ background: "rgba(44,44,44,0.12)" }} />
                <div className="w-2 h-2 rotate-45 flex-shrink-0" style={{ background: "var(--color-gold)" }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-6 py-5 border-b" style={{ borderColor: "rgba(44,44,44,0.08)" }}>
                    <div>
                      <h3 className="font-display text-lg mb-2" style={{ color: "var(--color-charcoal)" }}>{item.name}</h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.description}</p>
                    </div>
                    <span className="font-mono text-sm flex-shrink-0 mt-1" style={{ color: "var(--color-burgundy)" }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-32 text-center" style={{ background: "var(--color-charcoal)" }}>
        <div className="section-container">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Join Us Tonight</p>
          <h2 className="font-display mb-8" style={{ color: "var(--color-cream)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Reserve Your Table
          </h2>
          <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn-burgundy">
            Book on OpenTable
          </a>
        </div>
      </section>
    </>
  );
}
