import ProjectItem from "../shared/models/ProjectItem";
import {
  PLACEHOLDER_AI_SKILLS,
  PLACEHOLDER_WEB_SKILLS,
  PLACEHOLDER_MOBILE_SKILLS,
} from "./skills";

export const PLACEHOLDER_ALPHA_ID = "placeholder-alpha";
export const PLACEHOLDER_BETA_ID = "placeholder-beta";
export const PLACEHOLDER_GAMMA_ID = "placeholder-gamma";

export type ExperienceRoleLink = {
  label: string;
  href: string;
};

export type ExperienceRole = {
  title: string;
  dateRange: string;
  location?: string;
  highlights: string[];
  links?: ExperienceRoleLink[];
};

export type Experience = {
  company: string;
  monogram: string;
  logo: string;
  logoFull?: boolean;
  /** Hex color the logo tile should adopt when `logoFull` is true, so the badge
   *  chrome flows seamlessly with the logo's own background (no white halo). */
  tileColor?: string;
  location?: string;
  startDate: string;
  endDate: string;
  summary: string;
  roles: ExperienceRole[];
};

export type Education = {
  institution: string;
  monogram: string;
  logo: string;
  logoFull?: boolean;
  tileColor?: string;
  location?: string;
  degree: string;
  degreeSecondary?: string;
  startDate: string;
  endDate: string;
  dateRange: string;
  focus: string[];
  summary?: string;
};

