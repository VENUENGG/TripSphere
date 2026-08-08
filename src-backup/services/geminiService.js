import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateItinerary(form) {
  const prompt = `
You are TripSphere AI, an elite travel planner.

Create a complete, realistic, personalized travel itinerary.

Return ONLY valid JSON.
DO NOT use markdown.
DO NOT use code fences.
DO NOT explain anything outside the JSON.

TRIP DETAILS

Destination: ${form.destination}
Travel With: ${form.travelWith}
Trip Style: ${form.tripType}
Budget: ₹${form.budget}
Days: ${form.days}
Arrival Time: ${form.arrivalTime}

Interests:
${form.interests.join(", ")}

IMPORTANT RULES

1. Keep the existing itinerary structure.
2. Create realistic day-by-day activities.
3. Consider the user's budget.
4. Suggest realistic transportation.
5. Do NOT claim live availability or live prices.
6. All transportation prices must clearly be treated as estimates.
7. Never invent exact train, bus or flight availability.
8. For local transport, provide reasonable estimated fares.
9. Distances must be approximate.
10. Do not make unrealistic claims.
11. Do not invent unnecessary destinations just to create a route.
12. If the user is staying in one city, use meaningful locations within that destination.
13. Route stops must use recognizable real-world place names.
14. Keep route stops in logical travel order.

Return EXACTLY this JSON structure:

{
  "tripTitle": "",
"destination": "",
"summary": "",

  "route": {
    "overview": "",
    "stops": [
      {
        "name": "",
        "description": ""
      }
    ]
  },

  "routeLegs": [
    {
      "from": "",
      "to": "",
      "distance": "",
      "estimatedTravelTime": "",
      "recommendedTransport": "",
      "transportOptions": [
        {
          "mode": "Car",
          "label": "",
          "estimatedFare": "",
          "fareNote": ""
        },
        {
          "mode": "Shared Taxi",
          "label": "",
          "estimatedFare": "",
          "fareNote": ""
        },
        {
          "mode": "Bus",
          "label": "",
          "estimatedFare": "",
          "fareNote": ""
        },
        {
          "mode": "Train",
          "label": "",
          "estimatedFare": "",
          "fareNote": ""
        },
        {
          "mode": "Bike",
          "label": "",
          "estimatedFare": "",
          "fareNote": ""
        }
      ]
    }
  ],

  "packingChecklist": [
    ""
  ],

  "travelEssentials": [
    ""
  ],

  "documents": [
    ""
  ],

  "healthKit": [
    ""
  ],

  "weatherAdvice": [
    ""
  ],

  "destinationAdvice": [
    ""
  ],

  "localApps": [
    ""
  ],

  "currencyTips": [
    ""
  ],

  "emergencyNumbers": [
    ""
  ],

  "days": [
    {
      "day": 1,
      "theme": "",
      "activities": [
        {
          "time": "",
          "title": "",
          "description": "",
          "location": "",
          "transport": "",
          "estimatedCost": "",
          "category": "Airport | Hotel | Food | Sightseeing | Shopping | Nightlife | Relaxation"
        }
      ]
    }
  ]
}

ROUTE INSTRUCTIONS

Create a useful route for the entire trip.

For example:

Starting Point
↓
Destination A
↓
Destination B
↓
Destination C

Only include places that genuinely make sense for this trip.

For a single-city trip, examples could include:

Airport
↓
Hotel
↓
Major attraction
↓
Market
↓
Beach / viewpoint / landmark

Do NOT automatically use major cities such as Mumbai, Delhi or Bangalore unless they are actually part of the requested journey.

Every route leg must provide:

- approximate distance
- approximate travel time
- recommended transport
- estimated cost for multiple transport types

TRANSPORT ESTIMATION

Use reasonable approximate Indian travel costs when appropriate.

Private Car / Cab:
Approximately ₹15–₹30 per km depending on location, vehicle and route.

Bike:
Approximately ₹5–₹12 per km when a rental or bike taxi makes sense.

Shared Taxi:
Estimate a lower per-person fare than a private cab.

Bus:
Give a reasonable approximate fare based on distance and typical local/intercity pricing.

Train:
Give an approximate fare only when train travel genuinely makes sense.

If a transport mode does not realistically make sense for the route, write:

"Not practical for this route"

Do not invent a price in that case.

Every fareNote must clearly state that the amount is an estimate and can vary.

IMPORTANT:

The "destination" field MUST contain the user's requested destination exactly or in a clear standard form.
For example, if the user requests Kashmir, return "Kashmir".
If the user requests Goa, return "Goa".
If the user requests Tokyo, return "Tokyo".

These are NOT live prices.
Do NOT claim live availability.
Do NOT claim a ticket or vehicle is currently available.

LOCAL TRANSPORT

For activities inside a destination, suggest practical options such as:

- walking
- metro
- local bus
- auto-rickshaw
- taxi
- app cab
- rental scooter
- rental car

PACKING CHECKLIST

Make this destination-specific.

Include useful items such as:

- reusable water bottle
- power bank
- phone charger
- comfortable shoes
- backpack
- sunglasses
- weather-appropriate clothing
- rain protection when appropriate

TRAVEL ESSENTIALS

Include useful travel accessories and gear.

DOCUMENTS

Include relevant travel documents.

HEALTH KIT

Suggest practical first-aid and personal-care items without pretending to prescribe medication.

WEATHER ADVICE

Give practical weather and clothing advice.

DESTINATION ADVICE

Give useful local recommendations, etiquette and safety tips.

LOCAL APPS

Recommend relevant maps, transportation, food, payment and travel apps.

CURRENCY TIPS

Give practical money-saving and payment advice.

EMERGENCY NUMBERS

Provide commonly relevant emergency contacts only when reasonably known.

Do not invent destination-specific numbers.

DAY ITINERARY

Make every day realistic.

Each activity must have:

- time
- title
- useful description
- location
- transport
- estimated cost
- category

Make the itinerary feel like a real travel experience rather than a generic checklist.

Return ONLY valid JSON.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    let text = response.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const itinerary = JSON.parse(text);

    return itinerary;
  } catch (err) {
    console.error("Gemini Error:", err);
    throw err;
  }
}