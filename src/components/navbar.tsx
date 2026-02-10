
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, MessageSquare, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

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

  const Actions = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={cn("flex items-center gap-4", mobile && "flex-col items-stretch w-full mt-12")}>
      <div className={cn("flex items-center gap-4", mobile && "justify-center w-full mb-8")}>
        <button
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className="p-2 rounded-full border border-current flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-70 text-foreground"
          title="Toggle Language"
        >
          <span className="text-[11px] font-bold">{language.toUpperCase()}</span>
        </button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full text-foreground hover:bg-accent h-10 w-10"
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
        </Button>
      </div>

      <Link href="/contacto" onClick={() => setIsOpen(false)} className={cn(mobile && "w-full")}>
        <Button 
          className={cn(
            "flex items-center gap-2 rounded-full px-8 h-12 transition-all duration-500 bg-primary text-primary-foreground hover:bg-primary/90",
            mobile ? "w-full h-16" : "hidden sm:flex"
          )}
        >
          <MessageSquare size={20} />
          <span className="text-xs tracking-[0.2em] font-bold">{t("nav.contact").toUpperCase()}</span>
        </Button>
      </Link>
    </div>
  );

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
        <Link href="/" className="text-2xl font-headline font-bold tracking-tight z-50">
          <span className="text-primary">MIMOSA</span>
          <span className={cn(scrolled ? "text-foreground/80" : "text-foreground")}> ESTATES</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm uppercase tracking-[0.2em] transition-all hover:text-primary font-normal",
                scrolled ? "text-foreground/90" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:block">
          <Actions />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground h-12 w-12">
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-l border-border flex flex-col p-0">
              <div className="flex flex-col h-full p-12 overflow-y-auto">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-headline font-bold mb-16">
                  MIMOSA <span className="text-primary">ESTATES</span>
                </Link>
                
                <nav className="flex flex-col gap-8 flex-grow">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl uppercase tracking-[0.2em] font-normal hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <Actions mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
