"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative bg-darker">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Full-width image with parallax reveal (top) */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[45svh] min-h-[40svh] overflow-hidden rounded-[24px] md:h-[55svh] lg:h-[62svh]"
        >
          <motion.img
            src="/images/about-image.webp"
            alt="A calm, welcoming space for mental wellness"
            className="h-full w-full rounded-[24px] object-cover"
            initial={reduce ? { y: 0 } : { y: "-6%" }}
            whileInView={reduce ? { y: 0 } : { y: "6%" }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Two-column text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-12 lg:flex-row lg:gap-20"
        >
          {/* Left: eyebrow + headline */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-4 lg:w-1/2"
          >
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
              MindSpace was born from the recognition that many young
              Indonesians carry real mental pressure from college, work, to
              social media yet struggle to find help that is affordable and
              non-judgmental. That&apos;s why we built a platform designed together
              with licensed psychologists using an evidence-based approach,
              while safeguarding every user&apos;s privacy through encrypted data and
              conversations that are never shared without permission
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
