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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
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
                <span className="text-4xl">🤖</span>
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              AI-Powered Legal Services
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span>⚡</span>
              <span>Powered by Google Gemini AI</span>
            </div>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to get instant legal assistance, draft documents, and receive expert guidance with fast, accurate responses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
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
                <div className={`text-6xl mb-6 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                  {service.icon}
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

