import Image from "next/image";
import { Award, Users, Map, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="fade-in">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Nuestra Historia</span>
            <h1 className="text-5xl md:text-8xl font-headline font-bold mb-10 leading-tight">El Prestigio <br/> Detrás de Mimosa</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              MIMOSA Estates nació de la visión de transformar el mercado inmobiliario del Caribe Mexicano, elevándolo a estándares internacionales de lujo y exclusividad sin precedentes. 
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nos especializamos en conectar a inversionistas visionarios con obras maestras arquitectónicas que desafían lo convencional, priorizando siempre la armonía con el ecosistema y la excelencia en cada milímetro de diseño.
            </p>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border-[16px] border-primary/5 shadow-2xl slide-up">
            <Image 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&h=1200&auto=format&fit=crop" 
              alt="Luxury Experience" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24 fade-in">
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6">Nuestros Pilares</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 slide-up">
          {[
            { icon: <Award className="w-10 h-10"/>, title: "Excelencia", desc: "Buscamos la perfección absoluta en cada etapa del ciclo de vida inmobiliario." },
            { icon: <Users className="w-10 h-10"/>, title: "Atención Boutique", desc: "Cada cliente recibe un trato personalizado, confidencial y sumamente exclusivo." },
            { icon: <Map className="w-10 h-10"/>, title: "Ubicación Premium", desc: "Solo operamos en los puntos geográficos más estratégicos y de mayor plusvalía proyectada." },
            { icon: <Heart className="w-10 h-10"/>, title: "Compromiso", desc: "Nuestra pasión por el detalle se refleja en la satisfacción de nuestros inversionistas." }
          ].map((item, i) => (
            <div key={i} className="bg-card p-12 rounded-[2rem] shadow-xl border border-border text-center hover:translate-y-[-15px] transition-all duration-500 group">
              <div className="text-primary mb-8 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-headline font-bold text-2xl mb-6">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}