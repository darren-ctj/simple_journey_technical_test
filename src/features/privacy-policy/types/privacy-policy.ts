/**
 * A run of inline content inside a paragraph/list item.
 * `link` renders an anchor, `bold` renders a `<strong>`.
 */
export type TextSegment =
  | { type: "text"; text: string }
  | { type: "bold"; text: string }
  | { type: "link"; text: string; href: string; external?: boolean };

export type ContentBlock =
  | { kind: "paragraph"; segments: TextSegment[] }
  | { kind: "list"; items: TextSegment[][] }
  | { kind: "contact"; paragraphs: TextSegment[][] };

export interface PrivacyPolicySection {
  /** Anchor id, shared between both languages. */
  id: string;
  /** Label shown in the sidebar table of contents. */
  sidebarLabel: string;
  /** Section heading inside the content card. */
  heading: string;
  blocks: ContentBlock[];
}

export interface PrivacyPolicyTranslation {
  title: string;
  lastUpdated: string;
  sidebarHeading: string;
  sections: PrivacyPolicySection[];
}
