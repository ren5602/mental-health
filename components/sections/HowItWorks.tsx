"use client";

import { motion } from "framer-motion";
import HowItWorksCards from "@/components/ui/how-it-works";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps: {
  title: string;
  description: string;
  colorTheme: "orange" | "blue" | "purple" | "teal";
}[] = [
  {
    title: "Create Your Account",
    description:
      "Join in just a few moments and personalize your wellness experience to match your goals and daily routine",
    colorTheme: "teal",
  },
  {
    title: "Explore Daily Wellness Tools",
    description:
      "Complete a quick self-assessment, chat with the Mental Clarity Assistant, and enjoy guided meditation sessions tailored to your needs",
    colorTheme: "blue",
  },
  {
    title: "Get Support When You Need It",
    description:
      "When you need deeper guidance, easily connect with licensed professionals through secure online counseling",
    colorTheme: "orange",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-darker">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Section title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
          >
            Start Your Wellness Journey in Three Simple Steps
          </motion.h2>
          {/* <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            Getting started is simple. Follow these easy steps to understand your emotions, build healthier habits, and access support whenever you need it.
          </motion.p> */}
        </motion.div>

        {/* Steps with connecting line */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full"
        >
          <HowItWorksCards features={steps} />
        </motion.div>
      </div>
    </section>
  );
}
