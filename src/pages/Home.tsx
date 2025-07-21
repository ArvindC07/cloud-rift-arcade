import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GameLibrary from '@/components/GameLibrary';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <GameLibrary />
      </main>
      <Footer />
    </div>
  );
};

export default Home;