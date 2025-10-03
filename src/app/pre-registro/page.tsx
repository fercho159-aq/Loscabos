
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function PreRegistroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Pre-registro FICLosCabos 2025
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                ¡Sé el primero en enterarte de todo! Completa el formulario para recibir noticias exclusivas, acceso a preventas y más.
              </p>
            </div>

            <Card className="p-6 sm:p-10 bg-card shadow-xl">
              <form 
                name="pre-registro"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="pre-registro" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" name="firstName" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" name="lastName" placeholder="Tu apellido" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="tu@correo.com" required />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <Label htmlFor="age">Edad</Label>
                        <Input id="age" name="age" type="number" placeholder="25" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram (Opcional)</Label>
                        <Input id="instagram" name="instagram" placeholder="@tu-usuario" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" name="state" placeholder="Ej. Baja California Sur" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" name="city" placeholder="Ej. La Paz" required />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="industry">Industria</Label>
                    <Select name="industry" required>
                        <SelectTrigger id="industry">
                            <SelectValue placeholder="Selecciona tu industria" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cine">Cine</SelectItem>
                            <SelectItem value="arte">Arte</SelectItem>
                            <SelectItem value="diseño">Diseño</SelectItem>
                            <SelectItem value="otra">Otra</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>¿Eres estudiante o profesional?</Label>
                    <RadioGroup name="professionalStatus" required className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="estudiante" id="estudiante" />
                            <Label htmlFor="estudiante" className="font-normal">Estudiante</Label>
                        </div>
                        <div className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="profesional" id="profesional" />
                            <Label htmlFor="profesional" className="font-normal">Profesional</Label>
                        </div>
                    </RadioGroup>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Pre-registro
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
