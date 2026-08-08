import { useState } from "react";
import { calculateBudget } from "../services/budgetService";
import { useTrip } from "../context/TripContext";

export default function useBudget() {
  const [result, setResult] = useState(null);

  function calculate(data) {
    setResult(calculateBudget(data));
  }

  return {
    result,
    calculate,
  };
}