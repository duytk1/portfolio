import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_SUBJECT,
  projects,
} from "./projects.js";

function FeatureShowcase({ features, featureImages }) {
  const total = Math.min(features.length, featureImages.length);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (total < 2) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, 3500);
    return () => clearInterval(id);
  }, [total]);

  if (total === 0) return null;

  return (
    <div className="feature-showcase">
      <ul className="feature-list">
        {features.slice(0, total).map((feature, index) => (
          <li
            key={index}
            className={index === active ? "feature-active" : undefined}
          >
            <button
              type="button"
              className="feature-item-button"
              onClick={() => setActive(index)}
            >
              {feature}
            </button>
          </li>
        ))}
      </ul>
      <div className="feature-image-frame">
        <img
          className="feature-image"
          src={featureImages[active]}
          alt={`${features[active]} screenshot`}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpenVideo }) {
  const fi = project.featureImages ?? [];
  const ft = project.features ?? [];
  const showFeatures = ft.length > 0 && fi.length > 0;

  return (
    <article className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {showFeatures ? (
        <>
          <p className="feature-title">Featuring:</p>
          <FeatureShowcase features={ft} featureImages={fi} />
        </>
      ) : null}
      <ul className="tags">
        {(project.tags ?? []).map((tag, i) => (
          <li key={`${project.title}-tag-${i}`}>{tag}</li>
        ))}
      </ul>
      <div className="links">
        <button
          type="button"
          className="link-button"
          onClick={() =>
            onOpenVideo({ title: project.title, url: project.videoUrl })
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
  );
}

function SiteHeader() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_EMAIL_SUBJECT)}`;

  return (
    <header className="site-header">
      <div className="container site-header-row">
        <h1 className="site-title">
          David Truong{" "}
          <img
            className="site-title-flag"
            src="images/canadian-flag.png"
            alt="Canada"
          />
        </h1>
        <div className="site-header-contact">
          <p className="site-tagline">Phone: +1 (343) 463-9602</p>
          <p className="site-tagline">
            Email:{" "}
            <a className="site-contact-link" href={mailto}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

function VideoModal({ open, payload, onClose }) {
  const videoRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const source = sourceRef.current;
    if (!video || !source) return;

    if (!open || !payload) {
      video.pause();
      source.removeAttribute("src");
      video.load();
      return;
    }

    source.src = payload.url;
    video.load();
    video.play().catch(() => {});

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, payload, onClose]);

  return (
    <div
      className="video-modal-backdrop"
      hidden={!open}
      role="presentation"
      onClick={onClose}
    >
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="video-modal-header">
          <h3 id="video-modal-title">
            {payload ? `${payload.title} Demo` : ""}
          </h3>
          <button
            type="button"
            className="close-button"
            aria-label="Close video player"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <video ref={videoRef} className="demo-video" controls>
          <source ref={sourceRef} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [videoPayload, setVideoPayload] = useState(null);
  const open = videoPayload != null;

  const onOpenVideo = useCallback((p) => setVideoPayload(p), []);
  const onCloseVideo = useCallback(() => setVideoPayload(null), []);

  return (
    <>
      <SiteHeader />
      <main className="container">
        <section className="projects" aria-label="Projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpenVideo={onOpenVideo}
            />
          ))}
        </section>
      </main>
      <VideoModal open={open} payload={videoPayload} onClose={onCloseVideo} />
    </>
  );
}
