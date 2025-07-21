import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Gamepad2, Check, X } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  price: number;
}

interface SlotBookingProps {
  gameTitle: string;
  onClose: () => void;
  onBook: (slot: TimeSlot, duration: number) => void;
}

const timeSlots: TimeSlot[] = [
  { id: '1', time: '09:00', available: true, price: 5 },
  { id: '2', time: '10:00', available: true, price: 5 },
  { id: '3', time: '11:00', available: false, price: 5 },
  { id: '4', time: '12:00', available: true, price: 7 },
  { id: '5', time: '13:00', available: true, price: 7 },
  { id: '6', time: '14:00', available: true, price: 7 },
  { id: '7', time: '15:00', available: false, price: 7 },
  { id: '8', time: '16:00', available: true, price: 7 },
  { id: '9', time: '17:00', available: true, price: 10 },
  { id: '10', time: '18:00', available: true, price: 10 },
  { id: '11', time: '19:00', available: true, price: 10 },
  { id: '12', time: '20:00', available: false, price: 10 },
];

const durations = [
  { hours: 1, label: '1 Hour', discount: 0 },
  { hours: 2, label: '2 Hours', discount: 0.1 },
  { hours: 4, label: '4 Hours', discount: 0.15 },
  { hours: 8, label: '8 Hours', discount: 0.2 },
];

const SlotBooking = ({ gameTitle, onClose, onBook }: SlotBookingProps) => {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const calculatePrice = () => {
    if (!selectedSlot) return 0;
    const duration = durations.find(d => d.hours === selectedDuration);
    const basePrice = selectedSlot.price * selectedDuration;
    const discount = duration ? duration.discount : 0;
    return basePrice * (1 - discount);
  };

  const handleBook = () => {
    if (selectedSlot) {
      onBook(selectedSlot, selectedDuration);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto game-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <div>
            <CardTitle className="text-2xl font-orbitron">
              Book Gaming Slot
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Reserve your slot for <span className="text-accent font-semibold">{gameTitle}</span>
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium mb-3 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-accent" />
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-3 rounded-lg gaming-border bg-background text-foreground"
            />
          </div>

          {/* Duration Selection */}
          <div>
            <label className="block text-sm font-medium mb-3 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-accent" />
              Session Duration
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {durations.map((duration) => (
                <Button
                  key={duration.hours}
                  variant={selectedDuration === duration.hours ? "default" : "outline"}
                  className={`p-4 h-auto flex-col ${
                    selectedDuration === duration.hours ? 'gaming-gradient text-white' : 'btn-secondary'
                  }`}
                  onClick={() => setSelectedDuration(duration.hours)}
                >
                  <div className="font-semibold">{duration.label}</div>
                  {duration.discount > 0 && (
                    <Badge variant="secondary" className="mt-1 text-xs">
                      -{Math.round(duration.discount * 100)}% off
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Time Slot Selection */}
          <div>
            <label className="block text-sm font-medium mb-3 flex items-center">
              <Gamepad2 className="w-4 h-4 mr-2 text-accent" />
              Available Time Slots
            </label>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={selectedSlot?.id === slot.id ? "default" : "outline"}
                  disabled={!slot.available}
                  className={`p-4 h-auto flex-col ${
                    selectedSlot?.id === slot.id 
                      ? 'gaming-gradient text-white' 
                      : slot.available 
                        ? 'btn-secondary hover:bg-accent hover:text-accent-foreground' 
                        : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => slot.available && setSelectedSlot(slot)}
                >
                  <div className="font-semibold">{slot.time}</div>
                  <div className="text-xs opacity-75">
                    {slot.available ? `$${slot.price}/hr` : 'Booked'}
                  </div>
                  {slot.available && selectedSlot?.id === slot.id && (
                    <Check className="w-3 h-3 mt-1" />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          {selectedSlot && (
            <div className="game-card p-4">
              <h3 className="font-orbitron font-bold text-lg mb-3">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Game:</span>
                  <span className="text-accent font-semibold">{gameTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>{new Date(selectedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span>{selectedSlot.time}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{selectedDuration} hour{selectedDuration > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span>Base Price:</span>
                  <span>${(selectedSlot.price * selectedDuration).toFixed(2)}</span>
                </div>
                {selectedDuration > 1 && (
                  <div className="flex justify-between text-accent">
                    <span>Discount:</span>
                    <span>-${((selectedSlot.price * selectedDuration) - calculatePrice()).toFixed(2)}</span>
                  </div>
                )}
                <hr className="border-border" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-accent">${calculatePrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1 btn-secondary">
              Cancel
            </Button>
            <Button 
              onClick={handleBook} 
              disabled={!selectedSlot}
              className="flex-1 btn-gaming"
            >
              Book Slot - ${calculatePrice().toFixed(2)}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SlotBooking;