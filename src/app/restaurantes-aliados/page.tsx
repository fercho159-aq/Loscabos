
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const restaurants = [
    {
        name: "Suelo Sur",
        imgSrc: "/Images/Restaurantes/suelo sur granero bar buho tables 2.jpg",
        imgHint: "gourmet restaurant interior",
        link: "https://www.suelosur.com/"
    },
    {
        name: "Tamarindos",
        imgSrc: "/Images/Restaurantes/tamarindos-1-1.jpg",
        imgHint: "organic farm restaurant",
        link: "https://lostamarindos.mx/"
    },
    {
        name: "Nao",
        imgSrc: "/Images/Restaurantes/NaoCabo.jpg",
        imgHint: "fine dining ocean view",
        link: "https://www.naocabo.com/"
    },
    {
        name: "Flora Farms",
        imgSrc: "/Images/Restaurantes/Florafarms.png",
        imgHint: "farm to table restaurant",
        link: "https://www.flora-farms.com/"
    },
    {
        name: "Manta",
        imgSrc: "/Images/Restaurantes/Manta.jpg",
        imgHint: "luxury beachside restaurant",
        link: "https://www.mantarestaurant.com/"
    }
];

export default function RestaurantesAliadosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-card">
            <Header />
            <main className="flex-grow pt-20">
                <section className="py-16 sm:py-24 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h1 className="font-headline text-5xl sm:text-6xl font-bold text-foreground">Restaurantes</h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                Disfruta la mejor experiencia gastronómica de la región
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {restaurants.map((restaurant) => (
                                <Card key={restaurant.name} className="overflow-hidden group flex flex-col bg-background">
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
            </main>
            <Footer />
        </div>
    );
}
