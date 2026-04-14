"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2, 4);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(26,26,26,0.98)" : "rgba(26,26,26,0.85)",
          backdropFilter: "blur(12px)",
          minHeight: scrolled ? "60px" : "88px",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="section-container h-full flex items-center justify-between gap-8">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {leftLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-center"
            style={{ textDecoration: "none" }}
          >
            <div
              className="font-script leading-none"
              style={{
                color: "var(--color-cream)",
                fontSize: scrolled ? "1.6rem" : "2rem",
                transition: "font-size 0.5s ease",
              }}
            >
              Carnegie&apos;s
            </div>
            <div
              className="eyebrow"
              style={{
                color: "var(--color-gold)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                marginTop: "2px",
              }}
            >
              A Place to Eat
            </div>
          </Link>

          {/* Right nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {rightLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
            <a
              href={RESTAURANT.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-burgundy"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.7rem" }}
            >
              Reservations
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: "var(--color-cream)" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 pb-12 px-8"
            style={{ background: "rgba(26,26,26,0.98)", backdropFilter: "blur(16px)" }}
          >
            <div className="flex flex-col items-center gap-8 mt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl"
                    style={{ color: "var(--color-cream)", textDecoration: "none" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 }}
              >
                <a
                  href={RESTAURANT.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-burgundy mt-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Reserve a Table
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom CTA */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{ height: "54px" }}
      >
        <a
          href={`tel:${RESTAURANT.phoneRaw}`}
          className="flex-1 flex items-center justify-center font-body text-sm font-semibold tracking-widest uppercase"
          style={{ background: "var(--color-charcoal)", color: "var(--color-gold)", borderTop: "1px solid rgba(184,150,90,0.3)" }}
        >
          Call Us
        </a>
        <a
          href={RESTAURANT.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center font-body text-sm font-semibold tracking-widest uppercase"
          style={{ background: "var(--color-burgundy)", color: "var(--color-cream)" }}
        >
          Reserve
        </a>
      </div>
    </>
  );
}
