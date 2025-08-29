import Image from "next/image";

const sponsors = [
  { name: "Sponsor 1", logo: "https://picsum.photos/200/100?grayscale&random=1", hint: "company logo" },
  { name: "Sponsor 2", logo: "https://picsum.photos/200/100?grayscale&random=2", hint: "company logo" },
  { name: "Sponsor 3", logo: "https://picsum.photos/200/100?grayscale&random=3", hint: "company logo" },
  { name: "Sponsor 4", logo: "https://picsum.photos/200/100?grayscale&random=4", hint: "company logo" },
  { name: "Sponsor 5", logo: "https://picsum.photos/200/100?grayscale&random=5", hint: "company logo" },
  { name: "Sponsor 6", logo: "https://picsum.photos/200/100?grayscale&random=6", hint: "company logo" },
  { name: "Sponsor 7", logo: "https://picsum.photos/200/100?grayscale&random=7", hint: "company logo" },
  { name: "Sponsor 8", logo: "https://picsum.photos/200/100?grayscale&random=8", hint: "company logo" },
];

const extendedSponsors = [...sponsors, ...sponsors]; // Duplicate for seamless loop

export default function SponsorsSection() {
  return (
    <section id="patrocinadores" className="py-16 sm:py-24 bg-card">
       <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
          Nuestros Patrocinadores
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Agradecemos a las marcas que hacen posible este encuentro cinematográfico.
        </p>
      </div>
      
      <div className="w-full inline-flex flex-nowrap overflow-hidden mt-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {extendedSponsors.map((sponsor, index) => (
            <li key={`sponsor-${index}`}>
              <Image 
                src={sponsor.logo}
                alt={sponsor.name}
                data-ai-hint={sponsor.hint}
                width={160}
                height={80}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {extendedSponsors.map((sponsor, index) => (
            <li key={`sponsor-clone-${index}`}>
              <Image 
                src={sponsor.logo}
                alt={sponsor.name}
                data-ai-hint={sponsor.hint}
                width={160}
                height={80}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
