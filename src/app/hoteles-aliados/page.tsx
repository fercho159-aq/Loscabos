
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const hotels = [
    {
        name: "Hotel El Ganzo",
        imgSrc: "/Images/Hoteles/ElGanzoAlberca.jpg",
        imgHint: "modern hotel art",
        link: "https://www.hotelelganzo.com/"
    },
    {
        name: "Zadún, a Ritz-Carlton Reserve",
        imgSrc: "/Images/Hoteles/Zadun.png",
        imgHint: "luxury resort ocean",
        link: "https://www.ritzcarlton.com/en/hotels/sjdzr-zadun-a-ritz-carlton-reserve/overview/"
    },
    {
        name: "Secrets Puerto Los Cabos",
        imgSrc: "/Images/Hoteles/Secrets.png",
        imgHint: "all inclusive resort",
        link: "https://www.hyatt.com/en-US/hotel/mexico/secrets-puerto-los-cabos/seplc"
    },
    {
        name: "Tropicana Los Cabos",
        imgSrc: "/Images/Hoteles/Tropicana.png",
        imgHint: "boutique hotel garden",
        link: "https://www.hilton.com/en/hotels/sjdtlup-tropicana-los-cabos/"
    },
    {
        name: "Marquis Los Cabos",
        imgSrc: "/Images/Hoteles/Marquis.jpg",
        imgHint: "luxury hotel infinity pool",
        link: "https://www.marquisloscabos.com/"
    },
    {
        name: "The Cape, a Thompson Hotel",
        imgSrc: "/Images/Hoteles/TheCape.png",
        imgHint: "hotel view arch",
        link: "https://www.hyatt.com/thompson-hotels/de-DE/cslth-the-cape"
    },
    {
        name: "JW Marriott Los Cabos Beach Resort & Spa",
        imgSrc: "/Images/Hoteles/Marriott.jpg",
        imgHint: "resort spa beach",
        link: "https://www.marriott.com/en-us/hotels/sjdjw-jw-marriott-los-cabos-beach-resort-and-spa/overview/"
    },
    {
        name: "Krystal Grand Los Cabos",
        imgSrc: "/Images/Hoteles/1. Aerial View_KGLC.png",
        imgHint: "luxury hotel resort",
        link: "http://es.krystalgrand-loscabos.com/ofertas/"
    }
];

export default function HotelesAliadosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-5xl sm:text-6xl font-bold text-foreground">Hoteles Aliados</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hospédate en los mejores hoteles de la región
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotels.map((hotel) => (
                        <Card key={hotel.name} className="overflow-hidden group flex flex-col bg-background">
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
                                <Button asChild className="mt-auto w-full">
                                    <Link href={hotel.link} target="_blank" rel="noopener noreferrer">
                                        Reservar
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
