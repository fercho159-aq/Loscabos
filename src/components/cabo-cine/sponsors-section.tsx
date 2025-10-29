
import Image from "next/image";
import Link from "next/link";

const sponsors = [
  { name: "ESCINE", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-01.png", hint: "film school logo"},
  { name: "Hotel El Ganzo", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-02.png", hint: "company logo" },
  { name: "Cinemex", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-03.png", hint: "company logo" },
  { name: "Kundavi", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-04.png", hint: "company logo" },
  { name: "Questro", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-05.png", hint: "company logo" },
  { name: "Crania", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-06.png", hint: "company logo" },
  { name: "Veleros Beach Club", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-07.png", hint: "company logo" },
  { name: "San Jose del Este", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-08.png", hint: "company logo" },
  { name: "Casa Ballena", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-09.png", hint: "company logo" },
  { name: "Secrets Hotel", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-10.png", hint: "company logo" },
  { name: "Suelo Sur", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-11.png", hint: "company logo" },
  { name: "ESCINE", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-12.png", hint: "film school logo"},
  { name: "Hotel El Ganzo", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-13.png", hint: "company logo" },
  { name: "Cinemex", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-14.png", hint: "company logo" },
  { name: "Kundavi", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-15.png", hint: "company logo" },
  { name: "Questro", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-16.png", hint: "company logo" },
  { name: "Puerto Los Cabos", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-17.png", hint: "company logo" },
  { name: "Crania", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-18.png", hint: "company logo" },
  { name: "Veleros Beach Club", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-19.png", hint: "company logo" },
  { name: "San Jose del Este", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-20.png", hint: "company logo" },
  { name: "Casa Ballena", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-21.png", hint: "company logo" },
  { name: "Secrets Hotel", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-22.png", hint: "company logo" },
  { name: "Suelo Sur", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-23.png", hint: "company logo" },
  { name: "Kundavi", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-24.png", hint: "company logo" },
  { name: "Questro", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-25.png", hint: "company logo" },
  { name: "Puerto Los Cabos", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-26.png", hint: "company logo" },
  { name: "Crania", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-27.png", hint: "company logo" },
  { name: "Veleros Beach Club", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-28.png", hint: "company logo" },
  { name: "San Jose del Este", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-29.png", hint: "company logo" },
  { name: "Casa Ballena", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-30.png", hint: "company logo" },
  { name: "Secrets Hotel", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-31.png", hint: "company logo" },
  { name: "Suelo Sur", logo: "/Images/Aliados y Patrocinadores/FICC_Logos_Aliados-32.png", hint: "company logo" },
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
                  className="hover:opacity-100 transition-opacity duration-300"
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
                  className="hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
