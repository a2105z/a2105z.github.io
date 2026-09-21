import { motion } from "framer-motion";

const NavbarButton: React.FC<{
  delay: number;
  text: string;
  selectedButton: string;
  backgroundIsTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const active = props.selectedButton === props.text;

  return (
    <motion.button
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: props.delay,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => props.handleGoToPage(props.text)}
      className={`relative inline-flex items-center gap-2 px-3 py-2 text-[13px] tracking-[0.005em] transition-colors ${
        active
          ? "text-ink font-medium"
          : "text-ink-muted hover:text-ink font-normal"
      }`}
    >
      {active && (
        <motion.span
          layoutId="nav-dot"
          transition={{ type: "spring", stiffness: 340, damping: 32 }}
          className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        />
      )}
      {props.text}
    </motion.button>
  );
};

export default NavbarButton;
