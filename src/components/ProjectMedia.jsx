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
          poster={resolvedPoster}
          aria-label={fallbackAlt}
          muted
          playsInline
          preload="metadata"
          controls
        >
          <source
            src={resolvedSource}
            type="video/mp4"
          />

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