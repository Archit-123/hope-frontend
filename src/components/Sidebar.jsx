import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../styles/sidebar.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const currentUser = user?.user || user;

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <>
      <div
        className={sidebarOpen ? "sidebar-backdrop active" : "sidebar-backdrop"}
        onClick={() => setSidebarOpen(false)}
      />

      <aside className={sidebarOpen ? "sidebar active" : "sidebar"}>
        <div className="sidebar-links">
          <Link to="/dashboard" onClick={() => setSidebarOpen(false)}>
            Dashboard
          </Link>

          <Link to="/search-notes" onClick={() => setSidebarOpen(false)}>
            Search Notes
          </Link>

          <Link to="/notes-for-me" onClick={() => setSidebarOpen(false)}>
            Notes For Me
          </Link>
        </div>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-name">{currentUser?.username}</div>

            <div className="user-email">{currentUser?.email}</div>
          </div>

          <div className="sidebar-divider"></div>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
