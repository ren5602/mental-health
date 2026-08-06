"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { TextSequence } from "@/components/primitives/TextSequence";
import StrokeText from "@/components/primitives/StrokeText";
import { useScrollNextSection } from "@/lib/useScrollNextSection";

const TEXTS = [
  { id: "stress", content: <span className="italic text-teal">Stress</span>, duration: 1000 },
  { id: "anxiety", content: <span className="italic text-teal">Anxiety</span>, duration: 1000 },
  {
    id: "overthinking",
    content: <span className="italic text-teal">Overthinking</span>,
    duration: 1000,
  },
  { id: "burnout", content: <span className="italic text-teal">Burnout</span>, duration: 1000 },
  {
    id: "outro",
    content: "You’re in the right spot",
  },
];

export function UserNeeds() {
  const sectionRef = useRef<HTMLElement>(null);
  const [introDone, setIntroDone] = useState(false);
  const [sequenceDone, setSequenceDone] = useState(false);
  const reduce = useReducedMotion();

  useScrollNextSection(sectionRef, "#features", sequenceDone);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      if (section.getBoundingClientRect().top > window.innerHeight * 0.4) {
        setIntroDone(false);
        setSequenceDone(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <section
      ref={sectionRef}
      id="userneeds"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-darker"
    >
      <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

      <Container className="relative flex flex-col items-center justify-center gap-10 py-24 text-center sm:py-28">
        <AnimatePresence mode="wait" initial={false}>
          {!introDone ? (
            <motion.div
              key="intro"
              className="flex w-full max-w-4xl min-h-[clamp(5rem,12vmin,9rem)] items-center justify-center"
              exit={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, y: -24, transition: { duration: 0.35, ease: "easeInOut" } }
              }
            >
              <StrokeText
                text="How do you feel?"
                strokeColor="#5cb8a8"
                fillColor="#FFFFFF"
                strokeWidth={1.4}
                fontWeight={600}
                letterSpacing={-2}
                fontSize={84}
                trigger="scroll"
                onComplete={handleIntroComplete}
              />
            </motion.div>
          ) : (
            <motion.div
              key="texts"
              className="w-full max-w-4xl min-h-[clamp(5rem,12vmin,9rem)]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
              animate={
                reduce
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
              }
            >
              <TextSequence
                items={TEXTS}
                onComplete={() => setSequenceDone(true)}
                className="w-full max-w-4xl min-h-[clamp(5rem,12vmin,9rem)]"
                itemClassName="font-display text-[clamp(2.25rem,8vmin,6.25rem)] leading-[1.1] font-semibold tracking-[-0.01em] text-white"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
