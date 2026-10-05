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
      className={`relative inline-flex items-center px-3 py-2 text-[14px] transition-colors ${
        active ? "text-accent font-medium" : "text-ink-muted hover:text-ink"
      }`}
    >
      {props.text}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-accent"
        />
      )}
    </motion.button>
  );
};

export default NavbarButton;
