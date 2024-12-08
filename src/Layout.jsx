import React from "react";
import Topbar from "./components/shared/TopBar/Topbar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Topbar />
      <div className="page-content">
        <Sidebar />
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
