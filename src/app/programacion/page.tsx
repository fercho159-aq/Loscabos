
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Film, PartyPopper, Tv } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const events = [
  { 
    title: "OPENING OFICIAL DEL PROGRAMA GRATUITO", 
    description: "Para medios e influencers invitados",
    venue: "CINEMEX SJ", 
    time: "10:00 - 11:00",
    category: "Presentación",
    icon: Tv,
    color: "secondary"
  },
  { 
    title: "PROGRAMACIÓN FICC", 
    description: "Proyecciones continuas del festival.",
    venue: "CINEMEX SJ & CINEMEX Pp", 
    time: "13:00 - 23:00",
    category: "Proyección",
    icon: Film,
    color: "primary"
  },
  { 
    title: "Sinfonía Oceánica", 
    description: "Una experiencia audiovisual inmersiva.",
    venue: "CRANIA STAGE PRINCIPAL 1", 
    time: "18:00 - 19:00",
    category: "Experiencia",
    icon: Film,
    color: "accent"
  },
  { 
    title: "PROYECCIÓN INAUGURAL", 
    description: "La película que da inicio a nuestra celebración del cine.",
    venue: "CRANIA STAGE PRINCIPAL 1", 
    time: "20:00 - 22:00",
    category: "Gala",
    icon: Film,
    color: "accent"
  },
  { 
    title: "FIESTA INAUGURAL", 
    description: "Celebremos juntos el comienzo del festival.",
    venue: "CRANIA STAGE PRINCIPAL 1", 
    time: "22:00 - 00:00",
    category: "Fiesta",
    icon: PartyPopper,
    color: "destructive"
  },
];


export default function ProgramacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                Programación <span className="text-accent">2025</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Miércoles 10 de Diciembre
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {events.map((event) => (
                <Card key={event.title} className={cn("flex flex-col hover:shadow-lg transition-shadow border-l-4", 
                  {
                    'border-secondary': event.color === 'secondary',
                    'border-primary': event.color === 'primary',
                    'border-accent': event.color === 'accent',
                    'border-destructive': event.color === 'destructive',
                  }
                )}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <Badge variant={event.color} className="mb-2">{event.category}</Badge>
                            <CardTitle className="text-2xl font-headline">{event.title}</CardTitle>
                        </div>
                        <event.icon className={cn("h-8 w-8 flex-shrink-0", {
                           'text-secondary': event.color === 'secondary',
                           'text-primary': event.color === 'primary',
                           'text-accent': event.color === 'accent',
                           'text-destructive': event.color === 'destructive',
                        })} />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-6 flex-grow">{event.description}</p>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 font-semibold text-foreground">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold text-foreground">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.venue}</span>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
