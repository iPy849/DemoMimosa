
import Link from "next/link";
import { Map, ChevronRight } from "lucide-react";

export default function SitemapPage() {
  const sections = [
    {
      title: "Principales",
      links: [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Desarrollos", href: "/desarrollos" },
        { name: "Blog", href: "/blog" },
        { name: "Contacto", href: "/contacto" }
      ]
    },
    {
      title: "Desarrollos",
      links: [
        { name: "Cuatro Bacalar", href: "/desarrollos/cuatro-bacalar" },
        { name: "Tulum Eco Resort", href: "/desarrollos/tulum-eco-resort" },
        { name: "Mérida Mansion", href: "/desarrollos/merida-luxury" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Aviso de Privacidad", href: "#" },
        { name: "Términos de Servicio", href: "#" },
        { name: "Cookies", href: "#" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 text-primary rounded-xl">
            <Map size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-headline font-bold">Mapa del Sitio</h1>
            <p className="text-muted-foreground">Explora todas las secciones de nuestro portal.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-xl font-headline font-bold border-b border-border pb-2 text-primary">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href} 
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
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
