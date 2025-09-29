
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, HandHeart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ficcLinks = [
    { href: "/#about", label: "Acerca de la 13ª edición" },
    { href: "/programacion", label: "Programación 2025" },
    { href: "/#", label: "Campus FICC" },
    { href: "/#", label: "Comprar boletos" },
];

const aboutLinks = [
    { href: "/#about", label: "Sobre el FICC" },
    { href: "/patrocinadores", label: "Aliados y Patrocinadores" },
    { href: "/#", label: "Contáctanos" },
];

const initiativesLinks = [
    { href: "/industria", label: "Impulso a la Industria" },
    { href: "/industria", label: "Fondo Fílmico Gabriel Figueroa" },
    { href: "/la-baja-inspira", label: "La Baja Inspira" },
];

const pressLinks = [
    { href: "/#", label: "Comunicados de prensa" },
    { href: "/#", label: "Contacto" },
];

const plcLinks = [
    { href: "/#", label: "Acerca de PLC" },
];


export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* FICC 2025 */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">FICC 2025</h3>
            <ul className="space-y-2">
              {ficcLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Acerca de */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Acerca de</h3>
            <ul className="space-y-2">
              {aboutLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Iniciativas */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Iniciativas</h3>
            <ul className="space-y-2">
              {initiativesLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Prensa */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Prensa</h3>
            <ul className="space-y-2">
              {pressLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Puerto Los Cabos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Puerto Los Cabos</h3>
            <ul className="space-y-2">
              {plcLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <Link href="/" className="flex items-center gap-2">
                   <Image src="/Images/logos/FESTIVAL DE CINE LOS CABOS-negro.png" alt="CaboCine Logo" width={150} height={40} data-ai-hint="logo"/>
                </Link>
                
                <Button asChild className="group">
                    <Link href="/impacto">
                        Sé voluntario del FICC 2025
                        <HandHeart className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                    </Link>
                </Button>

                 <div className="flex space-x-6">
                    <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Youtube className="h-6 w-6" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin className="h-6 w-6" /></Link>
                </div>
            </div>
             <p className="text-sm text-muted-foreground text-center mt-8">
                &copy; {new Date().getFullYear()} CaboCine. Todos los derechos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
