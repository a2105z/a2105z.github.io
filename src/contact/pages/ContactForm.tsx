import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import EmailLink from "../components/EmailLink";
import { EMAIL, LINKEDIN_LINK } from "../../constants/links";
import { EASE_PREMIUM } from "../../shared/motion";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-28">
      <Wrapper>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          className="text-[13px] font-medium text-accent"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.06, ease: EASE_PREMIUM }}
          className="mt-3 text-ink font-normal tracking-[-0.02em] leading-[1.15] text-[1.85rem] sm:text-[2.4rem] md:text-[2.8rem] max-w-3xl"
        >
          Product, the P&amp;L, or what should be built next.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.12, ease: EASE_PREMIUM }}
          className="mt-5 max-w-xl text-ink-muted text-[16px] leading-relaxed"
        >
          I am glad to talk about a technology business — the product, the
          numbers, and the organization required to run both.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.18, ease: EASE_PREMIUM }}
          className="mt-12"
        >
          <EmailLink />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]"
        >
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}?subject=Hello`}
            className="text-accent hover:underline"
          >
            Email
          </a>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default ContactForm;
