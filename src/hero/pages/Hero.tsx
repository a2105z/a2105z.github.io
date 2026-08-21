import { motion } from "framer-motion";
import { BackgroundPaths } from "../components/BackgroundPaths";
import Subheader from "../components/Subheader";
import CompanyMarquee from "../components/CompanyMarquee";
import NowLine from "../components/NowLine";
import RotatingWord from "../components/RotatingWord";
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from "../../constants/links";
import { EASE_PREMIUM, container, letter } from "../../shared/motion";

const NAME = "Aarav Mittal";

const ROTATING_WORDS = [
  "businesses",
  "companies",
  "capital",
  "categories",
];

const Hero: React.FC<{
  onGoToPage: (newPage: string) => void;
}> = ({ onGoToPage }) => {
  return (
    <BackgroundPaths onGoToPage={onGoToPage}>
      <div className="pt-24 pb-40 sm:pt-28 sm:pb-44">
        <NowLine delay={0.15} label="Currently — Rivian × Google · Urbana–Champaign, IL" />

        {/* Letter-stagger name */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.28 }}
          className="mt-8 text-ink font-medium tracking-tightest leading-[0.98] text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] font-display"
          aria-label={NAME}
        >
          <span className="inline-flex overflow-hidden">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                variants={letter}
                className="inline-block"
                style={{ willChange: "transform, opacity" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Tagline — two lines, weighted */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.28 + NAME.length * 0.06 + 0.1,
            duration: 0.8,
            ease: EASE_PREMIUM,
          }}
          className="mt-6 max-w-3xl text-ink-soft text-[1.35rem] sm:text-[1.7rem] md:text-[1.9rem] font-medium tracking-display leading-[1.15]"
        >
          Building software, products, and the{" "}
          <RotatingWord
            words={ROTATING_WORDS}
            className="text-ink-muted"
          />
          <br />
          <span className="text-ink-muted">behind them.</span>
        </motion.p>

        <Subheader delay={0.28 + NAME.length * 0.06 + 0.18} />

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.28 + NAME.length * 0.06 + 0.3,
            duration: 0.7,
            ease: EASE_PREMIUM,
          }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]"
        >
          <button
            onClick={() => onGoToPage("About")}
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink text-canvas px-5 py-2.5 text-[13.5px] font-medium tracking-[-0.005em] transition-transform duration-300 ease-premium hover:-translate-y-[1px]"
          >
            About
            <span
              aria-hidden="true"
              className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
            >
              →
            </span>
          </button>
          <button
            onClick={() => onGoToPage("Experience")}
            className="hover-underline text-ink-muted hover:text-ink transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => onGoToPage("Projects")}
            className="hover-underline text-ink-muted hover:text-ink transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => onGoToPage("Contact")}
            className="hover-underline text-ink-muted hover:text-ink transition-colors"
          >
            Contact
          </button>
          <span className="text-ink-faint">·</span>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            className="hover-underline text-ink-muted hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
            className="hover-underline text-ink-muted hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={EMAIL_LINK}
            className="hover-underline text-ink-muted hover:text-ink transition-colors"
          >
            Email
          </a>
        </motion.div>

        {/* Company marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.28 + NAME.length * 0.06 + 0.55,
            duration: 0.9,
          }}
          className="mt-16 sm:mt-20 border-t border-line pt-6"
        >
          <p className="text-[10px] uppercase tracking-[0.28em] text-ink-dim mb-4">
            Where I've worked & studied
          </p>
          <CompanyMarquee delay={0} />
        </motion.div>
      </div>
    </BackgroundPaths>
  );
};

export default Hero;
