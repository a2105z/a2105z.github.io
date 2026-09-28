import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import EducationItem from "../components/EducationItem";
import ExperienceItem from "../components/ExperienceItem";
import CertificationItem from "../components/CertificationItem";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  Experience,
} from "../../constants/projects";
import { EASE_PREMIUM } from "../../shared/motion";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const parseStart = (startDate: string) => {
  const [monthLabel, yearLabel] = startDate.split(" ");
  return {
    month: MONTHS.indexOf(monthLabel),
    year: Number(yearLabel),
  };
};

const termKey = (experience: Experience) => {
  const { month, year } = parseStart(experience.startDate);
  if (month >= 4 && month <= 7) return `summer-${year}`;
  if (month >= 8) return `academic-${year}`;
  return `academic-${year - 1}`;
};

const isBusiness = (experience: Experience) =>
  experience.internshipTrack === "business";

const groupByTerm = (items: Experience[]) => {
  const ordered = [...items].sort((a, b) => {
    const startA = parseStart(a.startDate);
    const startB = parseStart(b.startDate);
    if (startA.year !== startB.year) return startB.year - startA.year;
    if (startA.month !== startB.month) return startB.month - startA.month;
    return Number(isBusiness(a)) - Number(isBusiness(b));
  });

  const groups: Experience[][] = [];
  ordered.forEach((experience) => {
    const key = termKey(experience);
    const current = groups[groups.length - 1];
    if (!current || termKey(current[0]) !== key) {
      groups.push([experience]);
      return;
    }
    current.push(experience);
  });

  return groups.map((group) =>
    [...group].sort((a, b) => Number(isBusiness(a)) - Number(isBusiness(b)))
  );
};

const InternshipGroups: React.FC<{ items: Experience[] }> = ({ items }) => {
  const groups = groupByTerm(items);

  return (
    <div className="mt-2 flex flex-col gap-12">
      {groups.map((group) => (
        <ul
          key={termKey(group[0])}
          className="flex flex-col"
        >
          {group.map((experience, index) => {
            const trackBreak =
              index > 0 && !isBusiness(group[index - 1]) && isBusiness(experience);
            return (
              <li
                key={`${experience.company}-${experience.startDate}-${index}`}
                className={trackBreak ? "mt-6 pt-1" : index === 0 ? "" : "mt-1"}
              >
                <div className="py-3">
                  <ExperienceItem
                    company={experience.company}
                    logo={experience.logo}
                    logoFull={experience.logoFull}
                    tileColor={experience.tileColor}
                    monogram={experience.monogram}
                    location={experience.location}
                    summary={experience.summary}
                    delay={index * 0.03}
                    roles={experience.roles}
                    kind="internship"
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    groupIcon={experience.groupIcon}
                    employmentType={experience.employmentType || "Internship"}
                    workplaceType={experience.workplaceType}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
};

const Education: React.FC = () => {
  const [showInternships, setShowInternships] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const internships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) => (experience.kind ?? "internship") === "internship"
      ),
    []
  );

  const bumpLayout = () => {
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  const toggleInternships = () => {
    setShowInternships((open) => !open);
    bumpLayout();
  };

  const toggleCertifications = () => {
    setShowCertifications((open) => !open);
    bumpLayout();
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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={toggleInternships}
              aria-expanded={showInternships}
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:opacity-70 transition-opacity"
            >
              <span>
                {showInternships ? "Hide Internships" : "Show Internships"}
              </span>
              <span
                aria-hidden="true"
                className={`text-ink-dim transition-transform duration-300 ease-premium ${
                  showInternships ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>

            <span aria-hidden="true" className="text-ink-faint hidden sm:inline">
              ·
            </span>

            <button
              type="button"
              onClick={toggleCertifications}
              aria-expanded={showCertifications}
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:opacity-70 transition-opacity"
            >
              <span>
                {showCertifications
                  ? "Hide Certifications"
                  : "Show Certifications"}
              </span>
              <span
                aria-hidden="true"
                className={`text-ink-dim transition-transform duration-300 ease-premium ${
                  showCertifications ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </div>

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
                <div className="mt-4">
                  <InternshipGroups items={internships} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {showCertifications && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                className="overflow-hidden"
              >
                <ul className="mt-4 divide-y divide-line border-t border-line">
                  {CERTIFICATIONS.map((cert, index) => (
                    <li
                      key={`${cert.name}-${cert.issued}`}
                      className="py-5"
                    >
                      <CertificationItem
                        name={cert.name}
                        issuer={cert.issuer}
                        monogram={cert.monogram}
                        logo={cert.logo}
                        logoFull={cert.logoFull}
                        tileColor={cert.tileColor}
                        issued={cert.issued}
                        expires={cert.expires}
                        credentialId={cert.credentialId}
                        summary={cert.summary}
                        delay={index * 0.03}
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
