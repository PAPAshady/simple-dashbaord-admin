import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import "./App.css";

export default function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
