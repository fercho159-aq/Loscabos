
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Image from 'next/image';


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/programacion', label: 'Programación 2025' },
    { href: '/campus', label: 'Campus FICLosCabos' },
    { href: '/industria', label: 'Fondo Fílmico Gabriel Figueroa' },
    { href: '/la-baja-inspira', label: 'La Baja Inspira'},
    { href: '/animacion', label: 'Animación' },
    { href: '/acerca-de', label: 'Sobre el FICLosCabos' },
  ];
  
  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          onClick={() => setOpen(false)} 
          className={cn(
            "text-sm font-medium transition-colors block py-2 lg:py-0",
            isTransparent ? "text-background hover:text-background/80" : "text-foreground hover:text-accent"
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent ? 'bg-transparent' : 'bg-card/95 backdrop-blur-sm shadow-md'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
           <Image 
            src={isTransparent ? "/Images/logos/FESTIVAL DE CINE LOS CABOS- blanco.png" : "/Images/logos/FESTIVAL DE CINE LOS CABOS-negro.png"} 
            alt="CaboCine Logo" 
            width={150} 
            height={40} 
            data-ai-hint="logo"
            className="transition-all duration-300"
            key={isTransparent ? 'logo-top' : 'logo-scrolled'}
            />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <NavContent />
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-bold group">
            <Link href="/pre-registro">
                <Ticket className="mr-2 h-5 w-5 transform group-hover:rotate-12 transition-transform" />
                Pre-regístrate
            </Link>
          </Button>
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={cn("h-6 w-6", isTransparent ? "text-background" : "text-foreground")} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card w-[250px] sm:w-[300px]">
                  <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                  <div className="p-6">
                  <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 mb-8">
                     <Image src="/Images/logos/FESTIVAL DE CINE LOS CABOS-negro.png" alt="CaboCine Logo" width={150} height={40} data-ai-hint="logo"/>
                  </Link>
                  <nav className="flex flex-col gap-6">
                     {navLinks.map((link) => (
                        <Link 
                          key={link.href} 
                          href={link.href} 
                          onClick={() => setOpen(false)} 
                          className="text-lg font-medium text-foreground hover:text-accent transition-colors block py-2 lg:py-0"
                        >
                          {link.label}
                        </Link>
                      ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
