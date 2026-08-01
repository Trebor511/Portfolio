import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <div className="background-effects" aria-hidden="true">
        <div className="background-orb background-orb--one" />
        <div className="background-orb background-orb--two" />
        <div className="background-grid" />
      </div>

      <Header />

      <main className="site-main">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;