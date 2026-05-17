import { Briefcase, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    id: "databricks",
    company: "Databricks",
    role: "Software Engineer Fellow",
    location: "Remote / US",
    period: "Present",
    achievements: [
      "Focused on open-source AI / Omnigent — a meta-harness for composing, controlling, and sharing agents",
      "Work spans agent composition across harnesses and models, policy and control at the meta-harness layer, and infrastructure that helps agentic products ship reliably",
      "Contributing to agentic AI systems aligned with production platform needs",
    ],
  },
  {
    id: "rivian",
    company: "Rivian",
    role: "Software Engineer Intern",
    location: "United States",
    period: "Present",
    focus: "Vehicle Telematics",
    achievements: [
      "Software Engineer Intern focused on vehicle telematics — software connecting vehicle systems, data, and product surfaces",
      "Building in a high-reliability automotive product environment across systems and application layers",
    ],
  },
];

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-5xl md:text-6xl font-normal text-primary mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Software engineering roles across AI infrastructure and vehicle systems
          </p>
          <div className="w-20 h-1 bg-primary/80 mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type Exp = (typeof experiences)[0];

const ExperienceCard = ({ exp, index }: { exp: Exp; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-colors">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm font-semibold mb-3">
              {exp.period}
              {"focus" in exp && exp.focus ? ` · ${exp.focus}` : ""}
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">{exp.role}</h3>
            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                {exp.company}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {exp.location}
              </span>
            </div>
          </div>
        </div>
        <ul className="space-y-3">
          {exp.achievements.map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary font-bold mt-0.5">▸</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
