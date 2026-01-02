"use client";

import { useIntake } from "@/app/intake/_context/IntakeContext";
import { generateWillDraft } from "@/lib/willTemplate";

export default function WillDraft() {
  const { data } = useIntake();

  if (!data.willDraft) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-textSecondary">
          No will data found. Please start again.
        </p>
      </div>
    );
  }

  const draftText = generateWillDraft({
    ...data.willDraft,
    jurisdiction: "India",
  });

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 border border-yellow-300 bg-yellow-50 p-4 rounded-md">
          <p className="text-sm text-yellow-800">
            ⚠️ This is a preliminary draft generated for convenience only.
            It must be reviewed by a qualified lawyer before use or execution.
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-textPrimary">
          Draft Will (For Review)
        </h2>

        <pre className="mt-6 border border-borderSubtle rounded-md p-6 text-sm text-textSecondary whitespace-pre-wrap">
          {draftText}
        </pre>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-md">
            Share with lawyer
          </button>
          <button className="px-6 py-3 border border-borderSubtle rounded-md">
            Book review call
          </button>
        </div>
      </div>
    </div>
  );
}
