import type { Metadata } from 'next';
import { sampleProperties } from '@/data/properties';
import PropertyDetailClient from '@/components/properties/PropertyDetailClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const property = sampleProperties.find((p) => p.slug === resolvedParams.slug) || sampleProperties[0];

  return {
    title: `${property.title} - ${property.priceFormatted}`,
    description: `${property.title} located in ${property.location}. Size: ${property.size}. Title: ${property.documentTitle}. ${property.description}`,
    openGraph: {
      title: `${property.title} | Muhalli Estate`,
      description: property.description,
      images: [{ url: property.image, alt: property.title }],
    },
  };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const property = sampleProperties.find((p) => p.slug === resolvedParams.slug) || sampleProperties[0];

  return <PropertyDetailClient property={property} />;
}
