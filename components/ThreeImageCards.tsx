"use client";

import Link from "next/link";
import { RESTAURANT } from "@/lib/constants";

const CARDS = [
  {
    title: "View Our Menu",
    subtitle: "Steaks · Pasta · Seafood",
    href: "/menu",
    external: false,
    image: "/steak.jpg",
  },
  {
    title: "Private Dining",
    subtitle: "Intimate Events Upstairs",
    href: "/private-events",
    external: false,
    image: "/upstairs.jpg",
  },
  {
    title: "Reservations",
    subtitle: "Book via OpenTable",
    href: RESTAURANT.reservationUrl,
    external: true,
    image: "/dining-room.jpg",
  },
];

export default function ThreeImageCards() {
  return (
    <section style={{ background: "var(--dark)" }}>
      <div className="card-grid">
        {CARDS.map((card) => {
          const inner = (
            <>
              <div
                className="card-block-image"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="card-block-label">
                <div className="eyebrow" style={{ marginBottom: "10px" }}>{card.subtitle}</div>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cream)" }}>
                  {card.title}
                </h3>
              </div>
            </>
          );
          return card.external ? (
            <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer" className="card-block">{inner}</a>
          ) : (
            <Link key={card.title} href={card.href} className="card-block">{inner}</Link>
          );
        })}
      </div>
    </section>
  );
}
