// src/pages/Cars.jsx
import React, { useState, useEffect, useRef } from "react";
import carsData from "../data/CarsData";
import CarCard from "../components/CarCard";
import CarFilter from "../components/CarFilter";
import "../styles/pages/Cars.css";

const Cars = () => {
  const [filters, setFilters] = useState({
    search: "",
    brand: "",
    fuel: "",
    transmission: "",
    year: "",
  });

  const resultsRef = useRef(null);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredCars = carsData.filter((car) => {
    return (
      car.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.brand ? car.brand === filters.brand : true) &&
      (filters.fuel ? car.fuel === filters.fuel : true) &&
      (filters.transmission ? car.transmission === filters.transmission : true) &&
      (filters.year ? car.year.toString() === filters.year : true)
    );
  });

  // 🔹 Smooth scroll to results when filters change
  useEffect(() => {
    if (resultsRef.current) {
      const timeout = setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [filters]);

  return (
    <section className="cars-page">
      <h1>Our Inventory</h1>
      <CarFilter filters={filters} onChange={handleFilterChange} />

      <div ref={resultsRef} className="car-list">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {filteredCars.length === 0 && (
        <p className="no-results">No cars match your filters.</p>
      )}
    </section>
  );
};

export default Cars;
