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

export const EXPERIENCES: Experience[] = [
  {
    company: "Rivian",
    monogram: "RIV",
    logo: "/icons/organizations/rivian.png",
    logoFull: true,
    tileColor: "#173430",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "Sep 2026",
    endDate: "Apr 2027",
    summary: "",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern, Electric Power Conversion",
        dateRange: "Sep 2026 — Apr 2027",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [],
      },
    ],
  },
  {
    company: "Rivian and Volkswagen Group Technologies",
    monogram: "RV",
    logo: "/icons/organizations/rivian-vw-tech.png",
    logoFull: true,
    tileColor: "#000000",
    location: "Palo Alto, California, United States",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern, Vehicle Telematics",
        dateRange: "May 2026 — Aug 2026",
        location: "Palo Alto, California, United States",
        highlights: [],
      },
    ],
  },
  {
    company: "Amazon",
    monogram: "AMZ",
    logo: "/icons/organizations/amazon.png",
    logoFull: true,
    tileColor: "#FF9900",
    location: "Chicago, Illinois, United States",
    startDate: "May 2025",
    endDate: "Aug 2025",
    summary: "",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern, Conversational AI",
        dateRange: "May 2025 — Aug 2025",
        location: "Chicago, Illinois, United States",
        highlights: [],
      },
    ],
  },
  {
    company: "NASA - National Aeronautics and Space Administration",
    monogram: "NASA",
    logo: "/icons/organizations/nasa.png",
    logoFull: true,
    tileColor: "#FFFFFF",
    location: "Urbana–Champaign, Illinois, United States",
    startDate: "Sep 2024",
    endDate: "Apr 2025",
    summary: "",
    employmentType: "Internship",
    roles: [
      {
        title: "Software Engineering Intern, Lunar Robotics Systems",
        dateRange: "Sep 2024 — Apr 2025",
        location: "Urbana–Champaign, Illinois, United States",
        highlights: [],
      },
    ],
  },
  {
    company: "Capital One",
    monogram: "C1",
    logo: "/icons/organizations/capital-one.png",
    logoFull: true,
    tileColor: "#023D5B",
    location: "New York City, New York, United States",
    startDate: "May 2024",
    endDate: "Aug 2024",
    summary: "",
    employmentType: "Apprenticeship",
    roles: [
      {
        title: "Software Engineering Fellow, Card & Consumer Banking Tech",
        dateRange: "May 2024 — Aug 2024",
        location: "New York City, New York, United States",
        highlights: [],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution:
      "University of Illinois Urbana–Champaign (Grainger College of Engineering)",
    monogram: "UIUC",
    logo: "/icons/organizations/uiuc.png",
    logoFull: true,
    tileColor: "#13294B",
    degree:
      "Bachelor of Science, Computer Science | Bachelor of Science, Electrical Engineering",
    gpa: "James Scholar | Minor(s): Business, Tech Entrepreneurship | Thesis in AI Safety",
    startDate: "Aug 2024",
    endDate: "May 2028",
    dateRange: "Aug 2024 — May 2028",
    focus: [
      "Computer Science",
      "Electrical Engineering",
      "James Scholar",
      "Business",
      "Tech Entrepreneurship",
      "AI Safety",
    ],
  },
];
