
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';

export default function ProgramacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                Programación <span className="text-accent">2025</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Próximamente...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
