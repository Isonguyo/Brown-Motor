import { useContext } from "react";
import CarContext from "../context/CarContext";

export default function useCars() {
  const ctx = useContext(CarContext);
  // Return empty array if context is not available to avoid runtime crashes.
  return (ctx && ctx.cars) || [];
}
