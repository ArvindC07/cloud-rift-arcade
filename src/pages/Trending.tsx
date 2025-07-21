import Navigation from '@/components/Navigation';
import GameCard from '@/components/GameCard';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Flame, Clock } from 'lucide-react';

const trendingGames = [
  {
    id: '1',
    title: 'Cyberpunk 2077',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    genre: 'RPG',
    rating: 4.2,
    players: '1 Player',
    description: 'An open-world, action-adventure story set in Night City.',
    featured: true,
  },
  {
    id: '2',
    title: 'Baldur\'s Gate 3',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    genre: 'RPG',
    rating: 4.9,
    players: '1-4 Players',
    description: 'The most acclaimed RPG of the year with endless possibilities.',
    featured: true,
  },
  {
    id: '3',
    title: 'Call of Duty: MW3',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop',
    genre: 'FPS',
    rating: 4.6,
    players: '1-150 Players',
    description: 'The latest installment in the legendary franchise.',
    featured: true,
  },
  {
    id: '4',
    title: 'Spider-Man 2',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    genre: 'Action',
    rating: 4.8,
    players: '1 Player',
    description: 'Swing through New York as both Peter and Miles.',
  },
  {
    id: '5',
    title: 'EA FC 24',
    image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&h=400&fit=crop',
    genre: 'Sports',
    rating: 4.4,
    players: '1-4 Players',
    description: 'The future of football gaming has arrived.',
  },
  {
    id: '6',
    title: 'Hogwarts Legacy',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    genre: 'Action RPG',
    rating: 4.5,
    players: '1 Player',
    description: 'Experience the magic of Hogwarts like never before.',
  },
];

const Trending = () => {
  const handlePlayGame = (gameId: string) => {
    console.log('Playing game:', gameId);
  };

  const handleBookSlot = (gameId: string) => {
    console.log('Booking slot for game:', gameId);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
              <Flame className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              <span className="text-accent">Trending</span> Games
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the hottest games everyone's playing right now
            </p>
          </div>

          {/* Trending Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="game-card text-center">
              <Flame className="w-12 h-12 text-primary mx-auto mb-3" />
              <div className="text-2xl font-orbitron font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">Active Players</div>
            </div>
            <div className="game-card text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
              <div className="text-2xl font-orbitron font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Trending Titles</div>
            </div>
            <div className="game-card text-center">
              <Clock className="w-12 h-12 text-gaming-pink mx-auto mb-3" />
              <div className="text-2xl font-orbitron font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Available</div>
            </div>
          </div>

          {/* Trending Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Badge className="gaming-gradient text-white px-4 py-2 text-sm">
              🔥 Hot This Week
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              ⚡ Most Played
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🆕 New Releases
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🏆 Award Winners
            </Badge>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingGames.map((game, index) => (
              <div 
                key={game.id} 
                className="animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <GameCard
                  game={game}
                  onPlay={() => handlePlayGame(game.id)}
                  onBookSlot={() => handleBookSlot(game.id)}
                />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 mb-12 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <div className="game-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold mb-4">
                Don't see your favorite game?
              </h3>
              <p className="text-muted-foreground mb-6">
                Request new games and we'll add them to our growing library of cloud gaming titles.
              </p>
              <button className="btn-gaming px-8 py-3">
                Request a Game
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trending;