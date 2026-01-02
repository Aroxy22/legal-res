"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <main className="min-h-[200vh] bg-white">
      {/* HERO */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div style={{ scale }} className="text-center px-6 max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-textPrimary">
            Explain your legal issue.
            <br />
            Get matched with a relevant lawyer.
          </h1>

          <motion.p
            style={{ opacity }}
            className="mt-6 text-lg text-textSecondary"
          >
            No rankings. No guarantees. Verified professionals only.
          </motion.p>

          <motion.button
            style={{ opacity }}
            className="mt-10 px-6 py-3 bg-primary text-white rounded-md hover:bg-primaryHover transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* BELOW HERO */}
      <section className="h-screen flex items-center justify-center border-t border-borderSubtle">
        <p className="text-xl text-textSecondary">
          Structured intake. Clear understanding. The right lawyer.
        </p>
      </section>
    </main>
  );
}
