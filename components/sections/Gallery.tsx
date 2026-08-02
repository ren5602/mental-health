"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/motion";

type Tile = { src: string; tall: boolean };

// Layout matches Figma node #12:928 exactly:
// Outer "Content" #12:934 = row (2 columns), gap 32px
// Left column #12:935  = [img1 640, img4 640, img2 415, img3 415]
// Right column #12:940 = [img6 415, img4 640, img7 640, img3 415]
const columns: Tile[][] = [
  [
    { src: "/images/gallery-1.png", tall: true },
    { src: "/images/gallery-2.png", tall: true },
    { src: "/images/about-image.png", tall: false },
    { src: "/images/gallery-3.png", tall: false },
  ],
  [
    { src: "/images/gallery-4.png", tall: false },
    { src: "/images/gallery-5.png", tall: true },
    { src: "/images/gallery-6.png", tall: true },
    { src: "/images/gallery-7.png", tall: false },
  ],
];

export function Gallery() {
  return (
    <section className="relative bg-darker">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
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

        {/* Two-column masonry (Figma: row → 2 columns, each stacked) */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
          {columns.map((col, ci) => (
            <motion.div
              key={ci}
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex w-full flex-col gap-8 lg:w-1/2"
            >
              {col.map((tile, ti) => (
                <Tile key={`${ci}-${ti}`} tile={tile} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ tile }: { tile: Tile }) {
  return (
    <motion.figure
      variants={scaleIn}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-[16px]"
    >
      <div
        className={[
          "relative w-full overflow-hidden",
          tile.tall ? "h-[400px] md:h-[640px]" : "h-[280px] md:h-[415px]",
        ].join(" ")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tile.src}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-overlay-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.figure>
  );
}
