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
    company: "Google",
    monogram: "G",
    logo: "/icons/organizations/google.png",
    kind: "fulltime",
    ticker: "GOOG",
    exchange: "NASDAQ",
    location: "Mountain View, California, United States",
    startDate: "2029",
    endDate: "Present",
    summary: "Building products at Google",
    employmentType: "Full-time",
    roles: [
      {
        title: "Senior Product Manager",
        dateRange: "2036 — Present",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
      {
        title: "Product Manager",
        dateRange: "2031 — 2034",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
      {
        title: "Associate Product Manager",
        dateRange: "2029 — 2031",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Morgan Stanley",
    monogram: "MS",
    logo: "/icons/organizations/morgan-stanley.png",
    logoFull: true,
    tileColor: "#002B5C",
    internshipTrack: "business",
    location: "Menlo Park, California, United States",
    startDate: "May 2035",
    endDate: "Aug 2035",
    summary: "Technology, Media & Telecom Group",
    groupIcon: "📈",
    employmentType: "Internship",
    roles: [
      {
        title: "Investment Banking Summer Associate",
        dateRange: "May 2035 — Aug 2035",
        location: "Menlo Park, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Harbor Street Capital",
    monogram: "HSC",
    logo: "/icons/organizations/harbor-street-capital.png",
    logoFull: true,
    tileColor: "#000000",
    internshipTrack: "business",
    location: "Miami, Florida, United States",
    startDate: "May 2029",
    endDate: "Aug 2029",
    summary: "Technology, Media & Telecom Group",
    groupIcon: "📈",
    employmentType: "Internship",
    roles: [
      {
        title: "Private Equity Summer Analyst",
        dateRange: "May 2029 — Aug 2029",
        location: "Miami, Florida, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Google",
    monogram: "G",
    logo: "/icons/organizations/google.png",
    location: "Mountain View, California, United States",
    startDate: "May 2029",
    endDate: "Aug 2029",
    summary: "Building products at Google",
    groupIcon: "📱",
    employmentType: "Internship",
    roles: [
      {
        title: "Associate Product Manager Intern",
        dateRange: "May 2029 — Aug 2029",
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
    startDate: "Sep 2028",
    endDate: "Apr 2029",
    summary: "Making Intelligent Systems Solutions better at John Deere",
    groupIcon: "🚜",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Intelligent Systems Solutions",
        dateRange: "Sep 2028 — Apr 2029",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Google",
    monogram: "G",
    logo: "/icons/organizations/google.png",
    location: "Mountain View, California, United States",
    startDate: "May 2028",
    endDate: "Aug 2028",
    summary: "Making AI Infrastructure better at Google",
    groupIcon: "⚙️",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, AI Infrastructure",
        dateRange: "May 2028 — Aug 2028",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Concordia Capital",
    monogram: "C",
    logo: "/icons/organizations/concordia-capital.png",
    logoFull: true,
    tileColor: "#1D4588",
    internshipTrack: "business",
    location: "New York City, New York, United States",
    startDate: "May 2028",
    endDate: "Aug 2028",
    summary: "Technology, Media & Telecom Group",
    groupIcon: "📈",
    employmentType: "Internship",
    roles: [
      {
        title: "Investment Banking Summer Analyst",
        dateRange: "May 2028 — Aug 2028",
        location: "New York City, New York, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "State Farm",
    monogram: "SF",
    logo: "/icons/organizations/state-farm.png",
    logoFull: true,
    tileColor: "#E31837",
    location: "Bloomington, Illinois, United States",
    startDate: "Sep 2027",
    endDate: "Apr 2028",
    summary: "Making insurance technology better at State Farm",
    groupIcon: "🛡️",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Enterprise Technology",
        dateRange: "Sep 2027 — Apr 2028",
        location: "Bloomington, Illinois, United States",
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
    startDate: "May 2027",
    endDate: "Aug 2027",
    summary: "Making Core AI better at LinkedIn",
    groupIcon: "🧠",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Core AI",
        dateRange: "May 2027 — Aug 2027",
        location: "Mountain View, California, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Arcadia Capital",
    monogram: "AC",
    logo: "/icons/organizations/arcadia-capital.png",
    logoFull: true,
    tileColor: "#5A7483",
    internshipTrack: "business",
    location: "Miami, Florida, United States",
    startDate: "May 2027",
    endDate: "Aug 2027",
    summary: "Technology, Media & Telecom Group",
    groupIcon: "📈",
    employmentType: "Internship",
    roles: [
      {
        title: "Investment Banking Summer Analyst",
        dateRange: "May 2027 — Aug 2027",
        location: "Miami, Florida, United States",
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
    summary: "Making electric power conversion more reliable at Rivian",
    groupIcon: "⚡",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Electric Power Conversion",
        dateRange: "Sep 2026 — Apr 2027",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Integrus Partners",
    monogram: "IP",
    logo: "/icons/organizations/integrus-partners.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    internshipTrack: "business",
    location: "Dallas, Texas, United States",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "Industrials Group",
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
    company: "Rivian and Volkswagen Group Technologies",
    monogram: "RV",
    logo: "/icons/organizations/rivian-vw-tech.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    location: "Palo Alto, California, United States",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "Making vehicle telematics scale at Rivian and Volkswagen Group Technologies",
    groupIcon: "📡",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Vehicle Telematics",
        dateRange: "May 2026 — Aug 2026",
        location: "Palo Alto, California, United States",
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
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "Making Gemini API and AI Compilers better at Google DeepMind",
    groupIcon: "✨",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Gemini API and AI Compilers",
        dateRange: "May 2026 — Aug 2026",
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
    startDate: "Sep 2025",
    endDate: "Apr 2026",
    summary: "Making Intelligent Systems Solutions better at John Deere",
    groupIcon: "🚜",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Intelligent Systems Solutions",
        dateRange: "Sep 2025 — Apr 2026",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Amazon (AICE)",
    monogram: "AMZ",
    logo: "/icons/organizations/amazon.png",
    logoFull: true,
    tileColor: "#f47024",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "May 2025",
    endDate: "Aug 2025",
    summary: "Making Alexa and conversational AI better at Amazon",
    groupIcon: "🎙️",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Development Engineer Intern, Alexa and Conversational AI",
        dateRange: "May 2025 — Aug 2025",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
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
    summary: "Technology, Media & Telecom Group",
    groupIcon: "📈",
    employmentType: "Internship",
    roles: [
      {
        title: "Investment Research Summer Analyst",
        dateRange: "May 2025 — Aug 2025",
        location: "London, England, United Kingdom",
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
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "Sep 2024",
    endDate: "Apr 2025",
    summary: "Making Heat Island Systems better at NASA",
    groupIcon: "🌡️",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Intern, Heat Island Systems",
        dateRange: "Sep 2024 — Apr 2025",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
  {
    company: "Citadel",
    monogram: "C",
    logo: "/icons/organizations/citadel.png",
    logoFull: true,
    tileColor: "#08235A",
    location: "New York City, New York, United States",
    startDate: "May 2024",
    endDate: "Aug 2024",
    summary: "Investment AI Research Agents",
    groupIcon: "🤖",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineer Extern, Investment AI Research Agents",
        dateRange: "May 2024 — Aug 2024",
        location: "New York City, New York, United States",
        highlights: [...FIVE_BULLETS],
      },
    ],
  },
];


e