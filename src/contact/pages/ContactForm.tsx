import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import EmailLink from "../components/EmailLink";
import {
  EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from "../../constants/links";
import { EASE_PREMIUM } from "../../shared/motion";

const ContactForm: React.FC = () => {
  return (
    <section className="relative bg-canvas pt-24 pb-32 overflow-hidden">
      {/* Soft accent light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[820px] h-[520px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 65%)",
        }}
      />
      <Wrapper>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink-dim font-medium"
        >
          <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulseDot" />
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_PREMIUM }}
          className="mt-5 text-ink font-medium tracking-tightest leading-[1.02] text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] max-w-4xl"
        >
          Let's build, invest, or just{" "}
          <span className="text-ink-muted">talk shop.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE_PREMIUM }}
          className="mt-6 max-w-xl text-ink-muted text-[16px] leading-relaxed"
        >
          Always up for a conversation on frontier tech, product, capital, or
          where any of the above is going next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.28, ease: EASE_PREMIUM }}
          className="mt-16"
        >
          <EmailLink />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]"
        >
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
          <span className="text-ink-faint">·</span>
          <a
            href={`mailto:${EMAIL}?subject=Hello`}
            className="hover-underline text-ink-muted hover:text-ink transition-colors"
          >
            Send a note
          </a>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default ContactForm;
