import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST({ request }) {
    const { prompt } = await request.json();

    let gemini = new GoogleGenerativeAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash'})
    const result = await model.generateContent(prompt)

    return new Response(JSON.stringify({ aiResponse: result.response.text()}), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
