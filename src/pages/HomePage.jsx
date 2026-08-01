import { Link } from "react-router";
import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";
import PageMetadata from "../components/PageMetadata";
import { assetPath } from "../utils/assetPath";

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <PageMetadata
        title="Robert Poore | Gameplay Programmer"
        description="Portfolio of Robert Poore, featuring Unreal Engine, C++, gameplay programming, tools, graphics, and software engineering projects."
      />
      <section className="hero">
        <div className="hero__grid">
          <Reveal className="hero__content">
            <div className="availability-badge">
              <span
                className="availability-badge__indicator"
                aria-hidden="true"
              />
              Open to gameplay and tools programming opportunities
            </div>

            <p className="hero__eyebrow">Gameplay Programmer</p>

            <h1>
              I build{" "}
              <span className="gradient-text">
                modular gameplay systems
              </span>{" "}
              and interactive experiences.
            </h1>

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
                href={assetPath("resume/Robert-Poore-Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Résumé
              </a>
            </div>
          </Reveal>

          <Reveal className="hero__portrait" delay={140}>
            <div className="hero__portrait-frame">
              <img
                src={assetPath("images/robert-poore-headshot.jpg")}
                alt="Robert Poore, gameplay programmer and software engineer"
              />
            </div>

            <div className="hero__portrait-caption">
              <span>Unreal Engine</span>
              <span>C++</span>
              <span>Gameplay Systems</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <Reveal>
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
        </Reveal>


        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="page-section home-introduction">
        <Reveal>
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
        </Reveal>
      </section>
    </>
  );
}

export default HomePage;