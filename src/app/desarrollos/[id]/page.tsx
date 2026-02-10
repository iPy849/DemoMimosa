
"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, Download, Share2, Expand, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

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
  // Default values for other items
};

export default function DevelopmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const data = developments[id as keyof typeof developments] || developments["cuatro-bacalar"];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/desarrollos" className="inline-flex items-center gap-2 text-sm text-primary font-bold mb-8 hover:opacity-70">
          <ArrowLeft size={16} /> VOLVER A DESARROLLOS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Info & Map (Sticky) */}
          <div className="lg:col-span-2 space-y-10 lg:sticky lg:top-32 self-start">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
                <MapPin size={16} /> {data.location}
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">{data.title}</h1>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {data.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {data.amenities.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="rounded-full px-8 bg-primary text-background flex-1 h-12">SOLICITAR DOSSIER</Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary text-primary">
                  <Download size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary text-primary">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline font-bold text-xl">Ubicación</h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border shadow-lg">
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
          <div className="lg:col-span-3 space-y-12">
            {/* Gallery Section */}
            <div className="space-y-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {data.images.map((src, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl">
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
                <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 text-white border-none" />
                <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 text-white border-none" />
              </Carousel>
              
              {/* Thumbnail Previews (Dots/Miniatures) */}
              <div className="flex justify-center gap-3">
                {data.images.map((_, idx) => (
                  <button 
                    key={idx} 
                    className="w-3 h-3 rounded-full bg-primary/20 hover:bg-primary transition-colors"
                  />
                ))}
              </div>
            </div>

            {/* Virtual Tour Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-headline font-bold text-2xl">Recorrido Virtual 360°</h3>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20">VR READY</span>
              </div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-muted relative">
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
