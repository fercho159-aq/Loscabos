
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BarChart2, Crown, Film, Sparkles, Star, Tv } from 'lucide-react';
import Image from 'next/image';

const successStories = [
    {
        brand: "Marca de Lujo 'Sol y Arena'",
        category: "Automotriz",
        imgSrc: "https://picsum.photos/800/600?random=20",
        imgHint: "luxury car beach",
        title: "Lanzamiento Exclusivo bajo las Estrellas",
        description: "Presentamos nuestro nuevo modelo de lujo en un evento privado para VIPS del festival, generando cobertura mediática valorada en 2M USD."
    },
    {
        brand: "Tequila 'El Agave Azul'",
        category: "Bebidas",
        imgSrc: "https://picsum.photos/800/600?random=21",
        imgHint: "cocktail party ocean",
        title: "El Sabor del Festival",
        description: "Fuimos la bebida oficial del festival, con barras exclusivas en todas las galas y fiestas, logrando un alcance de más de 50,000 asistentes."
    }
]

const valueProps = [
    {
        icon: Tv,
        title: "Visibilidad Global",
        description: "Exposición de marca en todas nuestras plataformas, campañas de prensa y retransmisiones. Llega a una audiencia internacional de alto poder adquisitivo."
    },
    {
        icon: Crown,
        title: "Experiencias VIP",
        description: "Acceso exclusivo a galas, eventos privados, y networking con talento y directivos de la industria. Hospitalidad de primer nivel en Los Cabos."
    },
    {
        icon: BarChart2,
        title: "Resultados Medibles",
        description: "Accede a un dashboard privado con KPIs en tiempo real sobre la exposición de tu marca, menciones en medios y retorno de inversión."
    }
]

export default function PatrocinadoresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Asóciate con <span className="text-accent">la Excelencia</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Una plataforma única para conectar tu marca con el prestigio del cine, el lujo y la vibrante cultura de Los Cabos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" className="group">
                    Conviértete en Patrocinador
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                    Acceso a Panel de Marcas <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Una Alianza Estratégica</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Más que un patrocinio, una colaboración para crear momentos inolvidables.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {valueProps.map((prop) => (
                         <div key={prop.title} className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="bg-primary/10 text-primary p-4 rounded-full">
                                    <prop.icon className="w-8 h-8 text-accent" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold font-headline text-card-foreground mb-2">{prop.title}</h3>
                            <p className="text-muted-foreground">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Casos de Éxito</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Marcas que han brillado en el Festival de Cine de Los Cabos.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {successStories.map((story) => (
                        <Card key={story.brand} className="overflow-hidden group flex flex-col">
                            <div className="relative">
                               <Image
                                    src={story.imgSrc}
                                    alt={story.title}
                                    data-ai-hint={story.imgHint}
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <Badge className="absolute top-4 left-4" variant="secondary">{story.category}</Badge>
                            </div>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold font-headline text-card-foreground">{story.title}</h3>
                                <p className="text-muted-foreground mt-2 mb-4 flex-grow">{story.description}</p>
                                <p className="font-semibold text-foreground">{story.brand}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
