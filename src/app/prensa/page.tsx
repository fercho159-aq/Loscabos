
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { pressData } from '@/lib/press-data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function PrensaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Sala de Prensa
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra aquí los últimos comunicados, noticias y recursos oficiales del Festival Internacional de Cine de Los Cabos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressData.map((note) => (
                <Card key={note.slug} className="flex flex-col bg-card">
                  <CardHeader>
                    <div className="relative aspect-video mb-4">
                       <Image
                        src={note.imgSrc}
                        alt={note.title}
                        data-ai-hint={note.imgHint}
                        fill
                        className="rounded-t-lg object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{note.date}</p>
                    <CardTitle className="text-2xl">{note.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{note.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/prensa/${note.slug}`}>
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                    Contacto para Prensa
                 </h2>
                 <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Para entrevistas, acreditaciones o solicitudes de material, por favor visita nuestra página de contacto.
                </p>
                <Button size="lg" asChild className="mt-8">
                    <Link href="/contacto">
                        Información de Contacto <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
