
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export default function FaqFfgfPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Preguntas Frecuentes
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Fondo Fílmico Gabriel Figueroa (FFGF)
              </p>
            </div>

            <Card className="p-6 sm:p-10 bg-card shadow-xl">
                <div className="text-center text-muted-foreground">
                    <HelpCircle className="mx-auto h-12 w-12 mb-4 text-accent" />
                    <h2 className="text-2xl font-bold text-foreground mb-2">Contenido Próximamente</h2>
                    <p>Estamos preparando las respuestas a las preguntas más comunes. ¡Vuelve pronto!</p>
                </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
