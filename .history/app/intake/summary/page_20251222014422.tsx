"use client";

import { useIntake } from "../_context/IntakeContext";

export default function IntakeSummary() {
  const { data } = useIntake();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-textPrimary">
          Your issue at a glance
        </h2>

        <p className="mt-6 text-textSecondary">
          This appears to be a <strong>{data.category}</strong> matter
          in <strong>{data.city}</strong>
          {data.court ? `, involving ${data.court}` : ""}.
        </p>

        <p className="mt-4 text-textSecondary">
          The matter is marked as <strong>{data.urgency}</strong>.
          {data.hasDocuments !== undefined &&
            ` Documents are ${data.hasDocuments ? "available" : "not available"}.`}
        </p>

        <p className="mt-4 text-sm text-textSecondary">
          <strong>Description:</strong> {data.description}
        </p>

        <p className="mt-6 text-sm text-textSecondary">
          This information is general and not legal advice.
        </p>
      </div>
    </div>
  );
}
