import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.tsx";
import UseTransition from "./pages/UseTransition.tsx";
import UseTransitionInput from "./pages/UseTransitionInput.tsx";
import UseTransitionAwait from "./pages/UseTransitionAwait.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/useTransition",
    Component: UseTransition,
  },
  {
    path: "/UseTransitionInput",
    Component: UseTransitionInput,
  },
  {
    path: "/UseTransitionAwait",
    Component: UseTransitionAwait,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
