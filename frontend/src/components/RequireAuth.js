import React from "react";
import { useAuth } from "./utils/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    toast.error("Log in First🦟", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
