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
  experience.startDate.startsWith("May");

const isYearLongCoop = (experience: Experience) =>
  experience.startDate.startsWith("Sep");

const InternshipList: React.FC<{
  items: Experience[];
  employmentType?: string;
}> = ({ items, employmentType }) => (
  <ul className="divide-y divide-line border-t border-line">
    {items.map((experience, index) => (
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
          summary={experience.summary}
          delay={index * 0.03}
          roles={experience.roles}
          kind="internship"
          startDate={experience.startDate}
          endDate={experience.endDate}
          groupIcon={experience.groupIcon}
          employmentType={
            employmentType || experience.employmentType || "Internship"
          }
          workplaceType={experience.workplaceType}
        />
      </li>
    ))}
  </ul>
);

const SubToggle: React.FC<{
  open: boolean;
  onToggle: () => void;
  showLabel: string;
  hideLabel: string;
}> = ({ open, onToggle, showLabel, hideLabel }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-expanded={open}
    className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:opacity-70 transition-opacity"
  >
    <span>{open ? hideLabel : showLabel}</span>
    <span
      aria-hidden="true"
      className={`text-ink-dim transition-transform duration-300 ease-premium ${
        open ? "rotate-180" : ""
      }`}
    >
      ↓
    </span>
  </button>
);

const Education: React.FC = () => {
  const [showEngineering, setShowEngineering] = useState(false);
  const [showSummer, setShowSummer] = useState(false);
  const [showCoops, setShowCoops] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const engineeringInternships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) =>
          (experience.kind ?? "internship") === "internship" &&
          (experience.internshipTrack ?? "engineering") === "engineering"
      ),
    []
  );

  const summerInternships = useMemo(
    () => engineeringInternships.filter(isSummerTerm),
    [engineeringInternships]
  );

  const yearLongCoops = useMemo(
    () => engineeringInternships.filter(isYearLongCoop),
    [engineeringInternships]
  );

  const businessInternships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) =>
          (experience.kind ?? "internship") === "internship" &&
          experience.internshipTrack === "business"
      ),
    []
  );

  const bumpLayout = () => {
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  const toggleEngineering = () => {
    setShowEngineering((open) => {
      if (open) {
        setShowSummer(false);
        setShowCoops(false);
      }
      return !open;
    });
    bumpLayout();
  };

  const toggleSummer = () => {
    setShowSummer((open) => !open);
    bumpLayout();
  };

  const toggleCoops = () => {
    setShowCoops((open) => !open);
    bumpLayout();
  };

  const toggleBusiness = () => {
    setShowBusiness((open) => !open);
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
              onClick={toggleEngineering}
              aria-expanded={showEngineering}
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:opacity-70 transition-opacity"
            >
              <span>
                {showEngineering
                  ? "Hide Engineering Internships"
                  : "Show Engineering Internships"}
              </span>
              <span
                aria-hidden="true"
                className={`text-ink-dim transition-transform duration-300 ease-premium ${
                  showEngineering ? "rotate-180" : ""
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
              onClick={toggleBusiness}
              aria-expanded={showBusiness}
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink hover:opacity-70 transition-opacity"
            >
              <span>
                {showBusiness
                  ? "Hide Business Internships"
                  : "Show Business Internships"}
              </span>
              <span
                aria-hidden="true"
                className={`text-ink-dim transition-transform duration-300 ease-premium ${
                  showBusiness ? "rotate-180" : ""
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
            {showEngineering && (
              <motion.div
                key="engineering"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                className="overflow-hidden"
              >
                <div className="mt-4 pl-1 sm:pl-2 border-l border-line">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pl-3 sm:pl-4">
                    <SubToggle
                      open={showSummer}
                      onToggle={toggleSummer}
                      showLabel="Show Summer Internships"
                      hideLabel="Hide Summer Internships"
                    />
                    <span
                      aria-hidden="true"
                      className="text-ink-faint hidden sm:inline"
                    >
                      ·
                    </span>
                    <SubToggle
                      open={showCoops}
                      onToggle={toggleCoops}
                      showLabel="Show Year-Long Co-Ops"
                      hideLabel="Hide Year-Long Co-Ops"
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {showSummer && (
                      <motion.div
                        key="summer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pl-3 sm:pl-4">
                          <InternshipList
                            items={summerInternships}
                            employmentType="Internship"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence initial={false}>
                    {showCoops && (
                      <motion.div
                        key="coops"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pl-3 sm:pl-4">
                          <InternshipList
                            items={yearLongCoops}
                            employmentType="Co-Op"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {showBusiness && (
              <motion.div
                key="business"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                className="overflow-hidden"
              >
                <div className="mt-4">
                  <InternshipList items={businessInternships} />
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
