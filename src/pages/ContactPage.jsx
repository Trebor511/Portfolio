import Reveal from "../components/Reveal";
import { profile } from "../data/profile";
import PageMetadata from "../components/PageMetadata";

function ContactPage() {
  return (
    <>
      <PageMetadata
        title="Contact | Robert Poore"
        description="Contact Robert Poore about gameplay programming, tools programming, game development, and software-engineering opportunities."
      />

      <section className="standard-page contact-page">
        <Reveal>
          <header className="page-header">
            <p className="section-heading__eyebrow">Contact</p>

            <h1>Let&apos;s build something.</h1>

            <p>
              I am interested in gameplay programming, tools programming,
              software engineering, and collaborative game-development
              opportunities.
            </p>
          </header>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={80}>
            <article className="contact-card">
              <p className="contact-card__label">Email</p>
              <h2>Send me a message</h2>

              <p>
                The best way to contact me about employment, projects, or
                professional opportunities.
              </p>

              <a
                className="button button--primary"
                href={`mailto:${profile.email}`}
              >
                Email Me
              </a>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="contact-card">
              <p className="contact-card__label">GitHub</p>
              <h2>Review my code</h2>

              <p>
                Browse my repositories, programming exercises, and project
                source code.
              </p>

              <a
                className="button button--secondary"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GitHub
              </a>
            </article>
          </Reveal>

          <Reveal delay={240}>
            <article className="contact-card">
              <p className="contact-card__label">LinkedIn</p>
              <h2>Connect professionally</h2>

              <p>
                View my employment history, skills, education, and professional
                updates.
              </p>

              <a
                className="button button--secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open LinkedIn
              </a>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ContactPage;