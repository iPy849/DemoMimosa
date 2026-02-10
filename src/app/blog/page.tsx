import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Tendencias de Diseño Interior 2024 para Residencias de Lujo",
    excerpt: "Descubre cómo los materiales naturales y la domótica están redefiniendo el concepto de hogar exclusivo.",
    date: "24 Mayo, 2024",
    author: "Elena Rivera",
    image: "https://images.unsplash.com/photo-1616489953149-8f6f5986872a?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Por qué invertir en Bacalar es la decisión más inteligente hoy",
    excerpt: "Analizamos el crecimiento exponencial de la zona y por qué el 'lujo descalzo' es la tendencia ganadora.",
    date: "12 Abril, 2024",
    author: "Marco Sánchez",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800&h=500&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <header className="bg-secondary/30 py-20 px-6 text-center fade-in">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Inspiración</span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold">Blog & Estilo de Vida</h1>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 slide-up">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-xl">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex gap-6 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
              </div>
              <h2 className="text-3xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <Button variant="link" className="p-0 h-auto font-bold tracking-widest text-primary flex items-center gap-2">
                LEER MÁS <ArrowRight size={16} />
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