const FIVE_BULLETS: string[] = [
  "Bullet #1",
  "Bullet #2",
  "Bullet #3",
  "Bullet #4",
  "Bullet #5",
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Rivian and Volkswagen Group Technologies",
    monogram: "RV",
    logo: "/icons/organizations/rv-tech.png",
    logoFull: true,
    tileColor: "#000000",
    location: "Palo Alto, California, United States",
    startDate: "Jun 2026",
    endDate: "Aug 2026",
    summary:
      "Software engineering on the Vehicle Telematics team — building tooling and infrastructure for software-defined vehicle platforms.",
    roles: [
      {
        title: "Software Engineer Intern, Vehicle Telematics",
        dateRange: "Jun 2026 — Aug 2026",
        location: "Palo Alto, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Google",
    monogram: "G",
    logo: "/icons/organizations/google.png",
    location: "Mountain View, California, United States",
    startDate: "Jun 2026",
    endDate: "Aug 2026",
    summary:
      "Externship on Google Cloud AI — contributing to developer tools and integrations across the Cloud AI surface.",
    roles: [
      {
        title: "Software Engineer Extern, Cloud AI",
        dateRange: "Jun 2026 — Aug 2026",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Rivian",
    monogram: "RIV",
    logo: "/icons/organizations/rivian.png",
    location: "Urbana, Illinois, United States",
    startDate: "Sep 2026",
    endDate: "May 2027",
    summary:
      "Software engineering internship on vehicle firmware — embedded systems work across Rivian's vehicle stack.",
    roles: [
      {
        title: "Software Engineering Intern, Vehicle Firmware",
        dateRange: "Sep 2026 — May 2027",
        location: "Urbana, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "NVIDIA",
    monogram: "NV",
    logo: "/icons/organizations/nvidia.svg",
    location: "Urbana, Illinois, United States",
    startDate: "Sep 2026",
    endDate: "May 2027",
    summary:
      "Student research with NVIDIA's NeMo team — applied AI research across large language and multimodal systems.",
    roles: [
      {
        title: "AI Student Researcher, NeMo",
        dateRange: "Sep 2026 — May 2027",
        location: "Urbana, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Amazon",
    monogram: "AMZ",
    logo: "/icons/organizations/amazon.png",
    logoFull: true,
    tileColor: "#f47024",
    location: "Urbana, Illinois, United States",
    startDate: "2025",
    endDate: "2025",
    summary:
      "Research-focused software engineering on the Alexa AGI research team — applied ML and systems work on next-generation Alexa intelligence.",
    roles: [
      {
        title: "Software Development Engineer Intern, Alexa AGI Research",
        dateRange: "06/2025 — 08/2025",
        location: "Urbana, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "NASA",
    monogram: "NASA",
    logo: "/icons/organizations/nasa.png",
    location: "Phoenix, Arizona, United States",
    startDate: "2025",
    endDate: "2025",
    summary:
      "Embedded and flight software for the Lucy mission spacecraft — exploring AI/ML-native flight OS architecture and spacecraft telematics.",
    roles: [
      {
        title: "Embedded Software Engineer Intern, Lucy Mission",
        dateRange: "01/2025 — 05/2025",
        location: "Phoenix, Arizona, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Palantir Technologies",
    monogram: "P",
    logo: "/icons/organizations/palantir.png",
    logoFull: true,
    tileColor: "#000000",
    location: "New York City, New York, United States",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    summary:
      "Software Engineering Fellowship focused on Defense & National Security — applied engineering alongside platform and forward-deployed teams.",
    roles: [
      {
        title: "Software Engineering Fellow, Defense & National Security",
        dateRange: "Jun 2024 — Aug 2024",
        location: "New York City, New York, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "AlgoDynamix",
    monogram: "AD",
    logo: "/icons/organizations/algodynamix.png",
    logoFull: true,
    tileColor: "#000000",
    location: "Remote · London, United Kingdom",
    startDate: "2022",
    endDate: "2023",
    summary:
      "Applied machine learning at AlgoDynamix — a quantitative fintech using non-equilibrium models to forecast large price movements across global markets.",
    roles: [
      {
        title: "Machine Learning Engineer Intern",
        dateRange: "2022 — 2023",
        location: "Remote · London, United Kingdom",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "University of California, Berkeley",
    monogram: "UCB",
    logo: "/icons/organizations/berkeley.svg",
    logoFull: true,
    tileColor: "#003262",
    location: "Berkeley, California, United States",
    degree:
      "Master of Engineering, Electrical Engineering & Computer Sciences",
    startDate: "Aug 2028",
    endDate: "Spring 2029",
    dateRange: "Aug 2028 — Spring 2029",
    focus: [
      "Artificial Intelligence",
      "Data Science",
      "Computer Vision",
      "Product",
    ],
  },
  {
    institution: "University of Illinois Urbana–Champaign",
    monogram: "UIUC",
    logo: "/icons/organizations/uiuc.png",
    logoFull: true,
    tileColor: "#13294B",
    location: "Urbana–Champaign, Illinois, United States",
    degree:
      "Bachelor of Science, Computer Science · Bachelor of Science, Electrical Engineering",
    degreeSecondary:
      "Bachelor of Science, Innovation, Leadership & Engineering Entrepreneurship",
    startDate: "Aug 2024",
    endDate: "May 2028",
    dateRange: "Aug 2024 — May 2028",
    focus: [
      "Computer Science",
      "Electrical Engineering",
      "Artificial Intelligence",
      "Technology Entrepreneurship",
    ],
  },
];

export const PROJECTS = [
  new ProjectItem(
    PLACEHOLDER_ALPHA_ID,
    "placeholder",
    "Project Alpha",
    "Project Alpha",
    "Placeholder description for a flagship AI / systems project.",
    "Placeholder description for a flagship AI / systems project.",
    "Placeholder impact metric goes here.",
    PLACEHOLDER_ALPHA_ID,
    PLACEHOLDER_AI_SKILLS,
    "Personal",
    null,
    "Remote",
    "Engineer",
    "TBD",
    "Present",
    ["Placeholder Service", "Placeholder Service"],
    [
      "Placeholder bullet describing what the project does and who it is for.",
      "Placeholder bullet describing the architecture and core technical decisions.",
      "Placeholder bullet describing measurable results, scale, or learnings.",
    ],
    [],
    [],
    [],
    null,
    null,
    null
  ),
  new ProjectItem(
    PLACEHOLDER_BETA_ID,
    "placeholder",
    "Project Beta",
    "Project Beta",
    "Placeholder description for a full-stack web project.",
    "Placeholder description for a full-stack web project.",
    null,
    PLACEHOLDER_BETA_ID,
    PLACEHOLDER_WEB_SKILLS,
    "Personal",
    null,
    "Remote",
    "Engineer",
    "TBD",
    "TBD",
    ["Placeholder Service", "Placeholder Service"],
    [
      "Placeholder bullet describing the problem this project tackles.",
      "Placeholder bullet describing the stack, infrastructure, and integrations used.",
      "Placeholder bullet describing the outcome and next steps.",
    ],
    [],
    [],
    [],
    null,
    null,
    null
  ),
  new ProjectItem(
    PLACEHOLDER_GAMMA_ID,
    "placeholder",
    "Project Gamma",
    "Project Gamma",
    "Placeholder description for a mobile / hardware-adjacent project.",
    "Placeholder description for a mobile / hardware-adjacent project.",
    null,
    PLACEHOLDER_GAMMA_ID,
    PLACEHOLDER_MOBILE_SKILLS,
    "Personal",
    null,
    "Remote",
    "Engineer",
    "TBD",
    "TBD",
    ["Placeholder Service", "Placeholder Service"],
    [
      "Placeholder bullet describing the mobile experience and target user.",
      "Placeholder bullet describing platform-specific work or hardware integration.",
      "Placeholder bullet describing the impact or distribution of the project.",
    ],
    [],
    [],
    [],
    null,
    null,
    null
  ),
];
