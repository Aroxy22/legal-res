"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Workshop = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  instructor: string;
  instructorBio: string;
  maxParticipants: number;
  currentParticipants: number;
  category: string;
  format: "Interactive" | "Hands-on" | "Case Study";
};

const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    title: "Contract Drafting Workshop",
    description: "Hands-on workshop focusing on drafting effective contracts. Practice with real-world scenarios and get feedback from expert instructors.",
    date: "2024-03-20",
    time: "10:00 AM IST",
    duration: "4 hours",
    instructor: "Corporate Lawyer Vikram Singh",
    instructorBio: "18 years of experience in corporate law and contract negotiation",
    maxParticipants: 30,
    currentParticipants: 24,
    category: "Corporate Law",
    format: "Hands-on",
  },
  {
    id: 2,
    title: "Litigation Strategy & Courtroom Skills",
    description: "Interactive workshop covering trial preparation, examination techniques, and effective courtroom presentation. Includes mock trial exercises.",
    date: "2024-04-08",
    time: "9:00 AM IST",
    duration: "6 hours",
    instructor: "Senior Advocate Siddharth Iyer",
    instructorBio: "15+ years in litigation, High Court practitioner",
    maxParticipants: 25,
    currentParticipants: 18,
    category: "Litigation",
    format: "Interactive",
  },
  {
    id: 3,
    title: "Client Interviewing & Case Analysis",
    description: "Learn effective client interviewing techniques and systematic case analysis methods. Practice with role-play scenarios.",
    date: "2024-04-18",
    time: "2:00 PM IST",
    duration: "3 hours",
    instructor: "Advocate Neha Kulkarni",
    instructorBio: "Expert in client relations and case management",
    maxParticipants: 40,
    currentParticipants: 32,
    category: "Practice Management",
    format: "Case Study",
  },
];

export default function WorkshopsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(WORKSHOPS.map((w) => w.category)))];

  const filteredWorkshops = WORKSHOPS.filter((workshop) => {
    return selectedCategory === "All" || workshop.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-textPrimary mb-4">
            Interactive Workshops
          </h1>
          <p className="text-lg text-textSecondary">
            Develop practical skills through hands-on workshops led by experienced practitioners
          </p>
        </motion.div>

        {/* Filter */}
        <div className="bg-white rounded-xl border border-borderSubtle p-6 mb-8">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-textPrimary">
              Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-borderSubtle rounded-lg px-4 py-2"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredWorkshops.map((workshop, index) => {
            const spotsLeft = workshop.maxParticipants - workshop.currentParticipants;
            const isAlmostFull = spotsLeft <= 5;

            return (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-borderSubtle p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {workshop.category}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {workshop.format}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-textPrimary mb-3">
                  {workshop.title}
                </h2>
                <p className="text-textSecondary mb-4">{workshop.description}</p>
                <div className="space-y-2 text-sm text-textSecondary mb-4">
                  <p><strong>Instructor:</strong> {workshop.instructor}</p>
                  <p className="text-xs">{workshop.instructorBio}</p>
                  <p>📅 {new Date(workshop.date).toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</p>
                  <p>🕐 {workshop.time} • Duration: {workshop.duration}</p>
                  <div className="flex items-center gap-2">
                    <p>👥 {workshop.currentParticipants}/{workshop.maxParticipants} participants</p>
                    {isAlmostFull && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                        Almost Full
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-borderSubtle">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-textPrimary">₹2,500</div>
                      <p className="text-sm text-textSecondary">Per participant</p>
                    </div>
                  </div>
                  <button
                    disabled={spotsLeft === 0}
                    className={`w-full px-6 py-3 rounded-lg font-medium transition ${
                      spotsLeft === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-primaryHover"
                    }`}
                  >
                    {spotsLeft === 0 ? "Fully Booked" : "Register Now"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

