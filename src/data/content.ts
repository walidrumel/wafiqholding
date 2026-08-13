import type { Article, Business, Investment } from "./types";

/**
 * Content sources. These are the single seam between the UI and a future
 * database/CMS: swap the bodies for queries and every page populates itself.
 */

export function getBusinesses(): Business[] {
  return [];
}

export function getInvestments(): Investment[] {
  return [];
}

export function getArticles(): Article[] {
  return [];
}