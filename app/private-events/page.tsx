import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";
import PrivateEventsForm from "@/components/PrivateEventsForm";

export const metadata: Metadata = {
  title: "Private Events",
  description: "Host your next private event at Carnegie's upstairs historic library space. Rehearsal dinners, milestone celebrations, business dinners.",
};

export default function PrivateEventsPage() {
  const useCases = [
    { title: "Rehearsal Dinners", icon: "♦", desc: "An elegant setting for the evening before your big day. Intimate, warm, and utterly memorable." },
    { title: "Anniversary Celebrations", icon: "♦", desc: "Mark milestones in a space with a story as rich as your own." },
    { title: "Business Dinners", icon: "♦", desc: "Impress clients or celebrate your team in the sophistication of a historic library setting." },
    { title: "Holiday Parties", icon: "♦", desc: "The perfect backdrop for seasonal gatherings — candlelit, elegant, and festive." },
    { title: "Birthday Celebrations", icon: "♦", desc: "Make milestone birthdays truly special with a private dining experience." },
    { title: "Graduation Dinners", icon: "♦", desc: "Celebrate achievements in a setting that honors the journey." },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{
          minHeight: "55vh",
          backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,3,3,0.65)" }} />
        <div className="relative z-10 text-center px-6 pt-20 max-w-2xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Private Dining</p>
          <h1 className="font-display mb-4" style={{ color: "var(--color-cream)", fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            Your Event,<br />Our History
          </h1>
          <p className="font-script" style={{ color: "var(--color-gold-light)", fontSize: "1.3rem" }}>
            Upstairs Library Space · Groups of 14+
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-cream)" }}>
        <div className="section-container max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-5" style={{ color: "var(--color-burgundy)" }}>The Space</p>
          <h2 className="font-display mb-6" style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            The Upstairs Library Room
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
            <div className="h-px w-12" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "var(--color-gold)" }} />
            <div className="h-px w-12" style={{ background: "var(--color-gold)", opacity: 0.5 }} />
          </div>
          <p className="font-body leading-relaxed mb-5" style={{ color: "var(--color-text-muted)", fontSize: "1.05rem" }}>
            Carnegie&apos;s private dining room occupies the historic upper floor of the original Carnegie
            Library — a space that once housed thousands of books and the quiet hum of a community
            learning together. Today, it&apos;s one of the most distinctive private dining spaces in
            Hancock County.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: "var(--color-text-muted)", fontSize: "1.05rem" }}>
            With original architectural details, warm candlelight, and the full Carnegie&apos;s menu and
            bar service at your disposal, the upstairs space accommodates intimate gatherings of
            14 or more guests — perfect for celebrations that deserve something truly special.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn-burgundy">
              Call to Inquire
            </a>
            <a href="mailto:info@carnegiesaplacetoeat.com" className="btn-outline-gold">
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-beige)" }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4" style={{ color: "var(--color-burgundy)" }}>Occasions</p>
            <h2 className="font-display" style={{ color: "var(--color-charcoal)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Perfect For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-8"
                style={{
                  background: "var(--color-cream)",
                  borderTop: "3px solid var(--color-burgundy)",
                }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--color-gold)", fontSize: "0.65rem" }}>
                  {uc.icon} Private Event
                </p>
                <h3 className="font-display text-xl mb-3" style={{ color: "var(--color-charcoal)" }}>
                  {uc.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 lg:py-28" style={{ background: "var(--color-charcoal)" }}>
        <div className="section-container max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>Inquire</p>
            <h2 className="font-display" style={{ color: "var(--color-cream)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Start Planning
            </h2>
          </div>

          <PrivateEventsForm />
        </div>
      </section>
    </>
  );
}
