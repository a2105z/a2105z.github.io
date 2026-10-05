import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import { EASE_PREMIUM } from "../../shared/motion";

const FOCUS = [
  {
    title: "Products",
    text: "Choose the problem worth solving, ship the product people adopt, and stop the work that does not earn its place.",
  },
  {
    title: "The business",
    text: "Revenue, margin, and the cost to serve sit with the product. A P&L is the scorecard, not a report that arrives later.",
  },
  {
    title: "The standard",
    text: "Engineering, design, and go-to-market answer to one question: does this deserve to exist at scale.",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-28">
      <Wrapper>
        <Header
          eyebrow="Focus"
          text="What the role is accountable for."
          description="Three things, held together."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {FOCUS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: EASE_PREMIUM,
              }}
              className="bg-white p-7 sm:p-8"
            >
              <p className="text-[13px] font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[1.25rem] text-ink tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
