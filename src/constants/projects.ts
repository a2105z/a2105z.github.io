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
    company: "Rivian",
    monogram: "RIV",
    logo: "/icons/organizations/rivian.png",
    location: "Palo Alto, California",
    startDate: "2026",
    endDate: "Present",
    summary:
      "Software engineering on Rivian's Vehicle & Autonomy Telematics team — building tooling and infrastructure that powers the company's vehicle and autonomy programs.",
    roles: [
      {
        title: "Software Engineer Intern, Vehicle & Autonomy Telematics",
        dateRange: "2026 — Present",
        location: "Palo Alto, California",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Google",
    monogram: "G",
    logo: "/icons/organizations/google.png",
    location: "Mountain View, California",
    startDate: "2026",
    endDate: "Present",
    summary:
      "Externship on Google's Gemini ecosystem — contributing to developer tools and integrations across the broader Gemini surface.",
    roles: [
      {
        title: "Software Engineer Extern, Gemini Ecosystem",
        dateRange: "2026 — Present",
        location: "Mountain View, California",
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
    location: "Urbana, Illinois",
    startDate: "2025",
    endDate: "2025",
    summary:
      "Research-focused software engineering on the Alexa AGI research team — applied ML and systems work on next-generation Alexa intelligence.",
    roles: [
      {
        title: "Software Development Engineer Intern, Alexa AGI Research",
        dateRange: "06/2025 — 08/2025",
        location: "Urbana, Illinois",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "NASA",
    monogram: "NASA",
    logo: "/icons/organizations/nasa.png",
    location: "Phoenix, Arizona",
    startDate: "2025",
    endDate: "2025",
    summary:
      "Embedded and flight software for the Lucy mission spacecraft — exploring AI/ML-native flight OS architecture and spacecraft telematics.",
    roles: [
      {
        title: "Embedded Software Engineer Intern, Lucy Mission",
        dateRange: "01/2025 — 05/2025",
        location: "Phoenix, Arizona",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Palantir",
    monogram: "P",
    logo: "/icons/organizations/palantir.png",
    logoFull: true,
    tileColor: "#000000",
    location: "Denver, Colorado",
    startDate: "2024",
    endDate: "2024",
    summary:
      "Software Engineering Fellowship at Palantir — applied engineering work alongside the platform and forward-deployed teams.",
    roles: [
      {
        title: "Software Engineering Fellow",
        dateRange: "06/2024 — 08/2024",
        location: "Denver, Colorado",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Harvard Medical School",
    monogram: "HMS",
    logo: "/icons/organizations/harvard-medical.png",
    logoFull: true,
    tileColor: "#b7383b",
    location: "Boston, Massachusetts",
    startDate: "2023",
    endDate: "2023",
    summary:
      "Machine learning research engineering on a Robotics Research effort at Harvard Medical School — model development, data pipelines, and evaluation for embodied medical applications.",
    roles: [
      {
        title: "Machine Learning Research Engineer Intern, Robotics Research",
        dateRange: "06/2023 — 08/2023",
        location: "Boston, Massachusetts",
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
    institution: "Massachusetts Institute of Technology",
    monogram: "MIT",
    logo: "/icons/organizations/mit.png",
    logoFull: true,
    tileColor: "#000000",
    location: "Cambridge, Massachusetts",
    degree: "MicroMasters® - Technology & Operational Systems",
    startDate: "2026",
    endDate: "2029",
    dateRange: "Jun 2026 — May 2029",
    focus: [
      "Supply Chain Management",
      "Manufacturing",
      "Economics & Finance",
      "Statistics & Data Science",
    ],
  },
  {
    institution: "University of Illinois Urbana–Champaign",
    monogram: "UIUC",
    logo: "/icons/organizations/uiuc.png",
    logoFull: true,
    tileColor: "#13294B",
    location: "Urbana–Champaign, Illinois",
    degree:
      "BS/MS - Computer Science · BS - Electrical Engineering · BS - Engineering Entrepreneurship",
    startDate: "2024",
    endDate: "2029",
    dateRange: "Jun 2024 — May 2029",
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
