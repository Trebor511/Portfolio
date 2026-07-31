import { Link } from "react-router";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {new Date().getFullYear()} Robert Poore</p>

        <div className="site-footer__links">
          <Link to="/contact">Contact</Link>

          <a
            href="https://github.com/Trebor511"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;