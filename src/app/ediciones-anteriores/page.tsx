
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import Link from 'next/link';
import { editionsData } from '@/lib/editions-data';
import { Card, CardContent } from '@/components/ui/card';

export default function PastEditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                Ediciones <span className="text-accent">Anteriores</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Un recorrido por la historia del Festival Internacional de Cine de Los Cabos. Revive los momentos que nos han definido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {editionsData.map((edition) => (
                <Link key={edition.slug} href={`/ediciones-anteriores/${edition.slug}`} className="group block">
                  <Card className="overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-0">
                      <div className="relative aspect-[2/3] w-full">
                        <Image
                          src={edition.posterSrc}
                          alt={`Póster de la ${edition.title}`}
                          data-ai-hint={edition.posterHint}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="font-headline text-3xl font-bold text-foreground">{edition.year}</h2>
                        <h3 className="text-xl font-semibold text-accent mb-2">{edition.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{edition.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
