"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AIServicesPage() {
  const router = useRouter();

  const services = [
    {
      title: "Will Generation",
      description: "Generate comprehensive will drafts with AI assistance. Customize based on your assets, beneficiaries, and preferences.",
      icon: "📜",
      href: "/will",
      color: "from-blue-500 to-blue-600",
      features: ["Custom asset distribution", "Beneficiary management", "Executor appointment"],
    },
    {
      title: "Patent Consulting",
      description: "Get AI-powered guidance on patent applications, prior art searches, and patentability analysis.",
      icon: "🔬",
      href: "/ai-services/patents",
      color: "from-purple-500 to-purple-600",
      features: ["Patent search", "Application guidance", "Prior art analysis"],
    },
    {
      title: "Legal Consultation",
      description: "Ask legal questions and get AI-powered answers. Understand your rights and legal options.",
      icon: "💬",
      href: "/ai-services/consultation",
      color: "from-green-500 to-green-600",
      features: ["Q&A format", "Legal guidance", "Case analysis"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-r from-legalNavy via-primary to-legalCharcoal text-white relative overflow-hidden">
        {/* Legal tech background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(0.4)"
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              AI-Powered Legal Services
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Powered by Google Gemini AI</span>
            </div>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to get instant legal assistance, draft documents, and receive expert guidance with fast, accurate responses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-textPrimary mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Choose from our range of AI-powered legal tools designed to assist you with common legal needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl border border-borderSubtle p-8 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-legalNavy/10 to-legalCharcoal/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-legalNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.title === "Will Generation" ? "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" : service.title === "Patent Consulting" ? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" : "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-textPrimary mb-3">
                  {service.title}
                </h3>
                <p className="text-textSecondary mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-textSecondary">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => router.push(service.href)}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primaryHover transition"
                >
                  Try Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
          >
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Important Disclaimer:</strong> All AI-generated content should be reviewed by a qualified lawyer before use. 
              These tools are designed to assist and guide, not replace professional legal advice.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

