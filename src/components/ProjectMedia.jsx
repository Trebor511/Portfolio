import { assetPath } from "../utils/assetPath";

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

  const resolvedSource = media.src
    ? assetPath(media.src)
    : undefined;

  const resolvedPoster = media.poster
    ? assetPath(media.poster)
    : undefined;

  if (displayMode === "card") {
    if (resolvedPoster) {
      return (
        <div className="project-card__media">
          <img
            className="project-card__image"
            src={resolvedPoster}
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

  if (media.type === "video" && resolvedSource) {
    return (
      <div className="project-card__media">
        <video
          className="project-card__video"
          src={resolvedSource}
          poster={resolvedPoster}
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

  if (media.type === "image" && resolvedSource) {
    return (
      <div className="project-card__media">
        <img
          className="project-card__image"
          src={resolvedSource}
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