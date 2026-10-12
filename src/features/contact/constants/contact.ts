export const BREADCRUMB_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contact" },
];

export interface OfficeInfoCard {
  icon: string;
  label: string;
  value: string;
}

export const OFFICE_INFO_CARDS: OfficeInfoCard[] = [
  {
    icon: "/icons/mail.webp",
    label: "Email",
    value: "info@simplejourney.co.id",
  },
  {
    icon: "/icons/phone.webp",
    label: "Phone",
    value: "081318982939",
  },
  {
    icon: "/icons/location.webp",
    label: "Address",
    value: "Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119",
  },
];