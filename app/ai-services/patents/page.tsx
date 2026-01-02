"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PatentConsultationPage() {
  const [invention, setInvention] = useState("");
  const [category, setCategory] = useState("");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    "Technology/Software",
    "Medical/Pharmaceutical",
    "Mechanical",
    "Chemical",
    "Biotechnology",
    "Electrical",
    "Other",
  ];

  const handleAnalyze = async () => {
    if (!invention || !category) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(`
Based on your invention description, here's our AI-powered analysis:

PATENTABILITY ASSESSMENT:
• Novelty Check: Preliminary analysis suggests potential novelty, but a comprehensive prior art search is recommended.
• Inventive Step: The invention appears to demonstrate technical advancement over existing solutions.
• Industrial Applicability: Yes, applicable in the ${category} field.

RECOMMENDED NEXT STEPS:
1. Conduct a thorough prior art search through patent databases
2. Prepare detailed technical specifications and drawings
3. Consider filing a provisional patent application for priority
4. Consult with a patent attorney for formal filing procedures

IMPORTANT NOTES:
- This is a preliminary AI assessment only
- Professional patent attorney review is strongly recommended
- Patent laws vary by jurisdiction
- Prior art searches should be comprehensive before filing
      `);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-textPrimary mb-4">
            AI Patent Consulting
          </h1>
          <p className="text-lg text-textSecondary">
            Get AI-powered guidance on patent applications and patentability analysis
          </p>
        </motion.div>

        <div className="bg-white rounded-xl border border-borderSubtle p-8 mb-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Invention Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-borderSubtle rounded-lg px-4 py-3"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-textPrimary mb-2">
                Describe Your Invention
              </label>
              <textarea
                value={invention}
                onChange={(e) => setInvention(e.target.value)}
                placeholder="Provide a detailed description of your invention, including its key features, how it works, and what problem it solves..."
                rows={8}
                className="w-full border border-borderSubtle rounded-lg px-4 py-3 resize-none"
              />
              <p className="text-sm text-textSecondary mt-2">
                Be as detailed as possible for better analysis
              </p>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={isLoading || !invention || !category}
              className={`w-full px-6 py-3 rounded-lg font-medium transition ${
                isLoading || !invention || !category
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primaryHover"
              }`}
            >
              {isLoading ? "Analyzing..." : "Get AI Analysis"}
            </button>
          </div>
        </div>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-textPrimary mb-4">
              AI Analysis Results
            </h2>
            <pre className="whitespace-pre-wrap text-sm text-textSecondary font-sans">
              {analysis}
            </pre>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
        >
          <p className="text-sm text-yellow-800 mb-4">
            <strong>⚠️ Important:</strong> This AI analysis is for guidance only. For actual patent filing, 
            you must consult with a qualified patent attorney.
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primaryHover transition">
            Find a Patent Attorney
          </button>
        </motion.div>
      </div>
    </div>
  );
}

