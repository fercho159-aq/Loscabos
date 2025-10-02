
import { notFound } from 'next/navigation';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { editionsData } from '@/lib/editions-data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function renderTextWithLineBreaks(text: string) {
    return text.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));
}

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
            <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
                <div className="md:col-span-2 space-y-6">
                    <Image
                        src={edition.posterSrc}
                        alt={`Póster de la ${edition.title}`}
                        data-ai-hint={edition.posterHint}
                        width={600}
                        height={900}
                        className="rounded-lg shadow-2xl w-full"
                    />
                     <div className="grid grid-cols-2 gap-4">
                        {edition.downloadPosterLink && (
                            <Button asChild variant="outline">
                                <Link href={edition.downloadPosterLink} target="_blank">
                                    <Download className="mr-2 h-4 w-4" /> Cartel
                                </Link>
                            </Button>
                        )}
                        {edition.downloadCatalogueLink && (
                             <Button asChild variant="outline">
                                <Link href={edition.downloadCatalogueLink} target="_blank">
                                    <FileText className="mr-2 h-4 w-4" /> Catálogo
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="md:col-span-3">
                    <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">{edition.year}</h1>
                    <p className="text-2xl text-accent font-semibold mt-2">{edition.title}</p>
                    <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{edition.description}</p>
                </div>
            </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 max-w-4xl">
                 <Accordion type="single" collapsible className="w-full" defaultValue="programacion">
                    {edition.program && (
                         <AccordionItem value="programacion">
                            <AccordionTrigger className="text-2xl font-semibold">Programación</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap pt-4">
                               {renderTextWithLineBreaks(edition.program)}
                            </AccordionContent>
                        </AccordionItem>
                    )}
                    {edition.tributes && (
                         <AccordionItem value="homenajes">
                            <AccordionTrigger className="text-2xl font-semibold">Homenajes / Invitados Especiales</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap pt-4">
                                {renderTextWithLineBreaks(edition.tributes)}
                            </AccordionContent>
                        </AccordionItem>
                    )}
                     {edition.panels && edition.panels.trim() !== '\\' && edition.panels.trim() !== '/' && (
                         <AccordionItem value="paneles">
                            <AccordionTrigger className="text-2xl font-semibold">Paneles</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap pt-4">
                                {renderTextWithLineBreaks(edition.panels)}
                            </AccordionContent>
                        </AccordionItem>
                    )}
                     {edition.igniteSessions && edition.igniteSessions.trim() !== '/' && (
                         <AccordionItem value="ignite">
                            <AccordionTrigger className="text-2xl font-semibold">Ignite Sessions</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap pt-4">
                                {renderTextWithLineBreaks(edition.igniteSessions)}
                            </AccordionContent>
                        </AccordionItem>
                    )}
                    {edition.awards && (
                         <AccordionItem value="premios">
                            <AccordionTrigger className="text-2xl font-semibold">Premios</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground whitespace-pre-wrap pt-4">
                                {renderTextWithLineBreaks(edition.awards)}
                            </AccordionContent>
                        </AccordionItem>
                    )}
                </Accordion>
            </div>
        </section>


        {edition.gallery && edition.gallery.length > 0 && (
            <section className="py-16 sm:py-24 bg-background">
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