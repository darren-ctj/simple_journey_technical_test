import type { ProductDetailSection } from "../types/product-detail";

export const PRODUCT_DETAILS: Record<string, ProductDetailSection[]> = {
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
};
