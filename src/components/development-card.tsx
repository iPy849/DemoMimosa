"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-context";

interface DevelopmentCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
}

export default function DevelopmentCard({ id, title, location, image, description }: DevelopmentCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden group border-border shadow-lg bg-card hover:shadow-2xl transition-all duration-500 rounded-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <p className="text-white text-sm line-clamp-3 font-light leading-relaxed">{description}</p>
        </div>
      </div>
      <CardContent className="p-8">
        <div className="flex items-center gap-2 text-primary mb-3">
          <MapPin size={16} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{location}</span>
        </div>
        <h3 className="text-2xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0 flex justify-between items-center">
        <Link href={`/desarrollos/${id}`} className="w-full">
          <Button variant="outline" className="w-full rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold text-[10px] tracking-widest h-12">
            {t("featured.cta").split(' ')[0]} {t("nav.developments").toUpperCase()}
            <ArrowRight size={14} className="ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}