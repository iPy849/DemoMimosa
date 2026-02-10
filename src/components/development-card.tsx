
"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DevelopmentCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
}

export default function DevelopmentCard({ id, title, location, image, description }: DevelopmentCardProps) {
  return (
    <Card className="overflow-hidden group border-none shadow-lg bg-card hover:shadow-2xl transition-all duration-500 rounded-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <p className="text-white text-sm line-clamp-2">{description}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-primary mb-2">
          <MapPin size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">{location}</span>
        </div>
        <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
        <Link href={`/desarrollos/${id}`} className="w-full">
          <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
            VER DETALLES
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
