
import Header from '@/components/cabo-cine/header';
import HeroSection from '@/components/cabo-cine/hero-section';
import AboutSection from '@/components/cabo-cine/about-section';
import BeyondTheScreenSection from '@/components/cabo-cine/beyond-the-screen-section';
import ProgramSection from '@/components/cabo-cine/program-section';
import AnimationSection from '@/components/cabo-cine/animation-section';
import LaBajaInspiraHomeSection from '@/components/cabo-cine/la-baja-inspira-home-section';
import SponsorsSection from '@/components/cabo-cine/sponsors-section';
import Footer from '@/components/cabo-cine/footer';
import GFFFHomeSection from '@/components/cabo-cine/gfff-home-section';
import CommunitySupportSection from '@/components/cabo-cine/community-support-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <BeyondTheScreenSection />
        <ProgramSection />
        <AnimationSection />
        <GFFFHomeSection />
        <LaBajaInspiraHomeSection />
        <SponsorsSection />
        <CommunitySupportSection />
      </main>
      <Footer />
    </div>
  );
}
