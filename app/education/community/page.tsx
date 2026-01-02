"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Discussion = {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  isPinned?: boolean;
};

const DISCUSSIONS: Discussion[] = [
  {
    id: 1,
    title: "Recent Supreme Court Ruling on Property Rights",
    author: "Adv. Vikram Singh",
    category: "Property Law",
    replies: 42,
    views: 523,
    lastActivity: "2 hours ago",
    isPinned: true,
  },
  {
    id: 2,
    title: "Best Practices for Remote Court Hearings",
    author: "Adv. Priya Sharma",
    category: "Practice Management",
    replies: 38,
    views: 456,
    lastActivity: "5 hours ago",
  },
  {
    id: 3,
    title: "Case Study: Successful Consumer Complaint Resolution",
    author: "Adv. Rohit Mehta",
    category: "Consumer Law",
    replies: 29,
    views: 387,
    lastActivity: "1 day ago",
  },
  {
    id: 4,
    title: "New Employment Law Regulations - Discussion",
    author: "Adv. Neha Kulkarni",
    category: "Employment Law",
    replies: 56,
    views: 612,
    lastActivity: "1 day ago",
    isPinned: true,
  },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(DISCUSSIONS.map((d) => d.category)))];

  const filteredDiscussions = DISCUSSIONS.filter((discussion) => {
    return selectedCategory === "All" || discussion.category === selectedCategory;
  });

  const pinned = filteredDiscussions.filter((d) => d.isPinned);
  const regular = filteredDiscussions.filter((d) => !d.isPinned);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-textPrimary mb-4">
            Lawyer Community
          </h1>
          <p className="text-lg text-textSecondary mb-6">
            Connect with fellow legal professionals, share insights, and discuss cases
          </p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primaryHover transition">
            Start New Discussion
          </button>
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

        {/* Discussions List */}
        <div className="space-y-4">
          {/* Pinned Discussions */}
          {pinned.length > 0 && (
            <>
              <h2 className="text-xl font-semibold text-textPrimary mb-4">Pinned</h2>
              {pinned.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl border-2 border-primary/30 p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          PINNED
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {discussion.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-textPrimary mb-2">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-textSecondary">
                        <span>By {discussion.author}</span>
                        <span>💬 {discussion.replies} replies</span>
                        <span>👁️ {discussion.views} views</span>
                        <span>🕐 {discussion.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <h2 className="text-xl font-semibold text-textPrimary mb-4 mt-8">All Discussions</h2>
            </>
          )}

          {/* Regular Discussions */}
          {regular.map((discussion, index) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-borderSubtle p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {discussion.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary mb-2">
                    {discussion.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-textSecondary">
                    <span>By {discussion.author}</span>
                    <span>💬 {discussion.replies} replies</span>
                    <span>👁️ {discussion.views} views</span>
                    <span>🕐 {discussion.lastActivity}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

