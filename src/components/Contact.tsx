import { Button } from "@/components/ui/button";
import { Github, Linkedin, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-background/85" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-5xl md:text-6xl font-normal text-primary mb-4">Contact</h2>
          <div className="w-20 h-1 bg-primary/80 mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Open to software engineering and AI engineering opportunities. Reach me on LinkedIn or browse my work on
            GitHub.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="h-4 w-4" />
            <span>Chicago, Illinois</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="h-12 px-7 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
              onClick={() => window.open("https://www.linkedin.com/in/aaravmittal/", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 font-semibold rounded-xl border-2"
              onClick={() => window.open("https://github.com/a2105z", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
