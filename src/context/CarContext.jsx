import React, { createContext, useState } from "react";

const CarContext = createContext(null);

const sampleCars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1723551275538-3d56614476ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2019,
    price: 14000,
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    make: "Ford",
    model: "Focus",
    year: 2018,
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=80",
  },
    {
    id: 4,
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    make: "Honda",
    model: "Civic",
    year: 2019,
    price: 14000,
    image:
      "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    make: "Ford",
    model: "Focus",
    year: 2018,
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D    ",
  },
];

export function CarProvider({ children }) {
  // For now the provider only exposes a read-only list; expand later.
  const [cars] = useState(sampleCars);

  return (
    <CarContext.Provider value={{ cars }}>{children}</CarContext.Provider>
  );
}

export default CarContext;
