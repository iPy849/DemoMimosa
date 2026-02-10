"use client";

import Link from "next/link";
import { Map, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export default function SitemapPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("sitemap.sec1"),
      links: [
        { name: t("nav.home"), href: "/" },
        { name: t("nav.about"), href: "/nosotros" },
        { name: t("nav.developments"), href: "/desarrollos" },
        { name: t("nav.blog"), href: "/blog" },
        { name: t("nav.contact"), href: "/contacto" }
      ]
    },
    {
      title: t("sitemap.sec2"),
      links: [
        { name: "Cuatro Bacalar", href: "/desarrollos/cuatro-bacalar" },
        { name: "Tulum Eco Resort", href: "/desarrollos/tulum-eco-resort" },
        { name: "Mérida Mansion", href: "/desarrollos/merida-luxury" }
      ]
    },
    {
      title: t("sitemap.sec3"),
      links: [
        { name: t("footer.privacy"), href: "#" },
        { name: t("footer.terms"), href: "#" },
        { name: "Cookies", href: "#" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto py-20">
        <div className="flex items-center gap-6 mb-16 fade-in">
          <div className="p-4 bg-primary/10 text-primary rounded-2xl">
            <Map size={36} />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-2">{t("sitemap.title")}</h1>
            <p className="text-muted-foreground text-lg">{t("sitemap.desc")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 slide-up">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h2 className="text-xl font-headline font-bold border-b border-border pb-4 text-primary uppercase tracking-widest">
                {section.title}
              </h2>
              <ul className="space-y-5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href} 
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 group-hover:ml-0" />
                      <span className="text-lg">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}