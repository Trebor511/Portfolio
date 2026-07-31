import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/">
          Robert Poore
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/work">
            Work
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;