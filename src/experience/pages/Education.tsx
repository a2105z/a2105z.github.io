import { useMemo, useRef, useState } from "react";
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

type InternshipView = "summer-eng" | "academic" | "summer-biz";

const INTERNSHIP_VIEWS: { id: InternshipView; label: string }[] = [
  { id: "summer-eng", label: "Summer Engineering Internships" },
  { id: "academic", label: "Academic Year Engineering Internships" },
  { id: "summer-biz", label: "Summer Business Internships" },
];

const matchesView = (experience: Experience, view: InternshipView) => {
  const summer = isSummerTerm(experience);
  const business = experience.internshipTrack === "business";
  if (view === "summer-eng") return summer && !business;
  if (view === "academic") return !summer && !business;
  return summer && business;
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

const StableInternshipList: React.FC<{ items: Experience[] }> = ({ items }) => {
  const frozen = useRef(items);
  return <InternshipList items={frozen.current} />;
};

const InternshipList: React.FC<{ items: Experience[] }> = ({ items }) => (
  <ul className="divide-y divide-line border-t border-line">
    {items.map((experience, index) => (
      <li
        key={`${experience.company}-${experience.startDate}`}
        className="py-5"
      >
        <InternshipEntry experience={experience} delay={index * 0.03} />
      </li>
    ))}
  </ul>
);

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

const releasePanel = (panel: HTMLDivElement | null) => {
  if (!panel) return;
  panel.style.height = "auto";
  panel.style.overflow = "visible";
};

const Education: React.FC = () => {
  const [internshipView, setInternshipView] = useState<InternshipView | null>(
    null
  );
  const [showCertifications, setShowCertifications] = useState(false);
  const internshipPanelRef = useRef<HTMLDivElement>(null);
  const certificationPanelRef = useRef<HTMLDivElement>(null);

  const internships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) => (experience.kind ?? "internship") === "internship"
      )
        .slice()
        .sort((a, b) => startSortKey(b.startDate) - startSortKey(a.startDate)),
    []
  );

  const visibleInternships = useMemo(
    () =>
      internshipView
        ? internships.filter((experience) =>
            matchesView(experience, internshipView)
          )
        : [],
    [internships, internshipView]
  );

  const bumpLayout = () => {
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  const selectInternshipView = (view: InternshipView) => {
    if (internshipPanelRef.current) {
      internshipPanelRef.current.style.height = "";
      internshipPanelRef.current.style.overflow = "";
    }
    setInternshipView((current) => (current === view ? null : view));
    bumpLayout();
  };

  const toggleCertifications = () => {
    if (showCertifications && certificationPanelRef.current) {
      certificationPanelRef.current.style.height = "";
      certificationPanelRef.current.style.overflow = "";
    }
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
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-dim">
                Internships
              </p>
              <div
                role="radiogroup"
                aria-label="Internships"
                className="mt-3 flex flex-col items-start gap-2.5"
              >
                {INTERNSHIP_VIEWS.map((view) => {
                  const selected = internshipView === view.id;
                  return (
                    <button
                      key={view.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => selectInternshipView(view.id)}
                      className={`inline-flex items-center gap-2 text-left text-[14px] font-medium transition-colors ${
                        selected
                          ? "text-ink"
                          : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          selected ? "bg-ink" : "bg-ink-faint"
                        }`}
                      />
                      <span
                        className={
                          selected ? "border-b border-ink pb-px" : ""
                        }
                      >
                        {view.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

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

          <AnimatePresence initial={false} mode="wait">
            {internshipView && (
              <motion.div
                key={internshipView}
                ref={internshipPanelRef}
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  closed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                onAnimationComplete={(definition) => {
                  if (definition === "open") {
                    releasePanel(internshipPanelRef.current);
                  }
                }}
                className="overflow-hidden"
              >
                <div className="mt-4">
                  <StableInternshipList items={visibleInternships} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {showCertifications && (
              <motion.div
                key="certifications"
                ref={certificationPanelRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                onAnimationComplete={() => {
                  if (showCertifications) releasePanel(certificationPanelRef.current);
                }}
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
