
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, PlayCircle, Star, ShieldCheck, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import DevelopmentCard from "@/components/development-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const featuredDevelopments = [
  {
    id: "cuatro-bacalar",
    title: "Cuatro Bacalar",
    location: "Bacalar, Quintana Roo",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Una experiencia de vida única frente a la laguna de los siete colores."
  },
  {
    id: "tulum-eco-resort",
    title: "Tulum Eco Resort",
    location: "Tulum, México",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Lujo sustentable en el corazón de la selva maya."
  },
  {
    id: "merida-luxury",
    title: "Mérida Heritage",
    location: "Mérida, Yucatán",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Elegancia colonial combinada con modernidad absoluta."
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-resort-in-mexico-4475-large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white fade-in">
          <h2 className="text-sm uppercase tracking-[0.4em] mb-4 text-white/80 slide-up">Elite Properties</h2>
          <h1 className="text-5xl md:text-8xl font-headline font-bold mb-8 leading-tight slide-up">
            MIMOSA <span className="text-primary italic">Estates</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl font-light mb-10 text-white/90 leading-relaxed slide-up">
            Descubre una colección curada de los desarrollos más exclusivos del Caribe mexicano. Donde el lujo se encuentra con la naturaleza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 slide-up">
            <Link href="/desarrollos">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 rounded-full px-12 h-14 font-bold tracking-widest text-sm border-none">
                VER DESARROLLOS
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black rounded-full px-12 h-14 font-bold tracking-widest text-sm">
                CONTACTAR AGENTE
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </section>

      {/* Featured Developments */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Portafolio Exclusivo</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold">Desarrollos Destacados</h2>
            </div>
            <Link href="/desarrollos">
              <Button variant="link" className="text-primary p-0 h-auto font-bold tracking-widest flex items-center gap-2">
                VER TODO EL PORTAFOLIO <PlayCircle size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDevelopments.map((dev) => (
              <DevelopmentCard key={dev.id} {...dev} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&h=1000&auto=format&fit=crop" 
              alt="About Mimosa Estates" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nuestra Esencia</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Redefiniendo el Lujo Inmobiliario</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic">
              "En MIMOSA Estates, no vendemos propiedades, entregamos legados. Cada proyecto en nuestro portafolio ha sido seleccionado por su diseño arquitectónico superior, ubicación estratégica y compromiso con la excelencia."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Curaduría de Élite</h4>
                  <p className="text-sm text-muted-foreground">Solo los desarrollos más prestigiosos entran en nuestro radar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Confianza Total</h4>
                  <p className="text-sm text-muted-foreground">Transparencia legal y financiera en cada transacción.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Gem size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Exclusividad</h4>
                  <p className="text-sm text-muted-foreground">Acceso a preventas y oportunidades únicas "off-market".</p>
                </div>
              </div>
            </div>

            <Link href="/nosotros">
              <Button className="rounded-full px-10 h-12 bg-primary text-white">CONOCE MÁS</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-background" id="contact">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Inicia Tu Próxima Inversión</h2>
          <p className="text-muted-foreground">Completa el formulario y uno de nuestros asesores especializados se pondrá en contacto contigo en menos de 24 horas.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nombre Completo</label>
                <Input placeholder="Tu nombre..." className="rounded-xl bg-background border-border h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Correo Electrónico</label>
                <Input type="email" placeholder="ejemplo@correo.com" className="rounded-xl bg-background border-border h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Desarrollo de Interés</label>
              <Input placeholder="Selecciona un desarrollo..." className="rounded-xl bg-background border-border h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mensaje</label>
              <Textarea placeholder="Cuéntanos más sobre lo que buscas..." className="min-h-[120px] rounded-xl bg-background border-border" />
            </div>
            <Button className="w-full h-14 rounded-full bg-primary text-background font-bold tracking-widest text-sm hover:bg-primary/90">
              ENVIAR MENSAJE
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
