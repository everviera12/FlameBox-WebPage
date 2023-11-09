import React from "react";
import ReactDOM from "react-dom/client";

import Navegation from "./components/Navbar";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// react bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navegation />
  </BrowserRouter>
);
