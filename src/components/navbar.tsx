"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, MessageSquare, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
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
    <div className={cn("flex items-center gap-3", mobile && "flex-col items-stretch w-full mt-8")}>
      <div className={cn("flex items-center gap-3", mobile && "justify-between w-full")}>
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
      </div>

      <Link href="/contacto" onClick={() => setIsOpen(false)} className={cn(mobile && "w-full")}>
        <Button 
          className={cn(
            "flex items-center gap-2 rounded-full px-6 transition-all duration-500 bg-primary text-primary-foreground hover:bg-primary/90",
            mobile ? "w-full h-14" : "hidden sm:flex"
          )}
        >
          <MessageSquare size={18} />
          <span className="text-xs tracking-widest font-bold">{t("nav.contact").toUpperCase()}</span>
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
          <span className="text-foreground/80"> ESTATES</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
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

        {/* Desktop Actions */}
        <div className="hidden md:block">
          <Actions />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border flex flex-col p-10">
              <SheetHeader className="mb-12 text-left">
                <SheetTitle className="text-2xl font-headline font-bold">
                  MIMOSA <span className="text-primary">ESTATES</span>
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-6 flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase tracking-[0.2em] font-normal hover:text-primary transition-colors border-b border-border/50 pb-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Actions mobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
