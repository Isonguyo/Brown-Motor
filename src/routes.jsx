import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./components/AboutSection";
import Contact from "./components/ContactSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarDetail from "./pages/CarDetail";
import ScrollToTop from "./components/ScrollToTop";



function AppRoutes() {
  return (
 
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default AppRoutes;
