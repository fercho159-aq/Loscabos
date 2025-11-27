'use client';

import React from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { filmData } from '@/lib/cinema-program-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProgramaCinePage() {
  
  const sections = filmData.reduce((acc, film) => {
    const sectionName = film['Sección'] || 'Proyecciones especiales';
    const section = acc.find(s => s.name === sectionName);
    if (section) {
      section.films.push(film);
    } else {
      acc.push({ name: sectionName, films: [film] });
    }
    return acc;
  }, [] as { name: string; films: typeof filmData }[]);

  const orderedSections = [
    "Marejada: Panorama de largometrajes internacionales",
    "Competencia FICLosCabos (Largometrajes mexicanos)",
    "Cortometrajes de cineastas emergentes",
    "La Baja Inspira",
    "Proyecciones especiales",
    "Homenaje a Eugenio Caballero"
  ];

  const sortedSections = sections.sort((a, b) => {
    const aIndex = orderedSections.indexOf(a.name);
    const bIndex = orderedSections.indexOf(b.name);
    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  const generateSlug = (text: string) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };
  
  const navigationButtons = [
    {
      label: "Marejada: Panorama de Largometrajes Internacionales",
      href: `#${generateSlug("Marejada: Panorama de largometrajes internacionales")}`
    },
    {
        label: "Competencia FICLosCabos de largometrajes mexicanos",
        href: `#${generateSlug("Competencia FICLosCabos (Largometrajes mexicanos)")}`
    },
    {
        label: "Muestra de cortometrajes de cineastas emergentes",
        href: `#${generateSlug("Cortometrajes de cineastas emergentes")}`
    },
     {
        label: "La Baja Inspira",
        href: `#${generateSlug("La Baja Inspira")}`
    },
    {
        label: "Proyecciones especiales",
        href: `#${generateSlug("Proyecciones especiales")}`
    },
    {
        label: "Homenaje a Eugenio Caballero",
        href: `#${generateSlug("Homenaje a Eugenio Caballero")}`
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Programa de cine FICLosCabos 2025
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {navigationButtons.map(button => (
                <Button key={button.label} asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline">
                  <Link href={button.href}>{button.label.split(':')[0]}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {sortedSections.map((section, sectionIndex) => {
            let bannerImage = "/Images/Main/FICC_BannerAnimacion.jpg";
            let bannerHint = "abstract animation";
            let bannerTitle = section.name.split(':')[0];
            let bannerSubtitle = section.name.split(': ')[1] || '';
            let bannerDescription = '';

            if (section.name.includes("Marejada")) {
                bannerImage = "/Images/Programa de cine FICLosCabos 2025/Marejada Panorama de largometrajes internacionales/SNA-13.jpg";
                bannerHint = "graphic composition";
                bannerDescription = "Marejada, la muestra internacional del 13º Festival de Cine de Los Cabos, nace desde la idea de reinvención: una sección que convierte los límites en oportunidad y abre nuestras costas al cine que se está creando en el mundo. Esta selección reúne voces consolidadas y nuevas miradas que, desde geografías y lenguajes diversos, trazan un mapa vibrante del presente cinematográfico.";
            } else if (section.name.includes("Competencia")) {
                bannerImage = "/Images/FF/Banner_FICC_FondoFilmico_2.png";
                bannerHint = "film award";
                bannerSubtitle = "";
                bannerDescription = "En Los Cabos, donde el desierto se encuentra con el mar, el cine también encuentra su punto de convergencia. De esa intersección nace la nueva competencia mexicana de largometrajes del FICLosCabos 2025: un espacio donde las voces independientes del país dialogan con el territorio, la comunidad y las nuevas formas de narrar el mundo. La competencia mexicana de largometrajes del Festival Internacional de Cine de Los Cabos 2025 es concebida como una plataforma de visibilidad y apoyo para cineastas independientes. Su objetivo es impulsar la circulación, el diálogo y la proyección internacional de nuevas narrativas cinematográficas mexicanas.";
            } else if (section.name.includes("Homenaje")) {
                 bannerImage = "/Images/Eugenio Caballero/EugenioCaballero.png";
                 bannerHint = "film set design";
            }

            return (
                <div key={sectionIndex} id={generateSlug(section.name)}>
                    <section className="relative py-16 sm:py-20 bg-primary text-primary-foreground text-center">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={bannerImage}
                                alt={`Banner de la sección ${section.name}`}
                                data-ai-hint={bannerHint}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50"></div>
                        </div>
                        <div className="container mx-auto px-4 relative z-10">
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-background">
                            {bannerTitle}
                        </h2>
                         {bannerSubtitle && (
                            <p className={`mt-2 text-2xl md:text-3xl font-semibold ${section.name.includes("Competencia") ? 'text-accent' : 'text-background/90'}`}>
                                {bannerSubtitle}
                            </p>
                         )}
                         {bannerDescription && (
                            <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                                {bannerDescription}
                            </p>
                        )}
                        </div>
                    </section>
                    <section className="py-12 sm:py-16 bg-background">
                    <div className="container mx-auto px-4">
                         {section.name.includes("Competencia") && (
                          <div className="text-center mb-12">
                            <h3 className="font-headline text-4xl font-bold text-accent">
                              Nominados
                            </h3>
                          </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {section.films.map((film, filmIndex) => (
                            <Card key={`${sectionIndex}-${filmIndex}`} className="overflow-hidden group bg-card border-border/20 shadow-lg">
                                <div className="relative aspect-video w-full">
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
            );
        })}
      </main>
      <Footer />
    </div>
  );
}
