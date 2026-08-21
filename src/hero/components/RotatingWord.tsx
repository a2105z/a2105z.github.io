import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface RotatingWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

/**
 * Inline rotating word that stays perfectly baseline-aligned with the
 * surrounding text.
 *
 * IMPORTANT: `overflow: hidden` on an inline-block changes its baseline to the
 * bottom of the margin box (per CSS 2.1 §10.8.1). If we put overflow-hidden on
 * the outer element, the surrounding text no longer aligns to the text
 * baseline of our sizer — it aligns to the box bottom, and the word appears
 * to sit too low.
 *
 * Fix: outer is `inline-block` with NO overflow. It holds an invisible
 * "sizer" of real text, which establishes both the width and the correct
 * inline baseline for surrounding text. A separate absolutely-positioned
 * inner overlay carries `overflow-hidden` to clip the enter/exit animation,
 * without affecting the outer's baseline behavior.
 */
const RotatingWord: React.FC<RotatingWordProps> = ({
  words,
  interval = 2400,
  className,
}) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setI((prev) => (prev + 1) % words.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [interval, words.length]);

  const longest = useMemo(
    () => words.reduce((a, b) => (b.length > a.length ? b : a), ""),
    [words]
  );

  return (
    <span
      className={`relative inline-block ${className || ""}`}
      style={{ verticalAlign: "baseline" }}
    >
      {/* Sizer: invisible real text — width + baseline */}
      <span aria-hidden="true" className="invisible whitespace-nowrap">
        {longest}
      </span>

      {/* Absolute overlay clips enter/exit without affecting outer baseline */}
      <span
        aria-hidden="false"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.span
            key={words[i]}
            initial={{ y: "0.6em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-0.6em", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 whitespace-nowrap"
            style={{ willChange: "transform, opacity" }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};

export default RotatingWord;
