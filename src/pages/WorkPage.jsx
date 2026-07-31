import { useState } from "react";
import ProjectFilters from "../components/ProjectFilters";
import ProjectGrid from "../components/ProjectGrid";
import { projects } from "../data/projects";

function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter,
        );

  return (
    <section className="standard-page">
      <header className="page-header">
        <p className="section-heading__eyebrow">Portfolio</p>

        <h1>My Work</h1>

        <p>
          Gameplay, systems, tools, software, and graphics programming
          projects created through independent development, academic work, and
          team collaboration.
        </p>
      </header>

      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <p className="project-count" aria-live="polite">
        Showing {visibleProjects.length}{" "}
        {visibleProjects.length === 1 ? "project" : "projects"}
      </p>

      <ProjectGrid projects={visibleProjects} />
    </section>
  );
}

export default WorkPage;