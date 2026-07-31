function ContactPage() {
  return (
    <section className="standard-page contact-page">
      <header className="page-header">
        <p className="section-heading__eyebrow">Contact</p>

        <h1>Let&apos;s build something.</h1>

        <p>
          I am interested in gameplay programming, tools programming, software
          engineering, and collaborative game-development opportunities.
        </p>
      </header>

      <div className="contact-grid">
        <article className="contact-card">
          <p className="contact-card__label">Email</p>
          <h2>Send me a message</h2>

          <p>
            The best way to contact me about employment, projects, or
            professional opportunities.
          </p>

          <a
            className="button button--primary"
            href="mailto:robert.j.poore@gmail.com"
          >
            Email Me
          </a>
        </article>

        <article className="contact-card">
          <p className="contact-card__label">GitHub</p>
          <h2>Review my code</h2>

          <p>
            Browse my repositories, programming exercises, and project source
            code.
          </p>

          <a
            className="button button--secondary"
            href="https://github.com/Trebor511"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open GitHub
          </a>
        </article>

        <article className="contact-card">
          <p className="contact-card__label">LinkedIn</p>
          <h2>Connect professionally</h2>

          <p>
            View my employment history, skills, education, and professional
            updates.
          </p>

          <a
            className="button button--secondary"
            href="https://linkedin.com/in/robertjpoore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open LinkedIn
          </a>
        </article>
      </div>
    </section>
  );
}

export default ContactPage;