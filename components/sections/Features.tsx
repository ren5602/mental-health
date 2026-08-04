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
    title: "Mental Clarity Assistant",
    description:
      "Chat with an AI companion anytime for emotional support, thoughtful guidance, and practical wellness suggestions whenever you need them.",
    image: "/images/feature-1.webp",
  },
  {
    icon: Sprout,
    title: "Guided Meditation",
    description:
      "Reduce stress and improve focus through guided meditation sessions designed to help you relax, breathe, and reconnect with yourself.",
    image: "/images/feature-2.webp",
  },
  {
    icon: SmilePlus,
    title: "Mood Tracking",
    description: "Record your daily mood, identify emotional patterns, and gain meaningful insights that help you better understand yourself over time.",
    image: "/images/feature-3.webp",
  },
  {
    icon: UserStar,
    title: "Online Counseling",
    description:
      "Connect with licensed mental health professionals through secure online sessions, making quality care more accessible whenever you need it.",
    image: "/images/feature-4.webp",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-darker">
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
            className="max-w-3xl font-display text-[1.625rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-[2rem] md:text-[2.5rem] lg:text-[2.75rem]"
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
        <div className="flex w-full flex-col gap-3">
          {/* Row 1: Card 1 (fill) + Card 2 (410px) — desktop asymmetric */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex h-[340px] flex-col gap-3 sm:h-[400px] lg:h-[500px] lg:flex-row"
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
            className="flex h-[340px] flex-col gap-3 sm:h-[400px] lg:h-[500px] lg:flex-row"
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
      className={`group relative h-full overflow-hidden ${className ?? ""}`}
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

      {/* Full-card overlay with bottom-aligned content */}
      <div className="absolute inset-0 flex flex-col justify-end gap-5 bg-overlay-50 p-6 sm:p-8 lg:p-12">
        {/* Icon */}
        <motion.span
          whileHover={{ scale: 1.1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-sm"
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
