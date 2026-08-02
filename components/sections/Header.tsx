"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Header() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/header-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-50" />
      </div>

      {/* Right-edge hairline rule (Figma column border) */}
      <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex max-w-3xl flex-col gap-8"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase"
          >
            A Safe Space
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
          >
            Everyone Deserves a Place to Feel Heard and Supported.
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-medium leading-[1.5] text-white/85"
          >
            Whether you&apos;re managing daily stress or seeking professional
            guidance, we&apos;re here to help you navigate your mental wellness
            journey with confidence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
