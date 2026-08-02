"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { easeOutExpo, fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[824px] flex-col justify-center overflow-hidden"
    >
      {/* Background video with breathing zoom (signature element) */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={reduce ? { opacity: 0 } : { scale: 1.12, opacity: 0 }}
        animate={{ scale: reduce ? 1 : 1, opacity: 1 }}
        transition={
          reduce
            ? { duration: 1 }
            : { scale: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }, opacity: { duration: 1.2, ease: easeOutExpo } }
        }
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-bg.webp"
        >
          <source src="/images/hero-video-bg.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-overlay-50" />
      </motion.div>

      {/* Right-edge hairline rule like the Figma column */}
      <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-32 sm:px-10 md:px-12 lg:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex max-w-[560px] flex-col gap-8"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase"
          >
            Personalized Mental Healthcare
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.75rem] leading-[1.15] font-semibold tracking-[-0.01em] text-white sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]"
          >
            Find Calm, Build Balance, <span className="text-teal">Live Better</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="max-w-[540px] font-sans text-lg font-medium leading-[1.5] text-white/85"
          >
            A peaceful space to care for your mind through personalized
            guidance, mindfulness, and professional support.
          </motion.p>

          {/* CTA pill */}
          <motion.div variants={fadeUp}>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-teal bg-teal pl-4 pr-1.5 font-sans text-base font-semibold text-white shadow-xs transition-colors hover:bg-teal/90"
            >
              <span>Start Your Journey</span>
              <span className="flex h-9 w-10 items-center justify-center rounded-full bg-darker transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom "Calm & Peaceful" divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-3 px-10"
      >
        <span className="h-px flex-1 bg-white/20" />
        <span className="font-sans text-sm font-light tracking-[0.3em] text-white/75 uppercase">
          Calm &amp; Peaceful
        </span>
        <span className="h-px flex-1 bg-white/20" />
      </motion.div>
    </section>
  );
}
