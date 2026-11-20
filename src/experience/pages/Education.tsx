import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import EducationItem from "../components/EducationItem";
import { EDUCATION } from "../../constants/projects";

const Education: React.FC = () => {
  return (
    <section className="reveal bg-canvas pt-28 pb-32">
      <Wrapper>
        <Header
          index="03"
          eyebrow="Education"
          text="Where I'm learning."
          description="University of Illinois. Two degrees, one question."
        />

        <ul className="mt-10 divide-y divide-line">
          {EDUCATION.map((edu, index) => (
            <li key={`${edu.institution}-${index}`} className="py-5 first:pt-2">
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
      </Wrapper>
    </section>
  );
};

export default Education;
