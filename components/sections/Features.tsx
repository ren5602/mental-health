"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import AccordionGallery from "@/components/primitives/AccordionGallery";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Mental Clarity Assistant",
    description:
      "Chat with an AI companion anytime for emotional support, thoughtful guidance, and practical wellness suggestions whenever you need them.",
    image: "/images/feature-1.webp",
  },
  {
    title: "Guided Meditation",
    description:
      "Reduce stress and improve focus through guided meditation sessions designed to help you relax, breathe, and reconnect with yourself.",
    image: "/images/feature-2.1.webp",
  },
  {
    title: "Self Assessment",
    description: "Take a short self-assessment to measure your stress level, anxiety level, and other emotional indicators, then get clear, easy-to-read results that help youunderstand what you're really going through",
    image: "/images/feature-3.1.webp",
  },
  {
    title: "Online Counseling",
    description:
      "Connect with licensed mental health professionals through secure online sessions, making quality care more accessible whenever you need it.",
    image: "/images/feature-4.webp",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-[#363331]">
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
            Everything You Need to Support Your Mentality
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            From self-reflection to professional guidance, discover tools that help you navigate life&apos;s challenges with greater confidence and clarity
          </motion.p>
        </motion.div>

        {/* Single-row accordion gallery */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full"
        >
          <AccordionGallery
            items={[
              features[2],
              features[0],
              features[1],
              features[3],
            ].map((f) => ({
              image: f.image,
              label: f.title,
              description: f.description,
              alt: f.title,
            }))}
            defaultIndex={0}
            trigger="hover"
            height={480}
            expandRatio={0.55}
            overlayColor="#2A2826"
            accentColor="#5cb8a8"
            radius={16}
            gap={10}
          />
        </motion.div>
      </div>
    </section>
  );
}
