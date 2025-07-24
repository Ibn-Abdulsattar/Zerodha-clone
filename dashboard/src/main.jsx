import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ REQUIRED
import "./index.css";
import App from "./App.jsx";
import TopBar from "./Components/TopBar.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
        <TopBar />
        <App />
    </BrowserRouter>
  </StrictMode>
);
