import { Link } from "react-router";
import { profile } from "../data/profile";
import { assetPath } from "../utils/assetPath";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import EmailIcon from "./icons/EmailIcon";

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

        <div className="site-footer__navigation">
          <div className="site-footer__links">
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>

            <a
              href={assetPath(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div
            className="site-footer__socials"
            aria-label="Professional links"
          >
            <a
              className="site-footer__social-link"
              href={`mailto:${profile.email}`}
              aria-label="Email Robert Poore"
            >
              <EmailIcon />
            </a>

            <a
              className="site-footer__social-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Robert Poore's GitHub profile"
            >
              <GitHubIcon />
            </a>

            <a
              className="site-footer__social-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Robert Poore's LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;