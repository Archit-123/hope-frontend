// import { useState } from "react";

// import { useNavigate, Link } from "react-router-dom";

// import { useAuth } from "../context/AuthContext";

// import API from "../api/authApi";

// import "../styles/auth.css";

// function Login() {
//   const { login } = useAuth();

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await API.post("/auth/login", formData);

//       login(res.data);

//       navigate("/dashboard");
//     } catch (error) {
//       console.log(error);

//       alert(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="background-glow glow1"></div>
//       <div className="background-glow glow2"></div>

//       <form className="auth-card" onSubmit={handleSubmit}>
//         <div className="auth-header">
//           <h1>Welcome Back</h1>

//           <p>Login to continue your journey</p>
//         </div>

//         <div className="input-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="input-group">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="auth-btn">
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <div className="auth-footer">
//           <p>Don’t have an account?</p>

//           <Link to="/register">Create Account</Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;
