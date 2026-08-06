"use client";

import { motion } from "framer-motion";
import { slideRight, staggerContainer, viewportOnce } from "@/lib/motion";
import { Container } from "@/components/primitives/Container";

export function Header() {
  return (
    <section
      id="header"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-darker"
    >
      {/* Right-edge hairline rule (Figma column border) */}
      <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

      <Container className="relative py-10 sm:py-14">
        <div className="relative min-h-[60dvh] overflow-hidden rounded-[24px] border border-white/10 sm:min-h-[65dvh]">
          {/* Background image + overlay inside the card */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/header-bg.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-overlay-50" />
          </div>

          <div className="relative flex min-h-[60dvh] flex-col justify-center gap-8 px-6 py-24 sm:min-h-[65dvh] sm:px-12 sm:py-28">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex max-w-3xl flex-col gap-8 border-l border-white/15 pl-8"
            >
              {/* Headline */}
              <motion.h2
                variants={slideRight}
                className="font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.2] font-semibold tracking-[-0.01em] text-white"
              >
                We&apos;re Building Healthy Minds &amp; Habits Together
              </motion.h2>

              {/* Body */}
              <motion.p
                variants={slideRight}
                className="max-w-2xl font-sans text-[clamp(1rem,1.4vw,1.125rem)] font-medium leading-[1.5] text-white/85"
              >
                Here to help you care for your mind, build healthy habits, and find peace again
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
