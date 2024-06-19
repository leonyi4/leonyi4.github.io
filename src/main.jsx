import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./Contact/Contact.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Projects from "./components/Projects/Projects.jsx";
import Publications from "./components/Publications/Publications.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="publications" element={<Publications />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
