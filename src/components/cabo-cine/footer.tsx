
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const ficcLinks = [
    { href: "/acerca-de", label: "Acerca de la 13ª edición" },
    { href: "/programacion", label: "Programación 2025" },
    { href: "/campus", label: "Campus FICLosCabos" },
    { href: "/pre-registro", label: "Pre-registro" },
];

const aboutLinks = [
    { href: "/ediciones-anteriores", label: "Ediciones anteriores" },
    { href: "/contacto", label: "Contacto" },
];

const initiativesLinks = [
    { href: "/industria", label: "Fondo Fílmico Gabriel Figueroa" },
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
        
        <div className="flex justify-center space-x-6 mb-12">
            <Link href="#" className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"><Youtube className="h-5 w-5" /></Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center sm:text-left">

          {/* FIC LosCabos 2025 */}
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2">
                <div className="text-center md:text-right font-headline tracking-widest leading-tight">
                    <p>FESTIVAL</p>
                    <p>INTERNACIONAL</p>
                    <p>DE CINE DE</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="font-headline text-5xl tracking-wider leading-none">LOS<br/>CABOS</div>
                    {/* Placeholder for the SVG logo part */}
                    <svg width="40" height="30" viewBox="0 0 106 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                        <path d="M105.5 30.284C105.5 13.824 92.2 0.5 76 0.5H0.5V71.5H76C92.2 71.5 105.5 58.184 105.5 41.724C105.5 38.304 105.02 34.984 104.18 31.864C103.54 29.584 102.34 27.504 100.78 25.724C98.44 23.104 95.14 21.224 91.3 20.384C89.5 19.964 87.64 19.744 85.72 19.744H41.5V52.5H85.72C87.64 52.5 89.5 52.28 91.3 51.86C95.14 50.98 98.44 49.1 100.78 46.52C102.34 44.74 103.54 42.66 104.18 40.38C105.02 37.26 105.5 33.94 105.5 30.5V30.284Z" stroke="#F7EEDD"/>
                    </svg>
                </div>
                <div className="text-left font-headline text-accent-foreground leading-none">
                    <p className="text-4xl">13ª <span className="font-body italic text-3xl">Edición</span></p>
                    <p className="text-xs tracking-widest mt-1">DEL 10 AL 14 DE DICIEMBRE 2025</p>
                </div>
            </div>
            <p className="text-xs text-accent-foreground/80 text-center mt-20">
                &copy; {new Date().getFullYear()} Cabocine. todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
