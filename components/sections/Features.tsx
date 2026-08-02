"use client";

import { motion } from "framer-motion";
import { ListPlus, Sprout, SmilePlus, UserStar } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/motion";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    icon: ListPlus,
    title: "Mental Health Assessment",
    description:
      "Identify your mental well-being through simple, evidence-based self-assessments.",
    image: "/images/feature-1.png",
  },
  {
    icon: Sprout,
    title: "Guided Mindfulness",
    description:
      "Practice breathing exercises and meditation to reduce stress.",
    image: "/images/feature-2.png",
  },
  {
    icon: SmilePlus,
    title: "Mood Tracker",
    description: "Record your daily emotions and discover patterns over time.",
    image: "/images/feature-3.png",
  },
  {
    icon: UserStar,
    title: "Professional Support",
    description:
      "Connect with licensed therapists whenever you need guidance.",
    image: "/images/feature-4.png",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/features-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-50" />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-16 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Section title (centered) */}
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
            Our Features
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
          >
            Everything You Need to Support Your Mental Well-being
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            Discover tools designed to help you understand your emotions,
            reduce stress, and build healthier habits every day.
          </motion.p>
        </motion.div>

        {/* Two-row layout: row 1 asymmetric (fill + 410px), row 2 symmetric */}
        <div className="flex w-full flex-col gap-6">
          {/* Row 1: Card 1 (fill) + Card 2 (410px) — desktop asymmetric */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex h-[420px] flex-col gap-6 lg:h-[500px] lg:flex-row"
          >
            <FeatureCard feature={features[0]} className="flex-1" />
            <FeatureCard
              feature={features[1]}
              className="lg:basis-[410px] lg:shrink-0"
            />
          </motion.div>

          {/* Row 2: Card 3 + Card 4 — symmetric */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex h-[420px] flex-col gap-6 lg:h-[500px] lg:flex-row"
          >
            <FeatureCard feature={features[2]} className="flex-1" />
            <FeatureCard feature={features[3]} className="flex-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  className,
}: {
  feature: Feature;
  className?: string;
}) {
  const Icon = feature.icon;
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative h-full overflow-hidden rounded-[16px] ${className ?? ""}`}
    >
      {/* Full-card background image (clean, no global overlay) */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={feature.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Bottom content panel (280px overlay, centered content — Figma EL-8e92daf4) */}
      <div className="absolute inset-x-0 bottom-0 flex h-[280px] flex-col justify-center gap-5 bg-overlay-50 p-8 lg:p-12">
        {/* Icon */}
        <motion.span
          whileHover={{ scale: 1.1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/20 text-teal ring-1 ring-teal/40 backdrop-blur-sm"
        >
          <Icon className="h-7 w-7" strokeWidth={2.2} />
        </motion.span>

        {/* Title + description */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-2xl font-medium leading-[1.3] text-white">
            {feature.title}
          </h3>
          <p className="max-w-md font-sans text-base font-normal leading-[1.5] text-white/85">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
