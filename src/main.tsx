import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.tsx";
import UseTransition from "./pages/UseTransition.tsx";
import UseTransitionInput from "./pages/UseTransitionInput.tsx";
import UseTransitionAwait from "./pages/UseTransitionAwait.tsx";
import Use from "./pages/Use.tsx";
import UsePromise from "./pages/UsePromise.tsx";
import UsePrePromise from "./pages/UsePrePromise.tsx";
import UseAwait from "./pages/UseAwait.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "useTransition",
        element: <UseTransition />,
      },
      {
        path: "useTransitionInput",
        element: <UseTransitionInput />,
      },
      {
        path: "useTransitionAwait",
        element: <UseTransitionAwait />,
      },
      {
        path: "use",
        element: <Use />,
      },
      {
        path: "usePromise",
        element: <UsePromise />,
      },
      {
        path: "usePrePromise",
        element: <UsePrePromise />,
      },
      {
        path: "useAwait",
        element: <UseAwait />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
