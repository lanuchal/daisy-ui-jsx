import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
