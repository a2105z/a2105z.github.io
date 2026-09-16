import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import EducationItem from "../components/EducationItem";
import ExperienceItem from "../components/ExperienceItem";
import { EDUCATION, EXPERIENCES } from "../../constants/projects";
import { EASE_PREMIUM } from "../../shared/motion";

const Education: React.FC = () => {
  const [showInternships, setShowInternships] = useState(false);

  const internships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) => (experience.kind ?? "internship") === "internship"
      ),
    []
  );

  const toggleInternships = () => {
    setShowInternships((open) => !open);
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  return (
    <section className="bg-canvas pt-24 pb-32 font-linkedin">
      <Wrapper>
        <Header
          index="03"
          eyebrow="Education"
          text="Where I'm learning."
          description="Formal training across engineering, systems, and leadership."
        />

        <div className="mt-10">
          <ul className="divide-y divide-line">
            {EDUCATION.map((edu, index) => (
              <li
                key={`${edu.institution}-${index}`}
                className="py-5 first:pt-2"
              >
                <EducationItem
                  institution={edu.institution}
                  monogram={edu.monogram}
                  logo={edu.logo}
                  logoFull={edu.logoFull}
                  tileColor={edu.tileColor}
                  degree={edu.degree}
                  degreeSecondary={edu.degreeSecondary}
                  degreeTertiary={edu.degreeTertiary}
                  gpa={edu.gpa}
                  gpaSecondary={edu.gpaSecondary}
                  dateRange={edu.dateRange}
                  location={edu.location}
                  delay={index * 0.04}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <button
            type="button"
            onClick={toggleInternships}
            aria-expanded={showInternships}
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:opacity-70 transition-opacity"
          >
            <span>{showInternships ? "Hide internships" : "Show internships"}</span>
            <span
              aria-hidden="true"
              className={`text-ink-dim transition-transform duration-300 ease-premium ${
                showInternships ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>

          <AnimatePresence initial={false}>
            {showInternships && (
              <motion.div
                key="internships"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                className="overflow-hidden"
              >
                <ul className="mt-4 divide-y divide-line border-t border-line">
                  {internships.map((experience, index) => (
                    <li
                      key={`${experience.company}-${experience.startDate}-${index}`}
                      className="py-5"
                    >
                      <ExperienceItem
                        company={experience.company}
                        logo={experience.logo}
                        logoFull={experience.logoFull}
                        tileColor={experience.tileColor}
                        monogram={experience.monogram}
                        location={experience.location}
                        delay={index * 0.03}
                        roles={experience.roles}
                        kind="internship"
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        groupIcon={experience.groupIcon}
                        employmentType={
                          experience.employmentType || "Internship"
                        }
                        workplaceType={experience.workplaceType}
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

export default Education;
