import { motion } from "framer-motion";

interface NowLineProps {
  delay?: number;
  label: string;
}

const NowLine: React.FC<NowLineProps> = ({ delay = 0, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 backdrop-blur-md px-3 py-1"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[11px] text-ink-muted tracking-[0.06em]">
        {label}
      </span>
    </motion.div>
  );
};

export default NowLine;
