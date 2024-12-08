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
        <main className="contaier">
          <Outlet />
        </main>
      </div>
    </>
  );
}
