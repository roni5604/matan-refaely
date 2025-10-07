import Section from "./Section.jsx";

export default function Video() {
  return (
    <Section
      id="video"
      title="שיתוף פעולה עם עמותת ג׳ינדאס"
      align="center"
    >
      <div className="video-embed">
        <iframe
          src="https://www.youtube.com/embed/mbG4-8XMuw8"
          title="שיעור קראטה / הדרכה — מתן רפאלי"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
}
