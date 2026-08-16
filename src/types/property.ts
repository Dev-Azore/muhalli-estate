export type PropertyType =
  | 'Residential Estate'
  | 'Commercial Plaza'
  | 'Land / Plot'
  | 'Office Space'
  | 'Off-Plan';

export type PropertyStatus = 'Available' | 'Reserved' | 'Sold' | 'Off-Plan';

export type DocumentTitleType =
  | 'C of O'
  | "Governor's Consent"
  | 'Deed of Assignment'
  | 'Excision';

export interface PropertyListing {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  priceFormatted: string;
  location: string;
  size: string;
  documentTitle: DocumentTitleType;
  image: string;
  galleryImages?: string[];
  floorPlanImage?: string;
  featured: boolean;
  paymentPlan?: string;
  description: string;
  features?: string[];
}
