import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCES } from "../../constants/projects";

const FULL_TIME = EXPERIENCES.filter(
  (experience) => (experience.kind ?? "internship") === "fulltime"
);

const Experience: React.FC = () => {
  return (
    <section className="bg-canvas pt-24 pb-32 font-linkedin">
      <Wrapper>
        <Header
          index="02"
          eyebrow="Experience"
          text="Full-time."
          description="Roles across product and leadership."
        />

        <div className="mt-10">
          {FULL_TIME.length === 0 ? (
            <p className="text-ink-muted text-[15px] sm:text-base leading-relaxed max-w-xl">
              Full-time roles will live here.
            </p>
          ) : (
            <ul className="divide-y divide-line">
              {FULL_TIME.map((experience, index) => (
                <li
                  key={`${experience.company}-${experience.startDate}-${index}`}
                  className="py-5 first:pt-2"
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
                    delay={index * 0.04}
                    roles={experience.roles}
                    kind="fulltime"
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    groupIcon={experience.groupIcon}
                    employmentType={experience.employmentType || "Full-time"}
                    workplaceType={experience.workplaceType}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default Experience;
