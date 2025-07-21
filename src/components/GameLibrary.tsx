import { useState } from 'react';
import GameCard from './GameCard';
import SlotBooking from './SlotBooking';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid, List } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Mock game data
const games = [
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
    title: 'Spider-Man: Miles Morales',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    genre: 'Action',
    rating: 4.8,
    players: '1 Player',
    description: 'Experience the rise of Miles Morales as he masters incredible powers.',
  },
  {
    id: '3',
    title: 'Call of Duty: Warzone',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop',
    genre: 'FPS',
    rating: 4.5,
    players: '1-150 Players',
    description: 'Battle Royale experience with up to 150 players.',
    featured: true,
  },
  {
    id: '4',
    title: 'FIFA 24',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    genre: 'Sports',
    rating: 4.3,
    players: '1-4 Players',
    description: 'The world\'s most popular football simulation game.',
  },
  {
    id: '5',
    title: 'Assassin\'s Creed Valhalla',
    image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&h=400&fit=crop',
    genre: 'Action RPG',
    rating: 4.4,
    players: '1 Player',
    description: 'Raid your enemies, grow your settlement, and build your legend.',
  },
  {
    id: '6',
    title: 'Fortnite',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
    genre: 'Battle Royale',
    rating: 4.1,
    players: '1-100 Players',
    description: 'The ultimate survival game where you build, battle, and win.',
  },
];

const genres = ['All', 'RPG', 'Action', 'FPS', 'Sports', 'Action RPG', 'Battle Royale'];

const GameLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string>('');

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const handlePlayGame = (gameId: string) => {
    const game = games.find(g => g.id === gameId);
    toast({
      title: "Launching Game",
      description: `Starting ${game?.title}... Please wait while we initialize your gaming session.`,
    });
  };

  const handleBookSlot = (gameId: string) => {
    const game = games.find(g => g.id === gameId);
    setSelectedGame(game?.title || '');
    setShowBooking(true);
  };

  const handleBookingConfirm = (slot: any, duration: number) => {
    toast({
      title: "Slot Booked Successfully!",
      description: `Your ${duration} hour gaming session for ${selectedGame} has been reserved.`,
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Game <span className="text-accent">Library</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and play hundreds of premium games instantly in the cloud
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 gaming-border"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Badge
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedGenre === genre ? 'gaming-gradient text-white' : 'hover:bg-secondary'
                }`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </Badge>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Games Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredGames.map((game, index) => (
            <div 
              key={game.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GameCard
                game={game}
                onPlay={() => handlePlayGame(game.id)}
                onBookSlot={() => handleBookSlot(game.id)}
              />
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 opacity-50">
              <Filter className="w-full h-full text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No games found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Slot Booking Modal */}
        {showBooking && (
          <SlotBooking
            gameTitle={selectedGame}
            onClose={() => setShowBooking(false)}
            onBook={handleBookingConfirm}
          />
        )}
      </div>
    </section>
  );
};

export default GameLibrary;