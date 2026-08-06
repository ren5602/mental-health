"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo, viewportOnce } from "@/lib/motion";

type Tile = {
  title: string;
  description?: string;
  large?: boolean;
  className?: string;
};

const tiles: Tile[] = [
  {
    title: "All-in-One Wellness Ecosystem",
    description:
      "Self-assessment, meditation, AI companion, and professional consultation—all in one app.",
    large: true,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Backed by Licensed Professionals",
    className: "lg:col-span-1",
  },
  {
    title: "Personalized to You",
    className: "lg:col-span-1",
  },
  {
    title: "Private & Secure by Design",
    className: "lg:col-span-3",
  },
];

export function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section id="why-choose-us" className="relative bg-darker">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-16 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Section header */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase">
            Why Choose Us
          </span>
          <h2 className="max-w-3xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
            Built Around You, Not a One-Size-Fits-All App
          </h2>
          <p className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85">
            Four reasons people trust MentalZee to support their mental well-being every step of the way.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {tiles.map((tile, index) => (
            <motion.article
              key={tile.title}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: easeOutExpo, delay: index * 0.1 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className={cn(
                "group relative flex flex-col justify-end overflow-hidden rounded-[16px] border border-white/10 p-6 sm:p-8",
                tile.large
                  ? "min-h-[320px] bg-teal/10 border-teal/30 sm:min-h-[380px]"
                  : "min-h-[180px] bg-white/5",
                tile.className
              )}
            >
              <div className="relative z-10 flex flex-col gap-3">
                <h3
                  className={cn(
                    "font-display leading-[1.25] text-white",
                    tile.large
                      ? "text-[1.5rem] font-semibold sm:text-3xl"
                      : "text-xl font-medium"
                  )}
                >
                  {tile.title}
                </h3>
                {tile.description ? (
                  <p className="max-w-md font-sans text-base font-normal leading-[1.6] text-white/85">
                    {tile.description}
                  </p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
