"use client";

import { useIntake } from "../intake/_context/IntakeContext";

type Lawyer = {
  id: number;
  name: string;
  practiceArea: string;
  experience: number;
  city: string;
  languages: string[];
  courts: string[];
  fee: string;
};

const MOCK_LAWYERS: Lawyer[] = [
  {
    id: 1,
    name: "Ananya Rao",
    practiceArea: "Family",
    experience: 12,
    city: "Bengaluru",
    languages: ["English", "Kannada"],
    courts: ["Family Court", "District Court"],
    fee: "₹2,000 / consultation",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    practiceArea: "Consumer",
    experience: 8,
    city: "Delhi",
    languages: ["English", "Hindi"],
    courts: ["District Court", "Consumer Forum"],
    fee: "₹1,500 / consultation",
  },
  {
    id: 3,
    name: "Siddharth Iyer",
    practiceArea: "Property",
    experience: 15,
    city: "Chennai",
    languages: ["English", "Tamil"],
    courts: ["High Court", "District Court"],
    fee: "₹2,500 / consultation",
  },
  {
    id: 4,
    name: "Neha Kulkarni",
    practiceArea: "Employment",
    experience: 10,
    city: "Pune",
    languages: ["English", "Marathi"],
    courts: ["Labour Court", "District Court"],
    fee: "₹2,000 / consultation",
  },
];

export default function LawyerResults() {
  const { data } = useIntake();

  // Very simple relevance filter (MVP-safe)
  const filteredLawyers = MOCK_LAWYERS.filter((lawyer) => {
    const categoryMatch =
      !data.category || lawyer.practiceArea === data.category;
    const cityMatch = !data.city || lawyer.city === data.city;
    const languageMatch =
      !data.language || lawyer.languages.includes(data.language);

    return categoryMatch && cityMatch && languageMatch;
  });

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-textPrimary">
          Relevant lawyers
        </h2>

        <p className="mt-2 text-textSecondary">
          Based on your issue and preferences, here are lawyers who may be able
          to help.
        </p>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-textSecondary">
          Listings are shown based on relevance only. No rankings or guarantees
          are implied.
        </p>

        {/* Results */}
        <div className="mt-8 space-y-4">
          {filteredLawyers.length === 0 && (
            <p className="text-textSecondary">
              No exact matches found. Try adjusting your preferences.
            </p>
          )}

          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="border border-borderSubtle rounded-lg p-5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-textPrimary">
                    {lawyer.name}
                  </h3>

                  <p className="text-sm text-textSecondary mt-1">
                    {lawyer.practiceArea} • {lawyer.experience} years experience
                  </p>

                  <p className="text-sm text-textSecondary mt-1">
                    {lawyer.city} • Languages: {lawyer.languages.join(", ")}
                  </p>

                  <p className="text-sm text-textSecondary mt-1">
                    Courts: {lawyer.courts.join(", ")}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-textSecondary">
                    {lawyer.fee}
                  </p>

                  <button
                    className="mt-3 px-4 py-2 bg-primary text-white rounded-md
                               hover:bg-primaryHover transition"
                  >
                    Book 15-min intro
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
