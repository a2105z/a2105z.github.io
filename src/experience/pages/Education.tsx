import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import EducationItem from "../components/EducationItem";
import { EDUCATION } from "../../constants/projects";

const Education: React.FC = () => {
  return (
    <section className="bg-canvas pt-24 pb-32">
      <Wrapper>
        <Header
          index="03"
          eyebrow="Education"
          text="Where I'm learning."
          description="Formal training across engineering, systems, product, and applied AI."
        />

        <div className="mt-14">
          <ul className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[20px] top-1 bottom-1 w-px bg-line hidden sm:block"
            />
            {EDUCATION.map((edu, index) => (
              <li
                key={`${edu.institution}-${index}`}
                className="relative sm:pl-16 pb-14 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="hidden sm:block absolute left-[17px] top-4 h-1.5 w-1.5 rounded-full bg-ink ring-4 ring-canvas"
                />
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-dim font-medium mb-3">
                  {`${edu.startDate} — ${edu.endDate}`}
                </p>
                <EducationItem
                  institution={edu.institution}
                  monogram={edu.monogram}
                  logo={edu.logo}
                  logoFull={edu.logoFull}
                  tileColor={edu.tileColor}
                  degree={edu.degree}
                  degreeSecondary={edu.degreeSecondary}
                  dateRange={edu.dateRange}
                  location={edu.location}
                  focus={edu.focus}
                  summary={edu.summary}
                  delay={index * 0.05}
                />
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Education;
