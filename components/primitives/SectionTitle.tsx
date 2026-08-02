import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionTitleProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        centered && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "font-sans text-base font-light tracking-[0.3em] text-white/80 uppercase",
            centered && "tracking-[0.3em]"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <div className={cn("flex flex-col gap-6", centered && "items-center")}>
        <h2
          className={cn(
            "font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]",
            centered && "max-w-3xl",
            titleClassName
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className={cn(
              "font-sans text-lg font-normal leading-[1.5] text-white/85",
              centered ? "max-w-2xl" : "max-w-xl"
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
