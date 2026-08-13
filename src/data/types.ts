/**
 * Shared domain models for Wafiq Holdings.
 *
 * These types describe the shape of content that will later be served from a
 * database/CMS. Today the corresponding data sources return empty arrays, so
 * the UI renders intentional empty states instead of fake data.
 */

export type PublishStatus = "draft" | "published" | "archived";

export interface Business {
  id: string;
  name: string;
  slug: string;
  industry: string;
  description: string;
  website?: string;
  logo?: string;
  image?: string;
  status: "owned" | "operating" | "incubating" | "exited";
  ownershipPercentage?: number;
  acquisitionDate?: string;
  publishStatus: PublishStatus;
}

export interface Investment {
  id: string;
  name: string;
  slug: string;
  category: "public-markets" | "private-business" | "real-estate" | "other";
  description: string;
  investmentDate?: string;
  status: "active" | "committed" | "realized";
  website?: string;
  logo?: string;
  notes?: string;
  publishStatus: PublishStatus;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: "insights" | "business-updates" | "announcements" | "analysis";
  publishedAt?: string;
  publishStatus: PublishStatus;
}

/* ---------------------------------------------------------------------------
 * Commerce models — reserved for a future store. Nothing is rendered yet.
 * ------------------------------------------------------------------------- */

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  categoryId: string;
  images: string[];
  inventory: number;
  status: PublishStatus;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: {
    line1: string;
    line2?: string;
    city: string;
    region?: string;
    postalCode: string;
    country: string;
  };
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  paymentStatus: "pending" | "paid" | "refunded" | "failed";
  fulfillmentStatus: "unfulfilled" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}