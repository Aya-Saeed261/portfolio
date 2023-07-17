import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./app.jsx";

// React-Boostrap
import "react-bootstrap/dist/react-bootstrap.js";
import "react-bootstrap/dist/react-bootstrap.min.js";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Main style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
