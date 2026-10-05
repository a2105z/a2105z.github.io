import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import { EASE_PREMIUM } from "../../shared/motion";

const DOMAINS = [
  {
    title: "Product",
    text: "The user, the bet, and the sequence. What ships, what waits, and why.",
  },
  {
    title: "P&L",
    text: "Growth and margin in the same view. A product is not done until the business works.",
  },
  {
    title: "Go-to-market",
    text: "Pricing, distribution, and the story that puts a product in the market it was built for.",
  },
  {
    title: "Technology",
    text: "Close enough to set the standard with engineering — quality, architecture, and what we will not ship.",
  },
  {
    title: "Organization",
    text: "Clear ownership, a steady cadence, and teams that know the result they are accountable for.",
  },
  {
    title: "Capital",
    text: "Investing and technology banking as a way to see which ideas deserve a company, and which deserve more.",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-[#f8f9fa] pt-24 pb-28">
      <Wrapper>
        <Header
          eyebrow="Leadership"
          text="How a technology business is run."
          description="The operating responsibilities of a product and P&L leader."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOMAINS.map((domain, index) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
                ease: EASE_PREMIUM,
              }}
              className="bg-white border border-line rounded-lg p-6"
            >
              <h3 className="text-[16px] font-medium text-ink">{domain.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">
                {domain.text}
              </p>
            </motion.article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
