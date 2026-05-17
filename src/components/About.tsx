import { GraduationCap, MapPin, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-5xl md:text-6xl font-normal text-primary mb-4">About</h2>
          <div className="w-20 h-1 bg-primary/80 mx-auto rounded-full" />
        </div>

        <div
          className={`max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p>
            I build <span className="text-foreground font-semibold">software and AI products</span> end to end —
            systems that can <span className="text-foreground font-semibold">reason</span> over goals and constraints,{" "}
            <span className="text-foreground font-semibold">retrieve</span> the right context, and{" "}
            <span className="text-foreground font-semibold">remember</span> what matters across a session — then ship
            that as reliable product software.
          </p>
          <p>
            At <span className="text-foreground font-semibold">Databricks</span>, I work as a Software Engineer Fellow
            on open-source AI / Omnigent agent infrastructure. At{" "}
            <span className="text-foreground font-semibold">Rivian</span>, I intern as a Software Engineer focused on
            vehicle telematics. Alongside industry work I ship{" "}
            <span className="text-foreground font-semibold">Chronos</span> (AI-native planner) and TeXForm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              body: "UIUC Grainger · B.S./M.S. Computer Science · B.S. Electrical Engineering · B.S. ILEE · Class of 2029",
            },
            {
              icon: MapPin,
              title: "Based in",
              body: "Chicago, Illinois — open to software engineering and AI engineering roles.",
            },
            {
              icon: Target,
              title: "Looking for",
              body: "SWE / AI Engineering / AI Product internships — agents, infrastructure, retrieval & memory, platforms.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
