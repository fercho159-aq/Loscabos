
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Film, PartyPopper, Tv, Music, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const wednesdayEvents = [
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

const thursdayEvents = [
    {
      title: "PROYECCIÓN 1",
      description: "Detalles de la proyección próximamente.",
      venue: "CRANIA STAGE 2",
      time: "17:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "PLATICA INTRO Y PROYECCIÓN 1",
      description: "Charla introductoria seguida de una proyección especial.",
      venue: "CRANIA STAGE PRINCIPAL 1",
      time: "18:00",
      category: "Presentación",
      icon: Tv,
      color: "secondary"
    },
    {
      title: "PROYECCIÓN 2",
      description: "Detalles de la proyección próximamente.",
      venue: "CRANIA STAGE 2",
      time: "20:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "ED MAVERICK",
      description: "Presentación especial de Ed Maverick.",
      venue: "CRANIA STAGE PRINCIPAL 1",
      time: "21:00",
      category: "Música",
      icon: Music,
      color: "accent"
    },
    {
      title: "TOCA ED MAVERICK",
      description: "Concierto en vivo de Ed Maverick para cerrar la noche.",
      venue: "CRANIA STAGE PRINCIPAL 1",
      time: "23:00",
      category: "Concierto",
      icon: Music,
      color: "destructive"
    },
    {
      title: "DJ POR CONFIRMAR",
      description: "La fiesta continúa con un set especial.",
      venue: "VELEROS",
      time: "23:00",
      category: "Fiesta",
      icon: PartyPopper,
      color: "destructive"
    },
];

const fridayEvents = [
    {
      title: "La Baja Inspira 1",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX SJ",
      time: "14:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "PROYECCIÓN 1",
      description: "Detalles de la proyección próximamente.",
      venue: "CRANIA STAGE 2",
      time: "17:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "La Baja Inspira 2",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX SJ",
      time: "17:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "PROYECCIÓN 1",
      description: "Detalles de la proyección próximamente.",
      venue: "CRANIA STAGE PRINCIPAL 1",
      time: "18:00",
      category: "Proyección",
      icon: Tv,
      color: "secondary"
    },
    {
      title: "La Baja Inspira 3",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX SJ",
      time: "19:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "PROYECCIÓN 2",
      description: "Detalles de la proyección próximamente.",
      venue: "CRANIA STAGE 2",
      time: "20:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "Función Especial de AMORES PERROS",
      description: "Proyección icónica para celebrar un hito del cine.",
      venue: "CRANIA STAGE PRINCIPAL 1",
      time: "21:00",
      category: "Gala",
      icon: Film,
      color: "accent"
    },
    {
      title: "Fiesta de Amores Perros X PRADA",
      description: "Una celebración exclusiva en honor a la película.",
      venue: "VELEROS",
      time: "22:00",
      category: "Fiesta",
      icon: PartyPopper,
      color: "destructive"
    },
    {
      title: "La Baja Inspira 4",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX SJ",
      time: "22:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "La Baja Inspira 5",
      description: "Cierre de proyecciones de cortometrajes locales.",
      venue: "CINEMEX SJ",
      time: "00:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
];

const saturdayEvents = [
    {
      title: "Masterclass SOBRE DIRECCIÓN DE ARTE con Eugenio Caballero",
      description: "Una oportunidad única para aprender del galardonado diseñador de producción.",
      venue: "GANZO GALERÍA",
      time: "12:00",
      category: "Masterclass",
      icon: User,
      color: "secondary"
    },
    {
      title: "La Baja Inspira 1",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX Pp",
      time: "12:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "La Baja Inspira 2",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX Pp",
      time: "15:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "La Baja Inspira 3",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX Pp",
      time: "17:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "PROYECCIÓN 1",
      description: "Detalles de la proyección próximamente.",
      venue: "CRANIA STAGE 2",
      time: "18:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "Función Especial de AMORES PERROS",
      description: "Proyección icónica para celebrar un hito del cine.",
      venue: "CRANIA STAGE PRINCIPAL 1",
      time: "19:00",
      category: "Gala",
      icon: Film,
      color: "accent"
    },
    {
      title: "La Baja Inspira 4",
      description: "Proyección de la serie de cortometrajes locales.",
      venue: "CINEMEX Pp",
      time: "19:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "SPACE XMAS",
      description: "Evento especial de Navidad en el espacio.",
      venue: "CRANIA STAGE 2",
      time: "22:00",
      category: "Experiencia",
      icon: PartyPopper,
      color: "destructive"
    },
    {
      title: "La Baja Inspira 5",
      description: "Cierre de proyecciones de cortometrajes locales.",
      venue: "CINEMEX Pp",
      time: "22:00",
      category: "Proyección",
      icon: Film,
      color: "primary"
    },
    {
      title: "Cena oficial de clausura del evento Y PALABRAS PARA ECABALLERO 200pax",
      description: "La gran final del festival, una noche para celebrar.",
      venue: "SUELO SUR",
      time: "22:00",
      category: "Fiesta",
      icon: PartyPopper,
      color: "destructive"
    }
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
            </div>
            
            {/* Wednesday Events */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-foreground mb-10">
                Miércoles 10 de Diciembre
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {wednesdayEvents.map((event, index) => (
                  <Card key={`${event.title}-${index}`} className={cn("flex flex-col hover:shadow-lg transition-shadow border-l-4", 
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
                              <Badge variant={event.color === 'destructive' ? 'destructive' : event.color as any} className="mb-2">{event.category}</Badge>
                              <CardTitle>{event.title}</CardTitle>
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

            {/* Thursday Events */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-foreground mb-10">
                Jueves 11 de Diciembre
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {thursdayEvents.map((event, index) => (
                  <Card key={`${event.title}-${index}`} className={cn("flex flex-col hover:shadow-lg transition-shadow border-l-4", 
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
                              <Badge variant={event.color === 'destructive' ? 'destructive' : event.color as any} className="mb-2">{event.category}</Badge>
                              <CardTitle>{event.title}</CardTitle>
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

            {/* Friday Events */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-foreground mb-10">
                Viernes 12 de Diciembre
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {fridayEvents.map((event, index) => (
                  <Card key={`${event.title}-${index}`} className={cn("flex flex-col hover:shadow-lg transition-shadow border-l-4", 
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
                              <Badge variant={event.color === 'destructive' ? 'destructive' : event.color as any} className="mb-2">{event.category}</Badge>
                              <CardTitle>{event.title}</CardTitle>
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
            
            {/* Saturday Events */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-foreground mb-10">
                Sábado 13 de Diciembre
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {saturdayEvents.map((event, index) => (
                  <Card key={`${event.title}-${index}`} className={cn("flex flex-col hover:shadow-lg transition-shadow border-l-4", 
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
                              <Badge variant={event.color === 'destructive' ? 'destructive' : event.color as any} className="mb-2">{event.category}</Badge>
                              <CardTitle>{event.title}</CardTitle>
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

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
