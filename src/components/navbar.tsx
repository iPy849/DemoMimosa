
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        scrolled 
          ? "glass-nav py-3" 
          : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-headline font-bold tracking-tight">
          <span className={cn(scrolled ? "text-primary" : "text-white")}>MIMOSA</span>
          <span className={cn(scrolled ? "text-foreground" : "text-white/80")}> ESTATES</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {["Inicio", "Nosotros", "Desarrollos", "Blog", "Contacto"].map((item) => (
            <Link
              key={item}
              href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-primary",
                scrolled ? "text-foreground font-medium" : "text-white"
              )}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className={cn(
              "p-2 rounded-full border border-current flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-70",
              scrolled ? "text-foreground" : "text-white"
            )}
            title="Language"
          >
            <span className="text-[10px] font-bold">ES</span>
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(scrolled ? "text-foreground" : "text-white hover:bg-white/10")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Link href="/contacto">
            <Button 
              className={cn(
                "hidden sm:flex items-center gap-2 rounded-full px-6 transition-all duration-300",
                scrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              <MessageSquare size={16} />
              CONTACTO
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
