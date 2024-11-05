import React from "react";
import ReactDom from "react-dom/client";
import "./main.css";
import { App } from "./App";
import { AuthProvider } from "./context/UseAuthContex";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
