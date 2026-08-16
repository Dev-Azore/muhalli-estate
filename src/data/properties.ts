export interface Property {
  id: string;
  slug: string;
  title: string;
  type: 'Residential Estate' | 'Commercial Plaza' | 'Land / Plot' | 'Office Space' | 'Off-Plan';
  status: 'Available' | 'Reserved' | 'Sold' | 'Off-Plan';
  price: number; // in Naira
  priceFormatted: string;
  location: string;
  size: string; // e.g. "500 sqm (1 Plot)"
  documentTitle: 'C of O' | "Governor's Consent" | 'Deed of Assignment' | 'Excision';
  image: string;
  featured: boolean;
  paymentPlan?: string;
  description: string;
}

export const sampleProperties: Property[] = [
  {
    id: '1',
    slug: 'muhalli-haven-estate-kano',
    title: 'Muhalli Haven Residential Estate',
    type: 'Residential Estate',
    status: 'Available',
    price: 45000000,
    priceFormatted: '₦45M',
    location: 'Farm Centre, Kano State',
    size: '500 sqm (1 Plot)',
    documentTitle: 'C of O',
    image: '/estate-1.webp',
    featured: true,
    paymentPlan: 'Initial 30% deposit, balance spread over 12 months',
    description: 'Modern luxury residential estate villa with perimeter security fencing, interlocked paved roads, solar streetlights, and 24/7 security layout in prime Kano metropolis.',
  },
  {
    id: '2',
    slug: 'royal-plaza-commercial-kano',
    title: 'Royal Commercial Plaza & Office Complex',
    type: 'Commercial Plaza',
    status: 'Off-Plan',
    price: 120000000,
    priceFormatted: '₦120M',
    location: 'Limawa Road, Kano State',
    size: '1,200 sqm',
    documentTitle: "Governor's Consent",
    image: '/estate-2.webp',
    featured: true,
    paymentPlan: 'Milestone-based payment aligned with construction progress',
    description: 'High-yield 4-storey commercial plaza featuring retail shop spaces, executive offices, underground parking, and elevator provisions on Limawa Road, Kano.',
  },
  {
    id: '3',
    slug: 'prime-land-banking-plot-kano',
    title: 'Prime Land Banking Estate Plot',
    type: 'Land / Plot',
    status: 'Available',
    price: 25000000,
    priceFormatted: '₦25M',
    location: 'Nassarawa GRA, Kano State',
    size: '600 sqm',
    documentTitle: 'Deed of Assignment',
    image: '/land-1.webp',
    featured: true,
    paymentPlan: 'Outright purchase discount or 6 months payment plan',
    description: 'Fast-developing residential plot with clear land titles and ongoing infrastructure development in Kano GRA. Excellent ROI for land banking investors.',
  },
];

