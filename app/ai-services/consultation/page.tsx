"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
};

export default function LegalConsultationPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI legal assistant powered by Google Gemini. I can help answer legal questions and provide guidance. Please note that this is for informational purposes only and not a substitute for professional legal advice. What would you like to know?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.message || data.error || "Failed to get response");
      }

      if (!data.response) {
        throw new Error("No response received from AI");
      }

      const aiResponse: Message = {
        id: messages.length + 2,
        text: data.response,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error: any) {
      const errorText = error?.message || "Sorry, I encountered an error. Please try again or consult with a lawyer for immediate assistance.";
      const errorMessage: Message = {
        id: messages.length + 2,
        text: errorText,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-textPrimary">
                AI Legal Consultation
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  Powered by Google Gemini
                </span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                  ⚡ Fast Responses
                </span>
              </div>
            </div>
          </div>
          <p className="text-lg text-textSecondary">
            Ask legal questions and get instant AI-powered guidance. Remember: this is not a substitute for professional legal advice.
          </p>
        </motion.div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl border border-borderSubtle overflow-hidden flex flex-col" style={{ height: "600px" }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-textPrimary"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-borderSubtle p-4">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask your legal question..."
                rows={2}
                className="flex-1 border border-borderSubtle rounded-lg px-4 py-2 resize-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  !input.trim() || isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primaryHover"
                }`}
              >
                Send
              </button>
            </div>
            <p className="text-xs text-textSecondary mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
        >
          <p className="text-sm text-yellow-800 mb-4">
            <strong>⚠️ Disclaimer:</strong> This AI assistant provides general information only and does not constitute legal advice. 
            For specific legal matters, please consult with a qualified attorney. Responses are not a substitute for professional legal counsel.
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primaryHover transition">
            Consult with a Real Lawyer
          </button>
        </motion.div>
      </div>
    </div>
  );
}

