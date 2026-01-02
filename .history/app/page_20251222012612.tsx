"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const router = useRouter();

  // Apple-style motion: translate + fade, NO scale
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);

  return (
    <main className="min-h-[200vh] bg-white">
      {/* HERO */}
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="text-center px-6 max-w-3xl will-change-transform"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-textPrimary">
            Explain your legal issue.
            <br />
            Get matched with a relevant lawyer.
          </h1>

          <p className="mt-6 text-lg text-textSecondary">
            No rankings. No guarantees. Verified professionals only.
          </p>

          <button
            onClick={() => router.push("/intake")}
            className="mt-10 px-6 py-3 bg-primary text-white rounded-md
                       hover:bg-primaryHover transition-colors"
          >
            Get Started
          </button>
        </motion.div>
      </section>

     
    </main>
  );
}
