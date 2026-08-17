import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SearchNotes from "./pages/SearchNotes";
import NotesForMe from "./pages/NotesForMe";
import LandingPage from "./pages/LandingPage";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="/search-notes"
        element={user ? <SearchNotes /> : <Navigate to="/login" />}
      />

      {/* Default route */}
      <Route
        path="*"
        element={<Navigate to={user ? "/dashboard" : "/login"} />}
      />
      <Route
        path="/notes-for-me"
        element={user ? <NotesForMe /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
