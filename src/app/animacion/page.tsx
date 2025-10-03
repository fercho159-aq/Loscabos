
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Cpu, Award, Film, Users, Calendar, Sparkles, Handshake, Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AnimacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="https://picsum.photos/seed/anim-banner/1920/1080"
                alt="Banner de la sección de animación"
                data-ai-hint="abstract animation"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="font-headline text-5xl sm:text-7xl font-bold">Animación</h1>
                <p className="mt-4 text-lg text-primary-foreground/90 mx-auto max-w-2xl">
                    Un nuevo capítulo del Festival
                </p>
            </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl space-y-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-lg text-muted-foreground space-y-4">
                        <p>Por primera vez en su historia, el Festival Internacional de Cine de Los Cabos integra la animación como parte de su programación oficial. Este hito refleja el papel central que la disciplina ocupa en el ecosistema audiovisual global: un lenguaje universal que conecta con públicos de todas las edades, una industria en plena expansión con legitimidad internacional y un campo de innovación tecnológica que impulsa la transformación digital del cine.</p>
                    </div>
                    <div>
                         <Image
                            src="https://picsum.photos/seed/anim-1/800/600"
                            alt="Proceso creativo de animación"
                            data-ai-hint="animation creation process"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-2xl object-cover w-full h-auto"
                        />
                    </div>
                </div>

                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <Image
                            src="https://picsum.photos/seed/anim-2/800/600"
                            alt="Ventana de talento emergente"
                            data-ai-hint="emerging talent showcase"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-2xl object-cover w-full h-auto"
                        />
                    </div>
                    <div className="order-1 md:order-2 text-lg text-muted-foreground space-y-4">
                       <p>La inclusión de la animación en el FIC Los Cabos 2025 posiciona al festival como una ventana para el talento emergente en México y el mundo, reconociendo la fuerza creativa que hoy define la cultura contemporánea.</p>
                    </div>
                </div>

                <div className="text-lg text-muted-foreground space-y-6 bg-card p-8 rounded-lg shadow-lg">
                    <p><span className="font-semibold text-foreground">La Escuela Superior de Cine (<Link href="https://escine.mx/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ESCINE</Link>)</span> asume un rol clave en la curaduría de esta nueva sección, garantizando excelencia artística, pertinencia cultural y proyección internacional.</p>
                    <p>El programa contempla una <span className="font-semibold text-foreground">Sección Oficial de Animación</span> con cortos y mediometrajes de escuelas nacionales e internacionales; <span className="font-semibold text-foreground">masterclasses y diálogos</span> con profesionales de la industria; y el anuncio de la <span className="font-semibold text-foreground">convocatoria oficial de animación para 2026</span>, junto con un taller formativo para creadores de Baja California. Con ello, el festival abre un nuevo capítulo que refuerza su vocación de descubrimiento, formación e innovación.</p>
                     <div className="pt-4 text-center">
                        <p className="text-accent font-semibold text-xl">La programación será anunciada próximamente</p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
