"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, PlayCircle, Star, ShieldCheck, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import DevelopmentCard from "@/components/development-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/language-context";

export default function Home() {
  const { t } = useLanguage();

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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] dark:brightness-[0.4]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-resort-in-mexico-4475-large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="fade-in space-y-8">
            <h2 className="text-sm uppercase tracking-[0.5em] mb-4 text-foreground/70 slide-up">{t("hero.subtitle")}</h2>
            <h1 className="text-6xl md:text-9xl font-headline font-bold leading-tight slide-up text-foreground">
              MIMOSA <span className="text-primary italic">Estates</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl font-light text-foreground/80 leading-relaxed slide-up">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center slide-up pt-8">
              <Link href="/desarrollos">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 h-16 font-bold tracking-[0.2em] text-sm border-none transition-all hover:scale-105">
                  {t("hero.cta.primary")}
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="text-foreground border-foreground hover:bg-foreground hover:text-background rounded-full px-12 h-16 font-bold tracking-[0.2em] text-sm transition-all hover:scale-105">
                  {t("hero.cta.secondary")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown size={40} className="text-foreground" />
        </div>
      </section>

      {/* Featured Developments */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 fade-in">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">{t("featured.subtitle")}</span>
              <h2 className="text-4xl md:text-6xl font-headline font-bold">{t("featured.title")}</h2>
            </div>
            <Link href="/desarrollos">
              <Button variant="link" className="text-primary p-0 h-auto font-bold tracking-widest flex items-center gap-2 group">
                {t("featured.cta")} <PlayCircle size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 slide-up">
            {featuredDevelopments.map((dev) => (
              <DevelopmentCard key={dev.id} {...dev} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1 slide-up">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&h=1000&auto=format&fit=crop" 
              alt="About Mimosa Estates" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 fade-in">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">{t("about.essence")}</span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-10">{t("about.title")}</h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-10 italic border-l-4 border-primary pl-8">
              "{t("about.quote")}"
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-xl text-primary">
                  <Star size={24} />
                </div>
                <h4 className="font-bold text-lg">{t("about.pill1.title")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("about.pill1.desc")}</p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-xl text-primary">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-lg">{t("about.pill2.title")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("about.pill2.desc")}</p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-xl text-primary">
                  <Gem size={24} />
                </div>
                <h4 className="font-bold text-lg">{t("about.pill3.title")}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("about.pill3.desc")}</p>
              </div>
            </div>

            <Link href="/nosotros">
              <Button className="rounded-full px-12 h-14 bg-primary text-primary-foreground hover:scale-105 transition-all">{t("about.cta")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 bg-background" id="contact">
        <div className="max-w-4xl mx-auto text-center mb-20 fade-in">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">{t("contact.subtitle")}</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("contact.desc")}</p>
        </div>

        <div className="max-w-3xl mx-auto bg-card p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-border slide-up">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t("contact.form.name")}</label>
                <Input placeholder="..." className="rounded-xl bg-background border-border h-14" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t("contact.form.email")}</label>
                <Input type="email" placeholder="..." className="rounded-xl bg-background border-border h-14" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t("contact.form.interest")}</label>
              <Input placeholder="..." className="rounded-xl bg-background border-border h-14" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t("contact.form.message")}</label>
              <Textarea placeholder="..." className="min-h-[140px] rounded-xl bg-background border-border" />
            </div>
            <Button className="w-full h-16 rounded-full bg-primary text-primary-foreground font-bold tracking-[0.2em] text-sm hover:bg-primary/90 transition-all hover:scale-[1.02]">
              {t("contact.form.submit")}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
