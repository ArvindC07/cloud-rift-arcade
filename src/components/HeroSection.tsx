import { Button } from '@/components/ui/button';
import { Play, Zap, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-gaming.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cloud Gaming Hero" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gaming-pink rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6">
            <span className="block text-white">CLOUD</span>
            <span className="block neon-text animate-glow">GAMING</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of gaming. Play AAA titles instantly on any device. 
            No downloads, no waiting, just pure gaming excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-gaming text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Start Playing Now
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Explore Games
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="game-card text-center">
            <div className="text-3xl font-orbitron font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Games Available</div>
          </div>
          <div className="game-card text-center">
            <div className="text-3xl font-orbitron font-bold text-accent mb-2">4K</div>
            <div className="text-muted-foreground">Ultra HD Quality</div>
          </div>
          <div className="game-card text-center">
            <div className="text-3xl font-orbitron font-bold text-accent mb-2">&lt;20ms</div>
            <div className="text-muted-foreground">Ultra Low Latency</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;