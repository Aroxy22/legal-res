"use client";

import { useState, useMemo } from "react";
import { useIntake } from "../intake/_context/IntakeContext";
import { motion } from "framer-motion";

type Lawyer = {
  id: number;
  name: string;
  practiceArea: string;
  experience: number;
  city: string;
  languages: string[];
  courts: string[];
  fee: string;
  rating?: number;
  verified: boolean;
  avatar?: string;
};

const MOCK_LAWYERS: Lawyer[] = [
  // Family Law Lawyers
  {
    id: 1,
    name: "Ananya Rao",
    practiceArea: "Family",
    experience: 12,
    city: "Bengaluru",
    languages: ["English", "Kannada"],
    courts: ["Family Court", "District Court"],
    fee: "₹2,000 / consultation",
    rating: 4.8,
    verified: true,
  },
  {
    id: 7,
    name: "Rajesh Patel",
    practiceArea: "Family",
    experience: 14,
    city: "Mumbai",
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    courts: ["Family Court", "High Court"],
    fee: "₹3,500 / consultation",
    rating: 4.9,
    verified: true,
  },
  {
    id: 8,
    name: "Kavita Menon",
    practiceArea: "Family",
    experience: 11,
    city: "Delhi",
    languages: ["English", "Hindi"],
    courts: ["Family Court", "District Court"],
    fee: "₹2,500 / consultation",
    rating: 4.7,
    verified: true,
  },
  // Consumer Law Lawyers
  {
    id: 2,
    name: "Rohit Mehta",
    practiceArea: "Consumer",
    experience: 8,
    city: "Delhi",
    languages: ["English", "Hindi"],
    courts: ["District Court", "Consumer Forum"],
    fee: "₹1,500 / consultation",
    rating: 4.6,
    verified: true,
  },
  {
    id: 9,
    name: "Sunita Verma",
    practiceArea: "Consumer",
    experience: 10,
    city: "Mumbai",
    languages: ["English", "Hindi", "Marathi"],
    courts: ["Consumer Forum", "District Court"],
    fee: "₹2,000 / consultation",
    rating: 4.8,
    verified: true,
  },
  {
    id: 10,
    name: "Amit Kumar",
    practiceArea: "Consumer",
    experience: 7,
    city: "Pune",
    languages: ["English", "Hindi", "Marathi"],
    courts: ["Consumer Forum", "District Court"],
    fee: "₹1,800 / consultation",
    rating: 4.5,
    verified: true,
  },
  // Property Law Lawyers
  {
    id: 3,
    name: "Siddharth Iyer",
    practiceArea: "Property",
    experience: 15,
    city: "Chennai",
    languages: ["English", "Tamil"],
    courts: ["High Court", "District Court"],
    fee: "₹2,500 / consultation",
    rating: 4.9,
    verified: true,
  },
  {
    id: 11,
    name: "Manpreet Kaur",
    practiceArea: "Property",
    experience: 13,
    city: "Delhi",
    languages: ["English", "Hindi", "Punjabi"],
    courts: ["High Court", "District Court"],
    fee: "₹3,000 / consultation",
    rating: 4.8,
    verified: true,
  },
  {
    id: 12,
    name: "Ravi Shankar",
    practiceArea: "Property",
    experience: 16,
    city: "Hyderabad",
    languages: ["English", "Telugu", "Hindi"],
    courts: ["High Court", "District Court"],
    fee: "₹2,800 / consultation",
    rating: 4.9,
    verified: true,
  },
  // Employment Law Lawyers
  {
    id: 4,
    name: "Neha Kulkarni",
    practiceArea: "Employment",
    experience: 10,
    city: "Pune",
    languages: ["English", "Marathi"],
    courts: ["Labour Court", "District Court"],
    fee: "₹2,000 / consultation",
    rating: 4.7,
    verified: true,
  },
  {
    id: 13,
    name: "Arjun Nair",
    practiceArea: "Employment",
    experience: 12,
    city: "Bengaluru",
    languages: ["English", "Kannada", "Malayalam"],
    courts: ["Labour Court", "High Court"],
    fee: "₹2,500 / consultation",
    rating: 4.8,
    verified: true,
  },
  {
    id: 14,
    name: "Deepika Reddy",
    practiceArea: "Employment",
    experience: 9,
    city: "Chennai",
    languages: ["English", "Tamil", "Telugu"],
    courts: ["Labour Court", "District Court"],
    fee: "₹2,200 / consultation",
    rating: 4.6,
    verified: true,
  },
  // Corporate Law Lawyers
  {
    id: 5,
    name: "Vikram Singh",
    practiceArea: "Corporate",
    experience: 18,
    city: "Mumbai",
    languages: ["English", "Hindi", "Marathi"],
    courts: ["High Court", "Supreme Court"],
    fee: "₹5,000 / consultation",
    rating: 4.9,
    verified: true,
  },
  {
    id: 15,
    name: "Meera Joshi",
    practiceArea: "Corporate",
    experience: 16,
    city: "Delhi",
    languages: ["English", "Hindi"],
    courts: ["High Court", "Supreme Court", "NCLT"],
    fee: "₹4,500 / consultation",
    rating: 4.9,
    verified: true,
  },
  {
    id: 16,
    name: "Karan Malhotra",
    practiceArea: "Corporate",
    experience: 14,
    city: "Bengaluru",
    languages: ["English", "Hindi", "Kannada"],
    courts: ["High Court", "NCLT"],
    fee: "₹4,000 / consultation",
    rating: 4.8,
    verified: true,
  },
  // Criminal Law Lawyers
  {
    id: 6,
    name: "Priya Sharma",
    practiceArea: "Criminal",
    experience: 9,
    city: "Delhi",
    languages: ["English", "Hindi"],
    courts: ["Sessions Court", "District Court"],
    fee: "₹2,200 / consultation",
    rating: 4.5,
    verified: true,
  },
  {
    id: 17,
    name: "Anil Desai",
    practiceArea: "Criminal",
    experience: 17,
    city: "Mumbai",
    languages: ["English", "Hindi", "Marathi"],
    courts: ["Sessions Court", "High Court", "Supreme Court"],
    fee: "₹3,500 / consultation",
    rating: 4.9,
    verified: true,
  },
  {
    id: 18,
    name: "Shruti Agarwal",
    practiceArea: "Criminal",
    experience: 11,
    city: "Kolkata",
    languages: ["English", "Hindi", "Bengali"],
    courts: ["Sessions Court", "High Court"],
    fee: "₹2,800 / consultation",
    rating: 4.7,
    verified: true,
  },
];

