import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import { EASE_PREMIUM, container, item } from "../../shared/motion";

const Portrait: React.FC = () => {
  const [errored, setErrored] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: EASE_PREMIUM }}
      className="relative h-14 w-14 rounded-full overflow-hidden ring-1 ring-line shadow-ring flex-shrink-0"
    >
      {!errored ? (
        <img
          src="/images/aarav.jpg"
          alt="Aarav Mittal"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-ink text-canvas text-[13px] font-semibold tracking-wide">
          AM
        </div>
      )}
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section className="bg-canvas pt-32 pb-32">
      <Wrapper>
        <Header
          index="01"
          eyebrow="About"
          text="At the intersection of building products and running them."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-8">
          {/* Left rail — portrait + small caption */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-32 flex md:flex-col items-center md:items-start gap-4">
              <Portrait />
              <div>
                <p className="text-[13px] font-medium text-ink">Aarav Mittal</p>
                <p className="text-[12px] text-ink-dim mt-0.5">
                  Urbana–Champaign, IL
                </p>
              </div>
            </div>
          </div>

          {/* Right column — pull-quote + body */}
          <div className="col-span-12 md:col-span-8 lg:col-span-8 mt-10 md:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              className="text-ink font-medium text-[1.5rem] sm:text-[1.9rem] md:text-[2.05rem] tracking-tight leading-[1.2] max-w-3xl"
            >
              I'm drawn to what makes a technology worth building a business
              around — and I like to work at that seam.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 space-y-5 text-[16px] sm:text-[17px] leading-[1.75] text-ink-muted max-w-2xl"
            >
              <motion.p variants={item}>
                Building software and products by day, paying close attention
                to the <span className="text-ink font-medium">operators, investors, and bankers</span>{" "}
                who decide which technologies actually reach scale.
              </motion.p>

              <motion.p variants={item}>
                Right now I'm at{" "}
                <span className="text-ink font-medium">
                  Rivian and Volkswagen Group Technologies
                </span>{" "}
                on Vehicle Telematics, and at{" "}
                <span className="text-ink font-medium">Google</span> on Cloud
                AI — with additional work at{" "}
                <span className="text-ink font-medium">Rivian</span> on Vehicle
                Firmware and as an AI Student Researcher on{" "}
                <span className="text-ink font-medium">NVIDIA</span>'s NeMo
                team, plus earlier roles at{" "}
                <span className="text-ink font-medium">Amazon</span>,{" "}
                <span className="text-ink font-medium">NASA</span>,{" "}
                <span className="text-ink font-medium">Palantir</span>, and{" "}
                <span className="text-ink font-medium">AlgoDynamix</span>.
              </motion.p>

              <motion.p variants={item}>
                Longer term, I'm aiming at{" "}
                <span className="text-ink font-medium">
                  product and P&amp;L leadership
                </span>{" "}
                at technology companies — with a serious side-interest in{" "}
                <span className="text-ink font-medium">
                  early-stage tech investing
                </span>{" "}
                and{" "}
                <span className="text-ink font-medium">
                  technology-focused banking
                </span>{" "}
                as adjacent lenses on the same question.
              </motion.p>

              <motion.p variants={item}>
                I study{" "}
                <span className="text-ink font-medium">Computer Science</span>{" "}
                and{" "}
                <span className="text-ink font-medium">
                  Electrical Engineering
                </span>
                , along with{" "}
                <span className="text-ink font-medium">
                  Innovation, Leadership &amp; Engineering Entrepreneurship
                </span>{" "}
                at UIUC, then continue to a{" "}
                <span className="text-ink font-medium">
                  Master of Engineering, Electrical Engineering &amp; Computer
                  Sciences
                </span>{" "}
                at UC Berkeley, focused on AI, data science, computer vision, and
                product.
              </motion.p>
            </motion.div>

            {/* Signature markers */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE_PREMIUM }}
              className="mt-14 grid grid-cols-3 gap-6 sm:gap-10 border-t border-line pt-8 max-w-2xl"
            >
              {[
                { k: "Focus", v: "Product · Capital" },
                { k: "Now", v: "RV Tech × Google" },
                { k: "Next", v: "Berkeley M.Eng. EECS" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-ink-dim font-medium">
                    {s.k}
                  </p>
                  <p className="mt-2 text-[14px] text-ink font-medium">{s.v}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
