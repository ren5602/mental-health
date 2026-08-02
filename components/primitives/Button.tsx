"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "lg" | "block";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "leading" | "trailing";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold whitespace-nowrap transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:opacity-60 disabled:pointer-events-none select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-white border border-teal shadow-xs hover:bg-teal/90 hover:border-teal/90",
  outline:
    "bg-transparent text-teal border-2 border-teal shadow-xs hover:bg-teal/10",
  ghost: "bg-transparent text-white border border-white/20 hover:bg-white/10",
  dark: "bg-darker text-white border border-darker hover:bg-darker/80",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-xs px-3 h-11",
  lg: "text-base px-5 h-12",
  block: "text-base px-5 h-12 w-full",
};

export function Button({
  variant = "primary",
  size = "lg",
  className,
  children,
  icon,
  iconPosition = "trailing",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && iconPosition === "leading" ? icon : null}
      <span className="leading-none">{children}</span>
      {icon && iconPosition === "trailing" ? icon : null}
    </motion.button>
  );
}
