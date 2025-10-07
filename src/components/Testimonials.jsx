import Section from "./Section.jsx";
import { useState, useCallback, useEffect } from "react";
import { testimonials } from "../utils/data.js";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

/**
 * תצוגת המלצות:
 * - תמונה אחת במרכז
 * - חיצים בצדדי התמונה (overlay), ממורכזים אנכית
 * - נקודות מצב מתחת
 * - אין Lightbox ואין פעולה בלחיצה על התמונה
 * - object-fit: contain לשמירה על קריאות הטקסט בתמונה
 */

export default function Testimonials() {
  const images = testimonials.map((t) => t.avatar);
  const names = testimonials.map((t) => t.name);
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // ניווט מקלדת (חצים)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <Section
      id="testimonials"
      title="המלצות"
      subtitle="תמונה אחת באמצע, חיצים בצדדים ונקודות מצב"
      align="center"
    >
      <div className="testimonial-one-wrapper">
        <div className="testimonial-one-frame with-side-arrows">
          <img
            src={images[index]}
            alt={names[index] || `המלצה ${index + 1}`}
            className="testimonial-one-img"
            draggable="false"
          />

          {/* חץ ימני (ב־RTL זה הצד הימני = הקודם) */}
          <button
            className="arrow-btn arrow-right"
            onClick={prev}
            aria-label="הקודם"
            type="button"
          >
            <FiChevronRight size={20} />
          </button>

          {/* חץ שמאלי (ב־RTL זה הצד השמאלי = הבא) */}
          <button
            className="arrow-btn arrow-left"
            onClick={next}
            aria-label="הבא"
            type="button"
          >
            <FiChevronLeft size={20} />
          </button>
        </div>

        {/* כיתוב קטן (שם/מקור) – אופציונלי */}
        {names[index] && (
          <div className="testimonial-one-caption">{names[index]}</div>
        )}

        {/* נקודות מצב */}
        <div
          className="testimonial-one-dots"
          role="tablist"
          aria-label="בחירת שקופית"
        >
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`שקופית ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              type="button"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
