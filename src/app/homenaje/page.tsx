
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { guestData } from '@/lib/guest-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Award, Film, User, Calendar, Ticket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function HomenajePage() {
  const guest = guestData.find(g => g.slug === 'eugenio-caballero');

  if (!guest) {
    return (
        <div className="flex flex-col min-h-screen bg-card">
            <Header />
            <main className="flex-grow pt-20 flex items-center justify-center">
                <p>Invitado no encontrado.</p>
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28">
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-center">
                    <div className="md:col-span-2">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl shadow-black/25">
                            <Image
                                src={guest.imgSrc}
                                alt={`Retrato de ${guest.name}`}
                                data-ai-hint={guest.imgHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <p className="text-accent font-semibold mb-2 text-[35px]">Homenaje 2025</p>
                        <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">{guest.name}</h1>
                        <p className="text-muted-foreground mt-6 text-lg leading-relaxed">El Festival Internacional de Cine de Los Cabos celebra su 13ª edición rindiendo homenaje a Eugenio Caballero, uno de los diseñadores de producción más influyentes del cine contemporáneo. Ganador del Premio de la Academia y colaborador de cineastas como Guillermo del Toro, Alfonso Cuarón y J.A. Bayona, Caballero ha redefinido el poder visual del cine mexicano y latinoamericano, transformando cada proyecto en una obra de arte cinematográfica.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 max-w-4xl space-y-12">
                
                {/* Day 2: December 11 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2 space-y-4">
                        <h3 className="font-headline text-3xl text-foreground"><span className="text-accent">11 de diciembre:</span> Masterclass y Celebración</h3>
                        <p className="text-muted-foreground">El homenaje continúa con una Masterclass exclusiva de Eugenio Caballero, donde compartirá su proceso creativo. Posteriormente, se celebrará un cóctel privado en Casa Ballena, un espacio exclusivo donde la comunidad cinematográfica se reunirá para una velada de arte y conversación.</p>
                        <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                            <li><strong>Masterclass:</strong> Una oportunidad para aprender del maestro del diseño de producción.</li>
                            <li><strong>Proyección al aire libre:</strong> Una experiencia inmersiva en Crania bajo las estrellas.</li>
                            <li><strong>Cóctel de Gala:</strong> Evento exclusivo con la música de Ganzo Collective (solo por invitación).</li>
                        </ul>
                         <Button asChild>
                            <Link href="/programacion">Ver detalles del evento</Link>
                        </Button>
                    </div>
                     <div className="md:order-1">
                        <Image
                            src="/Images/Campus/DSC_9298.jpg"
                            alt="Masterclass y celebración"
                            data-ai-hint="masterclass film elegant party"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
