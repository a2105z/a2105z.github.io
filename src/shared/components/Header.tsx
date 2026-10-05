import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../motion";

interface HeaderProps {
  text: string;
  eyebrow?: string;
  index?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({
  text,
  eyebrow,
  index,
  description,
}) => {
  return (
    <div className="pb-10 border-b border-line">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        className="flex items-baseline gap-4"
      >
        {index && (
          <span className="text-[11px] font-mono text-ink-dim tracking-widest">
            {index}
          </span>
        )}
        {eyebrow && (
          <span className="text-[11px] uppercase tracking-[0.28em] text-ink-dim font-medium">
            {eyebrow}
          </span>
        )}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE_PREMIUM }}
        className="mt-4 text-ink font-medium tracking-tight leading-[1.05] text-[2rem] sm:text-[2.6rem] md:text-[3.2rem]"
      >
        {text}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_PREMIUM }}
          className="mt-4 max-w-2xl text-ink-muted text-[15px] sm:text-base leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default Header;
