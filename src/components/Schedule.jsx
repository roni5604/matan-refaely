import Section from "./Section.jsx";

export default function Schedule() {
  return (
    <Section
      id="schedule"
      align="center"
    >
      <figure className="schedule-frame">
      <img
  src={`${import.meta.env.BASE_URL}images/luz.jpg`}
  alt="לו״ז שבועי — מתן רפאלי"
  className="schedule-img"
  loading="lazy"
/>

      </figure>
    </Section>
  );
}
