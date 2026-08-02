"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fadeDown } from "@/lib/motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex h-12 items-center gap-1 rounded-full border border-white/10 bg-overlay-75/80 px-1.5 backdrop-blur-xl transition-all duration-500 sm:gap-2",
          scrolled ? "shadow-lg shadow-black/30" : "shadow-xs"
        )}
      >
        {/* Logo mark */}
        <a
          href="#home"
          className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-teal"
          aria-label="MentalZee home"
        >
          <Image
            src="/images/logo-icon.png"
            alt="MentalZee logo"
            width={30}
            height={30}
            className="object-contain object-center translate-x-[2px]"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 font-sans text-xs font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-teal px-3 py-2 font-sans text-xs font-semibold text-white shadow-xs transition-transform hover:scale-105 md:inline-block"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-16 rounded-3xl border border-white/10 bg-overlay-75/95 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-sans text-sm font-semibold text-white/90 hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-2xl bg-teal px-4 py-3 text-center font-sans text-sm font-semibold text-white"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
