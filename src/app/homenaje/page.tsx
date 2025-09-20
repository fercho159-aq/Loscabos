
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { guestData } from '@/lib/guest-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Award, Film, User, Calendar, Ticket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
                        <p className="text-accent font-semibold mb-2">Homenaje 2025</p>
                        <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">{guest.name}</h1>
                        <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{guest.bio}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Actividades Especiales</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Una oportunidad única para aprender y convivir con una leyenda del cine.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <Award className="h-8 w-8 text-accent" />
                                <span>Masterclass</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Un encuentro íntimo donde Eugenio Caballero compartirá su proceso creativo, su visión artística y las experiencias que definieron su carrera.
                            </p>
                             <p className="font-semibold text-sm text-foreground flex items-center gap-2 mb-1"><Calendar className="h-4 w-4"/>Fecha: Por definir</p>
                             <p className="font-semibold text-sm text-foreground flex items-center gap-2 mb-4"><User className="h-4 w-4"/>Espacios disponibles: 50</p>
                            <Button className="w-full group">
                                <Ticket className="mr-2 h-5 w-5 transform group-hover:rotate-12 transition-transform" />
                                Registrarse (Sin costo)
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <Film className="h-8 w-8 text-accent" />
                                <span>Cena de Gala y Homenaje</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-muted-foreground mb-4">
                                Sé parte de una noche exclusiva para celebrar la trayectoria de Eugenio Caballero. Incluye alfombra roja, cena y proyección especial.
                            </p>
                            <p className="font-semibold text-sm text-foreground flex items-center gap-2 mb-1"><Calendar className="h-4 w-4"/>Fecha: Por definir</p>
                             <p className="font-semibold text-sm text-foreground flex items-center gap-2 mb-4"><User className="h-4 w-4"/>Espacios disponibles: 100</p>
                            <Button variant="secondary" className="w-full">
                                Comprar Boletos
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
