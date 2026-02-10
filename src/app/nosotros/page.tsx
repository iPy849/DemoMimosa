"use client";

import Image from "next/image";
import { Award, Users, Map, Heart } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="fade-in">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">{t("about.history_subtitle")}</span>
            <h1 className="text-5xl md:text-8xl font-headline font-bold mb-10 leading-tight">{t("about.history_title")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t("about.history_p1")}
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("about.history_p2")}
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
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6">{t("about.pillars_title")}</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 slide-up">
          {[
            { icon: <Award className="w-10 h-10"/>, title: t("about.pillar1.title"), desc: t("about.pillar1.desc") },
            { icon: <Users className="w-10 h-10"/>, title: t("about.pillar2.title"), desc: t("about.pillar2.desc") },
            { icon: <Map className="w-10 h-10"/>, title: t("about.pillar3.title"), desc: t("about.pillar3.desc") },
            { icon: <Heart className="w-10 h-10"/>, title: t("about.pillar4.title"), desc: t("about.pillar4.desc") }
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
