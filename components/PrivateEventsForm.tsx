"use client";

import { RESTAURANT } from "@/lib/constants";

export default function PrivateEventsForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { label: "Your Name", type: "text", placeholder: "Jane Smith" },
          { label: "Phone Number", type: "tel", placeholder: "(317) 555-0000" },
        ].map((field) => (
          <div key={field.label}>
            <label className="eyebrow block mb-2" style={{ color: "var(--color-gold)", fontSize: "0.6rem" }}>
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 font-body text-sm"
              style={{
                background: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.15)",
                color: "var(--color-cream)",
                outline: "none",
              }}
            />
          </div>
        ))}
      </div>

      {[
        { label: "Email Address", type: "email", placeholder: "you@example.com" },
        { label: "Event Date", type: "date", placeholder: "" },
        { label: "Party Size", type: "number", placeholder: "14" },
      ].map((field) => (
        <div key={field.label}>
          <label className="eyebrow block mb-2" style={{ color: "var(--color-gold)", fontSize: "0.6rem" }}>
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 font-body text-sm"
            style={{
              background: "rgba(245,240,232,0.06)",
              border: "1px solid rgba(245,240,232,0.15)",
              color: "var(--color-cream)",
              outline: "none",
            }}
          />
        </div>
      ))}

      <div>
        <label className="eyebrow block mb-2" style={{ color: "var(--color-gold)", fontSize: "0.6rem" }}>
          Tell Us About Your Event
        </label>
        <textarea
          rows={4}
          placeholder="Describe your event, any special requests, dietary needs..."
          className="w-full px-4 py-3 font-body text-sm resize-none"
          style={{
            background: "rgba(245,240,232,0.06)",
            border: "1px solid rgba(245,240,232,0.15)",
            color: "var(--color-cream)",
            outline: "none",
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button type="submit" className="btn-burgundy flex-1 justify-center">
          Send Inquiry
        </button>
        <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn-outline-gold flex-1 justify-center">
          Call {RESTAURANT.phone}
        </a>
      </div>
    </form>
  );
}
