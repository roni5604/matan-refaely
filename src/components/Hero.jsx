import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/matan-refaely_2.jpg" alt="מתן רפאלי" className="hero-bg" />
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          מתן רפאלי — נינג׳ה, אומנויות לחימה והדרכה
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .12, duration: 0.5 }}
        >
          דף יחיד מהיר ואלגנטי המציג את הדרך, הערכים והעשייה של מתן רפאלי.
        </motion.p>
        <div className="hero-actions">
          <a href="#contact" className="btn">צור קשר</a>
          <a href="#gallery" className="btn dark">לגלריה</a>
        </div>
      </div>
    </section>
  );
}
