import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ children, restricted = false, isRequireUser }) => {
  const { user } = useAuth();
  if (isRequireUser && !user) {
    return <Navigate to="/" replace />;
  }

  if (restricted && user) {
    return <Navigate to="/" replace />; 
  }

  return children;
};

export default ProtectedRoute;