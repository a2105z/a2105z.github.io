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

const isSummerTerm = (experience: Experience) =>
  experience.startDate.startsWith("May ") &&
  experience.endDate.startsWith("Aug ");

type InternshipRow = {
  key: string;
  engineering: Experience[];
  business: Experience[];
  sideBySide: boolean;
};

const groupInternships = (items: Experience[]): InternshipRow[] => {
  const rows: InternshipRow[] = [];
  const summerRows = new Map<string, InternshipRow>();

  items.forEach((experience) => {
    if (!isSummerTerm(experience)) {
      const business = experience.internshipTrack === "business";
      rows.push({
        key: `${experience.company}-${experience.startDate}`,
        engineering: business ? [] : [experience],
        business: business ? [experience] : [],
        sideBySide: false,
      });
      return;
    }

    const key = `${experience.startDate}|${experience.endDate}`;
    let row = summerRows.get(key);
    if (!row) {
      row = { key, engineering: [], business: [], sideBySide: true };
      summerRows.set(key, row);
      rows.push(row);
    }
    if (experience.internshipTrack === "business") row.business.push(experience);
    else row.engineering.push(experience);
  });

  return rows;
};

const InternshipEntry: React.FC<{
  experience: Experience;
  delay: number;
}> = ({ experience, delay }) => (
  <ExperienceItem
    company={experience.company}
    logo={experience.logo}
    logoFull={experience.logoFull}
    tileColor={experience.tileColor}
    monogram={experience.monogram}
    location={experience.location}
    summary={experience.summary}
    delay={delay}
    roles={experience.roles}
    kind="internship"
    startDate={experience.startDate}
    endDate={experience.endDate}
    groupIcon={experience.groupIcon}
    employmentType={experience.employmentType || "Internship"}
    workplaceType={experience.workplaceType}
  />
);

const InternshipList: React.FC<{ items: Experience[] }> = ({ items }) => {
  const rows = groupInternships(items);
  let delayIndex = 0;

  return (
    <ul className="divide-y divide-line border-t border-line">
      {rows.map((row) => {
        const engineering = row.engineering.map((experience) => {
          const delay = delayIndex * 0.03;
          delayIndex += 1;
          return (
            <InternshipEntry
              key={`${experience.company}-${experience.startDate}`}
              experience={experience}
              delay={delay}
            />
          );
        });
        const business = row.business.map((experience) => {
          const delay = delayIndex * 0.03;
          delayIndex += 1;
          return (
            <InternshipEntry
              key={`${experience.company}-${experience.startDate}`}
              experience={experience}
              delay={delay}
            />
          );
        });

        return (
          <li key={row.key} className="py-5">
            {row.sideBySide ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-start">
                <div className="min-w-0 space-y-6">{engineering}</div>
                <div className="min-w-0 space-y-6">{business}</div>
              </div>
            ) : (
              <div className="space-y-6">
                {engineering}
                {business}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const startSortKey = (startDate: string): number => {
  const parts = startDate.trim().split(/\s+/);
  const year = Number(parts[parts.length - 1]);
  const month = parts.length > 1 ? MONTHS[parts[0].slice(0, 3)] ?? 0 : 0;
  return year * 12 + month;
};

const Education: React.FC = () => {
  const [showSummer, setShowSummer] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const summerInternships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) => (experience.kind ?? "internship") === "internship"
      )
        .slice()
        .sort((a, b) => startSortKey(b.startDate) - startSortKey(a.startDate)),
    []
  );

  const bumpLayout = () => {
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  const toggleSummer = () => {
    setShowSummer((open) => !open);
    bumpLayout();
  };

  const toggleCertifications = () => {
    setShowCertifications((open) => !open);
    bumpLayout();
  };

  return (
    <section className="bg-white pt-24 pb-28">
      <Wrapper>
        <Header
          eyebrow="Education"
          text="Engineering, management, and the business."
          description="Formal training behind the operating work."
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
              onClick={toggleSummer}
              aria-expanded={showSummer}
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:opacity-70 transition-opacity"
            >
              <span>
                {showSummer
                  ? "Hide Internships"
                  : "Show Internships"}
              </span>
              <span
                aria-hidden="true"
                className={`text-ink-dim transition-transform duration-300 ease-premium ${
                  showSummer ? "rotate-180" : ""
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
            {showSummer && (
              <motion.div
                key="summer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                className="overflow-hidden"
              >
                <div className="mt-4">
                  <InternshipList items={summerInternships} />
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
