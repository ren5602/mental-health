"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { easeOutExpo, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CtaFooter() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-darker">
      {/* Full-bleed background image */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, ease: easeOutExpo }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cta-footer.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darker/95 via-darker/75 to-darker/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-center gap-7 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:min-h-[400px] lg:py-32"
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.25rem] leading-[1.15] font-semibold tracking-[-0.01em] text-white sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem]"
          >
            Start Your Journey to Mental Wellness
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-xl font-sans text-base font-normal leading-[1.6] text-white/85 sm:text-lg"
          >
            Take the first step toward a calmer, more balanced life today. Access
            personalized self-assessments, guided mindfulness, and expert support
            tailored to your unique mental wellness goals.
          </motion.p>
        </div>

        {/* Pill CTA button (matches hero) */}
        <motion.div variants={fadeUp}>
          <motion.a
            href="#userneeds"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-teal bg-teal pl-5 pr-1.5 font-sans text-base font-semibold text-white shadow-xs transition-colors hover:bg-teal/90"
          >
            <span>Start Now</span>
            <span className="flex h-9 w-10 items-center justify-center rounded-full bg-darker transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
