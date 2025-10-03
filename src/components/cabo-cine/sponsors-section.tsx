
import Image from "next/image";
import Link from "next/link";

const sponsors = [
  { name: "ESCINE", logo: "/Images/patrocinadores/Logo_ESCINE_Sintetizado_Negro.png", hint: "film school logo", href: "https://escine.mx/" },
  { name: "Hotel El Ganzo", logo: "/Images/patrocinadores/HG_GENERAL-13.png", hint: "company logo" },
  { name: "Kundavi", logo: "/Images/patrocinadores/Lockup (Noche)@10x.png", hint: "company logo" },
  { name: "Questro", logo: "/Images/patrocinadores/Logos Questro _Mesa de trabajo 1 copia 21.png", hint: "company logo" },
  { name: "Puerto Los Cabos", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 9.png", hint: "company logo" },
  { name: "Crania", logo: "/Images/patrocinadores/Crania _ Logos _Mesa de trabajo 1 copia.png", hint: "company logo" },
  { name: "Veleros Beach Club", logo: "/Images/patrocinadores/VELEROS-01.png", hint: "company logo" },
  { name: "San Jose del Este", logo: "/Images/patrocinadores/Logos para margie _Mesa de trabajo 1 copia 13.png", hint: "company logo" },
  { name: "Casa Ballena", logo: "/Images/patrocinadores/CB_logo.png", hint: "company logo" },
  { name: "Secrets Hotel", logo: "/Images/patrocinadores/SEPLC-logo-black-RGB.png", hint: "company logo" },
  { name: "Suelo Sur", logo: "/Images/patrocinadores/SUELOLOGOS-03.png", hint: "company logo" },
];

const extendedSponsors = [...sponsors, ...sponsors]; // Duplicate for seamless loop

export default function SponsorsSection() {
  return (
    <section id="patrocinadores" className="py-16 sm:py-24 bg-card">
       <div className="container mx-auto px-4 text-center">
        <div className="inline-block">
            <h2 className="font-headline text-2xl text-accent tracking-widest">
              NUESTROS ALIADOS Y PATROCINADORES
            </h2>
        </div>
      </div>
      
      <div className="w-full inline-flex flex-nowrap overflow-hidden mt-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {extendedSponsors.map((sponsor, index) => (
            <li key={`sponsor-${index}`}>
              <Link href={sponsor.href || '#'} target="_blank" rel="noopener noreferrer" className={!sponsor.href ? 'cursor-default' : ''}>
                <Image 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  data-ai-hint={sponsor.hint}
                  width={200}
                  height={100}
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
                  width={200}
                  height={100}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
