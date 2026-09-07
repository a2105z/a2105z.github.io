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

export type ExperienceKind = "internship" | "fulltime";

export type Experience = {
  company: string;
  monogram: string;
  logo: string;
  kind?: ExperienceKind;
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
    company: "Microsoft",
    monogram: "MS",
    logo: "/icons/organizations/microsoft.png",
    kind: "fulltime",
    logoFull: true,
    tileColor: "#FFFFFF",
    location: "Redmond, Washington, United States",
    startDate: "Aug 2031",
    endDate: "Aug 2033",
    summary: "Making products better at Microsoft",
    roles: [
      {
        title: "Product Manager II",
        dateRange: "Aug 2031 — Aug 2033",
        location: "Redmond, Washington, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "McKinsey & Company",
    monogram: "MCK",
    logo: "/icons/organizations/mckinsey.png",
    kind: "fulltime",
    logoFull: true,
    tileColor: "#041628",
    location: "New York City, New York, United States",
    startDate: "Aug 2029",
    endDate: "Aug 2031",
    summary: "Making strategy better at McKinsey & Company",
    roles: [
      {
        title: "Business Analyst",
        dateRange: "Aug 2029 — Aug 2031",
        location: "New York City, New York, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Tesla",
    monogram: "T",
    logo: "/icons/organizations/tesla.png",
    logoFull: true,
    tileColor: "#E31937",
    location: "Palo Alto, California, United States",
    startDate: "Jun 2029",
    endDate: "Aug 2029",
    summary: "Making autonomy data infrastructure better at Tesla",
    roles: [
      {
        title: "Software Engineering Intern, Autonomy Data Infrastructure Team",
        dateRange: "Jun 2029 — Aug 2029",
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
    startDate: "Jun 2028",
    endDate: "Aug 2028",
    summary: "Making AI infrastructure better at Google",
    roles: [
      {
        title: "Software Engineering Intern, AI Infrastructure Team",
        dateRange: "Jun 2028 — Aug 2028",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "John Deere",
    monogram: "JD",
    logo: "/icons/organizations/john-deere.png",
    logoFull: true,
    tileColor: "#387C29",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "Sep 2027",
    endDate: "May 2028",
    summary: "Making Connect Mobile better at John Deere",
    roles: [
      {
        title: "Software Engineering Intern, Connect Mobile Team",
        dateRange: "Sep 2027 — May 2028",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "LinkedIn",
    monogram: "in",
    logo: "/icons/organizations/linkedin.png",
    logoFull: true,
    tileColor: "#0A66C2",
    location: "Mountain View, California, United States",
    startDate: "Jun 2027",
    endDate: "Aug 2027",
    summary: "Making Core AI better at LinkedIn",
    roles: [
      {
        title: "Software Engineering Intern, Core AI Team",
        dateRange: "Jun 2027 — Aug 2027",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Google DeepMind",
    monogram: "DM",
    logo: "/icons/organizations/deepmind.png",
    logoFull: true,
    tileColor: "#5477EF",
    location: "Mountain View, California, United States",
    startDate: "Jun 2027",
    endDate: "Aug 2027",
    summary: "Making Gemini API and AI Studio better at Google DeepMind",
    roles: [
      {
        title: "Software Engineering Contributor, Gemini API & AI Studio Team",
        dateRange: "Jun 2027 — Aug 2027",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Rivian",
    monogram: "RIV",
    logo: "/icons/organizations/rivian.png",
    logoFull: true,
    tileColor: "#173430",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "Sep 2026",
    endDate: "May 2027",
    summary: "Making electric power conversion more reliable at Rivian",
    roles: [
      {
        title: "Software Engineering Intern, Electric Power Conversion Team",
        dateRange: "Sep 2026 — May 2027",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Rivian",
    monogram: "RIV",
    logo: "/icons/organizations/rivian.png",
    logoFull: true,
    tileColor: "#173430",
    location: "Palo Alto, California, United States",
    startDate: "Jun 2026",
    endDate: "Aug 2026",
    summary: "Making vehicle telematics scale at Rivian",
    roles: [
      {
        title: "Software Engineering Intern, Vehicle Telematics Team",
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
      "Making AI agents and on-device MediaPipe easier to build at Google",
    roles: [
      {
        title: "Software Engineering Contributor, Cloud AI Team",
        dateRange: "Jun 2026 — Aug 2026",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Capital One ASKS",
    monogram: "C1",
    logo: "/icons/organizations/capital-one.png",
    logoFull: true,
    tileColor: "#001E33",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "Sep 2025",
    endDate: "May 2026",
    summary: "Making AI foundations and safety stronger at Capital One ASKS",
    roles: [
      {
        title: "Machine Learning Engineering Intern, AI Foundations and Safety Team",
        dateRange: "Sep 2025 — May 2026",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Amazon AICE",
    monogram: "AMZ",
    logo: "/icons/organizations/amazon.png",
    logoFull: true,
    tileColor: "#f47024",
    location: "Chicago, Illinois, United States",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    summary: "Making conversational AI better at Amazon AICE",
    roles: [
      {
        title: "Software Engineering Intern, Conversational AI Team",
        dateRange: "Jun 2025 — Aug 2025",
        location: "Chicago, Illinois, United States",
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
    location: "New York City, New York, United States",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    summary: "Making defense tech better at Palantir",
    roles: [
      {
        title: "Software Engineering Intern, Defense Tech Team",
        dateRange: "Jun 2024 — Aug 2024",
        location: "New York City, New York, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Harvard University (Harvard Business School)",
    monogram: "HBS",
    logo: "/icons/organizations/harvard.png",
    logoFull: false,
    location: "Boston, Massachusetts, United States",
    degree: "Master of Business Administration",
    startDate: "Aug 2033",
    endDate: "May 2035",
    dateRange: "Aug 2033 — May 2035",
    focus: [
      "Strategy",
      "Finance",
      "Leadership",
      "General Management",
    ],
  },
  {
    institution: "University of California, Berkeley (Grimes College of Engineering)",
    monogram: "UCB",
    logo: "/icons/organizations/berkeley.png",
    logoFull: true,
    tileColor: "#002575",
    location: "Berkeley, California, United States",
    degree:
      "Master of Engineering, Electrical Engineering & Computer Sciences",
    startDate: "Aug 2028",
    endDate: "May 2029",
    dateRange: "Aug 2028 — May 2029",
    focus: [
      "Artificial Intelligence",
      "Data Science",
      "Computer Vision",
      "Product",
    ],
  },
  {
    institution: "University of Illinois Urbana–Champaign (Grainger College of Engineering)",
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
