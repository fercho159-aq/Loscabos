import Header from '@/components/cabo-cine/header';
import HeroSection from '@/components/cabo-cine/hero-section';
import ProgramSection from '@/components/cabo-cine/program-section';
import IndustrySection from '@/components/cabo-cine/industry-section';
import CommunitySection from '@/components/cabo-cine/community-section';
import SponsorsSection from '@/components/cabo-cine/sponsors-section';
import CatalogueSection from '@/components/cabo-cine/catalogue-section';
import Footer from '@/components/cabo-cine/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProgramSection />
        <IndustrySection />
        <CommunitySection />
        <SponsorsSection />
        <CatalogueSection />
      </main>
      <Footer />
    </div>
  );
}
