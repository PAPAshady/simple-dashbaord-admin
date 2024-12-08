import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import Topbar from "./components/shared/TopBar/Topbar";

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <Topbar />
      <RouterProvider router={router} />
    </>
  );
}
