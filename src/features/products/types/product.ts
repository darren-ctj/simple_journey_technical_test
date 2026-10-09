export interface Product {
  /** Route slug, e.g. `/products/seamless-passenger`. */
  slug: string;
  title: string;
  /** Category badges shown on the card image. */
  badges: string[];
  image: string;
}
