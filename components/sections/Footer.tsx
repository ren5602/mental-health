"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/primitives/BrandIcons";
import {
  fadeUp,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/motion";

const linkGroups: { title: string; links: string[] }[] = [
  {
    title: "Navigate",
    links: ["Home", "Features", "Pricing", "About Us", "FAQ"],
  },
  {
    title: "Resources",
    links: ["Articles", "Assessment", "Meditation", "Community", "Privacy & Policy"],
  },
];

const avatars = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];

const socials: { icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string; href: string }[] = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: YoutubeIcon, label: "Youtube", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-darker">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-20 sm:px-10 md:px-12 md:py-24">
        {/* Top: headline + link lists */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-between gap-12 lg:flex-row"
        >
          {/* Left headline */}
          <motion.h2
            variants={fadeUp}
            className="max-w-md font-display text-[2rem] leading-[1.25] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem]"
          >
            Helping people build healthier minds,
            <br className="hidden sm:block" /> one day at a time.
          </motion.h2>

          {/* Right: link lists */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            {linkGroups.map((g) => (
              <div key={g.title} className="flex flex-col gap-3">
                {g.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="font-sans text-sm font-semibold text-white/80 transition-colors hover:text-teal"
                  >
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Credits row: logo + avatars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Logo mark */}
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-teal">
              <Image
                src="/images/logo-icon.png"
                alt="MentalZee logo"
                width={24}
                height={24}
                className="object-contain object-center"
              />
            </span>

            {/* Avatar stack */}
            <motion.div
              variants={staggerFast}
              className="flex items-center"
            >
              {avatars.map((src, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className="-ml-3 h-12 w-12 overflow-hidden rounded-full border-2 border-darker first:ml-0"
                  style={{ zIndex: avatars.length - i }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px w-full bg-white/15" />

          {/* Bottom row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <span className="font-sans text-sm font-normal text-white/70">
              © 2026 MentalZee. All rights reserved.
            </span>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-teal hover:bg-teal hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
