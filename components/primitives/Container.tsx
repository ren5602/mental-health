import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "wide" | "narrow";
}

const sizes = {
  default: "max-w-[1280px]",
  wide: "max-w-[1360px]",
  narrow: "max-w-[768px]",
} as const;

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-12",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
