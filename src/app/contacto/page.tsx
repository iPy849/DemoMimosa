import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <header className="bg-secondary/30 py-24 px-6 text-center">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Hablemos</span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold">Contacto Exclusivo</h1>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-6">¿Cómo podemos ayudarte?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estamos aquí para asesorarte en tu próxima gran inversión. Ya sea que busques una residencia vacacional o diversificar tu portafolio, nuestro equipo está a tu disposición.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 text-primary rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Email</h4>
                <p className="text-lg">luxury@mimosaestates.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 text-primary rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Teléfono</h4>
                <p className="text-lg">+52 (998) 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 text-primary rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Oficina</h4>
                <p className="text-lg">Zona Hotelera, Cancún, MX</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 text-primary rounded-xl">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Horario</h4>
                <p className="text-lg">Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-10 rounded-xl shadow-2xl border border-border">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">Nombre Completo</label>
              <Input placeholder="Tu nombre..." className="h-12 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Email</label>
                <Input type="email" placeholder="correo@ejemplo.com" className="h-12 rounded-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">WhatsApp</label>
                <Input placeholder="+52 ..." className="h-12 rounded-lg" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">Mensaje</label>
              <Textarea placeholder="¿En qué desarrollo estás interesado?" className="min-h-[150px] rounded-lg" />
            </div>
            <Button className="w-full h-14 rounded-full bg-primary text-background font-bold tracking-widest text-sm hover:scale-105 transition-transform">
              ENVIAR SOLICITUD
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}