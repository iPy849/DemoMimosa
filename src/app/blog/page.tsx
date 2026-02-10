"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-context";

const posts = [
  {
    id: 1,
    title: "Tendencias de Diseño Interior 2024 para Residencias de Lujo",
    titleEn: "2024 Interior Design Trends for Luxury Residences",
    excerpt: "Descubre cómo los materiales naturales y la domótica están redefiniendo el concepto de hogar exclusivo.",
    excerptEn: "Discover how natural materials and home automation are redefining the concept of an exclusive home.",
    date: "24 Mayo, 2024",
    author: "Elena Rivera",
    image: "https://images.unsplash.com/photo-1616489953149-8f6f5986872a?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Por qué invertir en Bacalar es la decisión más inteligente hoy",
    titleEn: "Why Investing in Bacalar is the Smartest Decision Today",
    excerpt: "Analizamos el crecimiento exponencial de la zona y por qué el 'lujo descalzo' es la tendencia ganadora.",
    excerptEn: "We analyze the exponential growth of the area and why 'barefoot luxury' is the winning trend.",
    date: "12 Abril, 2024",
    author: "Marco Sánchez",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800&h=500&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <header className="bg-secondary/30 py-20 px-6 text-center fade-in">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{t("blog.subtitle")}</span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold">{t("blog.title")}</h1>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 slide-up">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.id}`}>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-xl border border-border/50">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex gap-6 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                </div>
                <h2 className="text-3xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">
                  {language === 'es' ? post.title : post.titleEn}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {language === 'es' ? post.excerpt : post.excerptEn}
                </p>
                <Button variant="link" className="p-0 h-auto font-bold tracking-widest text-primary flex items-center gap-2">
                  {t("blog.read_more")} <ArrowRight size={16} />
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}