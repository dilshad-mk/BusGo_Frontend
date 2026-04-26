import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const isAuth = localStorage.getItem("isAuth");
  const role = localStorage.getItem("userRole");

  // console.log("Auth:", isAuth, "Role:", role);

  if (isAuth !== "true") {
    return <Navigate to="/login" />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;