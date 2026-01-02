"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Seminar = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  speaker: string;
  speakerBio: string;
  attendees: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
};

const SEMINARS: Seminar[] = [
  {
    id: 1,
    title: "Recent Amendments in Family Law",
    description: "An in-depth analysis of the latest amendments to family law legislation, including changes to divorce proceedings, custody rights, and property division.",
    date: "2024-03-15",
    time: "2:00 PM IST",
    duration: "2 hours",
    speaker: "Senior Advocate Ananya Rao",
    speakerBio: "12+ years of experience in family law, recognized expert in matrimonial disputes",
    attendees: 245,
    category: "Family Law",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "Digital Evidence in Court",
    description: "Learn how to properly collect, preserve, and present digital evidence in legal proceedings. Covers social media, emails, and electronic documents.",
    date: "2024-03-25",
    time: "3:00 PM IST",
    duration: "1.5 hours",
    speaker: "Cyber Law Expert Priya Sharma",
    speakerBio: "Specialized in cyber law and digital forensics, 9 years of practice",
    attendees: 312,
    category: "Technology Law",
    level: "Advanced",
  },
  {
    id: 3,
    title: "Consumer Protection Act 2019",
    description: "Understanding the new Consumer Protection Act, its implications, and how it affects both consumers and businesses.",
    date: "2024-04-05",
    time: "11:00 AM IST",
    duration: "2 hours",
    speaker: "Advocate Rohit Mehta",
    speakerBio: "Consumer rights expert with 8 years of experience",
    attendees: 198,
    category: "Consumer Law",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Employment Law Updates 2024",
    description: "Latest developments in employment law, including new regulations, court rulings, and best practices for employers and employees.",
    date: "2024-04-12",
    time: "4:00 PM IST",
    duration: "2.5 hours",
    speaker: "Labour Law Specialist Neha Kulkarni",
    speakerBio: "10+ years in employment and labour law",
    attendees: 267,
    category: "Employment Law",
    level: "Intermediate",
  },
];

export default function SeminarsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(SEMINARS.map((s) => s.category)))];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredSeminars = SEMINARS.filter((seminar) => {
    const categoryMatch = selectedCategory === "All" || seminar.category === selectedCategory;
    const levelMatch = selectedLevel === "All" || seminar.level === selectedLevel;
    return categoryMatch && levelMatch;
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
            Online Seminars
          </h1>
          <p className="text-lg text-textSecondary">
            Learn from expert legal professionals through our comprehensive seminar series
          </p>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-borderSubtle p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-2"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-2"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Seminars List */}
        <div className="space-y-6">
          {filteredSeminars.map((seminar, index) => (
            <motion.div
              key={seminar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-borderSubtle p-8 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {seminar.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      seminar.level === "Beginner"
                        ? "bg-green-100 text-green-700"
                        : seminar.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {seminar.level}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-textPrimary mb-3">
                    {seminar.title}
                  </h2>
                  <p className="text-textSecondary mb-4">{seminar.description}</p>
                  <div className="space-y-2 text-sm text-textSecondary mb-4">
                    <p><strong>Speaker:</strong> {seminar.speaker}</p>
                    <p className="text-xs">{seminar.speakerBio}</p>
                    <p>📅 {new Date(seminar.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</p>
                    <p>🕐 {seminar.time} • Duration: {seminar.duration}</p>
                    <p>👥 {seminar.attendees} lawyers registered</p>
                  </div>
                </div>
                <div className="lg:w-48 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">Free</div>
                    <p className="text-sm text-textSecondary">For all registered lawyers</p>
                  </div>
                  <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primaryHover transition">
                    Register Now
                  </button>
                  <button className="w-full mt-2 px-6 py-2 border border-borderSubtle text-textPrimary rounded-lg hover:border-primary transition">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

