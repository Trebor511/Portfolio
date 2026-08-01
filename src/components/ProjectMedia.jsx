function ProjectMedia({
  media,
  title,
  displayMode = "full",
}) {
  if (!media) {
    return (
      <div className="project-card__media project-card__media--placeholder">
        <span>Project media coming soon</span>
      </div>
    );
  }

  const fallbackAlt =
    media.alt || `${title} project media`;

  if (displayMode === "card") {
    if (media.poster) {
      return (
        <div className="project-card__media">
          <img
            className="project-card__image"
            src={media.poster}
            alt={fallbackAlt}
            loading="lazy"
            decoding="async"
          />

          {media.type === "video" && (
            <div
              className="project-card__play-indicator"
              aria-hidden="true"
            >
              <span className="project-card__play-icon" />
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="project-card__media project-card__media--placeholder">
        <span>Project preview unavailable</span>
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
          aria-label={fallbackAlt}
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
          alt={fallbackAlt}
          loading="lazy"
          decoding="async"
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