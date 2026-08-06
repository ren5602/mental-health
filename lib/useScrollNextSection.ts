import { useEffect, useRef, type RefObject } from "react";

/**
 * One-shot scroll hijack: while the referenced section starts in view, a
 * downward scroll gesture (wheel or touch) smoothly scrolls to nextSectionId.
 * The guard resets when the user scrolls back to this section.
 */
export function useScrollNextSection(
  sectionRef: RefObject<HTMLElement | null>,
  nextSectionId: string,
  enabled = true
) {
  const fired = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const section = sectionRef.current;
    const isAt = () => {
      if (!section) return false;
      return section.getBoundingClientRect().top >= -window.innerHeight * 0.4;
    };

    let lastTouchY = 0;

    const hijack = () => {
      const target = document.querySelector(nextSectionId) as HTMLElement | null;
      if (!target || !isAt() || fired.current) return;
      fired.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY <= 0) return;
      hijack();
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? lastTouchY;
      if (lastTouchY - y <= 0) return; // only downward scroll
      lastTouchY = y;
      hijack();
    };

    const reset = () => {
      if (isAt()) fired.current = false;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("scroll", reset, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", reset);
    };
  }, [enabled, nextSectionId, sectionRef]);
}
