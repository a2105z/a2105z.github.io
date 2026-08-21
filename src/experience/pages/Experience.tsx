import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import ExperienceItem from "../components/ExperienceItem";
import EducationItem from "../components/EducationItem";
import { EDUCATION, EXPERIENCES } from "../../constants/projects";
import { EASE_PREMIUM } from "../../shared/motion";

type Tab = "work" | "education";

const TABS: { id: Tab; label: string }[] = [
  { id: "work", label: "Research & Internships" },
  { id: "education", label: "Education" },
];

const Experience: React.FC = () => {
  const [tab, setTab] = useState<Tab>("work");
  const description =
    tab === "work"
      ? "Selected engineering work across autonomy, AI, systems, and infrastructure."
      : "Formal training across engineering, systems, business, and applied AI.";

  return (
    <section className="bg-canvas pt-24 pb-32">
      <Wrapper>
        <Header
          index="02"
          eyebrow="Experience"
          text="Where I've been building."
          description={description}
        />

        {/* Segmented toggle — sits just below the section header */}
        <div className="mt-10 flex justify-start">
          <div
            role="tablist"
            aria-label="Experience view"
            className="inline-flex items-center rounded-full border border-line bg-surface p-1 shadow-ring"
          >
            {TABS.map(({ id, label }) => {
              const active = tab === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(id)}
                  className={`relative rounded-full px-4 sm:px-5 py-1.5 text-[12.5px] sm:text-[13px] font-medium tracking-[-0.005em] transition-colors duration-300 ease-premium ${
                    active
                      ? "text-canvas"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="experienceTabPill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 34,
                      }}
                      className="absolute inset-0 bg-ink rounded-full"
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 relative">
          <AnimatePresence exitBeforeEnter initial={false}>
            {tab === "work" ? (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              >
                <ul className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute left-[20px] top-1 bottom-1 w-px bg-line hidden sm:block"
                  />
                  {EXPERIENCES.map((experience, index) => {
                    const dateRange = `${experience.startDate} — ${experience.endDate}`;
                    return (
                      <li
                        key={`${experience.company}-${index}`}
                        className="relative sm:pl-16 pb-14 last:pb-0"
                      >
                        <span
                          aria-hidden="true"
                          className="hidden sm:block absolute left-[17px] top-4 h-1.5 w-1.5 rounded-full bg-ink ring-4 ring-canvas"
                        />
                        <p className="text-[11px] uppercase tracking-[0.22em] text-ink-dim font-medium mb-3">
                          {dateRange}
                        </p>
                        <ExperienceItem
                          company={experience.company}
                          logo={experience.logo}
                          logoFull={experience.logoFull}
                          tileColor={experience.tileColor}
                          monogram={experience.monogram}
                          summary={experience.summary}
                          delay={index * 0.05}
                          roles={experience.roles}
                        />
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              >
                <ul className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute left-[20px] top-1 bottom-1 w-px bg-line hidden sm:block"
                  />
                  {EDUCATION.map((edu, index) => (
                    <li
                      key={`${edu.institution}-${index}`}
                      className="relative sm:pl-16 pb-14 last:pb-0"
                    >
                      <span
                        aria-hidden="true"
                        className="hidden sm:block absolute left-[17px] top-4 h-1.5 w-1.5 rounded-full bg-ink ring-4 ring-canvas"
                      />
                      <p className="text-[11px] uppercase tracking-[0.22em] text-ink-dim font-medium mb-3">
                        {`${edu.startDate} — ${edu.endDate}`}
                      </p>
                      <EducationItem
                        institution={edu.institution}
                        monogram={edu.monogram}
                        logo={edu.logo}
                        logoFull={edu.logoFull}
                        tileColor={edu.tileColor}
                        degree={edu.degree}
                        dateRange={edu.dateRange}
                        location={edu.location}
                        focus={edu.focus}
                        summary={edu.summary}
                        delay={index * 0.05}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </section>
  );
};

export default Experience;
