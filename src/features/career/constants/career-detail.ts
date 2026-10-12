import type { CareerPositionDetail } from "../types/career-detail";

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

export const CAREER_POSITION_DETAILS: Record<string, CareerPositionDetail> = {
  QA: {
    description: SHIFT_ENGINEER_DESCRIPTION,
    responsibilities: SHIFT_ENGINEER_RESPONSIBILITIES,
    qualifications: SHIFT_ENGINEER_QUALIFICATIONS,
    preferred: [
      "Familiar with the concepts of manual testing and regression testing",
      "Experience using bug-tracking tools (Jira, Trello, etc.)",
      "Basic understanding of QA and testing processes",
      "Able to perform quality checks (basic/manual testing) on system changes or releases during a shift",
    ],
  },
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
  Devops: {
    description: SHIFT_ENGINEER_DESCRIPTION,
    responsibilities: SHIFT_ENGINEER_RESPONSIBILITIES,
    qualifications: SHIFT_ENGINEER_QUALIFICATIONS,
    preferred: [
      "Familiar with Docker, Kubernetes, or CI/CD tools (Jenkins, GitLab CI, etc.)",
      "Experience with cloud platforms (AWS/GCP/Azure) and monitoring tools (Grafana, Prometheus, etc.)",
      "Basic understanding of CI/CD, cloud computing, or containerization",
      "Able to assist with deployment processes, monitor infrastructure, and maintain system uptime during shifts",
    ],
  },
  FE: {
    description: SHIFT_ENGINEER_DESCRIPTION,
    responsibilities: SHIFT_ENGINEER_RESPONSIBILITIES,
    qualifications: SHIFT_ENGINEER_QUALIFICATIONS,
    preferred: [
      "Familiar with React, Vue, or Angular",
      "Understands the basics of responsive design and cross-browser compatibility",
      "Has experience with or a basic understanding of front-end development (HTML, CSS, JavaScript, and modern frameworks)",
      "Able to troubleshoot bugs or make improvements to web pages or application interfaces as needed",
    ],
  },
  "Security Engineer": {
    description: SHIFT_ENGINEER_DESCRIPTION,
    responsibilities: SHIFT_ENGINEER_RESPONSIBILITIES,
    qualifications: SHIFT_ENGINEER_QUALIFICATIONS,
    preferred: [
      "Familiar with security monitoring tools (SIEM, firewalls, IDS/IPS)",
      "Basic understanding of vulnerability assessments or penetration testing",
      "Basic understanding of system/network security concepts",
      "Able to monitor potential system security threats and perform initial escalation (basic incident response) during shifts",
    ],
  },
  "Fullstack Engineer": {
    description: SHIFT_ENGINEER_DESCRIPTION,
    responsibilities: SHIFT_ENGINEER_RESPONSIBILITIES,
    qualifications: SHIFT_ENGINEER_QUALIFICATIONS,
  },
};

export const APPLY_FORM_URL = "https://forms.gle/GgyGfahbgpE2rkn5A";
