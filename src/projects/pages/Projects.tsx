import Wrapper from "../../shared/components/Wrapper";
import Header from "../../shared/components/Header";
import Project from "../components/Project";
import { PROJECTS } from "../../constants/projects";

const Projects: React.FC = () => {
  return (
    <section className="bg-canvas pt-24 pb-24">
      <Wrapper>
        <Header
          index="04"
          eyebrow="Selected work"
          text="Projects & things being built."
          description="A rotating set — from applied AI systems to flight software and product surfaces. Full case studies on request."
        />

        <div className="mt-6">
          {PROJECTS.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-ink-dim text-[14px]">
                Case studies coming soon.
              </p>
            </div>
          ) : (
            PROJECTS.map((project, index) => (
              <Project
                key={project.id}
                project={project}
                index={index}
                last={index === PROJECTS.length - 1}
              />
            ))
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
