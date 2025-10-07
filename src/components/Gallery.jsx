import Section from "./Section.jsx";
import { useState, useRef, useEffect } from "react";
import { galleryImages } from "../utils/data.js";
import Lightbox from "./Lightbox.jsx";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  // החלפה אוטומטית כל 4 שניות
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const openLightbox = (index) => {
    clearInterval(timerRef.current);
    setActive(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
    // להחזיר אוטומציה אחרי סגירה
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
  };

  const next = () => setActive((i) => (i + 1) % galleryImages.length);
  const prev = () => setActive((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  return (
    <Section id="gallery" title="גלריה" subtitle="תצוגת תמונה בודדת, מעבר אוטומטי ולייטבוקס מתקדם">
      <figure className="gallery-single" onClick={() => openLightbox(active)}>
        <img
          src={galleryImages[active]}
          alt={`גלריה ${active + 1}`}
          loading="lazy"
        />
        <figcaption className="gallery-caption">לחץ/י לתצוגה מלאה ולדפדוף</figcaption>
      </figure>

      {open && (
        <Lightbox
          images={galleryImages}
          index={active}
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
        />
      )}
    </Section>
  );
}
