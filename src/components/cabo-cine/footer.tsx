
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Film } from "lucide-react";
import NewsletterForm from "./newsletter-form";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Film className="h-8 w-8 text-accent" />
              <span className="font-headline text-2xl font-bold text-foreground">CaboCine</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Festival Internacional de Cine de Los Cabos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Festival</h3>
              <ul className="space-y-2">
                <li><Link href="/#programacion" className="text-sm text-muted-foreground hover:text-accent transition-colors">Programación</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Boletos</Link></li>
                <li><Link href="/impacto" className="text-sm text-muted-foreground hover:text-accent transition-colors">Impacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Industria</h3>
              <ul className="space-y-2">
                <li><Link href="/industria" className="text-sm text-muted-foreground hover:text-accent transition-colors">Portal B2B</Link></li>
                <li><Link href="/industria" className="text-sm text-muted-foreground hover:text-accent transition-colors">Acreditaciones</Link></li>
                <li><Link href="/industria" className="text-sm text-muted-foreground hover:text-accent transition-colors">Fondo Fílmico</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Recibe noticias y contenido exclusivo del festival.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CaboCine. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Youtube className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
