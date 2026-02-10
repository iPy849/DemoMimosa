
import Image from "next/image";
import { Award, Users, Map, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nuestra Historia</span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-8">El Prestigio <br/> detras de la Marca</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              MIMOSA Estates nació de la visión de transformar el mercado inmobiliario del Caribe Mexicano, elevándolo a estándares internacionales de lujo y exclusividad. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nos especializamos en conectar a inversionistas visionarios con desarrollos arquitectónicos que desafían lo convencional, priorizando siempre la armonía con el entorno y la excelencia en el detalle.
            </p>
          </div>
          <div className="relative aspect-square rounded-full overflow-hidden border-[12px] border-primary/10 slide-up">
            <Image 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&h=1200&auto=format&fit=crop" 
              alt="Luxury Experience" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">Nuestros Pilares</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Award className="w-8 h-8"/>, title: "Excelencia", desc: "Buscamos la perfección en cada etapa del proceso inmobiliario." },
            { icon: <Users className="w-8 h-8"/>, title: "Atención Boutique", desc: "Cada cliente recibe un trato personalizado y exclusivo." },
            { icon: <Map className="w-8 h-8"/>, title: "Ubicación Premium", desc: "Solo operamos en los puntos más estratégicos y de alta plusvalía." },
            { icon: <Heart className="w-8 h-8"/>, title: "Pasión", desc: "Amamos lo que hacemos y eso se refleja en nuestros resultados." }
          ].map((item, i) => (
            <div key={i} className="bg-card p-10 rounded-2xl shadow-lg border border-border text-center hover:translate-y-[-10px] transition-transform duration-300">
              <div className="text-primary mb-6 flex justify-center">{item.icon}</div>
              <h3 className="font-headline font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
