import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null,
  );

  // LOGIN
  const login = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));

    setUser(userData);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("userInfo");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuth = () => {
  return useContext(AuthContext);
};
export const getMe = async (req, res) => {
  res.status(200).json(req.user);
};
