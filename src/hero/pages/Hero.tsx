import { motion } from "framer-motion";
import { BackgroundPaths } from "../components/BackgroundPaths";
import { EMAIL_LINK, LINKEDIN_LINK } from "../../constants/links";
import { EASE_PREMIUM } from "../../shared/motion";

const Hero: React.FC<{
  onGoToPage: (newPage: string) => void;
}> = ({ onGoToPage }) => {
  return (
    <BackgroundPaths onGoToPage={onGoToPage}>
      <div className="pt-28 pb-28 sm:pt-32 sm:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          className="text-[13px] font-medium text-accent"
        >
          Product and P&amp;L
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: EASE_PREMIUM }}
          className="mt-4 text-ink font-normal tracking-[-0.03em] leading-[1.05] text-[3.25rem] sm:text-[4.5rem] md:text-[5.25rem]"
        >
          Aarav Mittal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6, ease: EASE_PREMIUM }}
          className="mt-6 max-w-2xl text-ink text-[1.35rem] sm:text-[1.65rem] leading-[1.3] tracking-[-0.02em]"
        >
          Technology leadership for products that have to become businesses.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease: EASE_PREMIUM }}
          className="mt-5 max-w-xl text-ink-muted text-[16px] sm:text-[17px] leading-[1.65]"
        >
          I work across product, engineering, and the P&amp;L — what to build,
          who it is for, and whether the business can carry it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.55, ease: EASE_PREMIUM }}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14px]"
        >
          <button
            onClick={() => onGoToPage("About")}
            className="rounded-md bg-accent text-white px-5 py-2.5 text-[14px] font-medium hover:bg-[#174ea6] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => onGoToPage("Experience")}
            className="text-accent hover:underline"
          >
            Experience
          </button>
          <button
            onClick={() => onGoToPage("Leadership")}
            className="text-accent hover:underline"
          >
            Leadership
          </button>
          <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            LinkedIn
          </a>
          <a href={EMAIL_LINK} className="text-accent hover:underline">
            Email
          </a>
        </motion.div>
      </div>
    </BackgroundPaths>
  );
};

export default Hero;
