import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Carnegie's — from the historic Carnegie Library to Chef Ian Harrison's 26-year legacy, and the new chapter with Jake Burgess.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{
          minHeight: "50vh",
          backgroundImage: "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,3,3,0.65)" }} />
        <div className="relative z-10 text-center px-6 pt-20">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Our History</p>
          <h1 className="font-display" style={{ color: "var(--color-cream)", fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
            The Story of<br />Carnegie&apos;s
          </h1>
        </div>
      </section>

      {/* The Building */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-cream)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-4" style={{ color: "var(--color-burgundy)" }}>The Building</p>
              <h2 className="font-display mb-6" style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                A Carnegie Library
              </h2>
              <div className="flex items-center gap-4 mb-6" aria-hidden="true">
                <div className="h-px w-8" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
                <div className="w-2 h-2 rotate-45" style={{ background: "var(--color-gold)" }} />
              </div>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                At the turn of the 20th century, industrialist Andrew Carnegie funded the construction
                of over 2,500 public libraries across the English-speaking world. Greenfield&apos;s Carnegie
                Library was among them — a stately, dignified building that became the intellectual
                heart of Hancock County.
              </p>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                The building carries with it a remarkable footnote: in the very room where our dining
                tables now sit, Indiana&apos;s beloved poet James Whitcomb Riley — a Greenfield native —
                once read to children from the stage. The same stage still stands today.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                When you dine at Carnegie&apos;s, you dine inside history.
              </p>
            </div>
            <div
              className="img-hover relative overflow-hidden"
              style={{ aspectRatio: "4/3", borderRadius: "2px", border: "1px solid rgba(184,150,90,0.2)" }}
            >
              <div
                className="img-inner absolute inset-0"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&auto=format&fit=crop&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* TODO: Replace with photo of historic Carnegie Library exterior */}
            </div>
          </div>
        </div>
      </section>

      {/* The Legacy */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-beige)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              className="img-hover relative overflow-hidden order-2 lg:order-1"
              style={{ aspectRatio: "4/3", borderRadius: "2px" }}
            >
              <div
                className="img-inner absolute inset-0"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* TODO: Replace with photo of Carnegie's dining room from Ian Harrison era */}
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4" style={{ color: "var(--color-burgundy)" }}>1999 – 2025</p>
              <h2 className="font-display mb-6" style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Chef Ian Harrison&apos;s Legacy
              </h2>
              <div className="flex items-center gap-4 mb-6" aria-hidden="true">
                <div className="h-px w-8" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
                <div className="w-2 h-2 rotate-45" style={{ background: "var(--color-gold)" }} />
              </div>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                In 1999, Chef Ian Harrison transformed the historic Carnegie Library into a restaurant
                that would define fine dining in central Indiana for over a quarter century. His
                vision was farm-to-table before the phrase became fashionable — sourcing local
                ingredients, growing garden herbs, and firing a wood-burning brick oven that became
                the restaurant&apos;s beating heart.
              </p>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                Signature dishes like the cream of roasted red bell pepper soup, beef tenderloin
                medallions, and house-made crème brûlée became beloved traditions — plates that
                guests returned for year after year, decade after decade.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                Harrison retired in June 2025 after 26 years. His legacy is the standard by which
                Carnegie&apos;s will always be measured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Chapter */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-cream)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-4" style={{ color: "var(--color-burgundy)" }}>October 2025</p>
              <h2 className="font-display mb-6" style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                A New Chapter
              </h2>
              <div className="flex items-center gap-4 mb-6" aria-hidden="true">
                <div className="h-px w-8" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
                <div className="w-2 h-2 rotate-45" style={{ background: "var(--color-gold)" }} />
              </div>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                Jake Burgess grew up in Mt. Vernon, Indiana, and got his start cooking at Mozzi&apos;s
                Pizza in Fortville at the age of 15. He went on to found FoxGardin Kitchen &amp; Ale —
                one of the most beloved restaurants in Fortville — along with Smoky&apos;s Concession
                Stand in Lapel and the legendary Bonge&apos;s Tavern.
              </p>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                When Harrison retired, Burgess and the Burgess Restaurant Group acquired Carnegie&apos;s
                in August 2025 and undertook thoughtful renovations before reopening in October of
                that year. The goal: honor every inch of what Harrison built while giving the
                restaurant renewed energy and vision.
              </p>
              <p className="font-body leading-relaxed" style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                With Chef Justin in the kitchen, handcrafted cocktails at the bar, and the same
                warm service Carnegie&apos;s has always been known for — the new chapter is well underway.
              </p>
            </div>
            <div
              className="img-hover relative overflow-hidden"
              style={{ aspectRatio: "4/3", borderRadius: "2px" }}
            >
              <div
                className="img-inner absolute inset-0"
                style={{
                  backgroundImage: "url(https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&auto=format&fit=crop&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* TODO: Replace with photo of Jake Burgess or new Carnegie's kitchen */}
            </div>
          </div>
        </div>
      </section>

      {/* Reserve CTA */}
      <section
        className="parallax-section relative py-36 text-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80)" }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,3,3,0.65)" }} />
        <div className="section-container relative z-10">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Experience It Yourself</p>
          <h2 className="font-display mb-8" style={{ color: "var(--color-cream)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Come Be Part of the Story
          </h2>
          <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
            Reserve a Table
          </a>
        </div>
      </section>
    </>
  );
}
