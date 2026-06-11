function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} Mevludin Causevic
      </p>
      <div className="footer-status">
        <span className="footer-status-dot"></span>
        Open to opportunities
      </div>
    </footer>
  );
}

export default Footer;
