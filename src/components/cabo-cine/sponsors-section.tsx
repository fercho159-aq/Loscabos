
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sponsors = [
  { name: "FITURCA", logo: "https://picsum.photos/200/100?grayscale&seed=fiturca", hint: "company logo" },
  { name: "ESCINE", logo: "https://picsum.photos/200/100?grayscale&seed=escine", hint: "film school logo", href: "https://escine.mx/" },
  { name: "Cinemex", logo: "https://picsum.photos/200/100?grayscale&seed=cinemex", hint: "company logo" },
  { name: "Hotel El Ganzo", logo: "/Images/patrocinadores/HG_GENERAL-13.png", hint: "company logo" },
  { name: "Kundavi", logo: "/Images/patrocinadores/Lockup (Noche)@10x.png", hint: "company logo" },
  { name: "Questro", logo: "https://picsum.photos/200/100?grayscale&seed=questro", hint: "company logo" },
  { name: "Puerto Los Cabos", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 9.png", hint: "company logo" },
  { name: "Crania", logo: "/Images/patrocinadores/Crania _ Logos _Mesa de trabajo 1 copia.png", hint: "company logo" },
  { name: "Veleros Beach Club", logo: "/Images/patrocinadores/VELEROS-01.png", hint: "company logo" },
  { name: "San Jose del Este", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 13.png", hint: "company logo" },
  { name: "Casa Ballena", logo: "https://picsum.photos/200/100?grayscale&seed=ballena", hint: "company logo" },
  { name: "Haas Producciones", logo: "https://picsum.photos/200/100?grayscale&seed=haas", hint: "company logo" },
  { name: "National Car Rental", logo: "https://picsum.photos/200/100?grayscale&seed=national", hint: "company logo" },
  { name: "Secrets Hotel", logo: "/Images/patrocinadores/SEPLC-logo-black-RGB.png", hint: "company logo" },
  { name: "Ritz Carlton", logo: "https://picsum.photos/200/100?grayscale&seed=ritz", hint: "company logo" },
  { name: "Suelo Sur", logo: "/Images/patrocinadores/SUELOLOGOS-03.png", hint: "company logo" },
  { name: "Jose Cuervo", logo: "https://picsum.photos/200/100?grayscale&seed=cuervo", hint: "company logo" },
  { name: "Netflix", logo: "https://picsum.photos/200/100?grayscale&seed=netflix", hint: "company logo" },
  { name: "GAP", logo: "https://picsum.photos/200/100?grayscale&seed=gap", hint: "company logo" },
];

const extendedSponsors = [...sponsors, ...sponsors]; // Duplicate for seamless loop

export default function SponsorsSection() {
  return (
    <section id="patrocinadores" className="py-16 sm:py-24 bg-card">
       <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
          Nuestros Aliados
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Juntos construimos un espacio donde el cine conecta con la cultura, la comunidad y la biodiversidad.
        </p>
      </div>
      
      <div className="w-full inline-flex flex-nowrap overflow-hidden mt-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {extendedSponsors.map((sponsor, index) => (
            <li key={`sponsor-${index}`}>
              <Link href={sponsor.href || '#'} target="_blank" rel="noopener noreferrer" className={!sponsor.href ? 'cursor-default' : ''}>
                <Image 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  data-ai-hint={sponsor.hint}
                  width={160}
                  height={80}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {extendedSponsors.map((sponsor, index) => (
            <li key={`sponsor-clone-${index}`}>
               <Link href={sponsor.href || '#'} target="_blank" rel="noopener noreferrer" className={!sponsor.href ? 'cursor-default' : ''}>
                <Image 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  data-ai-hint={sponsor.hint}
                  width={160}
                  height={80}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

       <div className="container mx-auto px-4 text-center mt-12">
        <Button size="lg" asChild className="group">
          <Link href="/patrocinadores">
            Conviértete en Patrocinador
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
