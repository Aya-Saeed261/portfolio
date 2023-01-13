import React from "react";
import ReactDOM from "react-dom/client";

// React-Boostrap
import "react-bootstrap/dist/react-bootstrap.js";
import "react-bootstrap/dist/react-bootstrap.min.js";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Main style
import "./index.css";

// Imported components
import App from "./components/app.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
