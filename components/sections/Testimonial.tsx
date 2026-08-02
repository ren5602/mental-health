"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "This platform has become part of my daily routine. The mood tracker and mindfulness exercises help me pause, reflect, and manage stress more effectively.",
    name: "Emily Carter",
    role: "Marketing Specialist",
    image: "/images/testimonial-1.webp",
  },
  {
    quote:
      "The self-assessment gave me a better understanding of how I was feeling, and the personalized recommendations made it easier to build healthier habits.",
    name: "Michael Thompson",
    role: "Software Engineer",
    image: "/images/testimonial-2.webp",
  },
  {
    quote:
      "I appreciate how simple and welcoming everything feels. From guided breathing sessions to progress tracking, the platform has helped me stay more mindful every day.",
    name: "Sophia Williams",
    role: "University Student",
    image: "/images/testimonial-3.webp",
  },
  {
    quote:
      "The guided meditation sessions have become my favorite way to unwind after work. Even a few minutes each day make a noticeable difference.",
    name: "Daniel Lee",
    role: "Project Manager",
    image: "/images/testimonial-4.webp",
  },
  {
    quote:
      "I was looking for a simple way to take better care of my mental well-being, and this platform gave me the structure and encouragement I needed to stay consistent.",
    name: "Emma Johnson",
    role: "Freelance Writer",
    image: "/images/testimonial-5.webp",
  },
  {
    quote:
      "This platform helped me manage my daily anxiety so much better. The personalized guidance and mood tracker made a huge difference in my routine.",
    name: "Sarah Jenkins",
    role: "UX Designer",
    image: "/images/testimonial-6.webp",
  },
  {
    quote:
      "Building a daily gratitude habit used to feel challenging, but the intuitive assessment and prompts here made it effortless and deeply rewarding.",
    name: "Michael Chen",
    role: "Product Designer",
    image: "/images/testimonial-7.webp",
  },
];

const PER_VIEW_DESKTOP = 3;
const PER_VIEW_TABLET = 2;
const PER_VIEW_MOBILE = 1;
const AUTOPLAY_MS = 5000;

function getPerView() {
  if (typeof window === "undefined") return PER_VIEW_DESKTOP;
  const w = window.innerWidth;
  if (w < 640) return PER_VIEW_MOBILE;
  if (w < 1024) return PER_VIEW_TABLET;
  return PER_VIEW_DESKTOP;
}

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(PER_VIEW_DESKTOP);
  const reduce = useReducedMotion();

  const maxIndex = Math.max(0, testimonials.length - perView);

  // Responsive perView + clamp index together (avoids setState-in-effect)
  useEffect(() => {
    const onResize = () => {
      const next = getPerView();
      setPerView(next);
      setIndex((i) => Math.min(i, Math.max(0, testimonials.length - next)));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, reduce]);

  const dotCount = maxIndex + 1;

  return (
    <section className="relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/testimonial-bg.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-50" />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
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
            className="max-w-3xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
          >
            What Our Community Says
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            Hear from people who have found greater clarity, healthier habits,
            and ongoing support through our mental wellness platform.
          </motion.p>
        </motion.div>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(${-index * (100 / perView)}% - ${index * 24}px)` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {testimonials.map((t, i) => (
              <Card
                key={t.name}
                t={t}
                perView={perView}
                active={i >= index && i < index + perView}
              />
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <NavButton dir="prev" onClick={prev} />
          <div className="flex items-center gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-2 w-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === index ? "#5cb8a8" : "rgba(92,184,168,0.2)",
                  transform: i === index ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <NavButton dir="next" onClick={next} />
        </div>
      </div>
    </section>
  );
}

function Card({
  t,
  perView,
}: {
  t: Testimonial;
  perView: number;
  active: boolean;
}) {
  // width = (100% / perView) minus gap share
  const widthPct = 100 / perView;
  return (
    <article
      className="relative flex shrink-0 flex-col justify-end overflow-hidden rounded-[16px]"
      style={{ width: `calc(${widthPct}% - ${(24 * (perView - 1)) / perView}px)` }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-75" />
      </div>

      <div className="flex min-h-[420px] flex-col justify-end gap-6 p-6 md:min-h-[480px] md:p-8">
        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-star text-star" strokeWidth={0} />
          ))}
        </div>
        {/* Quote */}
        <p className="font-sans text-base font-normal leading-[1.5] text-white/95">
          &ldquo;{t.quote}&rdquo;
        </p>
        {/* Avatar block */}
        <div className="flex flex-col">
          <span className="font-sans text-base font-semibold text-white">
            {t.name}
          </span>
          <span className="font-sans text-base font-normal text-white/70">
            {t.role}
          </span>
        </div>
      </div>
    </article>
  );
}

function NavButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = dir === "prev" ? ArrowLeft : ArrowRight;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      aria-label={dir === "prev" ? "Previous testimonials" : "Next testimonials"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-teal bg-teal text-white shadow-xs hover:bg-teal/90"
    >
      <Icon className="h-5 w-5" strokeWidth={2} />
    </motion.button>
  );
}
