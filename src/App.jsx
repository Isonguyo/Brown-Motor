// src/App.js
import React, { useEffect } from "react";
import AppRoutes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, // animations repeat when you scroll back
    offset: 100,
  });
}, []);
  return <AppRoutes />;
}

export default App;
