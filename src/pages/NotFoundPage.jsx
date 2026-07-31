import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <p className="section-heading__eyebrow">404</p>
      <h1>Page not found</h1>

      <p>
        The page you requested does not exist or may have been moved.
      </p>

      <Link className="button button--primary" to="/">
        Return Home
      </Link>
    </section>
  );
}

export default NotFoundPage;