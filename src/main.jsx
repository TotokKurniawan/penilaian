import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/login";
import Register from "./screen/register";
import Home from "./screen/home";
import About from "./screen/about";
import Contact from "./screen/contact";
import Product from "./screen/product";
import Forgot from "./screen/forgot";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/penilaian">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
