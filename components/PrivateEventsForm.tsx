"use client";

import { RESTAURANT } from "@/lib/constants";

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

export default function PrivateEventsForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <label style={labelStyle}>Your Name</label>
          <input type="text" placeholder="Jane Smith" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input type="tel" placeholder="(317) 555-0000" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email Address</label>
        <input type="email" placeholder="you@example.com" style={inputStyle} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <label style={labelStyle}>Event Date</label>
          <input type="date" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Party Size</label>
          <input type="number" placeholder="14+" style={inputStyle} min={14} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Tell Us About Your Event</label>
        <textarea rows={5} placeholder="Describe your event, special requests, dietary needs..." style={{ ...inputStyle, resize: "none" }} />
      </div>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <button type="submit" className="btn btn-gold" style={{ flex: 1, justifyContent: "center", minWidth: "160px" }}>
          Send Inquiry
        </button>
        <a href={`tel:${RESTAURANT.phoneRaw}`} className="btn btn-cream" style={{ flex: 1, justifyContent: "center", minWidth: "160px" }}>
          Call {RESTAURANT.phone}
        </a>
      </div>
    </form>
  );
}
