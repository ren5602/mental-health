"use client";

import { useCallback, useEffect, useRef } from "react";
import { Container } from "@/components/primitives/Container";
import { TextSequence } from "@/components/primitives/TextSequence";

const ITEMS = [
  { id: "intro", content: "How do you feel?", duration: 1500 },
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleComplete = useCallback(() => {
    const target = document.querySelector("#features") as HTMLElement | null;
    timeoutRef.current = setTimeout(() => {
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1000);
  }, []);

  return (
    <section
      id="userneeds"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-darker"
    >
      <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

      <Container className="relative flex flex-col items-center justify-center gap-10 py-24 text-center sm:py-28">
        <TextSequence
          items={ITEMS}
          onComplete={handleComplete}
          className="w-full max-w-4xl min-h-[clamp(5rem,12vmin,9rem)]"
          itemClassName="font-display text-[clamp(2.25rem,8vmin,6.25rem)] leading-[1.1] font-semibold tracking-[-0.01em] text-white"
        />
      </Container>
    </section>
  );
}
