import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <Header />

      <main className="site-main">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;