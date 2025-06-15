import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isLoading) return <Spinner />;

  // Redirect to login if not authenticated
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  // If user is employee, redirect from /admin to home
  if (user.role === "employee" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
export default PrivateRoute;
