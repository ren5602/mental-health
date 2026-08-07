"use client";

import { motion } from "framer-motion";
import { StickyCard002 } from "@/components/v1/skiper17";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const cards = [
  { id: 1, image: "/images/gallery-1.webp", alt: "Gallery image 1" },
  { id: 2, image: "/images/gallery-2.webp", alt: "Gallery image 2" },
  { id: 3, image: "/images/gallery-3.webp", alt: "Gallery image 3" },
  { id: 4, image: "/images/gallery-4.webp", alt: "Gallery image 4" },
  { id: 5, image: "/images/gallery-5.webp", alt: "Gallery image 5" },
  { id: 6, image: "/images/gallery-6.webp", alt: "Gallery image 6" },
  { id: 7, image: "/images/gallery-7.webp", alt: "Gallery image 7" },
];

export function Gallery() {
  return (
    <section className="relative bg-[#363331]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-6 pb-10 pt-20 text-center sm:px-10 md:px-12 md:pb-12 md:pt-24 lg:pb-14 lg:pt-28">
        {/* Title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
          >
            Image Gallery
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            A glimpse into the warm moments and connections built within our
            supportive community
          </motion.p>
        </motion.div>
      </div>

      {/* Sticky card carousel full-screen */}
      <div className="w-full">
        <StickyCard002
          cards={cards}
          containerClassName="rounded-[16px]"
          imageClassName="object-cover"
        />
      </div>
    </section>
  );
}
