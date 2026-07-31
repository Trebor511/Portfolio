function ProjectMedia({ media, title }) {
  if (!media) {
    return (
      <div className="project-card__media project-card__media--placeholder">
        <span>Project media coming soon</span>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className="project-card__media">
        <video
          className="project-card__video"
          src={media.src}
          poster={media.poster || undefined}
          aria-label={media.alt || `${title} project video`}
          muted
          loop
          playsInline
          preload="metadata"
          controls
        >
          Your browser does not support embedded video.
        </video>
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <div className="project-card__media">
        <img
          className="project-card__image"
          src={media.src}
          alt={media.alt || `${title} project screenshot`}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="project-card__media project-card__media--placeholder">
      <span>Project media unavailable</span>
    </div>
  );
}

export default ProjectMedia;