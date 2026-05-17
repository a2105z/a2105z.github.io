import { BrainCircuit, Code2, Database, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    id: "languages",
    category: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "C++", "Java", "Kotlin", "JavaScript", "SQL"],
  },
  {
    id: "ai",
    category: "AI Systems",
    icon: BrainCircuit,
    skills: ["Agentic AI", "LLM Apps", "RAG / Retrieval", "OCR / NLP", "Document AI", "Multimodal"],
  },
  {
    id: "backend",
    category: "Backend & Data",
    icon: Database,
    skills: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "REST APIs", "SQLite"],
  },
  {
    id: "product",
    category: "Product & Frontend",
    icon: Layers,
    skills: ["React", "Vite", "Jetpack Compose", "Full-stack shipping", "CI/CD"],
  },
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-5xl md:text-6xl font-normal text-primary mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Toolkit for shipping software and AI products
          </p>
          <div className="w-20 h-1 bg-primary/80 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-muted text-foreground rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
