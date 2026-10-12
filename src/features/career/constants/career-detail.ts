export interface CareerPositionDetail {
  description: string;
  responsibilities: string[];
  qualifications: string[];
  preferred: string[];
}

const SHIFT_ENGINEER_DESCRIPTION =
  "PT Simple Journey Indonesia is seeking a Shift Engineer responsible for maintaining operational stability during shift hours.";

const SHIFT_ENGINEER_RESPONSIBILITIES = [
  "Monitor and maintain system/production operations during shifts",
  "Handle troubleshooting and escalate technical issues quickly and accurately",
  "Prepare shift handover reports on a regular basis",
  "Coordinate with other teams to ensure smooth 24/7 operations",
  "Prepare technical documentation (SOPs, test cases/checklists, shift logs, bug reports) in a clear and structured manner",
];

const SHIFT_ENGINEER_QUALIFICATIONS = [
  "Willing to work shifts (morning/afternoon/night)",
  "Understands the basics of system, network, and application troubleshooting",
  "Able to write technical documentation clearly and systematically",
];

export const DEFAULT_POSITION_DETAIL: CareerPositionDetail = {
  description: SHIFT_ENGINEER_DESCRIPTION,
  responsibilities: SHIFT_ENGINEER_RESPONSIBILITIES,
  qualifications: SHIFT_ENGINEER_QUALIFICATIONS,
  preferred: [],
};

export const CAREER_POSITION_DETAILS: Record<string, CareerPositionDetail> = {
  Designer: {
    description: SHIFT_ENGINEER_DESCRIPTION,
    responsibilities: SHIFT_ENGINEER_RESPONSIBILITIES,
    qualifications: SHIFT_ENGINEER_QUALIFICATIONS,
    preferred: [
      "Familiar with Figma, Adobe Creative Suite, or other design tools",
      "Basic understanding of UX principles (user flow, wireframing, prototyping)",
      "Has a UI/UX design portfolio (Figma/Adobe XD/Sketch)",
      "Able to support the creation of designs for monitoring dashboards, PowerPoint presentations, brochures, simple animations, internal tools, or visual documentation.",
    ],
  },
};

export const APPLY_FORM_URL = "https://forms.gle/GgyGfahbgpE2rkn5A";