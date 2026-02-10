"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/nosotros" },
    { label: t("nav.developments"), href: "/desarrollos" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contacto" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6 px-6 md:px-12",
        scrolled 
          ? "glass-nav py-3" 
          : "bg-transparent text-foreground"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-headline font-bold tracking-tight">
          <span className="text-primary">MIMOSA</span>
          <span className="text-foreground/80"> ESTATES</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm uppercase tracking-[0.2em] transition-all hover:text-primary text-foreground/90 font-normal"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="p-2 rounded-full border border-current flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-70 text-foreground"
            title="Toggle Language"
          >
            <span className="text-[10px] font-bold">{language.toUpperCase()}</span>
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full text-foreground hover:bg-accent"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Link href="/contacto">
            <Button 
              className="hidden sm:flex items-center gap-2 rounded-full px-6 transition-all duration-500 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <MessageSquare size={18} />
              <span className="text-xs tracking-widest font-bold">{t("nav.contact").toUpperCase()}</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
