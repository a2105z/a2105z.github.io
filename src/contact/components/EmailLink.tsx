import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { EMAIL, EMAIL_LINK } from "../../constants/links";

const EmailLink: React.FC = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 220, damping: 22 });
  const smy = useSpring(my, { stiffness: 220, damping: 22 });
  const x = useTransform(smx, (v) => `${v}px`);
  const y = useTransform(smy, (v) => `${v}px`);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) * 0.08);
    my.set((e.clientY - cy) * 0.12);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={EMAIL_LINK}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className="group inline-block align-baseline text-ink font-medium tracking-tightest leading-[0.98] text-[2rem] sm:text-[3rem] md:text-[4.5rem] hover-underline"
    >
      {EMAIL}
    </motion.a>
  );
};

export default EmailLink;
