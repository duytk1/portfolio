import { useEffect, useState } from "react";

const projects = [
  {
    title: "SharkBot",
    description:
      "SharkBot is a Twitch chatbot that uses the Twitch API to respond to messages in chat.",
    features: [
      "Custom commands",
      "Chat moderation",
      "Ad notifications",
      "Spotify integration",
      "Link management",
    ],
    featureImages: [
      "/images/sharkbot-custom-commands.png",
      "/images/sharkbot-chat-moderation.png",
      "/images/sharkbot-ad-notifications.png",
      "/images/sharkbot-spotify-integration.png",
      "/images/sharkbot-link-management.png",
    ],
    tags: ["Python", "JavaScript", "API", "SQL"],
    githubUrl: "https://github.com/duytk1/sharkbot",
    videoUrl: "/videos/sharkbot-demo.mp4",
  },
  {
    title: "Project Two",
    description: "Add your project summary here. Explain the main outcome or feature.",
    features: [],
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "#",
    videoUrl: "/videos/project-two-demo.mp4",
  },
  {
    title: "Project Three",
    description: "Add your project summary here. Mention your role and key result.",
    features: [],
    tags: ["Next.js", "Tailwind", "Vercel"],
    githubUrl: "#",
    videoUrl: "/videos/project-three-demo.mp4",
  },
  {
    title: "Project Four",
    description: "Add your project summary here. Highlight metrics if possible.",
    features: [],
    tags: ["Python", "Flask", "PostgreSQL"],
    githubUrl: "#",
    videoUrl: "/videos/project-four-demo.mp4",
  },
];

function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [sharkbotFeatureIndex, setSharkbotFeatureIndex] = useState(0);

  useEffect(() => {
    if (!activeVideo) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  useEffect(() => {
    const sharkBotProject = projects.find((project) => project.title === "SharkBot");
    if (!sharkBotProject || sharkBotProject.featureImages.length === 0) return undefined;

    const interval = window.setInterval(() => {
      setSharkbotFeatureIndex(
        (current) => (current + 1) % sharkBotProject.featureImages.length
      );
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>David Truong</h1>
        </div>
      </header>

      <main className="container">
        <section className="projects" aria-label="Projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              {project.features.length > 0 && (
                <>
                  <p className="feature-title">Featuring:</p>
                  {project.title === "SharkBot" ? (
                    <div className="feature-showcase">
                      <div className="feature-image-frame">
                        <img
                          src={project.featureImages[sharkbotFeatureIndex]}
                          alt={`${project.features[sharkbotFeatureIndex]} screenshot`}
                          className="feature-image"
                        />
                      </div>
                      <ul className="feature-list">
                        {project.features.map((feature, index) => (
                          <li
                            key={feature}
                            className={
                              index === sharkbotFeatureIndex ? "feature-active" : ""
                            }
                          >
                            <button
                              type="button"
                              className="feature-item-button"
                              onClick={() => setSharkbotFeatureIndex(index)}
                            >
                              {feature}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <ul className="feature-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className="links">
                <button
                  type="button"
                  className="link-button"
                  onClick={() =>
                    setActiveVideo({ title: project.title, url: project.videoUrl })
                  }
                >
                  Live Demo
                </button>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      {activeVideo && (
        <div
          className="video-modal-backdrop"
          role="presentation"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="video-modal-header">
              <h3 id="video-modal-title">{activeVideo.title} Demo</h3>
              <button
                type="button"
                className="close-button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
              >
                x
              </button>
            </div>

            <video controls autoPlay className="demo-video">
              <source src={activeVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
