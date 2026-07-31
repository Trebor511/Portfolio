import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";

function WorkPage() {
  return (
    <section className="standard-page">
      <header className="page-header">
        <p className="section-heading__eyebrow">Portfolio</p>

        <h1>My Work</h1>

        <p>
          Gameplay, systems, tools, and graphics programming projects created
          through independent development, academic work, and team
          collaboration.
        </p>
      </header>

      <ProjectGrid projects={projects} />
    </section>
  );
}

export default WorkPage;