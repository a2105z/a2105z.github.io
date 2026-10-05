import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import { EASE_PREMIUM, container, item } from "../../shared/motion";

const Portrait: React.FC = () => {
  const [errored, setErrored] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0"
    >
      {!errored ? (
        <img
          src="/images/aarav.jpg"
          alt="Aarav Mittal"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-accent text-white text-[15px] font-medium">
          AM
        </div>
      )}
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-28">
      <Wrapper>
        <Header
          eyebrow="About"
          text="Run the product. Own the business."
        />

        <div className="mt-12 grid grid-cols-12 gap-x-8">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-28 flex md:flex-col items-center md:items-start gap-4">
              <Portrait />
              <div>
                <p className="text-[14px] font-medium text-ink">Aarav Mittal</p>
                <p className="text-[13px] text-ink-muted mt-0.5">
                  Product and P&amp;L
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-8 mt-10 md:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
              className="text-ink text-[1.35rem] sm:text-[1.7rem] tracking-[-0.02em] leading-[1.3] max-w-3xl"
            >
              The work is to decide what is worth building, put it in people’s
              hands, and stand behind the result.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 space-y-5 text-[16px] leading-[1.7] text-ink-muted max-w-2xl"
            >
              <motion.p variants={item}>
                Product, engineering, and the P&amp;L belong in the same
                conversation. A roadmap that does not move revenue, margin, or
                retention is not a plan.
              </motion.p>
              <motion.p variants={item}>
                I stay close to the technology — close enough to set the
                standard with the people who build it — and just as close to
                pricing, distribution, and the organization that has to deliver.
              </motion.p>
              <motion.p variants={item}>
                Early-stage investing and technology banking sit next to that
                work. They are how I test which technologies deserve a company,
                and which companies deserve more capital.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
