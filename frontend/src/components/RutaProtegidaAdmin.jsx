import React from "react";
import { Navigate } from "react-router-dom";

export default function RutaProtegidaAdmin({ children }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const esAdmin = usuario?.RolID === 1;

  if (!esAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

