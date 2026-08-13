/**
 * Central site configuration. Update these values once real details exist —
 * every page reads from here.
 */
export const site = {
  name: "Wafiq Holdings",
  domain: "wafiqholdings.com",
  url: "https://wafiqholdings.com",
  tagline: "Building Businesses. Investing for the Long Term.",
  shortTagline: "Build. Acquire. Invest. Grow.",
  description:
    "Wafiq Holdings is a privately held company focused on building, acquiring, and investing in businesses for long-term value creation.",
  /** Configurable contact address — replace when the real inbox is live. */
  contactEmail: "",
} as const;

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Businesses", to: "/businesses" },
  { label: "Investments", to: "/investments" },
  { label: "Vision", to: "/vision" },
  { label: "Contact", to: "/contact" },
] as const;

/**
 * Reserved navigation. Flip `enabled` to true (and add the matching routes)
 * when a store or insights section goes live — the nav renders these
 * automatically.
 */
export const futureNav: { label: string; to: string; enabled: boolean }[] = [
  { label: "Insights", to: "/insights", enabled: false },
  { label: "Products", to: "/products", enabled: false },
  { label: "Shop", to: "/shop", enabled: false },
];