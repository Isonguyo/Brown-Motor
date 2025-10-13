import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./components/AboutSection";
import Contact from "./components/ContactSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarDetail from "./pages/CarDetail";



function AppRoutes() {
  return (
 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default AppRoutes;
