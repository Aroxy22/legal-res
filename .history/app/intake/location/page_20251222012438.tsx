"use client";

import { useState } from "react";

const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
];

const languages = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Marathi",
];

export default function IntakeLocation() {
  const [city, setCity] = useState("");
  const [court, setCourt] = useState("");
  const [language, setLanguage] = useState("");

  const canProceed = city && language;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-textPrimary text-center">
          Where will this matter be handled?
        </h2>

        {/* Form */}
        <div className="mt-10 space-y-6">
          {/* City */}
          <div>
            <label className="block text-sm text-textSecondary mb-2">
              City
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-borderSubtle rounded-md px-4 py-3"
            >
              <option value="">Select city</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Court */}
          <div>
            <label className="block text-sm text-textSecondary mb-2">
              Court (optional)
            </label>
            <input
              value={court}
              onChange={(e) => setCourt(e.target.value)}
              placeholder="e.g. District Court, High Court"
              className="w-full border border-borderSubtle rounded-md px-4 py-3"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm text-textSecondary mb-2">
              Preferred language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border border-borderSubtle rounded-md px-4 py-3"
            >
              <option value="">Select language</option>
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button
            disabled={!canProceed}
            className={`
              px-8 py-3 rounded-md text-white transition
              ${canProceed
                ? "bg-primary hover:bg-primaryHover"
                : "bg-gray-300 cursor-not-allowed"}
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
