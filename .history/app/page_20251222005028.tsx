"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Subtle scale only (safe across Safari / Chrome)
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.94]);

  // Text always visible (no fade bugs)
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 1]);

  return (
    <main className="min-h-[200vh] bg-white">
      {/* HERO SECTION */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="text-center px-6 max-w-3xl"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-textPrimary">
            Explain your legal issue.
            <br />
            Get matched with a relevant lawyer.
          </h1>

          <motion.p
            style={{ opacity: textOpacity }}
            className="mt-6 text-lg text-textSecondary"
          >
            No rankings. No guarantees. Verified professionals only.
          </motion.p>

          <button
            className="mt-10 px-6 py-3 bg-primary text-white rounded-md
                       hover:bg-primaryHover transition"
          >
            Get Started
          </button>
        </motion.div>
      </section>

      {/* BELOW HERO CONTENT */}
      <section className="h-screen flex items-center justify-center border-t border-borderSubtle">
        <p className="text-xl text-textSecondary max-w-xl text-center px-6">
          Structured intake. Clear understanding.
          <br />
          The right lawyer for your situation.
        </p>
      </section>
    </main>
  );
}
