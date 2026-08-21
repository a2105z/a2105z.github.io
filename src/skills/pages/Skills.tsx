import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import SkillGroup from "../components/SkillGroup";

const Skills: React.FC = () => {
  return (
    <section className="bg-canvas pt-24 pb-32">
      <Wrapper>
        <Header
          index="04"
          eyebrow="Toolkit"
          text="Languages, frameworks, and things I reach for."
          description="A working set — not a laundry list. The tools that show up most in the work I ship."
        />

        <div className="mt-8">
          <SkillGroup skillTitle="Frontend" skillID="FRONTEND" />
          <SkillGroup skillTitle="Backend & Infra" skillID="BACKEND" />
          <SkillGroup skillTitle="Tools" skillID="TOOLS" />
          <SkillGroup skillTitle="Working style" skillID="SOFT" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
