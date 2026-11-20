import { useMemo } from "react";
import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCES } from "../../constants/projects";

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
  const internships = useMemo(
    () =>
      EXPERIENCES.filter(
        (experience) => (experience.kind ?? "internship") === "internship"
      )
        .slice()
        .sort((a, b) => startSortKey(b.startDate) - startSortKey(a.startDate)),
    []
  );

  return (
    <section className="reveal bg-canvas pt-28 pb-32">
      <Wrapper>
        <Header
          index="02"
          eyebrow="Experience"
          text="The work so far."
          description="Internships across software and markets."
        />

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
      </Wrapper>
    </section>
  );
};

export default Experience;
