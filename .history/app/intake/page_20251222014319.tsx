"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useIntake } from "./_context/IntakeContext";

const categories = [
  "Family",
  "Consumer",
  "Employment",
  "Property",
  "Criminal",
  "Corporate",
];

export default function IntakeCategory() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();
  const { update } = useIntake();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-textPrimary text-center">
          What best describes your issue?
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categories.map((category) => {
            const isActive = selected === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setSelected(category);
                  update({ category });
                }}
                className={`
                  h-28 rounded-lg border p-4 text-left transition
                  ${isActive
                    ? "border-primary bg-blue-50"
                    : "border-borderSubtle hover:border-primary"}
                `}
              >
                <p className="text-lg font-medium text-textPrimary">
                  {category}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            disabled={!selected}
            onClick={() => router.push("/intake/location")}
            className={`
              px-8 py-3 rounded-md text-white transition
              ${selected
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
