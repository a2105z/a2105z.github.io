import type { Variants } from "framer-motion";

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.65, 0.05, 0.36, 1] as const;

export const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export const letter: Variants = {
  hidden: { opacity: 0, y: "0.55em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_PREMIUM },
  },
};
