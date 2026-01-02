"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WillInput() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [assets, setAssets] = useState("");
  const [beneficiaries, setBeneficiaries] = useState("");

  const canGenerate =
    name.trim() && city.trim() && assets.trim() && beneficiaries.trim();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-textPrimary">
          Generate a draft will
        </h2>

        <div className="mt-8 space-y-6">
          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-borderSubtle rounded-md px-4 py-3"
          />

          <input
            placeholder="City and state of residence"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border border-borderSubtle rounded-md px-4 py-3"
          />

          <textarea
            rows={3}
            placeholder="List of major assets (e.g. house, bank accounts)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            className="w-full border border-borderSubtle rounded-md px-4 py-3"
          />

          <textarea
            rows={3}
            placeholder="Beneficiaries and relationship"
            value={beneficiaries}
            onChange={(e) => setBeneficiaries(e.target.value)}
            className="w-full border border-borderSubtle rounded-md px-4 py-3"
          />
        </div>

        <div className="mt-10">
          <button
            disabled={!canGenerate}
            onClick={() => router.push("/will/draft")}
            className={`px-6 py-3 rounded-md text-white ${
              canGenerate ? "bg-primary" : "bg-gray-300"
            }`}
          >
            Generate draft
          </button>
        </div>
      </div>
    </div>
  );
}
