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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-12 relative">
      {/* Legal document background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)"
        }}></div>
      </div>
      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-textPrimary mb-4">
          AI Will Generator
        </h1>
        <p className="text-lg text-textSecondary mb-8">
          Generate a draft will with AI assistance. All drafts should be reviewed by a qualified lawyer.
        </p>

        <div className="bg-white rounded-xl border border-borderSubtle p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your full legal name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                City and State of Residence <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="e.g., Mumbai, Maharashtra"
                value={cityAndState}
                onChange={(e) => setCityAndState(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                List of Major Assets <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Describe your assets: property, bank accounts, investments, etc."
                value={assets}
                onChange={(e) => setAssets(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Beneficiaries and Relationship <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="List beneficiaries and their relationship to you (e.g., Spouse: John Doe, Son: Jane Doe)"
                value={beneficiaries}
                onChange={(e) => setBeneficiaries(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Executor Name (Optional)
              </label>
              <input
                placeholder="Name of person to execute the will"
                value={executorName}
                onChange={(e) => setExecutorName(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-8">
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
              className={`w-full px-6 py-3 rounded-lg text-white font-medium transition ${
                canGenerate
                  ? "bg-primary hover:bg-primaryHover shadow-lg hover:shadow-xl"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Generate Will Draft
            </button>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-sm text-yellow-800">
            <strong>⚠️ Important:</strong> This is an AI-generated draft. You must consult with a qualified lawyer 
            before finalizing and executing your will.
          </p>
        </div>
      </div>
    </div>
  );
}
