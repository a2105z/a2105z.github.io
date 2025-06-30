import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCES } from "../../constants/projects";

const Experience: React.FC = () => {
  return (
    <section className="bg-canvas pt-24 pb-32">
      <Wrapper>
        <Header
          index="02"
          eyebrow="Experience"
          text="Where I've been building."
          description="Selected engineering work across autonomy, AI, systems, and infrastructure."
        />

        <div className="mt-14">
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
                    location={experience.location}
                    summary={experience.summary}
                    delay={index * 0.05}
                    roles={experience.roles}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Experience;
