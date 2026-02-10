"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-context";

const posts = {
  "1": {
    title: "Tendencias de Diseño Interior 2024 para Residencias de Lujo",
    titleEn: "2024 Interior Design Trends for Luxury Residences",
    date: "24 Mayo, 2024",
    author: "Elena Rivera",
    image: "https://images.unsplash.com/photo-1616489953149-8f6f5986872a?q=80&w=1200&h=600&auto=format&fit=crop",
    content: `
      <p className="mb-6">El diseño de interiores para el año 2024 está marcado por una profunda conexión con la naturaleza y la integración invisible de la tecnología. En MIMOSA Estates, observamos cómo nuestros desarrollos están adoptando estas filosofías para crear espacios que no solo son estéticamente impresionantes, sino que también promueven el bienestar.</p>
      
      <h3 className="text-2xl font-headline font-bold mb-4 mt-8">1. Biofilia y Materiales Orgánicos</h3>
      <p className="mb-6">Ya no se trata solo de añadir plantas. La tendencia actual integra la naturaleza en la estructura misma. Piedras locales, maderas certificadas con acabados mate y textiles de fibras naturales como el lino y la seda salvaje dominan las paletas de este año. Los tonos tierra y cremas proporcionan el lienzo perfecto para esta estética.</p>
      
      <h3 className="text-2xl font-headline font-bold mb-4 mt-8">2. Domótica Invisible</h3>
      <p className="mb-6">El lujo hoy significa comodidad sin esfuerzo. Los sistemas inteligentes ahora se ocultan tras paneles de diseño o se integran en el mobiliario, permitiendo que la estética del hogar permanezca limpia mientras se ofrece control total sobre la iluminación, el clima y la seguridad.</p>
      
      <h3 className="text-2xl font-headline font-bold mb-4 mt-8">3. El "Quiet Luxury" Inmobiliario</h3>
      <p className="mb-6">Menos es más, pero con una calidad excepcional. Esta tendencia se aleja de la ostentación para centrarse en detalles discretos, texturas ricas y una artesanía impecable que solo los conocedores pueden apreciar plenamente.</p>
    `,
    contentEn: `
      <p className="mb-6">Interior design for 2024 is marked by a deep connection with nature and the invisible integration of technology. At MIMOSA Estates, we observe how our developments are adopting these philosophies to create spaces that are not only aesthetically stunning but also promote well-being.</p>
      
      <h3 className="text-2xl font-headline font-bold mb-4 mt-8">1. Biophilia and Organic Materials</h3>
      <p className="mb-6">It's no longer just about adding plants. Current trends integrate nature into the very structure. Local stones, certified woods with matte finishes, and natural fiber textiles like linen and wild silk dominate this year's palettes. Earthy tones and creams provide the perfect canvas for this aesthetic.</p>
      
      <h3 className="text-2xl font-headline font-bold mb-4 mt-8">2. Invisible Home Automation</h3>
      <p className="mb-6">Luxury today means effortless comfort. Smart systems are now hidden behind designer panels or integrated into furniture, allowing the home's aesthetic to remain clean while offering full control over lighting, climate, and security.</p>
      
      <h3 className="text-2xl font-headline font-bold mb-4 mt-8">3. Real Estate "Quiet Luxury"</h3>
      <p className="mb-6">Less is more, but with exceptional quality. This trend moves away from ostentation to focus on discreet details, rich textures, and impeccable craftsmanship that only connoisseurs can fully appreciate.</p>
    `
  }
};

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { language, t } = useLanguage();
  const post = posts[id as keyof typeof posts] || posts["1"];

  return (
    <div className="pt-24 pb-20 bg-background">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> {t("common.back")}
        </Link>

        <header className="mb-12 fade-in">
          <div className="flex gap-6 text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">
            <span className="flex items-center gap-2"><Calendar size={16}/> {post.date}</span>
            <span className="flex items-center gap-2"><User size={16}/> {post.author}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">
            {language === 'es' ? post.title : post.titleEn}
          </h1>
          <div className="relative aspect-[21/9] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-border/50">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        </header>

        <div className="slide-up">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: language === 'es' ? post.content : post.contentEn }}
          />
          
          <div className="mt-16 pt-10 border-t flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Compartir:</span>
              <Button size="icon" variant="outline" className="rounded-full h-10 w-10"><Share2 size={18}/></Button>
            </div>
            <Link href="/contacto">
              <Button className="rounded-full px-8 h-12 bg-primary text-primary-foreground font-bold text-xs tracking-widest">
                CONTACTAR AGENTE
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}