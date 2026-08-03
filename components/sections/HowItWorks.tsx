"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  ListChecks,
  Sparkles,
  SmilePlus,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/primitives/Button";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: UserCheck,
    title: "Create Your\nAccount",
    description:
      "Sign up in just a few minutes to access personalized mental wellness tools and resources.",
  },
  {
    icon: ListChecks,
    title: "Complete Your Assessment",
    description:
      "Answer a few simple questions so we can better understand your emotional well-being and personalize your experience.",
  },
  {
    icon: Sparkles,
    title: "Get Personalized Guidance",
    description:
      "Receive tailored recommendations, mindfulness exercises, and professional support based on your assessment.",
  },
  {
    icon: SmilePlus,
    title: "Track Your\nProgress",
    description:
      "Monitor your mood, celebrate your growth, and build healthy habits with insights that evolve over time.",
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
            Start Your Mental Wellness Journey in Four Simple Steps
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            Four simple steps to personalized support, healthier habits, and better mental well-being.
          </motion.p>
        </motion.div>

        {/* Steps with connecting line */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          {/* Draw-on-scroll connecting line (desktop) */}
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-white/30 lg:block"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          />

          {steps.map((s, i) => (
            <StepItem key={s.title} step={s} index={i} />
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary">Begin Assessment</Button>
          <Button variant="outline">Discover More</Button>
        </motion.div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;
  return (
    <motion.div
      variants={scaleIn}
      className="relative flex flex-col items-center gap-6 text-center"
    >
      {/* Number badge sits on the connecting line */}
      <motion.span
        whileHover={{ scale: 1.08, rotate: -4 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm"
      >
        <Icon className="h-10 w-10" strokeWidth={1.8} />
        <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white font-sans text-sm font-bold text-teal">
          {index + 1}
        </span>
      </motion.span>
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-2xl font-medium leading-[1.3] text-white whitespace-pre-line">
          {step.title}
        </h3>
      </div>
    </motion.div>
  );
}
