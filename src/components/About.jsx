import Section from "./Section.jsx";

export default function About() {
  return (
    <Section id="about" title="אודותיי" subtitle="קצת על מתן רפאלי">
      <div className="grid grid-2">
        <div className="card" style={{ display: "grid", gap: 12 }}>
          <p>
            שמי מתן רפאלי. בתור ילד התאמנתי מספר שנים בג׳ודו, ולאחר הפסקה מאומנויות לחימה מצאתי את מקומי בקראטה.
            כשהתחלתי להתאמן הייתי ביישן, שקט, חלש. בקראטה מצאתי בית שמעצים, מלמד ומקנה לי כלים להתחזק פיזית ונפשית.
          </p>
          <p>
            כיום, אני מתאמן כמעט 13 שנים בקראטה, במהלכן לקחתי חלק בסדנאות הגנה עצמית,
            אימוני ילדים מגיל 4 ועד להדרכת בוגרים בני 60.
          </p>
          <p>
            אני עוסק באומנויות לחימה כי זה עוזר לי להרגיש בטוח בעצמי, מחזק ומהנה.
            בהדרכות שלי אני שואף להמשיך את הגלגל – ולהעביר את זה הלאה.
          </p>
        </div>
        <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
<img
  src={`${import.meta.env.BASE_URL}images/matan-refaely_2.jpg`}
  alt="מתן רפאלי"
  style={{ borderRadius: 14, width: "100%", height: 290, objectFit: "cover" }}
  loading="lazy"
/>

        </div>
      </div>
    </Section>
  );
}
