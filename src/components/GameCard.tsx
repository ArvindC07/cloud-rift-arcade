import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Star, Users } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  image: string;
  genre: string;
  rating: number;
  players: string;
  description: string;
  featured?: boolean;
}

interface GameCardProps {
  game: Game;
  onPlay?: () => void;
  onBookSlot?: () => void;
}

const GameCard = ({ game, onPlay, onBookSlot }: GameCardProps) => {
  return (
    <div className="game-card group relative overflow-hidden">
      {/* Game Image */}
      <div className="relative h-48 overflow-hidden rounded-lg mb-4">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {game.featured && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="lg" 
            className="btn-gaming rounded-full w-16 h-16 p-0"
            onClick={onPlay}
          >
            <Play className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Game Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-orbitron font-bold text-lg text-foreground group-hover:text-accent transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{game.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <Badge variant="outline" className="text-xs">
            {game.genre}
          </Badge>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{game.players}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {game.description}
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button 
            className="flex-1 btn-gaming" 
            size="sm"
            onClick={onPlay}
          >
            <Play className="w-4 h-4 mr-1" />
            Play Now
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="btn-secondary"
            onClick={onBookSlot}
          >
            <Clock className="w-4 h-4 mr-1" />
            Book Slot
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;