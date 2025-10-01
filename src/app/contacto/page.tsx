
import Header from "@/components/cabo-cine/header";
import Footer from "@/components/cabo-cine/footer";
import Image from 'next/image';

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <div className="text-center md:text-left">
                <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                  Contacto de Prensa
                </h1>
                <div className="mt-6 text-lg text-muted-foreground space-y-2">
                    <p>Para entrevistas, acreditaciones y solicitudes de prensa, escribe a:</p>
                    <p className="font-semibold text-foreground">Cynthia Huerta</p>
                    <a href="mailto:cynthia@comunicacionlateral.com" className="text-accent hover:underline">
                        cynthia@comunicacionlateral.com
                    </a>
                </div>
              </div>
              <div>
                <Image
                    src="https://picsum.photos/seed/contact-press/800/600"
                    alt="Contacto de Prensa"
                    data-ai-hint="desk phone notebook"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
