import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/UserContext";

export const Protected = ({ children, ...props }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
};
