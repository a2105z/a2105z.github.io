import { Award, Trophy, Star, Users, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import breakthroughImg from "@/assets/breakthrough-challenge.png";
import mitImg from "@/assets/mit-workshop.png";
import dubhacksImg from "@/assets/dubhacks-2025.png";
import top1Img from "@/assets/st-davids.png";
import deanListImg from "@/assets/paul-g-allen.jpg";
import dubstechImg from "@/assets/nyc.jpg";
import { useInView } from "@/hooks/useInView";

type AchievementLink = { label: string; url: string; color: string };

type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  icon: React.ElementType;
  gradient: string;
  links?: AchievementLink[];
};

const achievements: Achievement[] = [
  {
    id: "bjc",
    title: "Breakthrough Junior Challenge",
    subtitle: "Regional Champion - National Recognition",
    description: "Won regional championship and appeared on national television in South Africa explaining quantum entanglement to millions of viewers.",
    image: breakthroughImg,
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=B6aHY7g3mEs&list=PLyF3OMOiy3nFJ4NgkvuQya1jRmPzYt-7M&index=3", color: "bg-red-600 hover:bg-red-700" },
      { label: "eNCA", url: "https://www.youtube.com/watch?v=Qt1YY8Agudo", color: "bg-blue-600 hover:bg-blue-700" },
    ]
  },
  {
    id: "top1",
    title: "Top 1% Student in South Africa",
    subtitle: "Dux Scholar at St David's (95% Overall Average)",
    description: "Interviewed at eNCA and featured on the Saturday Star. Ranked top 1% nationally. Honored with \"IEB Outstanding Achiever\" award.",
    image: top1Img,
    icon: Award,
    gradient: "from-blue-500 to-purple-500",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/p/C2R_MuFCN9I/", color: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90" },
      { label: "947 Radio", url: "https://www.primediaplus.com/the-best-of-the-best-in-joburg-matrics-2023/", color: "bg-pink-600 hover:bg-pink-700" },
      { label: "eNCA", url: "https://www.youtube.com/watch?v=1puiDv0Bvp8", color: "bg-blue-600 hover:bg-blue-700" },
      { label: "Saturday Star", url: "https://www.news24.com/drum/advice/parenting/something-that-worked-for-me-is-completely-ignoring-my-results-says-matric-with-8-distinctions-20240119", color: "bg-red-600 hover:bg-red-700" }
    ]
  },
  {
    id: "mit",
    title: "MIT Africa Innovation Workshop",
    subtitle: "Selected Participant",
    description: "Chosen to participate in exclusive MIT innovation workshop focused on entrepreneurship and technology in Africa.",
    image: mitImg,
    icon: Star,
    gradient: "from-red-500 to-pink-500",
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/aditya-kumar05_wow-what-an-amazing-experience-i-was-privileged-activity-7017569563412209664-L0vH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkS1S4BPK4ZGT9aoIF5jHNKFhNyQRK7iPM", color: "bg-[#0077b5] hover:bg-[#005885]" }
    ]
  },
  {
    id: "dubhacks",
    title: "DubHacks 2025",
    subtitle: "Top Project Recognition",
    description: "Built Seekr, an AI research agent that won recognition for innovation in AWS AI track, helping UW students find research opportunities.",
    image: dubhacksImg,
    icon: Users,
    gradient: "from-purple-500 to-blue-500",
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/aditya-kumar05_i-spent-this-past-weekend-at-dubhacks-2025-activity-7386212240296902657-dbKB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkS1S4BPK4ZGT9aoIF5jHNKFhNyQRK7iPM", color: "bg-[#0077b5] hover:bg-[#005885]" }
    ]
  },
  {
    id: "dubstech",
    title: "DubsTech Health ML Hackathon",
    subtitle: "4th Place Internationally",
    description: "Achieved 4th place globally with 93.4% accuracy CatBoost model predicting hospital discharge costs from 1.8M+ records.",
    image: dubstechImg,
    icon: Trophy,
    gradient: "from-green-500 to-teal-500",
    links: [
      { label: "GitHub", url: "https://github.com/AdiKum26/DubsTech-Health-ML-2025", color: "bg-neutral-800 hover:bg-neutral-900" }
    ]
  },
  {
    id: "deans-list",
    title: "Dean's List - All Quarters",
    subtitle: "University of Washington",
    description: "Maintained 3.83 GPA while pursuing Computer Science direct admit program at one of the top CS schools in the world.",
    image: deanListImg,
    icon: Award,
    gradient: "from-indigo-500 to-purple-500",
    links: [
      { label: "View", url: "https://registrar.washington.edu/grades/deans-lists/recipients/adl-seattle/", color: "bg-purple-800 hover:bg-purple-900" }
    ]
  }
];

const impactStats = [
  { id: "books", number: "3,300+", label: "Books Donated", description: "Through LITSWAP NGO platform" },
  { id: "animals", number: "1,200+", label: "Animals Rescued", description: "Via Rainbow Nation Animals website" },
  { id: "students", number: "100+", label: "Students Helped", description: "Through leadership & mentorship" }
];

const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section id="achievements" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for innovation, leadership, and academic excellence
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Creating Real Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((impact, index) => (
              <ImpactCard key={impact.id} impact={impact} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const Icon = achievement.icon;
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Image */}
      {achievement.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={achievement.image}
            alt={achievement.title}
            loading="lazy"
            className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
              achievement.id === "top1" ? "object-contain object-center" : "object-cover object-top"
            }`}
          />
          <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      ) : (
        <div className={`h-48 bg-gradient-to-br ${achievement.gradient} relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-20 w-20 text-white/20" />
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-3 flex flex-col flex-grow">
        <div className="space-y-1">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{achievement.title}</h3>
          <p className="text-sm font-semibold text-secondary">{achievement.subtitle}</p>
        </div>
        <p className="text-muted-foreground leading-relaxed flex-grow">{achievement.description}</p>

        {achievement.links && achievement.links.length > 0 && (
          <div className={`grid gap-3 mt-4 ${achievement.links.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {achievement.links.map((link) => (
              <Button
                key={link.url}
                onClick={(e) => { e.stopPropagation(); window.open(link.url, '_blank'); }}
                className={`${link.color} text-white font-semibold text-sm py-2.5 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 hover:-translate-y-0.5`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const ImpactCard = ({ impact, index }: { impact: typeof impactStats[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`text-center p-8 rounded-2xl bg-[var(--gradient-card)] border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
        {impact.number}
      </div>
      <div className="text-lg font-bold mb-2">{impact.label}</div>
      <p className="text-sm text-muted-foreground">{impact.description}</p>
    </div>
  );
};

export default Achievements;