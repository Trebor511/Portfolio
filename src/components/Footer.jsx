import { Link } from "react-router";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">Robert Poore</p>
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} Robert Poore
          </p>
        </div>

        <div className="site-footer__links">
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>

          <a
            href="/resume/Robert-Poore-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>

          <a
            href="https://github.com/Trebor511"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/robertjpoore/"
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