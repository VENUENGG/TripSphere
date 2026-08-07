import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateItinerary(form) {
 const prompt = `
You are TripSphere AI, an elite luxury travel planner.

Generate a COMPLETE personalized travel plan.

Return ONLY VALID JSON.

DO NOT write markdown.
DO NOT use \`\`\`.
DO NOT explain anything.

Destination: ${form.destination}

Travel With: ${form.travelWith}

Trip Style: ${form.tripType}

Budget: ₹${form.budget}

Days: ${form.days}

Arrival Time: ${form.arrivalTime}

Interests:
${form.interests.join(", ")}

Return this EXACT JSON structure:

{
  "tripTitle":"",
  "summary":"",

  "packingChecklist":[
    ""
  ],

  "travelEssentials":[
    ""
  ],

  "documents":[
    ""
  ],

  "healthKit":[
    ""
  ],

  "weatherAdvice":[
    ""
  ],

  "destinationAdvice":[
    ""
  ],

  "localApps":[
    ""
  ],

  "currencyTips":[
    ""
  ],

  "emergencyNumbers":[
    ""
  ],

  "days":[
    {
      "day":1,
      "theme":"",
      "activities":[
        {
          "time":"",
          "title":"",
          "description":"",
          "location":"",
          "transport":"",
          "estimatedCost":"",
          "category":"Airport | Hotel | Food | Sightseeing | Shopping | Nightlife | Relaxation"
        }
      ]
    }
  ]
}

Instructions:

- Keep the existing itinerary format exactly the same.
- Create a detailed summary.
- Create a realistic day-by-day itinerary.
- Suggest activities according to budget.
- Suggest transport between locations.
- Suggest realistic estimated costs.

Packing Checklist:
Generate destination and weather specific packing items.

Travel Essentials:
Include reusable water bottle, power bank, charger, adapter, backpack, luggage lock, neck pillow and other useful accessories.

Documents:
Include every required travel document.

Health Kit:
Suggest medicines and first-aid items.

Weather Advice:
Give practical weather tips.

Destination Advice:
Give useful local recommendations and cultural tips.

Local Apps:
Recommend useful local apps like transport, maps, food delivery or payments.

Currency Tips:
Explain useful money-saving tips.

Emergency Numbers:
Provide important emergency contacts for the destination.

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

    return JSON.parse(text);
  } catch (err) {
    console.error("Gemini Error:", err);
    throw err;
  }
}