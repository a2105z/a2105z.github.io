import { motion } from "framer-motion";
import { useState } from "react";

interface IconProps {
  link: string;
  children: JSX.Element;
  delay: number;
  label?: string;
  showLabel?: boolean;
}

const Icon: React.FC<IconProps> = ({
  link,
  children,
  delay,
  label,
  showLabel = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group inline-flex items-center rounded-full border border-line bg-surface px-3 py-2 shadow-ring hover:shadow-card hover:border-line-strong transition-all"
      >
        <div className="text-ink-soft group-hover:text-ink transition-colors pl-1">
          {children}
        </div>
        {label && (
          <motion.span
            initial={{
              opacity: showLabel ? 1 : 0,
              width: showLabel ? "auto" : 0,
            }}
            animate={
              showLabel
                ? { opacity: 1, width: "auto" }
                : isHovered
                ? { opacity: 1, width: "auto" }
                : { opacity: 0, width: 0 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-ink text-[13px] font-medium overflow-hidden whitespace-nowrap px-1.5"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.a>
  );
};

export default Icon;
