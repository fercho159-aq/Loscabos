
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { groupedAgenda, agendaDays } from '@/lib/agenda-data';

export default function AgendaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/Programacion/FICC_Banner_Programacion.png"
                alt="Banner de la sección Sobre el FICLosCabos"
                data-ai-hint="graphic composition"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-background">
                Agenda FICLosCabos 2025
              </h1>
              <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                Explora el programa completo de proyecciones, paneles, eventos especiales y más.
              </p>
            </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={agendaDays[0]} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
                {agendaDays.map(day => (
                  <TabsTrigger key={day} value={day}>{day}</TabsTrigger>
                ))}
              </TabsList>

              {agendaDays.map(day => (
                <TabsContent key={day} value={day}>
                  <Card className="mt-6 bg-transparent border-none shadow-none">
                    <CardContent className="space-y-4 p-0">
                      {groupedAgenda[day]?.map((event, index) => (
                        <div 
                          key={index} 
                          className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-8 gap-y-2 p-4 rounded-lg text-white"
                          style={{ backgroundColor: event.COLOR }}
                        >
                          <div className="flex flex-col text-sm">
                            <span className="font-semibold">{event['HORA DE INICIO']} - {event['HORA DE FIN']}</span>
                            <span className="text-xs opacity-80">{event['SEDE']}</span>
                          </div>
                          <div>
                            <p className="font-semibold whitespace-pre-line">{event.EVENTO}</p>
                            <Badge 
                              variant="secondary"
                              className="mt-2 text-xs bg-white/20 text-white border-none"
                            >
                              {event['CATEGORÍA']}
                            </Badge>
                          </div>
                        </div>
                      )) || <p className="text-center text-muted-foreground mt-8">No hay eventos programados para este día.</p>}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
