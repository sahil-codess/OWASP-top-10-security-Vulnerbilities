import React from "react";
import { useAuth } from "./utils/auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
