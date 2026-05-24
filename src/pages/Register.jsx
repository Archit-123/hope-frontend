import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../api/authApi";

import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

      const res = await API.post("/auth/register", formData);

      console.log(res.data);

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="background-glow glow1"></div>
      <div className="background-glow glow2"></div>

      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-header">
          <h1>Create Account</h1>

          <p>Start your journey with us</p>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
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
          {loading ? "Creating Account..." : "Register"}
        </button>

        <div className="auth-footer">
          <p>Already have an account?</p>

          <Link to="/login">Login Here</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
