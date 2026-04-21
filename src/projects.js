export const CONTACT_EMAIL = "duytk.job@gmail.com";
export const CONTACT_EMAIL_SUBJECT = "Portfolio inquiry";

export const projects = [
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
      "images/sharkbot-custom-commands.png",
      "images/sharkbot-chat-moderation.png",
      "images/sharkbot-ad-notifications.png",
      "images/sharkbot-spotify-integration.png",
      "images/sharkbot-text-to-speech.png",
    ],
    tags: ["Python", "JavaScript", "API", "SQL"],
    githubUrl: "https://github.com/duytk1/sharkbot",
    videoUrl: "videos/sharkbot-demo.mp4",
  },
  {
    title: "MineSweeper",
    description:
      "This is a desktop Minesweeper game in Java with a Swing GUI grid, mines, left-click to reveal, right-click to flag and safe first click.",
    features: [
      "Fully functioning board",
      "Custom sound effects",
      "Status notifications",
      "Score counter",
    ],
    featureImages: [
      "images/minesweeper-board.png",
      "images/minesweeper-custom-sound-effect.png",
      "images/minesweeper-status-notifications.png",
      "images/minesweeper-score-counter.png",
    ],
    tags: ["Java", "swing", "GUI", "OOP"],
    githubUrl: "https://github.com/duytk1/minesweeper",
    videoUrl: "videos/minesweeper-demo.mp4",
  },
  {
    title: "Project Three",
    description: "",
    features: [],
    featureImages: [],
    tags: [],
    githubUrl: "#",
    videoUrl: "videos/project-three-demo.mp4",
  },
  {
    title: "Project Four",
    description: "",
    features: [],
    featureImages: [],
    tags: [],
    githubUrl: "#",
    videoUrl: "videos/project-four-demo.mp4",
  },
];
