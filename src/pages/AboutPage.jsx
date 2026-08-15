import { Link } from "react-router";
import Reveal from "../components/Reveal";
import PageMetadata from "../components/PageMetadata";

function AboutPage() {
  return (
    <>
      <PageMetadata
        title="About | Robert Poore"
        description="Learn more about Robert Poore, a gameplay programmer and software engineer specializing in Unreal Engine, C++, gameplay systems, tools, and graphics programming."
      />
      <article className="standard-page">
        <Reveal>
          <header className="page-header">
            <p className="section-heading__eyebrow">About</p>

            <h1>Gameplay Programmer with a love for learning.</h1>

            <p>
              I am a game developer and software engineer specializing in
              gameplay programming, systems architecture, and technical
              problem-solving.
            </p>
          </header>
        </Reveal>

        <Reveal delay={100}>
          <section className="content-section">
            <h2>My background</h2>

            <p>
              I earned a Bachelor of Science in Game Development from Full Sail
              University. My work includes Unreal Engine gameplay systems, Unity
              projects, graphics programming, tools, artificial intelligence,
              and lower-level C++ development.
            </p>

            <p>
              I currently focus on building systems that are reusable,
              designer-friendly, and maintainable. I enjoy turning gameplay ideas
              into clear technical structures that can grow with a project.
            </p>
          </section>
        </Reveal>

        <section className="about-section">
          <h2>Outside of development</h2>

          <p>
            Outside of game development, I spend a lot of my free time playing games
            and paying attention to the systems and design choices that make them
            memorable. Some of my favorite games include the Kingdom Hearts series,  Final Fantasy, and Legend of Zelda.
            Not only do I enjoy a good RPG, but I also enjoy a good challange, from combat to puzzles. I have also been 
            known to get locked into a 2 week binge of a cozy game like Stardew Valley or Minecraft!
            
          </p>

          <p>
            I also enjoy getting away from the screen when I can. Lately,
            I’ve been learning to cook more dishes for myself, getting into fishing at the local pond
             (I've only caught a few bluegills so far), and riding my bike
            around town to get some good exercise while I explore the area. 
            I like having hobbies that give me an opportunity to expand my skills and stretch my brain
            which is a great way for me to reset away from development.
          </p>
        </section>

        <Reveal delay={140}>
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
        </Reveal>

        <Reveal delay={180}>
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
        </Reveal>
      </article>
    </>
  );
}

export default AboutPage;