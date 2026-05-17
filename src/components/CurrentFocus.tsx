import { Brain, Bot, CloudCog, Network } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const focusAreas = [
  {
    id: "ai-infra",
    title: "AI Infrastructure",
    description: "Building long-term memory systems for intelligent agents.",
    icon: Brain,
    color: "from-[#0077b5] to-cyan-500"
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    description: "Apache Spark, Apache Flink, and backend systems for scalable AI workloads.",
    icon: Network,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "orchestration",
    title: "Workflow Orchestration",
    description: "Temporal, Flyte, Airflow DAGs, and durable AI pipelines.",
    icon: CloudCog,
    color: "from-orange-500 to-rose-500"
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Retrieval systems, LLM evaluation, and autonomous agent reliability.",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500"
  }
];

const CurrentFocus = () => {
  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <section id="focus" className="py-24 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 md:mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Current Focus
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building the infrastructure behind production AI systems
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className={`p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
