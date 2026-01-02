"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const urgencyOptions = [
  { label: "Immediate", value: "immediate" },
  { label: "Soon", value: "soon" },
  { label: "Not urgent", value: "not_urgent" },
];

export default function IntakeContext() {
  const router = useRouter();

  const [urgency, setUrgency] = useState<string | null>(null);
  const [hasDocuments, setHasDocuments] = useState<boolean | null>(null);
  const [description, setDescription] = useState("");

  const canProceed = urgency && description.trim().length > 0;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-textPrimary text-center">
          Tell us a bit more
        </h2>

        <div className="mt-10 space-y-10">
          {/* Urgency */}
          <div>
            <p className="text-sm text-textSecondary mb-3">
              How urgent is this?
            </p>

            <div className="flex gap-3 flex-wrap">
              {urgencyOptions.map((opt) => {
                const isActive = urgency === opt.value;

                return (
                  <button
                    key={opt.value}
                    onClick={() => setUrgency(opt.value)}
                    className={`
                      px-4 py-2 rounded-full border text-sm transition
                      ${isActive
                        ? "border-primary bg-blue-50 text-textPrimary"
                        : "border-borderSubtle text-textSecondary hover:border-primary"}
                    `}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Documents */}
          <div>
            <p className="text-sm text-textSecondary mb-3">
              Do you have documents related to this matter?
            </p>

            <div className="flex gap-3">
              {[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ].map((opt) => {
                const isActive = hasDocuments === opt.value;

                return (
                  <button
                    key={opt.label}
                    onClick={() => setHasDocuments(opt.value)}
                    className={`
                      px-5 py-2 rounded-md border transition
                      ${isActive
                        ? "border-primary bg-blue-50 text-textPrimary"
                        : "border-borderSubtle text-textSecondary hover:border-primary"}
                    `}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-textSecondary mb-2">
              Briefly describe what happened or what you need help with
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="You can keep this short. A lawyer will review the details later."
              className="w-full border border-borderSubtle rounded-md px-4 py-3 resize-none"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button
            disabled={!canProceed}
            onClick={() => router.push("/intake/summary")}
            className={`
              px-8 py-3 rounded-md text-white transition
              ${canProceed
                ? "bg-primary hover:bg-primaryHover"
                : "bg-gray-300 cursor-not-allowed"}
            `}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
