import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateItinerary(form) {
  const prompt = `
You are an expert luxury travel planner.

Generate a COMPLETE travel itinerary.

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

Return this EXACT structure:

{
  "tripTitle":"",
  "summary":"",
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