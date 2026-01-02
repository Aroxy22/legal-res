"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EducationHub() {
  const router = useRouter();

  const stats = [
    { label: "Active Lawyers", value: "12,500+", icon: "👥" },
    { label: "Completed Seminars", value: "450+", icon: "📚" },
    { label: "Workshop Sessions", value: "280+", icon: "🎯" },
    { label: "Community Members", value: "8,900+", icon: "💬" },
  ];

  const features = [
    {
      title: "Online Seminars",
      description: "Join expert-led seminars on various legal topics. Learn from industry leaders and stay updated with latest legal developments.",
      icon: "📚",
      href: "/education/seminars",
      color: "from-blue-500 to-blue-600",
      count: "450+ Seminars",
      highlights: ["Live Q&A Sessions", "Expert Speakers", "Certificate of Attendance"],
    },
    {
      title: "Interactive Workshops",
      description: "Hands-on workshops where you can practice skills, collaborate with peers, and learn practical legal techniques.",
      icon: "🎯",
      href: "/education/workshops",
      color: "from-purple-500 to-purple-600",
      count: "280+ Workshops",
      highlights: ["Practical Exercises", "Small Groups", "Skill Certifications"],
    },
    {
      title: "Lawyer Community",
      description: "Connect with fellow legal professionals, share insights, discuss cases, and build your professional network.",
      icon: "👥",
      href: "/education/community",
      color: "from-green-500 to-green-600",
      count: "8,900+ Members",
      highlights: ["Case Discussions", "Networking Events", "Expert Forums"],
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Recent Amendments in Family Law",
      type: "Seminar",
      date: "2024-03-15",
      time: "2:00 PM IST",
      duration: "2 hours",
      speaker: "Senior Advocate Ananya Rao",
      attendees: 245,
      category: "Family Law",
      featured: true,
    },
    {
      id: 2,
      title: "Contract Drafting Workshop",
      type: "Workshop",
      date: "2024-03-20",
      time: "10:00 AM IST",
      duration: "4 hours",
      speaker: "Corporate Lawyer Vikram Singh",
      attendees: 180,
      category: "Corporate Law",
      featured: true,
    },
    {
      id: 3,
      title: "Digital Evidence in Court",
      type: "Seminar",
      date: "2024-03-25",
      time: "3:00 PM IST",
      duration: "1.5 hours",
      speaker: "Cyber Law Expert Priya Sharma",
      attendees: 312,
      category: "Technology Law",
      featured: false,
    },
    {
      id: 4,
      title: "Employment Law Updates 2024",
      type: "Seminar",
      date: "2024-04-05",
      time: "11:00 AM IST",
      duration: "2 hours",
      speaker: "Labour Law Specialist Neha Kulkarni",
      attendees: 198,
      category: "Employment Law",
      featured: false,
    },
  ];

  const popularCategories = [
    { name: "Corporate Law", count: 45, icon: "🏢" },
    { name: "Family Law", count: 38, icon: "👨‍👩‍👧‍👦" },
    { name: "Criminal Law", count: 32, icon: "⚖️" },
    { name: "Property Law", count: 28, icon: "🏠" },
    { name: "Employment Law", count: 25, icon: "💼" },
    { name: "Consumer Law", count: 22, icon: "🛒" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-r from-legalNavy via-primary to-legalCharcoal text-white relative overflow-hidden">
        {/* Legal library background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(0.5)"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Education Hub
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto mb-8">
              Empower your legal practice with expert-led seminars, interactive workshops, and a vibrant community of legal professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 px-6 bg-white border-b border-borderSubtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-textPrimary mb-6 text-center">
            Popular Learning Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary/5 cursor-pointer transition-colors"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-textPrimary text-sm mb-1">{category.name}</div>
                <div className="text-xs text-textSecondary">{category.count} events</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-textPrimary mb-4">
              Explore Our Learning Platforms
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Choose your preferred learning method and start advancing your legal career
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl border-2 border-borderSubtle p-8 hover:border-primary hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                onClick={() => router.push(feature.href)}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                <div className="relative z-10">
                  <div className={`text-6xl mb-4`}>
                    {feature.icon}
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">{feature.count}</div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-textSecondary mb-6">{feature.description}</p>
                  <div className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-textSecondary">
                        <span className="text-primary">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={feature.href}
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-2 group"
                  >
                    Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold text-textPrimary mb-2">
                  Upcoming Events
                </h2>
                <p className="text-textSecondary">Don't miss these exclusive learning opportunities</p>
              </div>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition">
                View All Events
              </button>
            </div>
            
            {/* Featured Event */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {upcomingEvents.filter(e => e.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary to-primaryHover rounded-xl p-6 text-white hover:shadow-2xl transition-all col-span-2"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      FEATURED {event.type.toUpperCase()}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm mb-6 opacity-90">
                    <p>📅 {new Date(event.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}</p>
                    <p>🕐 {event.time} • {event.duration}</p>
                    <p>👤 {event.speaker}</p>
                    <p>👥 {event.attendees} lawyers registered</p>
                  </div>
                  <button className="w-full px-4 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition">
                    Register Now - Limited Seats!
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Regular Events */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.filter(e => !e.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border-2 border-borderSubtle p-6 hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === "Seminar"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}>
                      {event.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-textSecondary mb-4">
                    <p>📅 {new Date(event.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}</p>
                    <p>🕐 {event.time} • {event.duration}</p>
                    <p>👤 {event.speaker}</p>
                    <p>👥 {event.attendees} registered</p>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primaryHover transition">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials / Why Join Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20"
          >
            <h2 className="text-3xl font-bold text-textPrimary mb-8 text-center">
              Why Join Our Education Hub?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2">Expert Instructors</h3>
                <p className="text-textSecondary">Learn from senior advocates and legal experts with decades of experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📜</div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2">Certifications</h3>
                <p className="text-textSecondary">Earn certificates of completion to showcase your professional development</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2">Flexible Learning</h3>
                <p className="text-textSecondary">Attend live sessions or access recorded content at your convenience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

