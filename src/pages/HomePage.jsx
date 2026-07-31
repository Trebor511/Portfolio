import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Gameplay Programmer</p>

          <h1>I build modular gameplay systems and interactive experiences.</h1>

          <p className="hero__summary">
            I am a gameplay programmer and software engineer focused on Unreal
            Engine, C++, systems design, and development tools.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              View My Work
            </a>

            <a className="button button--secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="page-section">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Selected Work</p>
          <h2>Featured Projects</h2>
          <p>
            A selection of gameplay, systems, and graphics programming
            projects.
          </p>
        </div>

        <ProjectGrid
          projects={projects.filter((project) => project.featured)}
        />
      </section>

      <section id="about" className="page-section">
        <div className="section-heading">
          <p className="section-heading__eyebrow">About</p>
          <h2>Gameplay-focused development</h2>
          <p>
            I specialize in building reusable gameplay systems, tools, and
            technical foundations for interactive projects.
          </p>
        </div>
      </section>

      <section id="contact" className="page-section">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Contact</p>
          <h2>Let&apos;s build something</h2>
          <p>Contact information and professional links will appear here.</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;