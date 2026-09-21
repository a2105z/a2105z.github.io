import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export interface BackgroundPathsProps {
  children: React.ReactNode;
  onGoToPage: (newPage: string) => void;
}

// A soft, cursor-tracking accent orb + a very quiet paper grain.
// No busy floating paths — the type carries the page.
export function BackgroundPaths({
  children,
  onGoToPage,
}: BackgroundPathsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });

  const blobX = useTransform(smoothX, (v) => `${v * 100}%`);
  const blobY = useTransform(smoothY, (v) => `${v * 100}%`);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="grain relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-canvas"
    >
      {/* Base wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #fafaf9 55%, #f5f5f4 100%)",
        }}
      />

      {/* Cursor-following soft accent orb */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute w-[720px] h-[720px] rounded-full"
        style={{
          left: blobX,
          top: blobY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0.04) 30%, transparent 60%)",
          filter: "blur(20px)",
        }}
      />

      {/* Ultra-faint fixed accent to give the corner some weight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(10,10,10,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 sm:px-10 md:px-14">
        {children}
      </div>

      {/* Elegant scroll cue — thin animated line */}
      <button
        aria-label="Scroll to About"
        onClick={() => onGoToPage("About")}
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted hover:text-ink transition-colors"
      >
        <span className="text-[10px] tracking-[0.28em] uppercase font-medium">
          Scroll
        </span>
        <span className="relative block h-10 w-px bg-ink/15 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-ink"
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          />
        </span>
      </button>
    </div>
  );
}
