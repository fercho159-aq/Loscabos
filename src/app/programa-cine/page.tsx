
'use client';

import React from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { filmData } from '@/lib/cinema-program-data';
import { Card, CardContent } from '@/components/ui/card';

export default function ProgramaCinePage() {
  
  const sections = filmData.reduce((acc, film) => {
    const section = acc.find(s => s.name === film['Sección']);
    if (section) {
      section.films.push(film);
    } else {
      acc.push({ name: film['Sección'], films: [film] });
    }
    return acc;
  }, [] as { name: string; films: typeof filmData }[]);
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        
        {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
                <section className="relative py-16 sm:py-20 bg-primary text-primary-foreground text-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={
                                section.name.includes("Marejada") ? "/Images/Programacion/FICC_Banner_Programacion.png" : 
                                section.name.includes("Competencia") ? "/Images/FF/Banner_FICC_FondoFilmico.png" :
                                "/Images/Animacion/FICC_Banner12.png"
                            }
                            alt={`Banner de la sección ${section.name}`}
                            data-ai-hint="graphic composition"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-background">
                        {section.name.split(':')[0]}
                    </h1>
                    <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-background/90">
                        {section.name.split(': ')[1]}
                    </h2>
                     {section.name.includes("Marejada") && (
                        <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                            Marejada, la muestra internacional del 13º Festival de Cine de Los Cabos, nace desde la idea de reinvención: una sección que convierte los límites en oportunidad y abre nuestras costas al cine que se está creando en el mundo. Esta selección reúne voces consolidadas y nuevas miradas que, desde geografías y lenguajes diversos, trazan un mapa vibrante del presente cinematográfico.
                        </p>
                    )}
                     {section.name.includes("Competencia") && (
                         <p className="mt-4 text-lg text-accent font-semibold max-w-3xl mx-auto">
                            Nominados
                        </p>
                    )}
                    </div>
                </section>
                <section className="py-12 sm:py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {section.films.map((film, filmIndex) => (
                        <Card key={`${sectionIndex}-${filmIndex}`} className="overflow-hidden group bg-card border-border/20 shadow-lg">
                            <div className="relative aspect-[2/3] w-full">
                                <Image
                                    src={film.imagen || '/Images/Main/FICC_BannerAnimacion.jpg'}
                                    alt={film['Título']}
                                    data-ai-hint="movie poster"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold font-headline text-foreground">{film['Título']}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{film['Director(a)']}</p>
                                <p className="text-xs text-muted-foreground mt-1">{film['País / Año']}</p>
                                <p className="text-sm text-foreground/80 mt-3 line-clamp-4">{film['Sinopsis / Notas']}</p>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
                </section>
            </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
