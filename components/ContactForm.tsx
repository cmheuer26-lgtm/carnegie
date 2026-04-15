"use client";

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  background: "var(--card)",
  border: "1px solid var(--c15)",
  color: "var(--cream)",
  fontFamily: "'Josefin Sans',sans-serif",
  fontSize: "0.82rem",
  letterSpacing: "0.05em",
  outline: "none",
};

const labelStyle = {
  display: "block",
  fontFamily: "'Josefin Sans',sans-serif",
  fontSize: "0.6rem",
  fontWeight: 400,
  letterSpacing: "0.32em",
  textTransform: "uppercase" as const,
  color: "var(--gold)",
  marginBottom: "10px",
};

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input type="text" placeholder="Your name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input type="tel" placeholder="(317) 555-0000" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input type="email" placeholder="you@example.com" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea rows={5} placeholder="How can we help?" style={{ ...inputStyle, resize: "none" }} />
      </div>
      <button type="submit" className="btn btn-gold" style={{ alignSelf: "flex-start", minWidth: "200px", justifyContent: "center" }}>
        Send Message
      </button>
    </form>
  );
}
