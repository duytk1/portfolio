import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import { Portfolio } from "./portfolio.jsx";

const el = document.getElementById("root");
if (el) {
  createRoot(el).render(
    <StrictMode>
      <Portfolio />
    </StrictMode>
  );
}
