import Section from "./Section.jsx";

export default function Schedule() {
  return (
    <Section
      id="schedule"
      title="לו״ז"
      align="center"
    >
      <figure className="schedule-frame">
        <img
          src="/images/luz.jpg"
          alt="לו״ז שבועי — מתן רפאלי"
          className="schedule-img"
          loading="lazy"
        />
      </figure>
    </Section>
  );
}
