"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useIntake } from "../intake/_context/IntakeContext";

export default function WillInput() {
  const router = useRouter();
  const { update } = useIntake();

  const [fullName, setFullName] = useState("");
  const [cityAndState, setCityAndState] = useState("");
  const [assets, setAssets] = useState("");
  const [beneficiaries, setBeneficiaries] = useState("");
  const [executorName, setExecutorName] = useState("");

  const canGenerate =
    fullName && cityAndState && assets && beneficiaries;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-textPrimary">
          Generate a draft will
        </h2>

        <div className="mt-8 space-y-6">
          <input
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-borderSubtle rounded-md px-4 py-3"
          />

          <input
            placeholder="City and state of residence"
            value={cityAndState}
            onChange={(e) => setCityAndState(e.target.value)}
            className="w-full border border-borderSubtle rounded-md px-4 py-3"
          />

          <textarea
            rows={3}
            placeholder="List of major assets"
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

          <input
            placeholder="Executor name (optional)"
            value={executorName}
            onChange={(e) => setExecutorName(e.target.value)}
            className="w-full border border-borderSubtle rounded-md px-4 py-3"
          />
        </div>

        <div className="mt-10">
          <button
            disabled={!canGenerate}
            onClick={() => {
              update({
                willDraft: {
                  fullName,
                  cityAndState,
                  assets,
                  beneficiaries,
                  executorName: executorName || undefined,
                },
              });
              router.push("/will/draft");
            }}
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
