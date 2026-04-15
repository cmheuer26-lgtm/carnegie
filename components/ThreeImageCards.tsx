"use client";

import Link from "next/link";
import { RESTAURANT } from "@/lib/constants";

const CARDS = [
  {
    title: "View Our Menu",
    subtitle: "Steaks · Pasta · Seafood",
    href: "/menu",
    external: false,
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Private Dining",
    subtitle: "Intimate Events Upstairs",
    href: "/private-events",
    external: false,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Reservations",
    subtitle: "Book via OpenTable",
    href: RESTAURANT.reservationUrl,
    external: true,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=80",
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
