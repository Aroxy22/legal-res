"use client";

import { useRouter } from "next/navigation";
import { useIntake } from "../_context/IntakeContext";

export default function IntakeSummary() {
  const { data } = useIntake();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-textPrimary">
          Your issue at a glance
        </h2>

        {/* Summary */}
        <p className="mt-6 text-textSecondary">
          This appears to be a{" "}
          <strong>{data.category ?? "legal"}</strong> matter in{" "}
          <strong>{data.city ?? "your jurisdiction"}</strong>
          {data.court ? `, involving ${data.court}` : ""}.
        </p>

        <p className="mt-4 text-textSecondary">
          The matter is marked as{" "}
          <strong>{data.urgency ?? "not specified"}</strong>.
          {data.hasDocuments !== undefined &&
            ` Documents are ${
              data.hasDocuments ? "available" : "not available"
            }.`}
        </p>

        <p className="mt-4 text-sm text-textSecondary">
          <strong>Description:</strong>{" "}
          {data.description ?? "No description provided."}
        </p>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-textSecondary">
          This information is general and not legal advice.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => router.push("/lawyers")}
            className="px-6 py-3 bg-primary text-white rounded-md
                       hover:bg-primaryHover transition"
          >
            See relevant lawyers
          </button>
        </div>
      </div>
    </div>
  );
}
