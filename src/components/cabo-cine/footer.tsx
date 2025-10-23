
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const ficcLinks = [
    { href: "/acerca-de", label: "Acerca de la 13ª edición" },
    { href: "/programacion", label: "Programación 2025" },
    { href: "/homenaje", label: "Homenaje 2025" },
    { href: "/campus", label: "Campus FICLosCabos" },
    { href: "/travel", label: "Planea tu visita" },
    { href: "/pre-registro", label: "Pre-registro" },
];

const aboutLinks = [
    { href: "/ediciones-anteriores", label: "Ediciones anteriores" },
    { href: "/contacto", label: "Contacto" },
];

const initiativesLinks = [
    { href: "/impulso-industria", label: "Impulso a la industria" },
    { href: "/industria", label: "Fondo Fílmico Gabriel Figueroa" },
    { href: "/faq-ffgf", label: "FAQ FFGF" },
    { href: "/la-baja-inspira", label: "La Baja Inspira" },
];

const pressLinks = [
    { href: "/prensa", label: "Comunicados de prensa" },
    { href: "/contacto-prensa", label: "Contacto PR" },
];

const plcLinks = [
    { href: "/puerto-los-cabos", label: "Acerca de Puerto Los Cabos" },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        
        <div className="flex justify-center space-x-6 mb-[150px]">
            <Link href="https://www.instagram.com/loscabosiff/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"><Youtube className="h-5 w-5" /></Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center sm:text-left">

          {/* FICLosCabos 2025 */}
          <div className="sm:mx-auto">
            <h3 className="font-headline tracking-widest text-accent-foreground mb-4">#FICLOSCABOS 2025</h3>
            <ul className="space-y-2">
              {ficcLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Acerca de */}
          <div className="sm:mx-auto">
            <h3 className="font-headline tracking-widest text-accent-foreground mb-4">ACERCA</h3>
            <ul className="space-y-2">
              {aboutLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Iniciativas */}
          <div className="sm:mx-auto">
            <h3 className="font-headline tracking-widest text-accent-foreground mb-4">INICIATIVAS</h3>
            <ul className="space-y-2">
              {initiativesLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Prensa */}
          <div className="sm:mx-auto">
            <h3 className="font-headline tracking-widest text-accent-foreground mb-4">PRENSA</h3>
            <ul className="space-y-2">
              {pressLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Puerto Los Cabos */}
          <div className="sm:mx-auto">
            <h3 className="font-headline tracking-widest text-accent-foreground mb-4">PUERTO LOS CABOS</h3>
            <ul className="space-y-2">
              {plcLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-20 text-center">
            <div className="flex justify-center">
                <Image 
                    src="/Images/Main/FICC_Logo2.png"
                    alt="CaboCine Logo"
                    width={300}
                    height={100}
                    data-ai-hint="logo white"
                />
            </div>
            <p className="text-xs text-accent-foreground/80 text-center mt-[100px]">
                &copy; {new Date().getFullYear()} Cabocine. todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
