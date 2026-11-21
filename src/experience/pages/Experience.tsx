import { useMemo, useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCES, InternshipTrack } from "../../constants/projects";

const TRACKS: { id: InternshipTrack; label: string; description: string }[] = [
  {
    id: "tech",
    label: "Tech Internships",
    description: "Software roles, most recent first.",
  },
  {
    id: "finance",
    label: "Finance Internships",
    description: "Finance roles, most recent first.",
  },
];

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

const Experience: React.FC = () => {
  const [track, setTrack] = useState<InternshipTrack>("tech");

  const internships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) =>
          (experience.kind ?? "internship") === "internship" &&
          (experience.internshipTrack ?? "tech") === track
      )
        .slice()
        .sort((a, b) => startSortKey(b.startDate) - startSortKey(a.startDate)),
    [track]
  );

  const active = TRACKS.find((item) => item.id === track) ?? TRACKS[0];

  return (
    <section className="reveal bg-canvas pt-28 pb-32">
      <Wrapper>
        <Header
          index="02"
          eyebrow="Experience"
          text="The work so far."
          description={
            internships.length > 0 ? active.description : undefined
          }
        />

        <div
          role="tablist"
          aria-label="Internship track"
          className="mt-8 inline-flex max-w-full flex-wrap gap-1 rounded-full border border-line bg-surface p-1"
        >
          {TRACKS.map((item) => {
            const selected = item.id === track;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setTrack(item.id)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  selected
                    ? "bg-ink text-canvas"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {internships.length === 0 ? (
          <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {active.label} will live here.
          </p>
        ) : (
          <ul className="mt-10 divide-y divide-line">
            {internships.map((experience, index) => (
              <li
                key={`${experience.company}-${experience.startDate}`}
                className="py-5 first:pt-2"
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
                  employmentType={experience.employmentType || "Internship"}
                  workplaceType={experience.workplaceType}
                />
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    </section>
  );
};

export default Experience;
