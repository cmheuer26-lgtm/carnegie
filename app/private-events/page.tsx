import type { Metadata } from "next";
import { RESTAURANT } from "@/lib/constants";
import PrivateEventsForm from "@/components/PrivateEventsForm";

export const metadata: Metadata = {
  title: "Private Events",
  description: "Host your next private event at Carnegie's upstairs historic library space. Rehearsal dinners, milestone celebrations, business dinners.",
};

const USE_CASES = [
  { title: "Rehearsal Dinners", desc: "An elegant setting for the evening before your big day. Intimate, warm, and utterly memorable." },
  { title: "Anniversary Celebrations", desc: "Mark milestones in a space with a story as rich as your own." },
  { title: "Business Dinners", desc: "Impress clients or celebrate your team in the sophistication of a historic library setting." },
  { title: "Holiday Parties", desc: "The perfect backdrop for seasonal gatherings — candlelit, elegant, and festive." },
  { title: "Birthday Celebrations", desc: "Make milestone birthdays truly special with a private dining experience." },
  { title: "Graduation Dinners", desc: "Celebrate achievements in a setting that honors the journey." },
];

export default function PrivateEventsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "80px", paddingTop: "160px" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>Private Dining</div>
          <h1 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", lineHeight: 1 }}>
            Your Event,<br />Our History
          </h1>
          <p style={{ color: "var(--c60)", fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", marginTop: "16px" }}>
            Upstairs Library Space · Groups of 14+
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "var(--dark)", padding: "100px 0", borderBottom: "1px solid var(--c08)" }}>
        <div className="container-sm" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>The Space</div>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "32px" }}>
            The Upstairs Library Room
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
            <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "var(--c15)" }} />
            <div style={{ width: "6px", height: "6px", background: "var(--gold)", transform: "rotate(45deg)" }} />
            <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "var(--c15)" }} />
          </div>
          <p style={{ color: "var(--c60)", fontSize: "0.9rem", lineHeight: 1.9, marginBottom: "20px" }}>
            Carnegie&apos;s private dining room occupies the historic upper floor of the original Carnegie
            Library — a space that once housed thousands of books and the quiet hum of a community
            learning together. Today, it&apos;s one of the most distinctive private dining spaces in
            Hancock County.
          </p>
          <p style={{ color: "var(--c60)", fontSize: "0.9rem", lineHeight: 1.9, marginBottom: "48px" }}>
            With original architectural details, warm candlelight, and the full Carnegie&apos;s menu and
            bar service at your disposal, the upstairs space accommodates intimate gatherings of
            14 or more guests — perfect for celebrations that deserve something truly special.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn btn-gold">
              Call to Inquire
            </a>
            <a href="mailto:info@carnegiesaplacetoeat.com" className="btn btn-cream">
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Occasions grid */}
      <section style={{ background: "var(--black)", padding: "100px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>Occasions</div>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)" }}>
              Perfect For
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                style={{
                  background: "var(--dark)",
                  padding: "48px 40px",
                  borderTop: "2px solid var(--gold)",
                }}
              >
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "16px" }}>
                  {uc.title}
                </h3>
                <p style={{ color: "var(--c40)", fontSize: "0.82rem", lineHeight: 1.8 }}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax divider */}
      <div
        className="tout"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80)",
          minHeight: "360px",
        }}
      >
        <div className="tout-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ color: "var(--c60)", fontSize: "0.88rem", lineHeight: 1.9, maxWidth: "600px", margin: "0 auto" }}>
            &ldquo;The private dining room at Carnegie&apos;s is unlike anything else in Hancock County —
            history, elegance, and exceptional food all under one roof.&rdquo;
          </p>
        </div>
      </div>

      {/* Inquiry form */}
      <section style={{ background: "var(--dark)", padding: "100px 0" }}>
        <div className="container-sm">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>Inquire</div>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cream)" }}>
              Start Planning
            </h2>
          </div>
          <PrivateEventsForm />
        </div>
      </section>
    </>
  );
}
