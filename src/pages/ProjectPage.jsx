import { Link, useParams } from "react-router";
import ProjectMedia from "../components/ProjectMedia";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";
import PageMetadata from "../components/PageMetadata";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <PageMetadata
          title="Project Not Found | Robert Poore"
          description="The requested portfolio project could not be found."
        />
        <Reveal>
          <section className="project-page project-page--missing">
            <p className="section-heading__eyebrow">Project Not Found</p>
            <h1>That project does not exist.</h1>

            <Link className="button button--primary" to="/">
              Return Home
            </Link>
          </section>
        </Reveal>
      </>
    );
  }

  return (
    <article className="project-page">
      <PageMetadata
        title={`${project.title} | Robert Poore`}
        description={project.summary}
      />

      <Reveal>
        <header className="project-page__header">
          <Link className="project-page__back" to="/work">
            <span aria-hidden="true">←</span> Back to projects
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
      </Reveal>

      <Reveal delay={100}>
        <div className="project-page__media">
          <ProjectMedia media={project.media} title={project.title} />
        </div>
      </Reveal>

      <Reveal>
        <section className="project-page__section">
          <p className="section-heading__eyebrow">Overview</p>
          <h2>Project overview</h2>
          <p>{project.overview}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="project-page__section">
          <p className="section-heading__eyebrow">Responsibilities</p>
          <h2>What I worked on</h2>

          <ul className="project-page__list">
            {project.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="project-page__section">
          <p className="section-heading__eyebrow">
            Technical Challenges
          </p>

          <h2>Problems and solutions</h2>

          <div className="challenge-grid">
            {project.challenges.map((challenge, index) => (
              <Reveal
                delay={Math.min(index * 100, 300)}
                key={challenge.title}
              >
                <article className="challenge-card">
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="project-page__section">
          <p className="section-heading__eyebrow">Results</p>
          <h2>Project outcomes</h2>

          <ul className="project-page__list">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </section>
      </Reveal>

      {project.links &&
        Object.values(project.links).some((link) => Boolean(link)) && (
          <Reveal>
            <section className="project-page__section">
              <p className="section-heading__eyebrow">Project Links</p>
              <h2>Explore the project</h2>

              <div className="project-link-list">
                {project.links.repository && (
                  <a
                    className="button button--secondary"
                    href={project.links.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                  </a>
                )}

                {project.links.video && (
                  <a
                    className="button button--secondary"
                    href={project.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </a>
                )}

                {project.links.playableBuild && (
                  <a
                    className="button button--primary"
                    href={project.links.playableBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Project
                  </a>
                )}
              </div>
            </section>
          </Reveal>
        )}
    </article>
  );
}

export default ProjectPage;