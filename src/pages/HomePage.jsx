import { Link } from "react-router";
import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Gameplay Programmer</p>

          <h1>I build modular gameplay systems and interactive experiences.</h1>

          <p className="hero__summary">
            I am a gameplay programmer and software engineer focused on Unreal
            Engine, C++, systems design, graphics programming, and development
            tools.
          </p>

          <div className="hero__actions">
            <Link className="button button--primary" to="/work">
              View My Work
            </Link>

            <Link className="button button--secondary" to="/contact">
              Contact Me
            </Link>

            <a
              className="button button--secondary"
              href="/resume/Robert-Poore-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Résumé
            </a>

          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading section-heading--with-action">
          <div>
            <p className="section-heading__eyebrow">Selected Work</p>
            <h2>Featured Projects</h2>
            <p>
              A selection of gameplay, systems, and graphics programming
              projects.
            </p>
          </div>

          <Link className="text-link" to="/work">
            View all projects
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="page-section home-introduction">
        <div className="section-heading">
          <p className="section-heading__eyebrow">About Me</p>
          <h2>Gameplay-focused development</h2>

          <p>
            I build reusable gameplay systems and technical foundations with a
            focus on C++, Unreal Engine, and maintainable architecture.
          </p>

          <Link className="text-link" to="/about">
            More about my experience
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;