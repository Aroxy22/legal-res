"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useIntake } from "../_context/IntakeContext";

export default function IntakeContext() {
  const router = useRouter();
  const { update } = useIntake();

  const [urgency, setUrgency] = useState<string | null>(null);
  const [hasDocuments, setHasDocuments] = useState<boolean | null>(null);
  const [description, setDescription] = useState("");

  const canProceed = urgency && description.trim();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-textPrimary text-center">
          Tell us a bit more
        </h2>

        <div className="mt-10 space-y-10">
          <div>
            <p className="text-sm text-textSecondary mb-3">
              How urgent is this?
            </p>
            <div className="flex gap-3">
              {["Immediate", "Soon", "Not urgent"].map((label) => (
                <button
                  key={label}
                  onClick={() => setUrgency(label)}
                  className={`px-4 py-2 rounded-full border ${
                    urgency === label
                      ? "border-primary bg-blue-50"
                      : "border-borderSubtle"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-textSecondary mb-3">
              Do you have documents?
            </p>
            <div className="flex gap-3">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  onClick={() => setHasDocuments(val)}
                  className={`px-5 py-2 rounded-md border ${
                    hasDocuments === val
                      ? "border-primary bg-blue-50"
                      : "border-borderSubtle"
                  }`}
                >
                  {val ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe the issue"
              className="w-full border border-borderSubtle rounded-md px-4 py-3"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            disabled={!canProceed}
            onClick={() => {
              update({ urgency, hasDocuments, description });
              router.push("/intake/summary");
            }}
            className={`px-8 py-3 rounded-md text-white ${
              canProceed ? "bg-primary" : "bg-gray-300"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
