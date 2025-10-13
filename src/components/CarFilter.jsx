// src/components/CarFilter.jsx
import React from "react";
import "../styles/components/CarFilter.css";

const CarFilter = ({ filters, onChange }) => {
  // Generate dynamic year list (2025 → 2007)
  const years = Array.from({ length: 2025 - 2007 + 1 }, (_, i) => 2025 - i);

  return (
    <div className="car-filter">
      {/* 🔍 Search by name or model */}
      <input
        type="text"
        placeholder="Search by name or model..."
        name="search"
        value={filters.search}
        onChange={onChange}
        className="filter-input"
      />

      {/* 🚘 Brand filter */}
      <select name="brand" value={filters.brand} onChange={onChange}>
        <option value="">All Brands</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
        <option value="BMW">BMW</option>
        <option value="Audi">Audi</option>
        <option value="Lexus">Lexus</option>
        <option value="Ford">Ford</option>
        <option value="Kia">Kia</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Nissan">Nissan</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Chevrolet">Chevrolet</option>
      </select>

      {/* 🛢 Fuel Type */}
      <select name="fuel" value={filters.fuel} onChange={onChange}>
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Electric">Electric</option>
      </select>

      {/* ⚙️ Transmission */}
      <select name="transmission" value={filters.transmission} onChange={onChange}>
        <option value="">All Transmissions</option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>

      {/* 🧰 Condition */}
      <select name="condition" value={filters.condition} onChange={onChange}>
        <option value="">All Conditions</option>
        <option value="Brand New">Brand New</option>
        <option value="Foreign Used">Foreign Used</option>
        <option value="Nigerian Used">Nigerian Used</option>
      </select>

      {/* 🚙 Body Type */}
      <select name="bodyType" value={filters.bodyType} onChange={onChange}>
        <option value="">All Body Types</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Truck">Truck</option>
        <option value="Coupe">Coupe</option>
      </select>

      {/* 📅 Year */}
      <select name="year" value={filters.year} onChange={onChange}>
        <option value="">All Years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* 📍 Location */}
      <select name="location" value={filters.location} onChange={onChange}>
        <option value="">All Locations</option>
        {/* <option value="Lagos">Lagos</option> */}
        {/* <option value="Abuja">Abuja</option> */}
        <option value="Calabar">Calabar</option>
        {/* <option value="Port Harcourt">Port Harcourt</option>
        <option value="Uyo">Uyo</option>
        <option value="Enugu">Enugu</option> */}
      </select>
    </div>
  );
};

export default CarFilter;
