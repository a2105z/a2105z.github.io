import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../../shared/motion";

const Subheader: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: EASE_PREMIUM }}
      className="mt-6 max-w-2xl text-ink-muted text-[15px] sm:text-[17px] leading-[1.65] font-light"
    >
      Longer term, aiming at product and P&amp;L leadership at technology
      companies — with a serious interest in early-stage tech investing and
      technology-focused banking as adjacent lenses on the same question.
    </motion.p>
  );
};

export default Subheader;
