import "../styles/navbar.css";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <h2>Hope App</h2>
    </nav>
  );
}

export default Navbar;
