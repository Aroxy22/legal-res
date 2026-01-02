"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      title: "Smart Lawyer Matching",
      description: "Connect with verified lawyers based on location, experience, and expertise",
      href: "/lawyers",
    },
    {
      title: "Education Hub",
      description: "Join seminars, workshops, and connect with legal professionals",
      href: "/education",
    },
    {
      title: "AI Legal Services",
      description: "Get AI-powered assistance for wills, patents, and legal consultations",
      href: "/ai-services",
    },
  ];

  const aiServices = [
    { name: "Will Generation", description: "AI-powered will drafting", href: "/will" },
    { name: "Patent Consulting", description: "Get help with patent applications", href: "/ai-services/patents" },
    { name: "Legal Consultation", description: "AI assistant for legal questions", href: "/ai-services/consultation" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-br from-legalNavy/10 via-white to-legalCharcoal/5">
        {/* Legal background image overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)"
          }}></div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-legalNavy to-legalCharcoal mb-6 shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-textPrimary mb-6">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-legalNavy to-legalCharcoal bg-clip-text text-transparent">
                LEGALRES
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with expert lawyers, access educational resources, and leverage AI-powered legal services—all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/intake")}
                className="px-8 py-4 bg-gradient-to-r from-legalNavy to-primary text-white rounded-xl text-lg font-semibold hover:shadow-2xl transition-all shadow-lg flex items-center gap-2 justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Find a Lawyer
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/ai-services"
                  className="inline-flex items-center gap-2 justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl text-lg font-semibold hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Explore AI Services
                </Link>
              </motion.div>
            </div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm"
            >
              <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-borderSubtle">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-textPrimary">12,500+ Verified Lawyers</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-borderSubtle">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="font-medium text-textPrimary">4.8/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-borderSubtle">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium text-textPrimary">AI-Powered Matching</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)"
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
              Three Powerful Platforms in One
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Everything you need for your legal journey, from finding the right lawyer to accessing AI-powered tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-borderSubtle hover:border-primary hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-legalNavy/10 to-legalCharcoal/10 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-legalNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.title === "Smart Lawyer Matching" ? "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" : feature.title === "Education Hub" ? "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" : "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-textSecondary mb-6 leading-relaxed">{feature.description}</p>
                  <Link
                    href={feature.href}
                    className="text-legalNavy font-semibold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SERVICES SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)"
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-textPrimary mb-4">
              AI-Powered Legal Services
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Get instant assistance with AI-powered tools for common legal needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl border border-borderSubtle hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-legalNavy/10 to-legalCharcoal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-legalNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.name === "Will Generation" ? "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" : service.name === "Patent Consulting" ? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" : "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2">
                  {service.name}
                </h3>
                <p className="text-textSecondary mb-4">{service.description}</p>
                <button
                  onClick={() => router.push(service.href)}
                  className="w-full mt-4 px-4 py-2 bg-legalNavy text-white rounded-lg font-medium hover:bg-primaryHover transition-all text-sm"
                >
                  Try it now →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-legalNavy to-legalCharcoal rounded-2xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-95">
                Join thousands of users who trust LEGALRES for their legal needs.
              </p>
              <button
                onClick={() => router.push("/intake")}
                className="px-8 py-4 bg-white text-primary rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
