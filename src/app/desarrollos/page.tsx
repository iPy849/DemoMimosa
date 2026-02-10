
import DevelopmentCard from "@/components/development-card";

const allDevelopments = [
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
  },
  {
    id: "punta-mita-estates",
    title: "Punta Mita Estates",
    location: "Nayarit, México",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Villas de ultra lujo con acceso privado al océano Pacífico."
  },
  {
    id: "cancun-penthouse",
    title: "Skyline Cancun",
    location: "Cancún, México",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Lofts y penthouses en el punto más vibrante de la ciudad."
  },
  {
    id: "loscabos-villas",
    title: "Mar de Cortés Villas",
    location: "Los Cabos, BCS",
    image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=800&h=600&auto=format&fit=crop",
    description: "Privacidad absoluta entre el desierto y el mar."
  }
];

export default function DevelopmentsPage() {
  return (
    <div className="pt-24 pb-20">
      <header className="bg-secondary/30 py-24 px-6 text-center">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Portafolio</span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold">Nuestros Desarrollos</h1>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDevelopments.map((dev) => (
            <DevelopmentCard key={dev.id} {...dev} />
          ))}
        </div>
      </section>
    </div>
  );
}
