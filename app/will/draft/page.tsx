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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 border-2 border-yellow-400 bg-yellow-50 p-6 rounded-xl">
          <p className="text-sm text-yellow-800 font-medium">
            ⚠️ <strong>Important Notice:</strong> This is a preliminary draft generated for convenience only.
            It must be reviewed by a qualified lawyer before use or execution. This does not constitute legal advice.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-borderSubtle shadow-sm p-8 mb-6">
          <h1 className="text-3xl font-bold text-textPrimary mb-2">
            Draft Will (For Review)
          </h1>
          <p className="text-textSecondary mb-6">
            Review the generated draft below. Download, print, or share with your lawyer for professional review.
          </p>

          <div className="bg-gray-50 border border-borderSubtle rounded-lg p-8 mt-6">
            <pre className="text-sm text-textPrimary whitespace-pre-wrap font-sans leading-relaxed">
              {draftText}
            </pre>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-borderSubtle p-6">
          <h3 className="text-lg font-semibold text-textPrimary mb-4">
            Next Steps
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primaryHover transition shadow-md hover:shadow-lg">
              Share with Lawyer
            </button>
            <button className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition">
              Book Review Call
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 px-6 py-3 border border-borderSubtle text-textPrimary rounded-lg font-medium hover:border-primary transition"
            >
              Print / Download
            </button>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-semibold text-textPrimary mb-2">Need Help?</h4>
          <p className="text-sm text-textSecondary mb-4">
            Connect with our verified lawyers who specialize in estate planning and will preparation.
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primaryHover transition">
            Find a Will & Estate Lawyer
          </button>
        </div>
      </div>
    </div>
  );
}
