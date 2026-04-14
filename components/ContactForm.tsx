"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Name", type: "text", placeholder: "Your name" },
          { label: "Phone", type: "tel", placeholder: "(317) 555-0000" },
        ].map((f) => (
          <div key={f.label}>
            <label className="eyebrow block mb-1.5" style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}>{f.label}</label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              className="w-full px-4 py-3 font-body text-sm"
              style={{ background: "var(--color-beige)", border: "1px solid rgba(44,44,44,0.15)", color: "var(--color-text)", outline: "none" }}
            />
          </div>
        ))}
      </div>
      <div>
        <label className="eyebrow block mb-1.5" style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 font-body text-sm"
          style={{ background: "var(--color-beige)", border: "1px solid rgba(44,44,44,0.15)", color: "var(--color-text)", outline: "none" }}
        />
      </div>
      <div>
        <label className="eyebrow block mb-1.5" style={{ color: "var(--color-text-muted)", fontSize: "0.6rem" }}>Message</label>
        <textarea
          rows={4}
          placeholder="How can we help?"
          className="w-full px-4 py-3 font-body text-sm resize-none"
          style={{ background: "var(--color-beige)", border: "1px solid rgba(44,44,44,0.15)", color: "var(--color-text)", outline: "none" }}
        />
      </div>
      <button type="submit" className="btn-burgundy w-full justify-center">
        Send Message
      </button>
    </form>
  );
}
