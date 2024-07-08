import React from "react";
import { createRoot } from "react-dom/client";
import './input.css';
import App from "./app";

const root = document.getElementById(`root`) as HTMLElement;

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
