import { useEffect, useCallback } from "react";
import { FiX, FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function Lightbox({ images = [], index = 0, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose?.();
    if (e.key === "ArrowRight") onNext?.();
    if (e.key === "ArrowLeft") onPrev?.();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!images.length) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="סגור">
          <FiX size={24} />
        </button>

        <button className="lightbox-nav left" onClick={onPrev} aria-label="הקודם">
          <FiChevronRight size={28} />
        </button>

        <img
          key={images[index]}
          src={images[index]}
          alt={`תמונה ${index + 1} מתוך ${images.length}`}
          className="lightbox-img"
        />

        <button className="lightbox-nav right" onClick={onNext} aria-label="הבא">
          <FiChevronLeft size={28} />
        </button>

        <div className="lightbox-counter">{index + 1}/{images.length}</div>
      </div>
    </div>
  );
}
