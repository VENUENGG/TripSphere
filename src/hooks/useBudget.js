import { useState } from "react";
import { calculateBudget } from "../services/budgetService";

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