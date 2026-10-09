import type { Product } from "../types/product";

export const ALL_CATEGORIES = "All Categories";

export const CATEGORY_OPTIONS = [ALL_CATEGORIES, "Software", "Hardware"];

export const PRODUCTS: Product[] = [
  {
    slug: "seamless-passenger",
    title: "Seamless Passenger",
    badges: ["Software"],
    image: "/seamless-passenger.png",
  },
  {
    slug: "passport-issuance",
    title: "Passport Issuance",
    badges: ["Software"],
    image: "/ds.png",
  },
  {
    slug: "prisoner-management",
    title: "Prisoner Management",
    badges: ["Software"],
    image: "/management-deteni.png",
  },
  {
    slug: "smart-meter",
    title: "Smart Meter",
    badges: ["Software", "Hardware"],
    image: "/smart-meter.webp",
  },
  {
    slug: "sjcore",
    title: "SJCore",
    badges: ["Software"],
    image: "/sjcore.webp",
  },
  {
    slug: "cctv",
    title: "Video Monitoring (CCTV)",
    badges: ["Software"],
    image: "/cctv.webp",
  },
  {
    slug: "Portraid",
    title: "Virtual Boarding Gate Simulation (Portraid)",
    badges: ["Software"],
    image: "/bgr.webp",
  },
  {
    slug: "tbcm",
    title: "TBCM",
    badges: ["Software"],
    image: "/tbcm.webp",
  },
  {
    slug: "pki-solution",
    title: "PKI Solution",
    badges: ["Software"],
    image: "/pki-solution.png",
  },
  {
    slug: "e-kiosk",
    title: "E-Kiosk",
    badges: ["Software"],
    image: "/kiosk.png",
  },
  {
    slug: "airport-autogate",
    title: "Airport Autogate",
    badges: ["Hardware"],
    image: "/gate.png",
  },
  {
    slug: "enrollment-devices",
    title: "Enrollment Devices",
    badges: ["Hardware"],
    image: "/enrollment-device.png",
  },
  {
    slug: "micro-hsm",
    title: "Micro HSM",
    badges: ["Hardware"],
    image: "/default.png",
  },
  {
    slug: "passkey",
    title: "Passkey",
    badges: ["Software"],
    image: "/default.png",
  },
];
