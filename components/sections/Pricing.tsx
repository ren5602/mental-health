"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Leaf, Sparkles, Gem, Check, type LucideIcon } from "lucide-react";
import { Button } from "@/components/primitives/Button";
import { easeOutExpo, fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

type Billing = "monthly" | "annually";

type Plan = {
  name: string;
  icon: LucideIcon;
  monthly: number;
  annually: number;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Free plan",
    icon: Leaf,
    monthly: 0,
    annually: 0,
    tagline: "Essential tools to start your daily mental wellness journey",
    features: [
      "Daily Mood Tracker",
      "Basic Mental Health Assessment",
      "Guided Breathing Exercises",
      "Access to Community Support",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Basic plan",
    icon: Sparkles,
    monthly: 5,
    annually: 48,
    tagline: "Includes everything in Free, plus more personalized guidance",
    features: [
      "Unlimited Mood History",
      "Guided Meditation Library",
      "Personalized Wellness Insights",
      "Daily Wellness Reminders",
      "Progress Analytics Dashboard",
    ],
    cta: "Upgrade to Basic",
    popular: true,
  },
  {
    name: "Pro plan",
    icon: Gem,
    monthly: 15,
    annually: 144,
    tagline: "Includes everything in Basic, plus full access to expert therapy",
    features: [
      "1-on-1 Professional Consultation",
      "AI Wellness Assistant",
      "Personalized Care Plans",
      "Priority Customer Support",
      "Exclusive Wellness Programs",
      "Advanced Progress Reports",
    ],
    cta: "Upgrade to Pro",
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Background video with breathing zoom (same as hero) */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={reduce ? { opacity: 0 } : { scale: 1.12, opacity: 0 }}
        animate={{ scale: reduce ? 1 : 1, opacity: 1 }}
        transition={
          reduce
            ? { duration: 1 }
            : { scale: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }, opacity: { duration: 1.2, ease: easeOutExpo } }
        }
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-bg.webp"
        >
          <source src="/images/hero-video-bg.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-overlay-50" />
      </motion.div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Header row: title (left) + toggle (right) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="flex flex-col gap-4">
            <motion.span
              variants={fadeUp}
              className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase"
            >
              Pricing
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="max-w-xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
            >
              Choose the Plan That Fits Your Wellness Journey
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-xl font-sans text-lg font-normal leading-[1.5] text-white/85"
            >
              Whether you&apos;re just getting started or looking for more
              personalized support, choose a plan that helps you care for your
              mental well-being at your own pace.
            </motion.p>
          </div>

          {/* Toggle */}
          <motion.div variants={fadeUp} className="flex gap-2.5">
            <BillingToggle
              active={billing === "monthly"}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </BillingToggle>
            <BillingToggle
              active={billing === "annually"}
              onClick={() => setBilling("annually")}
              outline
            >
              Annually
            </BillingToggle>
          </motion.div>
        </motion.div>

        {/* Plans grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} billing={billing} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BillingToggle({
  active,
  onClick,
  outline,
  children,
}: {
  active: boolean;
  onClick: () => void;
  outline?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={[
        "h-12 rounded-full px-5 font-sans text-base font-semibold shadow-xs transition-colors",
        active
          ? "bg-teal text-white border border-teal"
          : outline
            ? "bg-transparent text-teal border-2 border-teal"
            : "bg-transparent text-white/80 border border-white/20",
      ].join(" ")}
    >
      {children}
    </motion.button>
  );
}

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const Icon = plan.icon;
  const price = billing === "monthly" ? plan.monthly : plan.annually;
  const suffix = billing === "monthly" ? "/month" : "/year";

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={[
        "relative flex flex-col gap-8 rounded-[16px] p-8",
        plan.popular
          ? "border-2 border-teal bg-overlay-75 shadow-lg shadow-teal/10"
          : "border border-white/10 bg-overlay-75",
      ].join(" ")}
    >
      {/* Subtle glow pulse on popular */}
      {plan.popular ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[16px] ring-2 ring-teal/40"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      {/* Price header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="font-sans text-xl font-normal text-white">
            {plan.name}
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/15 text-teal ring-1 ring-teal/30">
            <Icon className="h-6 w-6" strokeWidth={2} />
          </span>
          {plan.popular ? (
            <span className="ml-auto flex items-center gap-2 rounded-full bg-teal/15 px-3 py-1 font-sans text-xl font-semibold text-teal">
              Popular
              <Sparkles className="h-4 w-4" strokeWidth={2} />
            </span>
          ) : null}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={billing}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex items-baseline"
          >
            <span className="font-sans text-5xl font-bold leading-[1.2] text-white md:text-6xl">
              ${price}
            </span>
            <span className="ml-1 font-sans text-xl font-normal text-white/60">
              {suffix}
            </span>
          </motion.div>
        </AnimatePresence>

        <p className="font-sans text-base font-light leading-[1.5] text-white/80">
          {plan.tagline}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/15" />

      {/* Features */}
      <div className="flex flex-col gap-4">
        <span className="font-sans text-base font-normal text-white">
          Includes:
        </span>
        <ul className="flex flex-col gap-4">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                <Check className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-sans text-lg font-normal leading-[1.5] text-white/90">
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button
        variant={plan.popular ? "primary" : "outline"}
        size="block"
        className="mt-auto"
      >
        {plan.cta}
      </Button>
    </motion.article>
  );
}
