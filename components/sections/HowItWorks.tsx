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
    title: "Create Your Account",
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
    title: "Track Your Progress",
    description:
      "Monitor your mood, celebrate your growth, and build healthy habits with insights that evolve over time.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/howitworks-bg.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-50" />
      </div>

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
            Getting started is simple. Follow these four steps to discover
            personalized support, build healthier habits, and improve your
            mental well-being at your own pace.
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
            className="absolute left-0 right-0 top-12 hidden h-px bg-teal/30 lg:block"
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
          className="flex flex-wrap items-center justify-center gap-4"
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
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-teal/15 text-teal ring-1 ring-teal/30 backdrop-blur-sm"
      >
        <Icon className="h-10 w-10" strokeWidth={1.8} />
        <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-teal font-sans text-sm font-bold text-white">
          {index + 1}
        </span>
      </motion.span>
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-2xl font-medium leading-[1.3] text-white">
          {step.title}
        </h3>
        <p className="max-w-xs font-sans text-base font-normal leading-[1.5] text-white/80">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
