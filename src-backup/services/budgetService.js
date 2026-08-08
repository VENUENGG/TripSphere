const DAILY_COST = {
  budget: {
    hotel: 1800,
    food: 900,
    transport: 500,
    activities: 700,
  },

  standard: {
    hotel: 3500,
    food: 1800,
    transport: 1000,
    activities: 1800,
  },

  luxury: {
    hotel: 8500,
    food: 4200,
    transport: 2500,
    activities: 4500,
  },
};

export function calculateBudget({
  days,
  travelers,
  travelStyle,
}) {
  const costs = DAILY_COST[travelStyle];

  const hotel = costs.hotel * days;
  const food = costs.food * days * travelers;
  const transport = costs.transport * days * travelers;
  const activities = costs.activities * days * travelers;

  const total =
    hotel +
    food +
    transport +
    activities;

  return {
    hotel,
    food,
    transport,
    activities,
    total,
  };
}