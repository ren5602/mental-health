"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { useCountUp } from "@/lib/useCountUp";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 10, suffix: "K+", label: "Community Members" },
  { value: 500, suffix: "+", label: "Licensed Therapists" },
  { value: 95, suffix: "%", label: "Positive Feedback" },
];

export function Statistic() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/statistic-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-50" />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Title block (left aligned) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <motion.span
            variants={fadeUp}
            className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase"
          >
            Trusted by Thousands
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="max-w-xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
          >
            Supporting Mental Wellness Around the World
          </motion.h2>
        </motion.div>

        {/* Stats row with vertical dividers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-0"
        >
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const { ref, value } = useCountUp({ end: stat.value });

  return (
    <motion.div
      variants={fadeUp}
      className={[
        "flex flex-col gap-2",
        index === 0 ? "sm:pl-0" : "sm:pl-12",
        index > 0 ? "sm:border-l sm:border-white/15" : "",
      ].join(" ")}
    >
      <span
        ref={ref}
        className="font-display text-5xl font-bold leading-[1.3] text-teal sm:text-6xl md:text-7xl lg:text-[5rem]"
      >
        {value}
        {stat.suffix}
      </span>
      <span className="font-sans text-lg font-normal leading-[1.5] text-white/85">
        {stat.label}
      </span>
    </motion.div>
  );
}
