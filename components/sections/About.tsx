"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative bg-darker">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Two-column text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-12 lg:flex-row lg:gap-20"
        >
          {/* Left: eyebrow + headline */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:w-1/2">
            <span className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase">
              About Us
            </span>
            <h2 className="font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
              Creating a Safe Space for Every Mental Wellness Journey
            </h2>
          </motion.div>

          {/* Right: body with left hairline border */}
          <motion.div
            variants={fadeUp}
            className="border-l border-white/15 pl-3 lg:w-1/2 lg:pl-6"
          >
            <p className="font-sans text-lg font-normal leading-[1.6] text-white/85">
              Mental well-being is an essential part of living a healthy and
              fulfilling life. Our mission is to make mental health support more
              accessible through personalized tools, mindfulness practices, and
              trusted professional guidance. Whether you&apos;re taking your
              first step or continuing your wellness journey, we&apos;re here to
              help you build healthier habits, gain emotional clarity, and grow
              with confidence.
            </p>
          </motion.div>
        </motion.div>

        {/* Full-width image with parallax reveal */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[420px] overflow-hidden sm:h-[520px] md:h-[640px] lg:h-[738px]"
        >
          <motion.img
            src="/images/about-image.webp"
            alt="A calm, welcoming space for mental wellness"
            className="h-full w-full object-cover"
            initial={reduce ? { y: 0 } : { y: "-6%" }}
            whileInView={reduce ? { y: 0 } : { y: "6%" }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
