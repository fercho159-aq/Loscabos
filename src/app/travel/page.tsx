
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BedDouble, MapPin, Sparkles, Sun, Utensils, Award } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const hotels = [
  {
    name: "Hotel El Ganzo",
    description: "Un centro de creatividad y sofisticación con vistas a la marina.",
    imgSrc: "https://picsum.photos/800/600?random=30",
    imgHint: "modern hotel marina",
    perks: ["Tarifa preferencial", "Transporte al festival"]
  },
  {
    name: "The Cape, a Thompson Hotel",
    description: "Vistas inigualables del Arco y un ambiente de lujo contemporáneo.",
    imgSrc: "https://picsum.photos/800/600?random=31",
    imgHint: "luxury hotel ocean",
    perks: ["Coctel de bienvenida", "Acceso a after-party"]
  },
  {
    name: "Viceroy Los Cabos",
    description: "Arquitectura vanguardista y espejos de agua que se funden con el mar.",
    imgSrc: "https://picsum.photos/800/600?random=32",
    imgHint: "architectural hotel pools",
    perks: ["Descuento en spa", "Check-out extendido"]
  }
];

const experiences = [
    {
        icon: Utensils,
        title: "Gastronomía de Clase Mundial",
        description: "Desde cocinas de autor hasta auténticos tacos de pescado en la playa."
    },
    {
        icon: Sun,
        title: "Playas y Aventura",
        description: "Explora el famoso Arco, bucea en Cabo Pulmo o simplemente relájate en la arena."
    },
    {
        icon: Sparkles,
        title: "Vida Nocturna y Arte",
        description: "Descubre galerías de arte en San José del Cabo y una vibrante escena social."
    }
]

export default function TravelPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-card text-center py-20 sm:py-28 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                 <Image
                    src="https://picsum.photos/1920/1081"
                    alt="Paisaje aéreo de Los Cabos"
                    data-ai-hint="aerial landscape beach"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-background">
                    Un Festival, Un <span className="text-accent">Destino</span>
                </h1>
                <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                    CaboCine es más que películas, es una inmersión total en la magia de Los Cabos. Vive el cine, explora un paraíso.
                </p>
            </div>
        </section>
        
        {/* Hotels Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Hoteles Aliados</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hemos seleccionado los mejores hoteles para que tu estancia sea tan memorable como el festival.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotels.map((hotel) => (
                        <Card key={hotel.name} className="overflow-hidden group flex flex-col border-border/50 hover:shadow-xl transition-shadow duration-300">
                             <div className="relative h-64 w-full">
                                <Image
                                    src={hotel.imgSrc}
                                    alt={hotel.name}
                                    data-ai-hint={hotel.imgHint}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold font-headline text-card-foreground">{hotel.name}</h3>
                                <p className="text-muted-foreground mt-2 mb-4 flex-grow">{hotel.description}</p>
                                <div className="space-y-2 mb-6">
                                    {hotel.perks.map(perk => (
                                        <div key={perk} className="flex items-center text-sm text-foreground">
                                            <Award className="h-4 w-4 mr-2 text-accent" />
                                            <span>{perk}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button className="mt-auto w-full">Ver Tarifas y Reservar</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Experiences Section */}
         <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
                            Vive la Experiencia <span className="text-accent">Completa</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Aprovecha tu visita para descubrir por qué Los Cabos es un destino de clase mundial.
                        </p>
                         <div className="mt-8 space-y-6">
                            {experiences.map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
                                     <div className="flex-shrink-0 bg-primary/10 text-accent p-3 rounded-full mt-1">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="order-1 md:order-2">
                        <Card className="overflow-hidden shadow-2xl shadow-black/20">
                            <Image 
                                src="https://picsum.photos/800/600?random=35"
                                alt="El Arco de Cabo San Lucas"
                                data-ai-hint="cabo san lucas arch"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
