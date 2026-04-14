"use client";

import { motion } from "framer-motion";
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
    title: "Make a Reservation",
    subtitle: "Book via OpenTable",
    href: RESTAURANT.reservationUrl,
    external: true,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=80",
  },
];

export default function ThreeImageCards() {
  return (
    <section
      style={{ background: "var(--color-charcoal)" }}
      aria-label="Quick links"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="img-hover relative overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            {card.external ? (
              <a href={card.href} target="_blank" rel="noopener noreferrer" className="block absolute inset-0">
                <CardContent card={card} />
              </a>
            ) : (
              <Link href={card.href} className="block absolute inset-0" style={{ textDecoration: "none" }}>
                <CardContent card={card} />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CardContent({ card }: { card: typeof CARDS[0] }) {
  return (
    <>
      <div
        className="img-inner absolute inset-0"
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
        <p className="eyebrow mb-2" style={{ color: "var(--color-gold)", fontSize: "0.6rem" }}>
          {card.subtitle}
        </p>
        <h3
          className="font-display text-2xl md:text-3xl"
          style={{ color: "var(--color-cream)", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          {card.title}
        </h3>
      </div>
    </>
  );
}
