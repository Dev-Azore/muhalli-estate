import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import WhyMuhalli from '@/components/home/WhyMuhalli';
import FeaturedListings from '@/components/home/FeaturedListings';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      <HeroSection />
      <TrustBar />
      <WhyMuhalli />
      <FeaturedListings />
      <Testimonials />
    </div>
  );
}
