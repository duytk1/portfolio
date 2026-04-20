import { useEffect, useState } from "react";

const CONTACT_EMAIL = "duytk.job@gmail.com";
const CONTACT_EMAIL_SUBJECT = "Portfolio Inquiry";

const projects = [
  {
    title: "SharkBot",
    description:
      "Sharkbot is a streaming assistant for Twitch and YouTube: a python based bot that handles chat, commands, events, optional AI replies and TTS in real time, and can bridge chat between platforms. It pairs with a small Flask app that serves OBS-friendly pages (chat overlay with 7TV emotes, TTS tools, links manager) and APIs backed by SQLite, plus optional Spotify “now playing” for overlays.",
    features: [
      "Custom commands",
      "Chat moderation",
      "Ad notifications",
      "Spotify integration",
      "Text to speech",
    ],
    featureImages: [
      "/images/sharkbot-custom-commands.png",
      "/images/sharkbot-chat-moderation.png",
      "/images/sharkbot-ad-notifications.png",
      "/images/sharkbot-spotify-integration.png",
      "/images/sharkbot-text-to-speech.png",
    ],
    tags: ["Python", "JavaScript", "API", "SQL"],
    githubUrl: "https://github.com/duytk1/sharkbot",
    videoUrl: "/videos/sharkbot-demo.mp4",
  },
  {
    title: "MineSweeper",
    description: "This is a desktop Minesweeper game in Java with a Swing GUI grid, mines, left-click to reveal, right-click to flag and safe first click.",
    features: [
      "Fully functioning board",
      "Custom sound effects",
      "Status notifications",
      "Score counter",
    ],
    featureImages: [
      "/images/minesweeper-board.png",
      "/images/minesweeper-custom-sound-effect.png",
      "/images/minesweeper-status-notifications.png",
      "/images/minesweeper-score-counter.png",
    ],
    tags: ["Java", "swing", "GUI", "OOP"],
    githubUrl: "https://github.com/duytk1/minesweeper",
    videoUrl: "/videos/minesweeper-demo.mp4",
  },
  {
    title: "Project Three",
    description: "",
    features: [

    ],
    featureImages: [

    ],
    tags: [],
    githubUrl: "#",
    videoUrl: "/videos/project-three-demo.mp4",
  },
  {
    title: "Project Four",
    description: "",
    features: [

    ],
    featureImages: [

    ],
    tags: [],
    videoUrl: "/videos/project-four-demo.mp4",
  },
];

function FeatureShowcase({ features, featureImages }) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const totalSlides = Math.min(features.length, featureImages.length);

  useEffect(() => {
    if (totalSlides < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveFeatureIndex((current) => (current + 1) % totalSlides);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    setActiveFeatureIndex(0);
  }, [features, featureImages]);

  if (totalSlides === 0) {
    return null;
  }

  return (
    <div className="feature-showcase">
      <div className="feature-image-frame">
        <img
          src={featureImages[activeFeatureIndex]}
          alt={`${features[activeFeatureIndex]} screenshot`}
          className="feature-image"
        />
      </div>
      <ul className="feature-list">
        {features.slice(0, totalSlides).map((feature, index) => (
          <li key={feature} className={index === activeFeatureIndex ? "feature-active" : ""}>
            <button
              type="button"
              className="feature-item-button"
              onClick={() => setActiveFeatureIndex(index)}
            >
              {feature}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1 className="site-title">
            David Truong
            <img
              src="/images/canadian-flag.png"
              alt="Canada"
              className="site-title-flag"
            />
          </h1>
          <p className="site-tagline">
            Phone: +1 (343) 463-9602
          </p>
          <p className="site-tagline">
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_EMAIL_SUBJECT,)}`} className="site-contact-link">
              {CONTACT_EMAIL}
            </a>
          </p>
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
                  <FeatureShowcase
                    features={project.features}
                    featureImages={project.featureImages ?? []}
                  />
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
                <a
                  href={project.githubUrl}
                  className="link-button"
                  target="_blank"
                  rel="noreferrer"
                >
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
