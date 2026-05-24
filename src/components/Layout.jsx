import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../styles/layout.css";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="layout-body">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
