import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <MainPage />
  </StrictMode>
);
