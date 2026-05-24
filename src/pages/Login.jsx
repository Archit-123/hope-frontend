import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth, provider } from "../firebase";
import API from "../api/authApi";
import "../styles/auth.css";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/login", formData);

      login(res.data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);

      const result = await signInWithPopup(auth, provider);

      const token = await result.user.getIdToken();

      const res = await API.post("/auth/google", {
        token,
      });

      login(res.data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Google login failed");
    } finally {
      setGoogleLoading(false);
    }
  };
  return (
    <div className="auth-container">
      <div className="background-glow glow1"></div>
      <div className="background-glow glow2"></div>

      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-header">
          <h1>Welcome Back</h1>

          <p>Login to continue your journey</p>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          {loading ? "Logging in..." : "Login"}
        </button>
        <div
          style={{
            margin: "20px 0",
            textAlign: "center",
          }}
        >
          OR
        </div>

        <button
          type="button"
          className=" google-btn"
          onClick={handleGoogleLogin}
        >
          <span>
            {googleLoading ? "Connecting..." : "Continue with Google"}
          </span>
          <FcGoogle size={22} />
        </button>

        <div className="auth-footer">
          <p>Don’t have an account?</p>

          <Link to="/register">Create Account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
