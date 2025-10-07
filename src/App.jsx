import { Element } from "react-scroll";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Ninja from "./components/Ninja.jsx";
import Karate from "./components/Karate.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Schedule from "./components/Schedule.jsx";
import Video from "./components/Video.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      {/* רווח מתחת לנב קבוע */}
      <div className="spacer" />

      <main className="container" style={{ marginBottom: 48 }}>
        {/* HERO (ללא עוגן בתפריט) */}
        <section className="section">
          <Hero />
        </section>

        {/* נינג'ה */}
        <section className="section">
          <Element name="ninja">
            <Ninja />
          </Element>
        </section>

        {/* קראטה */}
        <section className="section">
          <Element name="karate">
            <Karate />
          </Element>
        </section>

        {/* אודותיי */}
        <section className="section">
          <Element name="about">
            <About />
          </Element>
        </section>

        {/* גלריה */}
        <section className="section">
          <Element name="gallery">
            <Gallery />
          </Element>
        </section>

        {/* המלצות */}
        <section className="section">
          <Element name="testimonials">
            <Testimonials />
          </Element>
        </section>

        {/* לו״ז (חדש) */}
        <section className="section">
          <Element name="schedule">
            <Schedule />
          </Element>
        </section>

        {/* וידאו (חדש) — בלי כותרת, קטע עצמאי ונקי */}
        <Video />

        {/* יצירת קשר */}
        <section className="section">
          <Element name="contact">
            <Contact />
          </Element>
        </section>
      </main>

      <Footer />
    </>
  );
}
