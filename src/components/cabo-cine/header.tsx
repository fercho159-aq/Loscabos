"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Film, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';


const navLinks = [
  { href: '#programacion', label: 'Programación' },
  { href: '#industria', label: 'Industria' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#patrocinadores', label: 'Patrocinadores' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground hover:text-accent transition-colors block py-2 lg:py-0">
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-card/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Film className="h-7 w-7 text-accent" />
          <span className="font-headline text-2xl font-bold text-foreground">CaboCine</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <NavContent />
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-bold group">
            <Ticket className="mr-2 h-5 w-5 transform group-hover:rotate-12 transition-transform" />
            Compra tu boleto
          </Button>
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card w-[250px] sm:w-[300px]">
                  <div className="p-6">
                  <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 mb-8">
                    <Film className="h-7 w-7 text-accent" />
                    <span className="font-headline text-2xl font-bold text-foreground">CaboCine</span>
                  </Link>
                  <nav className="flex flex-col gap-6">
                    <NavContent />
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
