
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
  { src: "https://picsum.photos/seed/plc-gallery-1/800/600", alt: "Vista de la marina de Puerto Los Cabos", hint: "marina boats" },
  { src: "https://picsum.photos/seed/plc-gallery-2/800/600", alt: "Atardecer en la playa", hint: "beach sunset" },
  { src: "https://picsum.photos/seed/plc-gallery-3/800/600", alt: "Campo de golf con vista al mar", hint: "golf course ocean" },
  { src: "https://picsum.photos/seed/plc-gallery-4/800/600", alt: "Arte en el Hotel El Ganzo", hint: "hotel art" },
  { src: "https://picsum.photos/seed/plc-gallery-5/800/600", alt: "Evento en Crania", hint: "outdoor event night" },
];

const logos = [
  { name: "Hotel El Ganzo", logo: "/Images/patrocinadores/HG_GENERAL-13.png", hint: "company logo" },
  { name: "Kundavi", logo: "/Images/patrocinadores/Lockup (Noche)@10x.png", hint: "company logo" },
  { name: "Questro", logo: "https://picsum.photos/200/100?grayscale&seed=questro", hint: "company logo" },
  { name: "Puerto Los Cabos", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 9.png", hint: "company logo" },
  { name: "Crania", logo: "/Images/patrocinadores/Crania _ Logos _Mesa de trabajo 1 copia.png", hint: "company logo" },
  { name: "Veleros Beach Club", logo: "/Images/patrocinadores/VELEROS-01.png", hint: "company logo" },
  { name: "San Jose del Este", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 13.png", hint: "company logo" },
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
                src="https://picsum.photos/seed/plc-banner/1920/1080"
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

      </main>
      <Footer />
    </div>
  );
}
