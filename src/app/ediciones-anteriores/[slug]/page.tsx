
import { notFound } from 'next/navigation';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { editionsData } from '@/lib/editions-data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

export default function EditionDetailPage({ params }: { params: { slug: string } }) {
  const edition = editionsData.find(e => e.slug === params.slug);

  if (!edition) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-background py-16 sm:py-24">
            <div className="container mx-auto px-4">
            <div className="mb-8">
                <Button variant="ghost" asChild>
                    <Link href="/ediciones-anteriores">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver a Ediciones Anteriores
                    </Link>
                </Button>
            </div>
            <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-start">
                <div className="md:col-span-2">
                    <Image
                        src={edition.posterSrc}
                        alt={`Póster de la ${edition.title}`}
                        data-ai-hint={edition.posterHint}
                        width={600}
                        height={900}
                        className="rounded-lg shadow-2xl w-full"
                    />
                </div>
                <div className="md:col-span-3">
                <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">{edition.year}</h1>
                <p className="text-2xl text-accent font-semibold mt-2">{edition.title}</p>
                <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{edition.description}</p>
                </div>
            </div>
            </div>
        </section>

        {edition.gallery && edition.gallery.length > 0 && (
            <section className="py-16 sm:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground text-center mb-12">Galería</h2>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                        >
                        <CarouselContent className="-ml-4">
                            {edition.gallery.map((image, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="overflow-hidden">
                                    <CardContent className="p-0 aspect-video relative">
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
        )}
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return editionsData.map((edition) => ({
    slug: edition.slug,
  }));
}
