"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "./language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/50 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-border pb-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-headline font-bold mb-4">
            MIMOSA <span className="text-primary">DEVELOPMENTS</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Definiendo el lujo inmobiliario en el Caribe. Proyectos exclusivos diseñados para un estilo de vida inigualable.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-primary hover:opacity-70 transition-opacity">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-primary hover:opacity-70 transition-opacity">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-primary hover:opacity-70 transition-opacity">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">{t("footer.nav")}</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link></li>
            <li><Link href="/nosotros" className="hover:text-primary transition-colors">{t("nav.about")}</Link></li>
            <li><Link href="/desarrollos" className="hover:text-primary transition-colors">{t("nav.developments")}</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">{t("nav.blog")}</Link></li>
            <li><Link href="/contacto" className="hover:text-primary transition-colors">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">{t("footer.explore")}</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/desarrollos/cuatro-bacalar" className="hover:text-primary transition-colors">Cuatro Bacalar</Link></li>
            <li><Link href="/desarrollos/tulum-eco-resort" className="hover:text-primary transition-colors">Tulum Eco Resort</Link></li>
            <li><Link href="/desarrollos/merida-mansion" className="hover:text-primary transition-colors">Mérida Mansion</Link></li>
            <li><Link href="/sitemap" className="hover:text-primary transition-colors">{t("sitemap.title")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">{t("footer.contact")}</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              info@mimosadevelopments.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              +52 (998) 123 4567
            </li>
            <li className="flex items-start gap-3">
              <div className="w-4 h-4 mt-1 border border-primary rounded-full flex-shrink-0" />
              Av. Luxury Developments 404, Zona Hotelera, Cancún, MX
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
        <p>© {new Date().getFullYear()} MIMOSA Developments. {t("footer.rights")}</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary">{t("footer.terms")}</Link>
          <Link href="#" className="hover:text-primary">{t("footer.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}
