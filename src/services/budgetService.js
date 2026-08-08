const STYLE_MULTIPLIER = {
  budget: 0.72,
  standard: 1,
  luxury: 2.15,
};

const DESTINATION_PROFILES = [
  {
    keys: ["mumbai", "delhi", "bangalore", "bengaluru", "hyderabad", "chennai", "kolkata"],
    country: "India",
    hotel: 3200, food: 1400, transport: 850, activities: 1400,
  },
  {
    keys: ["goa", "jaipur", "agra", "varanasi", "rishikesh", "manali", "srinagar", "kashmir", "kerala", "udaipur"],
    country: "India",
    hotel: 2800, food: 1200, transport: 900, activities: 1200,
  },
  {
    keys: ["bali", "jakarta", "indonesia"],
    country: "Indonesia",
    hotel: 3300, food: 1200, transport: 900, activities: 1800,
  },
  {
    keys: ["bangkok", "phuket", "chiang mai", "thailand"],
    country: "Thailand",
    hotel: 3600, food: 1500, transport: 1000, activities: 1900,
  },
  {
    keys: ["dubai", "abu dhabi", "united arab emirates", "uae"],
    country: "United Arab Emirates",
    hotel: 8500, food: 3500, transport: 2600, activities: 4200,
  },
  {
    keys: ["singapore"],
    country: "Singapore",
    hotel: 9500, food: 3000, transport: 1800, activities: 3500,
  },
  {
    keys: ["tokyo", "osaka", "kyoto", "japan"],
    country: "Japan",
    hotel: 8500, food: 3000, transport: 2600, activities: 3000,
  },
  {
    keys: ["paris", "france"],
    country: "France",
    hotel: 10500, food: 4200, transport: 3000, activities: 3800,
  },
  {
    keys: ["london", "united kingdom", "uk"],
    country: "United Kingdom",
    hotel: 12000, food: 4500, transport: 3200, activities: 4200,
  },
  {
    keys: ["new york", "los angeles", "san francisco", "usa", "united states"],
    country: "United States",
    hotel: 12500, food: 5000, transport: 4000, activities: 4500,
  },
  {
    keys: ["maldives", "male"],
    country: "Maldives",
    hotel: 14500, food: 5000, transport: 2800, activities: 5000,
  },
];

const REGIONAL_PROFILES = {
  india: { hotel: 2800, food: 1200, transport: 800, activities: 1200 },
  asia: { hotel: 4500, food: 1800, transport: 1300, activities: 2000 },
  europe: { hotel: 9000, food: 3500, transport: 2600, activities: 3500 },
  americas: { hotel: 10500, food: 4200, transport: 3300, activities: 4000 },
  default: { hotel: 6000, food: 2300, transport: 1700, activities: 2500 },
};

function findProfile(destination = "") {
  const text = String(destination).toLowerCase().trim();
  return DESTINATION_PROFILES.find((profile) =>
    profile.keys.some((key) => text.includes(key))
  );
}

function inferRegionalProfile(destination = "") {
  const text = String(destination).toLowerCase();

  if (/india|goa|mumbai|delhi|kashmir|srinagar|jaipur|kerala/.test(text)) return REGIONAL_PROFILES.india;
  if (/france|italy|spain|germany|switzerland|uk|london|paris|europe/.test(text)) return REGIONAL_PROFILES.europe;
  if (/japan|thailand|indonesia|bali|singapore|vietnam|malaysia|asia/.test(text)) return REGIONAL_PROFILES.asia;
  if (/usa|canada|america|mexico|brazil/.test(text)) return REGIONAL_PROFILES.americas;
  return REGIONAL_PROFILES.default;
}

export function calculateBudget({
  destination = "",
  days = 5,
  travelers = 2,
  travelStyle = "standard",
}) {
  const profile = findProfile(destination) || inferRegionalProfile(destination);
  const multiplier = STYLE_MULTIPLIER[travelStyle] || 1;
  const safeDays = Math.max(1, Number(days) || 1);
  const safeTravelers = Math.max(1, Number(travelers) || 1);

  const hotel = Math.round(profile.hotel * safeDays * multiplier);
  const food = Math.round(profile.food * safeDays * safeTravelers * multiplier);
  const transport = Math.round(profile.transport * safeDays * safeTravelers * multiplier);
  const activities = Math.round(profile.activities * safeDays * safeTravelers * multiplier);
  const total = hotel + food + transport + activities;

  return {
    destination: destination || "Your destination",
    days: safeDays,
    travelers: safeTravelers,
    travelStyle,
    country: profile.country || "",
    hotel,
    food,
    transport,
    activities,
    total,
    daily: Math.round(total / safeDays),
    perTraveler: Math.round(total / safeTravelers),
    confidence: findProfile(destination) ? "destination-specific" : "regional estimate",
  };
}
