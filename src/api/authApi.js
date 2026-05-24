import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach JWT token
API.interceptors.request.use(
  (req) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo?.token) {
      req.headers.Authorization = `Bearer ${userInfo.token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default API;
