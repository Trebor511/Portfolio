import ProjectMedia from "./ProjectMedia";
import { Link } from "react-router";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        className="project-card__media-link"
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
      >
        <ProjectMedia
          media={project.media}
          title={project.title}
          displayMode="card"
        />
      </Link>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>

        <h3><Link
          className="project-card__title-link"
          to={`/projects/${project.slug}`}
        >
          {project.title}
        </Link></h3>

        <p className="project-card__summary">{project.summary}</p>

        <dl className="project-card__details">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>

          <div>
            <dt>Engine</dt>
            <dd>{project.engine}</dd>
          </div>
        </dl>

        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <Link
            className="project-card__link"
            to={`/projects/${project.slug}`}
          >
            View Case Study
            <span aria-hidden="true"> →</span>
          </Link>

          {project.links?.repository && (
            <a
              className="project-card__external-link"
              href={project.links.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span aria-hidden="true"> ↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;