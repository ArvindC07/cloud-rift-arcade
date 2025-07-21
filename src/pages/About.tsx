import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Globe, Gamepad2, Users, Award } from 'lucide-react';
import gamingSetup from '@/assets/gaming-setup.jpg';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience ultra-low latency gaming with our edge computing infrastructure.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your gaming sessions are protected with enterprise-grade security.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Play from anywhere in the world with our worldwide server network.',
  },
  {
    icon: Gamepad2,
    title: 'Any Device',
    description: 'Game on PC, Mac, mobile, or smart TV - all you need is an internet connection.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join millions of gamers in our growing cloud gaming community.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Enjoy games in 4K resolution with HDR and surround sound support.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              About <span className="text-accent">CloudGame</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing the gaming industry by making high-end gaming accessible to everyone, 
              everywhere, on any device through the power of cloud technology.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To democratize gaming by removing hardware barriers and making premium gaming experiences 
                accessible to players worldwide. We believe everyone should have the opportunity to enjoy 
                the latest AAA titles, regardless of their device or location.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through cutting-edge cloud infrastructure and innovative streaming technology, we're building 
                the future of gaming - one where your game library follows you everywhere and performance 
                is never limited by your hardware.
              </p>
              <Button className="btn-gaming">
                Join Our Mission
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden game-card">
                <img 
                  src={gamingSetup} 
                  alt="Gaming Setup" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Why Choose <span className="text-accent">CloudGame</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="game-card text-center animate-scale-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 gaming-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="game-card text-center mb-20 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8">
              Trusted by <span className="text-accent">Gamers Worldwide</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-orbitron font-bold text-accent mb-2">10M+</div>
                <div className="text-muted-foreground">Active Players</div>
              </div>
              <div>
                <div className="text-4xl font-orbitron font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Games Available</div>
              </div>
              <div>
                <div className="text-4xl font-orbitron font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-orbitron font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12 animate-slide-up" style={{ animationDelay: '1.4s' }}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join millions of gamers who have already made the switch to cloud gaming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-gaming px-8">
                  Start Playing Now
                </Button>
                <Button size="lg" variant="outline" className="btn-secondary px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;