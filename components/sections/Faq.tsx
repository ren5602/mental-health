"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/primitives/Button";
import {
  fadeUp,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/motion";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "1. Is this platform suitable for everyone?",
    a: "Yes. Our platform is designed for anyone who wants to improve their mental well-being, manage daily stress, build healthier habits, or access professional support. Whether you're just getting started or already prioritizing your mental health, you'll find tools tailored to your needs.",
  },
  {
    q: "2. Can I use the platform for free?",
    a: "Absolutely. We offer a Free Plan that includes essential features such as mood tracking, basic self-assessments, and mindfulness exercises. You can upgrade at any time to unlock additional tools and personalized support.",
  },
  {
    q: "3. Is my personal information secure?",
    a: "Your privacy is our priority. All personal data is encrypted in transit and at rest, and we never share your information with third parties without your explicit consent. You remain in full control of what you choose to share.",
  },
  {
    q: "4. How does the mental health assessment work?",
    a: "The assessment is a short series of evidence-based questions about your mood, stress levels, and daily habits. Your responses help us understand your current well-being and tailor personalized recommendations, exercises, and resources to support you.",
  },
  {
    q: "5. Can I connect with a licensed therapist?",
    a: "Yes. The Pro plan includes 1-on-1 consultations with licensed mental health professionals. You can book sessions at a time that works for you and receive guidance tailored to your situation.",
  },
  {
    q: "6. Can I cancel my subscription anytime?",
    a: "Of course. You can cancel your subscription at any time from your account settings. You'll keep access to your plan features until the end of your current billing period — no questions asked.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));

  return (
    <section className="relative bg-darker">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-24 sm:px-10 md:px-12 md:py-28 lg:py-32">
        {/* Title (centered) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
            <span className="font-sans text-base font-light tracking-[0.3em] text-white/85 uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="max-w-2xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]">
              Everything You Need to Know
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            Find answers to the most common questions about our platform,
            services, and how we support your mental wellness journey
          </motion.p>
        </motion.div>

        {/* Accordion list (narrow column) */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex w-full max-w-3xl flex-col border-b border-white/15"
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              faq={f}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem]">
              Still have questions?
            </h3>
            <p className="max-w-xl font-sans text-lg font-normal leading-[1.5] text-white/85">
              Got more questions or need help choosing a plan? Let&apos;s talk.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button variant="primary">Contact Us</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div variants={fadeUp} className="border-t border-white/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-6 py-5 text-left"
      >
        <span className="font-sans text-lg font-bold leading-[1.5] text-white">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal"
        >
          <ChevronDown className="h-5 w-5" strokeWidth={2.2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 font-sans text-base font-normal leading-[1.6] text-white/80">
              {faq.a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
