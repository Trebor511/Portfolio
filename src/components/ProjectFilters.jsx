const filters = [
  "All",
  "Game Development",
  "Graphics Programming",
  "Software Development",
];

function ProjectFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="project-filters" aria-label="Filter projects">
      {filters.map((filter) => (
        <button
          className={
            activeFilter === filter
              ? "project-filter project-filter--active"
              : "project-filter"
          }
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;