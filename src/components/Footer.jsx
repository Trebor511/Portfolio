import { Link } from "react-router";
import { profile } from "../data/profile";
import { assetPath } from "../utils/assetPath";

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
            href={assetPath(profile.resume)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
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