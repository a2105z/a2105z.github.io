import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const chronos = {
  id: "chronos",
  title: "Chronos",
  badge: "Flagship · AI-Native",
  description: "Natural language in. Constraint-backed calendar out.",
  thesis:
    "Reasons over multi-spot plans and constraints, retrieves availability as ground truth, remembers per-user schedule state with diagnostics — so the model never invents capacity the calendar can’t support.",
  tech: ["Python", "FastAPI", "React", "TypeScript", "JWT", "FullCalendar", "Docker", "CI"],
  features: [
    "AI / deterministic planner separate from SchedulingEngine source of truth",
    "Multi-spot NL (“find me 3 spots, each 2 hours”) → contiguous constraint-backed blocks",
    "JWT multi-user, FullCalendar drag/resize, America/Chicago validation, Docker + CI",
    "Diagnostics when work can’t fit — explainable, editable weeks",
  ],
  github: "https://github.com/a2105z/Chronos",
};

const featured = [
  {
    id: "texform",
    title: "TeXForm",
    badge: "Multimodal AI",
    description: "Handwritten notes → LaTeX with a live demo.",
    thesis:
      "Retrieves visual structure from scans, reasons over handwriting vs. math, remembers a coherent .tex / PDF artifact.",
    tech: ["Python", "FastAPI", "React", "TrOCR", "Hugging Face"],
    features: [
      "Segmentation → OCR → math recognition → LaTeX assembly",
      "Productized React + FastAPI with Hugging Face Spaces demo",
      "Built for notes-in / LaTeX-out, not just a notebook",
    ],
    github: "https://github.com/a2105z/TeXForm",
    demo: "https://huggingface.co/spaces/amittal417/texform",
  },
];

const supporting = [
  {
    id: "meridian",
    title: "Meridian",
    blurb: "Full-stack academic journey tracker — auth, analytics, export (FastAPI + React).",
    github: "https://github.com/a2105z/Meridian",
  },
  {
    id: "cosmos",
    title: "Cosmos",
    blurb: "TI-84–inspired browser calculator — calc, graph, and AP Stats modes.",
    github: "https://github.com/a2105z/Cosmos",
    demo: "https://a2105z.github.io/Cosmos/",
  },
  {
    id: "coolgames",
    title: "CoolGames.io",
    blurb: "Classic browser games product — Chess, Tetris, Snake, Pong, 2048, and more.",
    github: "https://github.com/a2105z/CoolGames.io",
    demo: "https://a2105z.github.io/CoolGames.io/",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-5xl md:text-6xl font-normal text-primary mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by <span className="text-foreground font-semibold">Chronos</span> — AI products that reason, retrieve,
            and remember
          </p>
          <div className="w-20 h-1 bg-primary/80 mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <ChronosFeature project={chronos} />
        </div>

        <div className="grid md:grid-cols-1 max-w-3xl mx-auto">
          {featured.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-2xl font-semibold text-center mb-3 text-foreground">Software & Product Builds</h3>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            Full-stack and product/PM-shaped apps — shipping UX and iteration
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {supporting.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.blurb}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => window.open(p.github, "_blank")}>
                    <Github className="mr-1.5 h-3.5 w-3.5" />
                    Code
                  </Button>
                  {p.demo && (
                    <Button size="sm" variant="ghost" onClick={() => window.open(p.demo, "_blank")}>
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ChronosFeature = ({ project }: { project: typeof chronos }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <Card
      ref={ref}
      className={`overflow-hidden border-2 border-primary/40 shadow-lg transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="h-2.5 bg-primary" />
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0">
        <CardHeader className="p-8 md:p-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <CardTitle className="text-4xl md:text-5xl font-display tracking-tight">{project.title}</CardTitle>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-primary-foreground whitespace-nowrap">
              {project.badge}
            </span>
          </div>
          <CardDescription className="text-xl text-foreground/90 font-medium">{project.description}</CardDescription>
          <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary pl-4">
            {project.thesis}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-muted text-foreground rounded-md">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              View Chronos on GitHub
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-8 md:p-10 bg-primary/[0.04] border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Highlights</p>
          <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-primary mt-1.5 text-lg leading-none">•</span>
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </Card>
  );
};

type Featured = (typeof featured)[0];

const FeaturedCard = ({ project, index }: { project: Featured; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <Card
      ref={ref}
      className={`group flex flex-col border-2 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="h-2 bg-primary" />
      <CardHeader>
        <div className="flex items-center justify-between gap-2 mb-1">
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary whitespace-nowrap">
            {project.badge}
          </span>
        </div>
        <CardDescription className="text-base">{project.description}</CardDescription>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed border-l-2 border-primary/40 pl-3">
          {project.thesis}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-muted text-foreground rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <ul className="space-y-1.5 text-sm text-muted-foreground flex-grow">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1" onClick={() => window.open(project.github, "_blank")}>
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
          {project.demo && (
            <Button
              size="sm"
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={() => window.open(project.demo, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
