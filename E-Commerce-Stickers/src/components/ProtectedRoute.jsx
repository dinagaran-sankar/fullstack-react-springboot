import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../Store/login-Context";

const ProtectedRoute = () => {
  const { isAuthenticated } = useLogin();
  const locationPathName = useLocation();
  //const navigate = useNavigate();

  console.log("isAuthenticated", isAuthenticated);
  console.log("locationPath", locationPathName);
  useEffect(() => {
    if (!isAuthenticated && locationPathName !== "/login") {
      sessionStorage.setItem("redirectPath", locationPathName.pathname);
    }
  }, [isAuthenticated, locationPathName.pathname]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
