
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BedDouble, MapPin, Sparkles, Sun, Utensils, Award } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const hotels = [
    {
        name: "Hotel El Ganzo",
        description: "Un centro de creatividad y sofisticación con vistas a la marina.",
        imgSrc: "/Images/Campus/DSC_9298.jpg",
        imgHint: "modern hotel art",
        perks: ["Tarifa preferencial", "Transporte al festival"],
        link: "https://www.hotelelganzo.com/"
    },
    {
        name: "The Cape, a Thompson Hotel",
        description: "Vistas inigualables del Arco y un ambiente de lujo contemporáneo.",
        imgSrc: "https://picsum.photos/seed/the-cape/800/600",
        imgHint: "luxury hotel ocean",
        perks: ["Coctel de bienvenida", "Acceso a after-party"],
        link: "https://www.hyatt.com/thompson-hotels/cslth-the-cape"
    },
    {
        name: "Viceroy Los Cabos",
        description: "Arquitectura vanguardista y espejos de agua que se funden con el mar.",
        imgSrc: "https://picsum.photos/seed/viceroy/800/600",
        imgHint: "architectural hotel pools",
        perks: ["Descuento en spa", "Check-out extendido"],
        link: "https://www.viceroyhotelsandresorts.com/los-cabos"
    }
];

const restaurants = [
    {
        name: "Suelo Sur",
        description: "Cocina contemporánea con ingredientes locales en un ambiente íntimo.",
        imgSrc: "/Images/Restaurantes/SueloSur.jpg",
        imgHint: "gourmet restaurant interior",
        link: "https://www.suelosur.com/"
    },
    {
        name: "Tamarindos",
        description: "Restaurante orgánico de granja a mesa con sabores auténticos.",
        imgSrc: "/Images/Restaurantes/Tamarindos.jpg",
        imgHint: "organic farm restaurant",
        link: "https://lostamarindos.mx/"
    },
    {
        name: "Nao",
        description: "Alta cocina con vistas espectaculares al océano.",
        imgSrc: "/Images/Restaurantes/Nao.jpg",
        imgHint: "fine dining ocean view",
        link: "https://www.naocabo.com/"
    },
    {
        name: "Flora Farms",
        description: "Experiencia culinaria única en una granja de 25 acres.",
        imgSrc: "/Images/Restaurantes/FloraFarms.jpg",
        imgHint: "farm to table restaurant",
        link: "https://www.flora-farms.com/"
    },
    {
        name: "Manta",
        description: "Fusión peruano-asiática en un entorno de lujo junto al mar.",
        imgSrc: "/Images/Restaurantes/Manta.jpg",
        imgHint: "luxury beachside restaurant",
        link: "https://www.mantarestaurant.com/"
    }
];

const venues = [
    {
        name: "Crania",
        description: "Epicentro creativo y escénico donde cine, música y arte digital se encuentran.",
        imgSrc: "/Images/Campus/Copia de DSC01799.jpg",
        imgHint: "outdoor venue night",
    },
    {
        name: "Veleros Beach Club",
        description: "Un espacio para la convivencia con música local y experiencias de la comunidad.",
        imgSrc: "/Images/Campus/Drone-edit2 (1).png",
        imgHint: "beach club ocean",
    },
    {
        name: "Jardín IKAL",
        description: "Enclave natural y escénico que albergará actos especiales y la fiesta de clausura.",
        imgSrc: "/Images/Campus/Dalu_finales-400.jpg",
        imgHint: "lush garden nature"
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
                            src="/Images/Main/Banner inicial.jpg"
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
                                        <Button asChild className="mt-auto w-full">
                                            <Link href={hotel.link} target="_blank" rel="noopener noreferrer">
                                                Ver Tarifas y Reservar
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Restaurants Section */}
                <section className="py-16 sm:py-24 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Restaurantes</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                Disfruta la mejor experiencia gastronómica de la región
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {restaurants.map((restaurant) => (
                                <Card key={restaurant.name} className="overflow-hidden group flex flex-col border-border/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative h-64 w-full">
                                        <Image
                                            src={restaurant.imgSrc}
                                            alt={restaurant.name}
                                            data-ai-hint={restaurant.imgHint}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <CardContent className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-bold font-headline text-card-foreground">{restaurant.name}</h3>
                                        <p className="text-muted-foreground mt-2 mb-4 flex-grow">{restaurant.description}</p>
                                        <Button asChild className="mt-auto w-full">
                                            <Link href={restaurant.link} target="_blank" rel="noopener noreferrer">
                                                Visitar
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Venues Section */}
                <section className="py-16 sm:py-24 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Sedes del Festival</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                Estos son los epicentros de la creatividad donde la magia del cine cobrará vida.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {venues.map((venue) => (
                                <Card key={venue.name} className="overflow-hidden group flex flex-col border-border/50 hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative h-80 w-full">
                                        <Image
                                            src={venue.imgSrc}
                                            alt={venue.name}
                                            data-ai-hint={venue.imgHint}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <CardContent className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-bold font-headline text-card-foreground">{venue.name}</h3>
                                        <p className="text-muted-foreground mt-2 flex-grow">{venue.description}</p>
                                        <Button asChild variant="outline" className="mt-4">
                                            <Link href="/campus">
                                                Explorar Campus
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experiences Section */}
                <section className="py-16 sm:py-24 bg-background">
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
                                        src="/Images/Main/Banner inicial.jpg"
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

