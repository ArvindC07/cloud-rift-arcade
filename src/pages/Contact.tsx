import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Headphones,
  Send
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email',
    contact: 'support@cloudgame.com',
    available: '24/7 Response',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our team',
    contact: 'Available in app',
    available: '24/7 Available',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us directly',
    contact: '+1 (555) 123-4567',
    available: 'Mon-Fri 9AM-6PM',
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Need help or have questions? Our gaming experts are here to assist you 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
              <h2 className="text-2xl font-orbitron font-bold mb-6">
                Contact <span className="text-primary">Methods</span>
              </h2>
              
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title} 
                  className="game-card hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gaming-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-lg mb-1">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {method.description}
                        </p>
                        <p className="text-accent font-semibold mb-1">
                          {method.contact}
                        </p>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{method.available}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Support */}
              <Card className="game-card">
                <CardContent className="p-6 text-center">
                  <Headphones className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-orbitron font-bold text-lg mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join our Discord community for instant support from fellow gamers.
                  </p>
                  <Button className="btn-gaming w-full">
                    Join Discord
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Card className="game-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron">
                    Send us a <span className="text-accent">Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input 
                          placeholder="Enter your first name"
                          className="gaming-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input 
                          placeholder="Enter your last name"
                          className="gaming-border"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="gaming-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input 
                        placeholder="What's this about?"
                        className="gaming-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="gaming-border"
                      />
                    </div>

                    <Button type="submit" size="lg" className="btn-gaming w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="game-card text-left">
                <h3 className="font-orbitron font-bold text-lg mb-3">
                  How does cloud gaming work?
                </h3>
                <p className="text-muted-foreground">
                  Games run on our powerful servers and are streamed to your device in real-time, 
                  so you can play AAA titles on any device with an internet connection.
                </p>
              </div>
              <div className="game-card text-left">
                <h3 className="font-orbitron font-bold text-lg mb-3">
                  What internet speed do I need?
                </h3>
                <p className="text-muted-foreground">
                  We recommend at least 10 Mbps for 720p gaming, 20 Mbps for 1080p, 
                  and 35 Mbps for 4K gaming with minimal latency.
                </p>
              </div>
              <div className="game-card text-left">
                <h3 className="font-orbitron font-bold text-lg mb-3">
                  Can I use my own controller?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We support most controllers including Xbox, PlayStation, and generic USB controllers. 
                  You can also play with keyboard and mouse.
                </p>
              </div>
              <div className="game-card text-left">
                <h3 className="font-orbitron font-bold text-lg mb-3">
                  Is my game progress saved?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! All your game saves are stored in the cloud and sync across all your devices, 
                  so you can continue playing anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;