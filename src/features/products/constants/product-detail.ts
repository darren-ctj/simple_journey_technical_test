import type { ProductDetailSection } from "../types/product-detail";

export const PRODUCT_DETAILS: Record<string, ProductDetailSection[]> = {
  "seamless-passenger": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "Seamless Passenger is an end-to-end software solution designed to optimize passenger flow using biometric verification and real-time data integration. The system improves operational efficiency while enhancing security and passenger experience.",
    },
    {
      id: "specification",
      title: "Specification",
      items: [
        "1720 (L) x 210 (W) x 1100 (H) mm",
        "1720 (L) x 210 (W) x 1100 (H) mm",
        "1720 (L) x 210 (W) x 1100 (H) mm",
        "660mm",
        "Mild Steel / Tempered Glass",
        "Powder Coated / Clear",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Airports & immigration checkpoints",
        "Border control facilities",
        "Smart transportation terminals",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "This product ensures smooth passenger movement, higher security, and improved operational efficiency.",
    },
  ],
  "passport-issuance": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "The Passport Issuance Management System is a centralized platform that supports end-to-end passport application and issuance processes. It manages applicant data, biometric capture, verification workflows, and approval stages in a controlled environment. Designed for government-scale operations, it supports large user volumes and multi-location deployments, strengthening identity governance and document security.",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "End-to-end passport issuance workflow",
        "Biometric and identity data integration",
        "Audit trail and compliance monitoring",
        "Secure data management",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: ["Immigration offices", "Government identity authorities"],
    },
  ],
  "prisoner-management": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "The Detention Management System is a digital platform designed to securely manage detention records and monitoring activities. It centralizes identity data, status tracking, and administrative workflows within a single system. The platform enhances transparency, accountability, and operational consistency across facilities. It supports real-time updates and controlled access based on authority levels, making it suitable for correctional, immigration, and detention management environments.",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Centralized detainee records",
        "Status and movement tracking",
        "Role-based access control",
        "Audit and reporting features",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Detention centers",
        "Correctional facilities",
        "Law enforcement agencies",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "Improves control, transparency, and accountability in detention management.",
    },
  ],
  "smart-meter": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "A centralized platform designed to simplify the management of utilities, properties, billing, payments, and operational services in one integrated system.The platform provides real-time visibility into resource usage, streamlines billing and payment processes, manages properties and assets, and helps organizations monitor their operations more efficiently. With a modular and extensible architecture, the platform can be adapted to different business environments and expanded with additional services as operational requirements evolve.",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Real-time usage and service monitoring",
        "Manage invoices, payments, and top-ups",
        "Manage properties, spaces, and assets",
        "Detect abnormal usage and operational issues",
        "Access insights, reports, and transaction data",
        "Add new services as business needs grow",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Business & Organization",
        "Property & Facility",
        "Tenant & Customer",
        "Finance Team",
        "Operations Team",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "Simplify complex operational processes by bringing utility monitoring, billing, payments, property management, and operational data into one centralized platform. With real-time visibility, automated processes, and scalable capabilities, organizations can work more efficiently, respond to issues faster, and adapt the platform as their business needs grow",
    },
  ],
  sjcore: [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "An integrated transportation information and management platform designed to connect multiple modes of transportation, including air, rail, sea, and bus. By consolidating transportation information from different sources, the platform provides passengers with convenient access to travel information while enabling administrators to monitor operations, manage data, and oversee system integrations through a centralized dashboard. With a unified environment for both public users and operational teams, the platform supports more connected, accessible, and data-driven transportation services",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Multimodal Transportation Information",
        "Centralized Operational Dashboard",
        "Third-Party System Integration",
        "Integration Monitoring & Activity Logs",
        "Operational Alerts & Notifications",
        "Passenger Benefits & Promotions",
        "Reporting & Data Insights",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Airport Operations",
        "Railways Transportation",
        "Seaport & Ferry Services",
        "Bus Terminal Management",
        "Centralized Transportation Oversight",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "An integrated platform that connects transportation data, simplifies passenger access to travel information, and enhances operational visibility across multiple modes of transportation",
    },
  ],
  cctv: [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "an intelligent video monitoring solution designed to enhance security, situational awareness, and operational oversight through real-time video surveillance and AI-powered facial recognition. The platform enables organizations to monitor individuals, detect activity within designated areas, analyze facial data, and manage video recordings through a centralized dashboard. By combining live monitoring, configurable detection zones, real-time analytics, and synchronized video playback, the platform helps organizations gain actionable insights, improve monitoring efficiency, and support informed decision-making",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Real-Time Video Monitoring",
        "Facial Recognition & Identification",
        "Intelligent Zone Monitoring",
        "Real-Time Analytics & Statistics",
        "Detection Data & Coordinate Tracking",
        "Video Recording & Synchronized Playback",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Security & Surveillance",
        "Airport & Transportation Facilities",
        "Restricted Area Monitoring",
        "Enterprise & Facility Management",
        "Incident Review & Investigation",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "The platform transforms conventional video surveillance into a more intelligent and data-driven monitoring solution. By combining real-time visibility, facial recognition, zone-based monitoring, and synchronized video records in one platform, the platform helps organizations improve situational awareness, reduce manual monitoring efforts, and make more informed operational decisions",
    },
  ],
  Portraid: [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "A high-performance Windows-based utility designed to bridge legacy serial communication systems with modern web, cloud, and IP-based architectures. By integrating bidirectional serial proxying, automated virtual COM port management, and virtual Boarding Gate Reader (BGR) simulation, this solution enables seamless communication between legacy hardware and modern applications. With REST APIs, real-time event streaming, and webhook integrations, it simplifies system testing, hardware simulation, and data exchange without requiring modifications to existing legacy applications. Its lightweight architecture, native desktop interface, and headless command-line capabilities make it suitable for aviation IT environments, software development, and industrial applications",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Virtual Boarding Gate Simulation",
        "Bidirectional Serial Communication",
        "Modern API & Event Integrations",
        "Automated Virtual COM Port Management",
        "Native GUI & Headless CLI",
        "Serial Diagnostics & Data Logging",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Airport & Airline IT Quality Assurance",
        "Automated CI/CD Testing Pipelines",
        "Legacy Hardware & IoT Modernization",
        "Protocol Debugging & Reverse-Engineering",
        "System Integration & Development",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "Eliminating dependency on physical serial hardware for development, testing, and system integration helps organizations reduce operational costs and accelerate software validation. By virtualizing boarding gate readers and connecting legacy communication protocols with modern application architectures, this solution simplifies modernization while preserving existing systems",
    },
  ],
  tbcm: [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "TBCM is a mobile border control solution designed to support officers in performing passenger identity and travel document verification directly through a tablet. The solution combines facial capture, travel document scanning, MRZ reading, chip data verification, and biometric matching within a streamlined inspection workflow. By consolidating essential border control checks into a single mobile interface, TBCM enables officers to perform efficient and flexible passenger inspections while maintaining access to structured passenger and document information",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Facial Capture & Biometric Verification",
        "Travel Document Scanning",
        "MRZ Data Reading",
        "Chip Data Verification",
        "UCR & Document Data Processing",
        "Passenger Identity Verification",
        "Guided Inspection Workflow",
        "Mobile Border Control Operation",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Airport & Border Entry Inspection",
        "Mobile Border Control",
        "Passenger Identity Verification",
        "Travel Document Inspection",
        "Secondary Inspection",
        "Flexible Border Operations",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "TBCM brings essential border control capabilities into a mobile and integrated inspection platform. By combining biometric verification, travel document processing, and structured passenger data in one workflow, it helps officers perform identity checks more efficiently while reducing reliance on multiple standalone inspection devices",
    },
  ],
  "pki-solution": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "The PKI Solution provides a robust digital trust infrastructure for secure authentication, encryption, and digital signing. It enables organizations to protect sensitive data and ensure identity assurance across digital services. Designed for enterprise and government environments, the solution supports high-availability deployment and compliance with international security standards.",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Digital certificate management",
        "Secure authentication and encryption",
        "Compliance with security standards",
        "Scalable architecture",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Government digital services",
        "Enterprise security infrastructure",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "Provides a trusted foundation for secure digital transformation initiatives.",
    },
  ],
  "e-kiosk": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "The E-Kiosk System is an interactive software solution designed to support self-service operations across public and business environments. It enables users to access information, perform transactions, and complete service processes efficiently through a structured digital interface. Built with flexibility and system integration in mind, the E-Kiosk System can seamlessly connect with backend services such as databases, payment systems, and operational platforms.",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Centralized service orchestration",
        "Integration with internal and external systems",
        "Multi-language support",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Self check-in and self-registration",
        "Service and administrative payments",
        "Digital information and wayfinding",
        "Public service delivery and onboarding",
        "Corporate internal service automation",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "Enhances service accessibility while reducing operational workload.",
    },
  ],
  "airport-autogate": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "The Automated Border Control Gate is a hardware solution designed to accelerate and secure clearance processes at airports. It enables self-service passenger verification through the integration of biometric technologies, electronic travel documents, and backend systems. By adopting a standardized self-service approach",
    },
    {
      id: "specification",
      title: "Specification",
      items: [
        "1720 (L) x 210 (W) x 1100 (H) mm",
        "1720 (L) x 210 (W) x 1100 (H) mm",
        "1888 (L) x 310 (W) x 1100 (H) mm",
        "660mm",
        "Mild Steel / Tempered Glass",
        "Powder Coated / Clear",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "International and domestic airport checkpoints",
        "Automated arrival and departure gates",
        "High-volume passenger processing zones",
        "Smart airport infrastructure initiatives",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "Accelerates passenger flow while maintaining strict security standards.",
    },
  ],
  "enrollment-devices": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "Biometric Enrollment Devices are hardware solutions designed for accurate and standardized identity data capture. These devices support the collection of biometric data such as facial images, fingerprints, and identity documents with high precision. Built for large-scale enrollment scenarios and regulated environments, the devices ensure consistent identity data quality. This reliability forms a critical foundation for security systems, digital identity platforms, and verification-based services.",
    },
    {
      id: "specification",
      title: "Specification",
      items: [
        "224.5 (W) x 650 (D) x 1545 (H) mm",
        "Mild Steel",
        "Powder Coated",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "National ID and civil registration programs",
        "Employee or visitor enrollment systems",
        "Border control and enrollment",
        "Access control and identity verification projects",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "Biometric Enrollment Devices ensure accurate, secure, and standardized enrollment processes, reducing errors and the risk of data misuse.",
    },
  ],
  "micro-hsm": [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "The Micro Hardware Security Module (Micro HSM) is a cryptographic security device designed to protect digital keys and encryption processes in an isolated environment. It provides a high level of security for systems sensitive data and critical transactions. With its compact form factor and optimized performance, It helps organizations meet security standards, regulatory compliance, and long-term data protection requirements.",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Secure cryptographic key storage and management",
        "Hardware-based encryption and decryption",
        "Compliance with security and cryptographic standards",
        "Integration with enterprise systems",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Secure transaction processing systems",
        "Digital identity and PKI infrastructure",
        "Enterprise security architectures",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "As digital security threats continue to evolve, the Micro HSM delivers hardware-based cryptographic protection that keeps data and transactions secure, even in high-risk environments.",
    },
  ],
  passkey: [
    {
      id: "overview",
      title: "Overview",
      paragraph:
        "The Passkey Authentication Platform enables passwordless authentication using cryptographic credentials. It enhances security while simplifying user access across digital services. The platform reduces identity-related risks and supports modern authentication standards suitable for enterprise environments.",
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      items: [
        "Passwordless authentication",
        "Strong cryptographic security",
        "Integration with existing systems",
        "Compliance with modern standards",
      ],
    },
    {
      id: "use-case",
      title: "Use Case",
      items: [
        "Enterprise applications",
        "Secure portals",
        "Identity-based systems",
        "Government digital access",
      ],
    },
    {
      id: "why-this-product-matters",
      title: "Why This Product Matters",
      paragraph:
        "It delivers stronger security with a seamless user experience.",
    },
  ],
};
