import { GoogleGenerativeAI } from "@google/generative-ai";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export async function POST({ request }) {
  try {
    const { prompt, topic, tone } = await request.json();

    const apiKey = env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return json({ error: "GEMINI_API_KEY is not set in environment variables." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `You are a social media expert. Create a ${tone || 'engaging'} post about "${topic}". 
    Additional context: ${prompt}. 
    Keep it under 280 characters if it looks like a tweet, otherwise standard length. 
    Include 2-3 relevant hashtags.`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return json({ content: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return json({ error: "Failed to generate content" }, { status: 500 });
  }
}
