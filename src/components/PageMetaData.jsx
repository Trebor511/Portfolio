import { useEffect } from "react";

const defaultDescription =
  "Portfolio of Robert Poore, a gameplay programmer and software engineer specializing in Unreal Engine, C++, gameplay systems, tools, and graphics programming.";

function PageMetadata({
  title,
  description = defaultDescription,
}) {
  useEffect(() => {
    document.title = title;

    const descriptionElement = document.querySelector(
      'meta[name="description"]',
    );

    if (descriptionElement) {
      descriptionElement.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}

export default PageMetadata;