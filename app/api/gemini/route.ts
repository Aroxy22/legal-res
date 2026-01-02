import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = "AIzaSyDLPxMHVzRz0sYMbLfGrTpMJyPS8JSpIHM";

export async function POST(request: NextRequest) {
  // Parse request body once at the start
  const body = await request.json();
  const message = body.message;

  try {
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Use gemini-3-flash-preview - the latest preview model
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `You are a helpful legal assistant. Provide clear, concise legal guidance. Remember: this is for informational purposes only and not a substitute for professional legal advice.

User Question: ${message}

Provide a helpful response (keep it under 300 words for fast responses):`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    
    // Extract error details from various possible error structures
    const errorMessage = error?.message || error?.error?.message || error?.toString() || "Unknown error";
    const errorStatus = error?.status || error?.statusCode || error?.response?.status || error?.error?.code;
    
    // Return user-friendly error message
    let hint = "Please try again or consult with a lawyer for immediate assistance.";
    
    if (errorStatus === 404 || errorMessage.includes("404") || errorMessage.includes("not found")) {
      hint = "Model not found. Trying fallback models. Also ensure the Generative AI API is enabled in Google Cloud Console.";
      
      // Try fallback models if gemini-3-flash-preview failed
      const fallbackModels = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"];
      for (const fallbackModelName of fallbackModels) {
        try {
          const genAI = new GoogleGenerativeAI(API_KEY);
          const fallbackModel = genAI.getGenerativeModel({ model: fallbackModelName });
          const fallbackPrompt = `You are a helpful legal assistant. Provide clear, concise legal guidance. Remember: this is for informational purposes only and not a substitute for professional legal advice.

User Question: ${message}

Provide a helpful response (keep it under 300 words for fast responses):`;
          const fallbackResult = await fallbackModel.generateContent(fallbackPrompt);
          const fallbackResponse = await fallbackResult.response;
          const fallbackText = fallbackResponse.text();
          return NextResponse.json({ response: fallbackText });
        } catch (fallbackError: any) {
          console.error(`Fallback model ${fallbackModelName} failed, trying next...`);
          continue;
        }
      }
    } else if (errorStatus === 401 || errorStatus === 403) {
      hint = "Authentication failed. Please verify your API key is correct and has the necessary permissions for Gemini API.";
    }

    return NextResponse.json(
      {
        error: "Failed to generate AI response",
        message: errorMessage,
        status: errorStatus,
        hint: hint
      },
      { status: 500 }
    );
  }
}
