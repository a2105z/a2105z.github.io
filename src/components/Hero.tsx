import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsla(200,50%,45%,0.25),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsla(215,60%,30%,0.35),transparent_50%)]" />

      <div ref={ref} className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Software Engineer
          </p>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight">
            Aarav Mittal
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 max-w-3xl mx-auto leading-snug">
            Building AI products that reason, retrieve, and remember.
          </h2>

          <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Flagship: <span className="text-white font-semibold">Chronos</span> — natural language in, constraint-backed
            calendar out. Software Engineer Fellow at Databricks · Intern at Rivian (Vehicle Telematics) · B.S./M.S. CS
            at UIUC Grainger.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Button
              size="lg"
              className="h-12 px-7 bg-white text-primary hover:bg-white/90 font-semibold rounded-xl"
              onClick={() => scrollToSection("projects")}
            >
              See Chronos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white font-semibold rounded-xl"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Button>
          </div>

          <div className="flex gap-3 justify-center pt-2">
            <a
              href="https://github.com/a2105z"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/aaravmittal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20"
            aria-label="Scroll to about"
          >
            <ArrowDown className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
