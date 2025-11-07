
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: "/Images/PuertoCabos/FICC_Banner__PLC.png", alt: "Vista de la marina de Puerto Los Cabos", hint: "marina boats" },
  { src: "/Images/PuertoCabos/FICC_Banner_PLC2.png", alt: "Atardecer en la playa", hint: "beach sunset" },
  { src: "/Images/PuertoCabos/FICC_Banner_1.png", alt: "Campo de golf con vista al mar", hint: "golf course ocean" },
  { src: "/Images/PuertoCabos/FICC_Banner_PLC3.png", alt: "Arte en el Hotel El Ganzo", hint: "hotel art" }
];

const logos = [
  { name: "Hotel El Ganzo", logo: "/Images/patrocinadores/HG_GENERAL-13.png", hint: "company logo" },
  { name: "Kundavi", logo: "/Images/patrocinadores/Lockup (Noche)@10x.png", hint: "company logo" },
  { name: "Questro", logo: "/Images/patrocinadores/Logos Questro _Mesa de trabajo 1 copia 21.png", hint: "company logo" },
  { name: "Puerto Los Cabos", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 9.png", hint: "company logo" },
  { name: "Crania", logo: "/Images/patrocinadores/Crania _ Logos _Mesa de trabajo 1 copia.png", hint: "company logo" },
  { name: "Veleros Beach Club", logo: "/Images/patrocinadores/VELEROS-01.png", hint: "company logo" },
  { name: "San Jose del Este", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 13.png", hint: "company logo" },
];

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
    }
];

export default function PuertoLosCabosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/PuertoCabos/FICC_Banner13.png"
                alt="Landscape de Puerto Los Cabos"
                data-ai-hint="puerto los cabos landscape"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="font-headline text-5xl sm:text-7xl font-bold">Puerto Los Cabos</h1>
            </div>
        </section>

        {/* Content Section */}
        <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl space-y-8 text-lg text-muted-foreground">
                <p>Ubicado en la costa este de Baja California Sur, Puerto Los Cabos se encuentra en el punto exacto donde el desierto se encuentra con el Mar de Cortés, una de las regiones marinas con mayor biodiversidad del planeta, reconocida por la UNESCO como Patrimonio Natural de la Humanidad.</p>
                <p>Durante la última década, Puerto Los Cabos ha evolucionado hacia un destino que trasciende el turismo tradicional. Gracias a iniciativas pioneras como las residencias artísticas del Hotel El Ganzo, los festivales de música en Crania e IKAL, y centros de consumo como Veleros, la región se ha posicionado como un referente del turismo consciente en México.</p>
                <p>Hoy, Puerto Los Cabos ya opera como un ecosistema creativo donde artistas, chefs, cineastas, diseñadores, e innovadores coexisten en un mismo territorio. El FICLosCabos no es solo un evento anual: es un medio estratégico de comunicación y posicionamiento para Puerto Los Cabos. Con su enfoque curatorial, estratégico y regenerativo, el Festival no solo amplía el alcance internacional de este ecosistema, sino que también funciona como vehículo de atracción para un nuevo perfil de visitante e inversionista: aquel que valora el arte, la diversidad cultural, la conexión con la comunidad y el respeto por el entorno.</p>
            </div>
        </section>
        
        {/* Map Section */}
        <section className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <Image 
                        src="/Images/PLC-_-Master-Plan-_-Digital-_-Baja.png"
                        alt="Mapa de Puerto Los Cabos"
                        data-ai-hint="illustrated map"
                        width={1000}
                        height={800}
                        className="w-full h-auto object-cover rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                    >
                    <CarouselContent className="-ml-4">
                        {galleryImages.map((image, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <Card className="overflow-hidden">
                                <CardContent className="p-0 aspect-[3/4] relative">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        data-ai-hint={image.hint}
                                        fill
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>


        {/* Logos Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground mb-10">Un Ecosistema Creativo</h2>
                 <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {logos.map((logo) => (
                        <div key={logo.name}>
                            <Image
                                src={logo.logo}
                                alt={logo.name}
                                data-ai-hint={logo.hint}
                                width={150}
                                height={75}
                                className="opacity-70"
                            />
                        </div>
                    ))}
                 </div>
            </div>
        </section>

        {/* Hotels Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Hoteles</h2>
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

    