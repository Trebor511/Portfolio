import { Link } from "react-router";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/">
          Robert Poore
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;