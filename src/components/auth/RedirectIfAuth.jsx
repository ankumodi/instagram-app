// components/auth/RedirectIfAuth.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectIfAuth = ({ children }) => {
  const user =
    useSelector((state) => state.auth.user) || localStorage.getItem("user");

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default RedirectIfAuth;
