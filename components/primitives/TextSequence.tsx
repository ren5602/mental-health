"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextSequenceItem {
  /** Unique key for the item */
  id: string;
  /** Content to render (string or ReactNode) */
  content: React.ReactNode;
  /** How long to hold this item in ms before advancing (defaults to 800) */
  duration?: number;
}

interface TextSequenceProps {
  /** Ordered list of items; the carousel plays through once and stops on the last */
  items: TextSequenceItem[];
  /** Classes for the fixed-height stage container */
  className?: string;
  /** Classes applied to each animated text element */
  itemClassName?: string;
  /** Optional transition override */
  transition?: Transition;
  /** Called once when the sequence finishes playing (reaches the last item) */
  onComplete?: () => void;
}

const DEFAULT_DURATION = 800;

export function TextSequence({
  items,
  className,
  itemClassName,
  transition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1,
  },
  onComplete,
}: TextSequenceProps) {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completedRef = useRef(false);
  const [index, setIndex] = useState(0);

  const isLast = index >= items.length - 1;

  useEffect(() => {
    if (!onComplete || completedRef.current) return;
    if (isLast && inView) {
      completedRef.current = true;
      onComplete();
    }
  }, [inView, isLast, onComplete]);

  const step = useCallback(() => {
    setIndex((current) => Math.min(current + 1, items.length - 1));
  }, [items.length]);

  useEffect(() => {
    if (reduce || !inView || items.length === 0) return;
    if (isLast) return;

    timeoutRef.current = setTimeout(step, items[index].duration ?? DEFAULT_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, inView, isLast, items, reduce, step]);

  if (reduce || items.length === 0) {
    return (
      <div ref={stageRef} className={cn("flex flex-col items-center", className)}>
        {items.map((item) => (
          <span key={item.id} className={cn("text-balance", itemClassName)}>
            {item.content}
          </span>
        ))}
      </div>
    );
  }

  const current = items[Math.min(index, items.length - 1)];

  return (
    <div
      ref={stageRef}
      className={cn("relative overflow-hidden", className)}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={current.id}
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -44 }}
          transition={transition}
          className="absolute inset-x-0"
        >
          <span className={cn("block text-balance", itemClassName)}>
            {current.content}
          </span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