export default function LawyerResults() {
  const { data } = useIntake();
  const [minExperience, setMinExperience] = useState<number>(0);
  const [selectedCity, setSelectedCity] = useState<string>(data.city || "");
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>(
    data.category || ""
  );
  const [sortBy, setSortBy] = useState<"experience" | "rating" | "fee">(
    "rating"
  );

  const cities = Array.from(new Set(MOCK_LAWYERS.map((l) => l.city))).sort();
  const practiceAreas = Array.from(
    new Set(MOCK_LAWYERS.map((l) => l.practiceArea))
  ).sort();

  const filteredLawyers = useMemo(() => {
    let filtered = MOCK_LAWYERS.filter((lawyer) => {
      const categoryMatch =
        !selectedPracticeArea || lawyer.practiceArea === selectedPracticeArea;
      const cityMatch = !selectedCity || lawyer.city === selectedCity;
      const experienceMatch = lawyer.experience >= minExperience;
      const languageMatch =
        !data.language || lawyer.languages.includes(data.language);

      return categoryMatch && cityMatch && experienceMatch && languageMatch;
    });

    // Sort lawyers
    filtered.sort((a, b) => {
      if (sortBy === "experience") return b.experience - a.experience;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "fee") {
        const aFee = parseInt(a.fee.replace(/[^0-9]/g, ""));
        const bFee = parseInt(b.fee.replace(/[^0-9]/g, ""));
        return aFee - bFee;
      }
      return 0;
    });

    return filtered;
  }, [minExperience, selectedCity, selectedPracticeArea, data.language, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 py-12 relative">
      {/* Legal background image */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)"
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-textPrimary mb-3">
            Find Your Legal Expert
          </h1>
          <p className="text-lg text-textSecondary">
            Connect with verified lawyers based on your specific needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-borderSubtle p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-textPrimary mb-4">
                Filters
              </h3>

              {/* Practice Area */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-textPrimary mb-2">
                  Practice Area
                </label>
                <select
                  value={selectedPracticeArea}
                  onChange={(e) => setSelectedPracticeArea(e.target.value)}
                  className="w-full border border-borderSubtle rounded-lg px-4 py-2 text-sm"
                >
                  <option value="">All Areas</option>
                  {practiceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-textPrimary mb-2">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full border border-borderSubtle rounded-lg px-4 py-2 text-sm"
                >
                  <option value="">All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-textPrimary mb-2">
                  Minimum Experience: {minExperience} years
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={minExperience}
                  onChange={(e) => setMinExperience(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                onClick={() => {
                  setMinExperience(0);
                  setSelectedCity("");
                  setSelectedPracticeArea("");
                }}
                className="w-full px-4 py-2 text-sm text-textSecondary hover:text-textPrimary border border-borderSubtle rounded-lg hover:border-primary transition"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="bg-white rounded-xl border border-borderSubtle p-4 mb-6 flex items-center justify-between">
              <p className="text-sm text-textSecondary">
                {filteredLawyers.length} lawyer{filteredLawyers.length !== 1 ? "s" : ""} found
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-textSecondary">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "experience" | "rating" | "fee")
                  }
                  className="border border-borderSubtle rounded-lg px-4 py-2 text-sm"
                >
                  <option value="rating">Highest Rating</option>
                  <option value="experience">Most Experience</option>
                  <option value="fee">Lowest Fee</option>
                </select>
              </div>
            </div>

            {/* Lawyer Cards */}
            <div className="space-y-4">
              {filteredLawyers.length === 0 ? (
                <div className="bg-white rounded-xl border border-borderSubtle p-12 text-center">
                  <p className="text-textSecondary text-lg">
                    No lawyers found matching your criteria.
                  </p>
                  <p className="text-textSecondary text-sm mt-2">
                    Try adjusting your filters.
                  </p>
                </div>
              ) : (
                filteredLawyers.map((lawyer, index) => (
                  <motion.div
                    key={lawyer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl border border-borderSubtle p-6 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Lawyer Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 border-2 border-primary/20">
                            <img
                              src={`https://i.pravatar.cc/150?img=${lawyer.id + 10}`}
                              alt={lawyer.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-primary font-bold text-lg">${lawyer.name.split(" ").map((n) => n[0]).join("")}</div>`;
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-semibold text-textPrimary">
                                {lawyer.name}
                              </h3>
                              {lawyer.verified && (
                                <span className="text-primary text-sm">✓ Verified</span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 flex-wrap">
                              <span className="inline-flex items-center gap-1 text-sm text-textSecondary">
                                <svg className="w-4 h-4 text-warning fill-current" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {lawyer.rating?.toFixed(1)}
                              </span>
                              <span className="text-sm text-textSecondary">
                                {lawyer.experience} years experience
                              </span>
                              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                {lawyer.practiceArea}
                              </span>
                            </div>
                            <div className="mt-3 space-y-2">
                              <p className="text-sm text-textSecondary flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {lawyer.city}
                              </p>
                              <p className="text-sm text-textSecondary flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                {lawyer.languages.join(", ")}
                              </p>
                              <p className="text-sm text-textSecondary flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                                {lawyer.courts.join(", ")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="md:w-48 flex flex-col justify-between">
                        <div className="text-right mb-4">
                          <p className="text-lg font-semibold text-textPrimary">
                            {lawyer.fee}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button className="px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primaryHover transition">
                            Book Consultation
                          </button>
                          <button className="px-4 py-2 border border-borderSubtle text-textPrimary rounded-lg hover:border-primary transition">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
