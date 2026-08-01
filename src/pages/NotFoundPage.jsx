import { Link } from "react-router";
import PageMetadata from "../components/PageMetadata";

function NotFoundPage() {
  return (
    <>
      <PageMetadata
        title="Page Not Found | Robert Poore"
        description="The requested page could not be found."
      />
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
    </>
  );
}

export default NotFoundPage;