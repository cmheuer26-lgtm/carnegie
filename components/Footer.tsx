"use client";

import Link from "next/link";
import { NAV_LINKS, RESTAURANT } from "@/lib/constants";
import { MapPin, Phone, Clock } from "lucide-react";

const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-charcoal)", color: "var(--color-cream)" }}>
      {/* Main footer */}
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-script text-4xl mb-2" style={{ color: "var(--color-cream)" }}>
              Carnegie&apos;s
            </div>
            <div className="eyebrow mb-4" style={{ color: "var(--color-gold)", fontSize: "0.6rem" }}>
              A Place to Eat
            </div>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.6)" }}>
              Set inside Greenfield&apos;s historic Carnegie Library, where elegant dining and warm
              Indiana hospitality have called the same home since 1999.
            </p>
            <div className="flex gap-4">
              <a
                href={RESTAURANT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors"
                style={{ color: "rgba(245,240,232,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
              >
                <IconFacebook />
              </a>
              <a
                href={RESTAURANT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors"
                style={{ color: "rgba(245,240,232,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
              >
                <IconInstagram />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--color-gold)", fontSize: "0.65rem" }}>
              Navigate
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors"
                    style={{ color: "rgba(245,240,232,0.6)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={RESTAURANT.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm transition-colors"
                  style={{ color: "rgba(245,240,232,0.6)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
                >
                  Reservations ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--color-gold)", fontSize: "0.65rem" }}>
              <Clock size={10} className="inline mr-1" />
              Hours
            </h4>
            <ul className="space-y-0">
              {RESTAURANT.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 py-2 border-b" style={{ borderColor: "rgba(245,240,232,0.06)" }}>
                  <span className="font-mono text-xs" style={{ color: "rgba(245,240,232,0.5)" }}>
                    {h.day.slice(0, 3).toUpperCase()}
                  </span>
                  <span
                    className="font-body text-xs text-right"
                    style={{ color: h.open ? "rgba(245,240,232,0.8)" : "rgba(245,240,232,0.35)" }}
                  >
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: "var(--color-gold)", fontSize: "0.65rem" }}>
              Find Us
            </h4>
            <address className="not-italic space-y-3">
              <div className="flex gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                <span className="font-body text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.6)" }}>
                  {RESTAURANT.address.street}<br />
                  {RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="font-body text-sm transition-colors"
                  style={{ color: "rgba(245,240,232,0.6)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(245,240,232,0.08)", background: "rgba(0,0,0,0.3)" }}
      >
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs" style={{ color: "rgba(245,240,232,0.3)" }}>
            © 2026 Carnegie&apos;s A Place To Eat. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: "rgba(245,240,232,0.3)" }}>
            Reservations powered by{" "}
            <a
              href={RESTAURANT.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(184,150,90,0.6)", textDecoration: "none" }}
            >
              OpenTable
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
