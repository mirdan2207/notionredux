import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./UserProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
