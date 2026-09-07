import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import ExperienceItem from "../components/ExperienceItem";
import {
  EXPERIENCES,
  ExperienceKind,
} from "../../constants/projects";
import { EASE_PREMIUM } from "../../shared/motion";

const TABS: { id: ExperienceKind; label: string }[] = [
  { id: "fulltime", label: "Full-time" },
  { id: "internship", label: "Internships" },
];

const Experience: React.FC = () => {
  const [kind, setKind] = useState<ExperienceKind>("fulltime");

  const items = useMemo(
    () => EXPERIENCES.filter((experience) => (experience.kind ?? "internship") === kind),
    [kind]
  );

  const handleKind = (next: ExperienceKind) => {
    if (next === kind) return;
    setKind(next);
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  return (
    <section className="bg-canvas pt-24 pb-32">
      <Wrapper>
        <Header
          index="02"
          eyebrow="Experience"
          text="Where I've been building."
          description="Selected work across engineering, product, and strategy."
        />

        <div className="mt-10 inline-flex items-center rounded-full border border-line bg-surface p-1 shadow-ring">
          {TABS.map((tab) => {
            const active = tab.id === kind;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleKind(tab.id)}
                aria-pressed={active}
                className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                  active
                    ? "text-canvas"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="experience-tab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={kind}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            >
              {items.length === 0 ? (
                <p className="text-ink-muted text-[15px] sm:text-base leading-relaxed max-w-xl">
                  Full-time roles will live here.
                </p>
              ) : kind === "internship" ? (
                <ul className="divide-y divide-line">
                  {items.map((experience, index) => (
                    <li
                      key={`${experience.company}-${experience.startDate}-${index}`}
                      className="py-7 first:pt-1"
                    >
                      <ExperienceItem
                        company={experience.company}
                        logo={experience.logo}
                        logoFull={experience.logoFull}
                        tileColor={experience.tileColor}
                        monogram={experience.monogram}
                        location={experience.location}
                        ticker={experience.ticker}
                        exchange={experience.exchange}
                        summary={experience.summary}
                        delay={index * 0.04}
                        roles={experience.roles}
                        kind="internship"
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        groupIcon={experience.groupIcon}
                        employmentType={experience.employmentType}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute left-[20px] top-1 bottom-1 w-px bg-line hidden sm:block"
                  />
                  {items.map((experience, index) => {
                    const dateRange = `${experience.startDate} — ${experience.endDate}`;
                    return (
                      <li
                        key={`${experience.company}-${experience.startDate}-${index}`}
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
                          location={experience.location}
                          ticker={experience.ticker}
                          exchange={experience.exchange}
                          summary={experience.summary}
                          delay={index * 0.05}
                          roles={experience.roles}
                          kind="fulltime"
                        />
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Wrapper>
    </section>
  );
};

export default Experience;
