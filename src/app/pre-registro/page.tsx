
'use client';

import { Button } from '@/components/ui/button';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function PreRegistroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Venta de Boletos FICLosCabos 2025
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                El pre-registro ha terminado. ¡Asegura tu lugar en las proyecciones, conciertos, paneles y experiencias inmersivas que transformarán Puerto Los Cabos en un campus creativo global!
              </p>
            </div>

            <Card className="p-6 sm:p-10 bg-card shadow-xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">¡La venta de boletos ya está abierta!</h2>
              <p className="text-muted-foreground mb-8">
                No te quedes fuera. Compra tus boletos ahora y vive la experiencia #BeyondTheScreen.
              </p>
              <Button size="lg" className="w-full max-w-sm mx-auto" asChild>
                <Link href="https://festival-internacional-de-cine-de-los-cabos-2025.boletia.com/" target="_blank" rel="noopener noreferrer">
                  Comprar Boletos
                </Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
