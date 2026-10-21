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
  groupIcon?: string;
};

export type ExperienceKind = "internship" | "fulltime";

export type InternshipTrack = "engineering" | "business";

export type Experience = {
  company: string;
  monogram: string;
  logo: string;
  kind?: ExperienceKind;
  internshipTrack?: InternshipTrack;
  ticker?: string;
  exchange?: string;
  logoFull?: boolean;
  /** Hex color the logo tile should adopt when `logoFull` is true, so the badge
   *  chrome flows seamlessly with the logo's own background (no white halo). */
  tileColor?: string;
  location?: string;
  startDate: string;
  endDate: string;
  summary: string;
  roles: ExperienceRole[];
  groupIcon?: string;
  employmentType?: string;
  workplaceType?: string;
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
  degreeTertiary?: string;
  gpa?: string;
  gpaSecondary?: string;
  startDate: string;
  endDate: string;
  dateRange: string;
  focus: string[];
  summary?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  monogram: string;
  logo?: string;
  logoFull?: boolean;
  tileColor?: string;
  issued: string;
  expires?: string;
  credentialId?: string;
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
    company: "AlgoDynamix",
    monogram: "AD",
    logo: "/icons/organizations/algodynamix.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    internshipTrack: "business",
    location: "London, England, United Kingdom",
    startDate: "May 2025",
    endDate: "Aug 2025",
    summary: "TMT Global Markets",
    groupIcon: "📈",
    employmentType: "Internship",
    roles: [
      {
        title: "Investment Banking Summer Analyst",
        dateRange: "May 2025 — Aug 2025",
        location: "London, England, United Kingdom",
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
    endDate: "Apr 2027",
    summary: "Making software better at Rivian",
    groupIcon: "⚡",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern, Electrical Power Control Software",
        dateRange: "Sep 2026 — Apr 2027",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "NASA",
    monogram: "NASA",
    logo: "/icons/organizations/nasa.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    location: "Tempe, Arizona, United States",
    startDate: "May 2024",
    endDate: "Aug 2024",
    summary: "Making software better at NASA",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern",
        dateRange: "May 2024 — Aug 2024",
        location: "Tempe, Arizona, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Sellside Group",
    monogram: "SS",
    logo: "/icons/organizations/sellside-group.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    internshipTrack: "business",
    location: "Dallas, Texas, United States",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "TMT Mergers & Acquisitions",
    groupIcon: "📈",
    employmentType: "Internship",
    roles: [
      {
        title: "Investment Banking Summer Analyst",
        dateRange: "May 2026 — Aug 2026",
        location: "Dallas, Texas, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "NVIDIA",
    monogram: "NV",
    logo: "/icons/organizations/nvidia.png",
    logoFull: true,
    tileColor: "#77B900",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "Making software better at NVIDIA",
    employmentType: "Contributor",
    roles: [
      {
        title: "Software Engineering Contributor",
        dateRange: "May 2026 — Aug 2026",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Rivian & Volkswagen Group Technologies",
    monogram: "RV",
    logo: "/icons/organizations/rivian-vw-tech.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    location: "Palo Alto, California, United States",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "Making software better at Rivian & Volkswagen Group Technologies",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern",
        dateRange: "May 2026 — Aug 2026",
        location: "Palo Alto, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Amazon",
    monogram: "AMZ",
    logo: "/icons/organizations/amazon.png?v=2",
    logoFull: true,
    tileColor: "#FF6201",
    location: "Chicago, Illinois, United States",
    startDate: "May 2025",
    endDate: "Aug 2025",
    summary: "Making software better at Amazon",
    groupIcon: "🗣️",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Development Engineering Intern, Alexa and Conversational AI",
        dateRange: "May 2025 — Aug 2025",
        location: "Chicago, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Capital One",
    monogram: "C1",
    logo: "/icons/organizations/capital-one.png",
    logoFull: true,
    tileColor: "#023D5B",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "Sep 2025",
    endDate: "Apr 2026",
    summary: "Making software better at Capital One",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern, ASKS",
        dateRange: "Sep 2025 — Apr 2026",
        location: "Urbana–Champaign, Illinois, United States",
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
    logoFull: true,
    tileColor: "#FFFFFF",
    location: "Cambridge, Massachusetts, United States",
    degree: "M.B.A.",
    gpa: "Baker Scholar | Specialization in General Management and Finance",
    startDate: "Aug 2034",
    endDate: "May 2036",
    dateRange: "Aug 2034 — May 2036",
    focus: [
      "Finance",
      "Strategy",
      "Leadership",
      "General Management",
    ],
  },
  {
    institution: "Stanford University (School of Engineering)",
    monogram: "S",
    logo: "/icons/organizations/stanford.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    location: "Palo Alto, California, United States (HCP)",
    degree: "M.S. Management Science & Engineering",
    gpa: "GPA: 4.00/4.00 | Specialization in Technology & Engineering Management",
    startDate: "Aug 2029",
    endDate: "Aug 2030",
    dateRange: "Aug 2029 — Aug 2030",
    focus: [
      "Management Science",
      "Engineering",
      "Product",
      "Operations",
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
      "B.S./M.C.S. Computer Science · B.S. Electrical Engineering · B.S. Technology Entrepreneurship",
    gpa: "GPA: 3.95/4.00 | Specialization in Artificial Intelligence | Minor in Business",
    startDate: "Aug 2024",
    endDate: "May 2029",
    dateRange: "Aug 2024 — May 2029",
    focus: [
      "Computer Science",
      "Electrical Engineering",
      "Technology Entrepreneurship",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Chartered Financial Analyst (CFA)",
    issuer: "CFA Institute",
    monogram: "CFA",
    tileColor: "#1A3C6E",
    issued: "May 2036",
    credentialId: "CFA-2036-88421",
    summary:
      "Charterholder across ethics, quantitative methods, economics, financial reporting, equity, fixed income, derivatives, and portfolio management.",
  },
  {
    name: "Certified Management Accountant (CMA)",
    issuer: "Institute of Management Accountants (IMA)",
    monogram: "CMA",
    tileColor: "#0B6E4F",
    issued: "Dec 2035",
    credentialId: "CMA-2035-44109",
    summary:
      "Credential covering financial planning, performance, analytics, and strategic financial management for decision-making and control.",
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute (PMI)",
    monogram: "PMP",
    tileColor: "#EE3D3D",
    issued: "Aug 2032",
    expires: "Aug 2035",
    credentialId: "PMP-2032-77204",
    summary:
      "Credential in leading projects across predictive, agile, and hybrid approaches—scope, schedule, cost, risk, stakeholders, and delivery.",
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
