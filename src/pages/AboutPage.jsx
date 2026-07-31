import { Link } from "react-router";

function AboutPage() {
  return (
    <article className="standard-page">
      <header className="page-header">
        <p className="section-heading__eyebrow">About</p>

        <h1>Gameplay programmer focused on reusable systems.</h1>

        <p>
          I am a game developer and software engineer specializing in gameplay
          programming, systems architecture, and technical problem-solving.
        </p>
      </header>

      <section className="content-section">
        <h2>My background</h2>

        <p>
          I earned a Bachelor of Science in Game Development from Full Sail
          University. My work includes Unreal Engine gameplay systems, Unity
          projects, graphics programming, tools, artificial intelligence, and
          lower-level C++ development.
        </p>

        <p>
          I currently focus on building systems that are reusable,
          designer-friendly, and maintainable. I enjoy turning gameplay ideas
          into clear technical structures that can grow with a project.
        </p>
      </section>

      <section className="content-section">
        <h2>Technical focus</h2>

        <div className="skill-grid">
          <article className="skill-card">
            <h3>Gameplay Programming</h3>
            <p>
              Player mechanics, interactions, inventory, workstations,
              portals, artificial intelligence, and gameplay architecture.
            </p>
          </article>

          <article className="skill-card">
            <h3>Unreal Engine and C++</h3>
            <p>
              C++ gameplay foundations with Blueprint-facing tools and
              designer-friendly configuration.
            </p>
          </article>

          <article className="skill-card">
            <h3>Systems Design</h3>
            <p>
              Modular systems, interfaces, reusable components, state
              management, and scalable project organization.
            </p>
          </article>

          <article className="skill-card">
            <h3>Graphics and Tools</h3>
            <p>
              Vulkan, rendering pipelines, runtime data parsing, matrices,
              transformations, and development utilities.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section content-section--callout">
        <h2>See the work behind the systems</h2>

        <p>
          My case studies explain the architecture, responsibilities,
          challenges, and results behind each project.
        </p>

        <Link className="button button--primary" to="/work">
          View My Projects
        </Link>
      </section>
    </article>
  );
}

export default AboutPage;