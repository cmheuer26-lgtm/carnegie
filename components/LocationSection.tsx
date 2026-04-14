"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

export default function LocationSection() {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(RESTAURANT.address.full)}`;

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-charcoal)" }}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold)" }}>
            Find Us
          </p>
          <h2 className="font-display" style={{ color: "var(--color-cream)", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Come Visit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Address & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-xl mb-6" style={{ color: "var(--color-cream)" }}>
              Address
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                <div>
                  <p className="font-body" style={{ color: "rgba(245,240,232,0.8)" }}>
                    {RESTAURANT.address.street}
                  </p>
                  <p className="font-body" style={{ color: "rgba(245,240,232,0.8)" }}>
                    {RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 font-body text-sm transition-colors"
                    style={{ color: "var(--color-gold)", textDecoration: "none" }}
                  >
                    Get Directions <ExternalLink size={11} />
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="flex-shrink-0" style={{ color: "var(--color-gold)" }} />
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="font-body transition-colors"
                  style={{ color: "rgba(245,240,232,0.8)", textDecoration: "none" }}
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-display text-xl mb-6" style={{ color: "var(--color-cream)" }}>
              <Clock size={16} className="inline mr-2" style={{ color: "var(--color-gold)" }} />
              Hours
            </h3>
            <ul className="space-y-2">
              {RESTAURANT.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 py-1 border-b" style={{ borderColor: "rgba(245,240,232,0.06)" }}>
                  <span className="font-mono text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>
                    {h.day}
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{ color: h.open ? "rgba(245,240,232,0.85)" : "rgba(245,240,232,0.3)" }}
                  >
                    {h.hours}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Reserve */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-xl mb-6" style={{ color: "var(--color-cream)" }}>
                Reservations
              </h3>
              <p className="font-body leading-relaxed mb-8" style={{ color: "rgba(245,240,232,0.55)", fontSize: "0.95rem" }}>
                We recommend reservations, especially on Friday and Saturday evenings. Walk-ins
                welcome based on availability.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={RESTAURANT.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-burgundy w-full justify-center"
              >
                Book on OpenTable
              </a>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="btn-outline-gold w-full justify-center"
              >
                Call to Reserve
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
