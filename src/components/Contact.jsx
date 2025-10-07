import Section from "./Section.jsx";
import { FiPhone, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const phoneIntl = "+972527364675";
  const waLink = `https://wa.me/972527364675?text=${encodeURIComponent(
    `היי מתן, כאן ${name || "—"}. ${msg || ""}`
  )}`;

  return (
    <Section id="contact" title="יצירת קשר" subtitle="אשמח לשוחח, לשתף ולשתף פעולה">
      <div className="grid grid-2">
        <div className="card" style={{ display: "grid", gap: 12 }}>
          <p style={{ color: "#374151" }}>לשאלות, סדנאות, חוגים והדרכות — מוזמנים לפנות:</p>
          <div style={{ display: "grid", gap: 10 }}>
            <a href={`tel:${phoneIntl}`} className="btn" style={{ width: "100%" }}>
              <FiPhone style={{ marginInlineStart: 8 }} /> התקשר: 052-736-4675
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn" style={{ width: "100%", background: "#22c55e" }}>
              <FiSend style={{ marginInlineStart: 8 }} /> שליחת וואטסאפ
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.open(waLink, "_blank"); }}
          className="card form"
          style={{ display: "grid", gap: 12 }}
        >
          <label>
            <span style={{ fontSize: 13, color: "#6b7280" }}>שם מלא</span>
            <input
              type="text"
              placeholder="הקלד/י שם..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span style={{ fontSize: 13, color: "#6b7280" }}>הודעה</span>
            <textarea
              placeholder="ספר/י בקצרה איך אוכל לעזור..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </label>
          <button type="submit" className="btn" style={{ width: "100%" }}>שליחת הודעה</button>
        </form>
      </div>
    </Section>
  );
}
