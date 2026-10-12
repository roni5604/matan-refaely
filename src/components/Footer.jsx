export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Matan Refaely — כל הזכויות שמורות.</p>
        <p className="footer-credit">
          עיצוב ופיתוח האתר: <a href="https://ronimichaeli.com/he/" hreflang="he">רוני מיכאלי</a>
        </p>
      </div>
    </footer>
  );
}
