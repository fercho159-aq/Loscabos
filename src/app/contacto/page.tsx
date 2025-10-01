
import Header from "@/components/cabo-cine/header";
import Footer from "@/components/cabo-cine/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-20">
        <section className="py-16 sm:py-24 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Contacto
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                ¿Buscas contactar a nuestro equipo de prensa? Dirígete a nuestra Sala de Prensa para encontrar la información y el formulario de contacto adecuados.
              </p>
               <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="/prensa">
                        Ir a Sala de Prensa <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
