"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, Download, Share2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const developments = {
  "cuatro-bacalar": {
    title: "Cuatro Bacalar",
    location: "Bacalar, Quintana Roo",
    description: "Cuatro Bacalar es un desarrollo residencial de lujo diseñado para armonizar con la belleza natural de la Laguna de los Siete Colores. Con una arquitectura orgánica que utiliza materiales locales y tecnología sustentable, este proyecto ofrece 24 exclusivas unidades con vistas panorámicas, club de playa privado y amenidades de clase mundial.",
    amenities: ["Beach Club Privado", "Seguridad 24/7", "Alberca Infinity", "Gimnasio", "Restaurante Gourmet", "Muelle Privado"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.4939223793!2d-88.3974443!3d18.6755455!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!2f1080!3m2!1m1!2zMTjCsDQwJzMyLjAiTiA4OMKwMjMnNTAuOCJX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx",
    virtualTour: "https://kuula.co/share/hs7cq/collection/7Dgjf?logo=0&info=0&fs=1&vr=1&initload=0&thumbs=1",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=1200&h=800&auto=format&fit=crop"
    ]
  },
};

export default function DevelopmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const data = developments[id as keyof typeof developments] || developments["cuatro-bacalar"];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/desarrollos" className="inline-flex items-center gap-2 text-sm text-primary font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> VOLVER A DESARROLLOS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Column: Info & Map (Sticky) */}
          <div className="lg:col-span-2 space-y-12 lg:sticky lg:top-32 self-start fade-in">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6">
                <MapPin size={18} /> {data.location}
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold mb-8">{data.title}</h1>
              <p className="text-muted-foreground leading-relaxed text-xl mb-10">
                {data.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                {data.amenities.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="rounded-full px-10 bg-primary text-background flex-1 h-14 font-bold tracking-widest text-xs hover:scale-105 transition-all">SOLICITAR DOSSIER</Button>
                <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-primary text-primary hover:bg-primary/10 transition-colors">
                  <Download size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-primary text-primary hover:bg-primary/10 transition-colors">
                  <Share2 size={20} />
                </Button>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t">
              <h3 className="font-headline font-bold text-2xl uppercase tracking-wider">Ubicación Estratégica</h3>
              <div className="aspect-video w-full rounded-3xl overflow-hidden border shadow-2xl">
                <iframe
                  src={data.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Gallery & Tour */}
          <div className="lg:col-span-3 space-y-16 slide-up">
            {/* Gallery Section */}
            <div className="space-y-6">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {data.images.map((src, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                        <Image 
                          src={src} 
                          alt={`${data.title} slide ${idx + 1}`} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-6 bg-white/30 hover:bg-white/60 text-black border-none h-12 w-12" />
                <CarouselNext className="right-6 bg-white/30 hover:bg-white/60 text-black border-none h-12 w-12" />
              </Carousel>
              
              {/* Dots / Miniatures Previews */}
              <div className="flex justify-center gap-4 py-4">
                {data.images.map((src, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => api?.scrollTo(idx)}
                    className={cn(
                      "relative h-16 w-24 rounded-lg overflow-hidden transition-all border-2",
                      current === idx ? "border-primary scale-110 shadow-lg" : "border-transparent opacity-50 hover:opacity-100"
                    )}
                  >
                    <Image src={src} alt="thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Virtual Tour Section */}
            <div className="space-y-8 bg-card p-10 rounded-[2.5rem] shadow-2xl border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-headline font-bold text-3xl mb-2">Experiencia Inmersiva</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Recorrido Virtual 360°</p>
                </div>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-4 py-2 rounded-full border border-primary/20">EXPLORA AHORA</span>
              </div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-muted relative border-4 border-background">
                <iframe
                  src={data.virtualTour}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}