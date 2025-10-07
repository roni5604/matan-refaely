export default function Section({ id, title, subtitle, children, align = "start" }) {
  const headerStyle = {
    marginBottom: 16,
    textAlign: align === "center" ? "center" : "right",
  };

  return (
    <section id={id} className="section">
      {title && (
        <header style={headerStyle}>
          <h2 className="title" style={{ letterSpacing: ".2px" }}>{title}</h2>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
