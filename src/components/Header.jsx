import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { profile } from "../data/profile";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
  function handlePointerDown(event) {
    const header = headerRef.current;

    if (
      isMenuOpen &&
      header &&
      !header.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  }

  document.addEventListener("pointerdown", handlePointerDown);

  return () => {
    document.removeEventListener("pointerdown", handlePointerDown);
  };
}, [isMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-brand"
          to="/"
          onClick={closeMenu}
        >
          Robert Poore
        </Link>

        <button
          className={
            isMenuOpen
              ? "menu-toggle menu-toggle--open"
              : "menu-toggle"
          }
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>

        <nav
          id="primary-navigation"
          className={
            isMenuOpen
              ? "site-nav site-nav--open"
              : "site-nav"
          }
          aria-label="Primary navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/work" onClick={closeMenu}>
            Work
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;