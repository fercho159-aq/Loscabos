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
import { Download } from 'lucide-react';

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
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
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
                <div className="mt-8">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline px-9 h-14 py-3 text-lg">
                  <Link href="https://drive.google.com/file/d/1YTz1uu0VwCs0gZA3nAZaSiVsHpPYoCYN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Descarga el programa de cine
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {navigationButtons.map(button => (
                <Button key={button.label} asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline">
                  <Link href={button.href}>{button.label}</Link>
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
            let bannerDescription: React.ReactNode = '';

            if (section.name.includes("Marejada")) {
                bannerImage = "/Images/Programa de cine FICLosCabos 2025/Marejada Panorama de largometrajes internacionales/SNA-13.jpg";
                bannerHint = "graphic composition";
                bannerDescription = "Marejada, la muestra internacional del 13º Festival de Cine de Los Cabos, nace desde la idea de reinvención: una sección que convierte los límites en oportunidad y abre nuestras costas al cine que se está creando en el mundo. Esta selección reúne voces consolidadas y nuevas miradas que, desde geografías y lenguajes diversos, trazan un mapa vibrante del presente cinematográfico.";
            } else if (section.name.includes("Competencia")) {
                bannerImage = "/Images/Programa de cine FICLosCabos 2025/Competencia FICLosCabos (Largometrajes mexicanos)/LARESERVA.png";
                bannerHint = "film award";
                bannerTitle = "Competencia FICLosCabos de largometrajes mexicanos";
                bannerSubtitle = "";
                bannerDescription = "En Los Cabos, donde el desierto se encuentra con el mar, el cine también encuentra su punto de convergencia. De esa intersección nace la nueva competencia mexicana de largometrajes del FICLosCabos 2025: un espacio donde las voces independientes del país dialogan con el territorio, la comunidad y las nuevas formas de narrar el mundo. La competencia mexicana de largometrajes del Festival Internacional de Cine de Los Cabos 2025 es concebida como una plataforma de visibilidad y apoyo para cineastas independientes. Su objetivo es impulsar la circulación, el diálogo y la proyección internacional de nuevas narrativas cinematográficas mexicanas.";
            } else if (section.name.includes("Cortometrajes")) {
                bannerImage = "/Images/Programa de cine FICLosCabos 2025/Cortometrajes de cineastas emergentes/Banner-Cortos.png";
                bannerHint = "emerging filmmakers desert";
                bannerTitle = "Muestra de cortometrajes de cineastas emergentes";
                bannerDescription = (
                    <>
                    El Festival Internacional de Cine de Los Cabos se consolida como un punto de encuentro entre múltiples generaciones de creadores. En su 13ª edición, el Festival amplía su mirada hacia las nuevas voces del cine reuniendo a una selección de jóvenes directores con reconocimiento nacional e internacional que están redefiniendo los lenguajes cinematográficos con una fuerza creativa única. Como parte de la programación oficial, el FICLosCabos proyectará los cortometrajes de los invitados al{' '}
                    <Link href="/participantes" className="text-accent hover:underline">
                        Panel de cineastas emergentes.
                    </Link>
                  </>
                );
            } else if (section.name.includes("La Baja Inspira")) {
              bannerImage = "/Images/Programa de cine FICLosCabos 2025/La Baja Inspira/ESQ_Still1.jpg";
              bannerHint = "baja california desert ocean";
              bannerDescription = "En el corazón del Festival Internacional de Cine de Los Cabos, La Baja Inspira es la sección competitiva dedicada a celebrar las historias que nacen del territorio. Este programa reconoce y visibiliza a los cineastas que retratan la esencia de la península de Baja California, desde sus paisajes hasta sus comunidades, ofreciendo a la audiencia local la posibilidad de verse reflejada en la pantalla.";
            } else if (section.name.includes("Proyecciones especiales")) {
              bannerImage = "/Images/Programa de cine FICLosCabos 2025/Proyecciones especiales/sn6.jpeg";
              bannerHint = "graphic composition";
              bannerDescription = "En el espíritu de #BeyondTheScreen, el Festival Internacional de Cine de Los Cabos presenta una selección de Proyecciones Especiales que celebra la fuerza creativa del cine mexicano: El Pulmo, Àvia, Lalo y Luquín van a la Baja, la versión restaurada de Amores Perros, y dos experiencias inmersivas donde cine y música convergen —Depeche Mode: M de Fernando Frías y el álbum visual La nube en el jardín de Ed Maverick. Una invitación a explorar nuevas formas de mirar, escuchar y sentir el territorio.";
            } else if (section.name.includes("Homenaje")) {
                 bannerImage = "/Images/Programa de cine FICLosCabos 2025/Homenaje a Eugenio Caballero/58adf8420b1fcc3c1aad21203.jpg";
                 bannerHint = "film set design";
                 bannerDescription = "Nuestro Homenaje a Eugenio Caballero por su amplia labor como director de arte en los títulos más emblemáticos del cine mexicano de los últimos 25 años será acompañado por la proyección de la película Un Monstruo Viene A Verme, dirigida por el autor español Juan Antonio Bayona, producción con la que fue acreedor del Premio Goya a Mejor Dirección Artística.";
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
                        {section.name.includes("Cortometrajes") && (
                          <div className="text-center mb-12">
                            <h3 className="font-headline text-4xl font-bold text-accent hover:underline">
                                <Link href="/participantes">
                                    Nuevas caras del cine
                                </Link>
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
