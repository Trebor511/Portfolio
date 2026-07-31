import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <Reveal
          as="div"
          delay={Math.min(index * 90, 360)}
          key={project.id}
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}

export default ProjectGrid;