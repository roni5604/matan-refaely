import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const links = [
  { to: "ninja", label: "נינג'ה" },
  { to: "karate", label: "קראטה" },
  { to: "about", label: "אודותיי" },
  { to: "gallery", label: "גלריה" },
  { to: "testimonials", label: "המלצות" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner navbar-grid">
          {/* ימין: לוגו + קישורים */}
          <div className="nav-right">
            <div className="brand-logo-wrap">
            <img
  src={`${import.meta.env.BASE_URL}images/logo.jpg`}
  alt="Matan Refaely לוגו"
  className="brand-logo"
  draggable="false"
/>
            </div>

            <ul className="navlinks navlinks--clean">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    spy
                    smooth
                    duration={500}
                    offset={-80}
                    className="navlink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* שמאל: CTA בדסקטופ + המבורגר במובייל */}
          <div className="nav-left">
            <a className="btn cta-desktop" href="tel:+972527364675">צור קשר</a>
            <button
              className="menu-btn show-on-mobile"
              onClick={() => setOpen(true)}
              aria-label="פתח תפריט"
              type="button"
            >
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className="spacer" />

      {open && (
        <div className="drawer-backdrop" onClick={() => setOpen(false)}>
          <aside
            className="drawer-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="drawer-header">
              <div className="brand-logo-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.jpg`}
                  alt="Matan Refaely"
                  className="brand-logo"
                  draggable="false"
                  style={{ height: 36 }}
                />
              </div>
              <button
                className="menu-btn"
                onClick={() => setOpen(false)}
                aria-label="סגור תפריט"
                type="button"
              >
                <FiX size={22} />
              </button>
            </div>

            <nav className="drawer-nav">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  className="drawer-link"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <a
                className="btn"
                href="tel:+972527364675"
                onClick={() => setOpen(false)}
                style={{ width: "100%", marginTop: 10 }}
              >
                צור קשר
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
