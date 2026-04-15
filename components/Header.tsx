"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RESTAURANT, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: scrolled || open ? "rgba(12,12,12,0.98)" : "transparent", borderBottom: scrolled ? "1px solid var(--g15)" : "1px solid transparent", transition: "all 0.4s ease" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? "68px" : "92px", transition: "height 0.4s ease" }}>

          <Link href="/" onClick={() => setOpen(false)} style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--cream)" }}>
              Carnegie&apos;s
            </span>
          </Link>

          <nav className="hide-mobile" style={{ alignItems: "center", gap: "36px" }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
            <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ padding: "11px 26px", fontSize: "0.62rem" }}>
              Reservations
            </a>
          </nav>

          <button className="show-mobile" onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: "6px", padding: "8px" }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ display: "block", width: "22px", height: "1px", background: "var(--cream)", transition: "all 0.3s", transform: i === 0 && open ? "rotate(45deg) translate(5px,5px)" : i === 2 && open ? "rotate(-45deg) translate(5px,-5px)" : "none", opacity: i === 1 && open ? 0 : 1 }} />
            ))}
          </button>
        </div>

        {open && (
          <div style={{ background: "var(--dark)", padding: "48px 24px 120px", borderTop: "1px solid var(--c08)" }}>
            {NAV_LINKS.map((l) => (
              <div key={l.href} style={{ marginBottom: "28px" }}>
                <Link href={l.href} className="nav-link" style={{ fontSize: "0.95rem", letterSpacing: "0.25em" }} onClick={() => setOpen(false)}>{l.label}</Link>
              </div>
            ))}
            <div style={{ marginTop: "40px" }}>
              <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }} onClick={() => setOpen(false)}>
                Reservations
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="show-mobile" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 199 }}>
        <a href={`tel:${RESTAURANT.phoneRaw}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--dark)", color: "var(--cream)", fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.6rem", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", padding: "18px", textDecoration: "none", borderTop: "1px solid var(--c15)" }}>
          Call Us
        </a>
        <a href={RESTAURANT.reservationUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--gold)", color: "var(--black)", fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", padding: "18px", textDecoration: "none" }}>
          Reserve
        </a>
      </div>
    </>
  );
}
