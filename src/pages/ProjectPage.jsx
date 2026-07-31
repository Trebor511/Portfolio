import { Link, useParams } from "react-router";
import ProjectMedia from "../components/ProjectMedia";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-page project-page--missing">
        <p className="section-heading__eyebrow">Project Not Found</p>
        <h1>That project does not exist.</h1>

        <Link className="button button--primary" to="/">
          Return Home
        </Link>
      </section>
    );
  }

  return (
    <article className="project-page">
      <header className="project-page__header">
        <Link className="project-page__back" to="/">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>

        <p className="project-page__eyebrow">{project.category}</p>

        <h1>{project.title}</h1>

        <p className="project-page__summary">{project.summary}</p>

        <dl className="project-page__facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>

          <div>
            <dt>Engine</dt>
            <dd>{project.engine}</dd>
          </div>

          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>

        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </header>

      <div className="project-page__media">
        <ProjectMedia media={project.media} title={project.title} />
      </div>

      <section className="project-page__section">
        <p className="section-heading__eyebrow">Overview</p>
        <h2>Project overview</h2>
        <p>{project.overview}</p>
      </section>

      <section className="project-page__section">
        <p className="section-heading__eyebrow">Responsibilities</p>
        <h2>What I worked on</h2>

        <ul className="project-page__list">
          {project.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </section>

      <section className="project-page__section">
        <p className="section-heading__eyebrow">Technical Challenges</p>
        <h2>Problems and solutions</h2>

        <div className="challenge-grid">
          {project.challenges.map((challenge) => (
            <article className="challenge-card" key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-page__section">
        <p className="section-heading__eyebrow">Results</p>
        <h2>Project outcomes</h2>

        <ul className="project-page__list">
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default ProjectPage;