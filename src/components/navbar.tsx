"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, MessageSquare } from "lucide-react";
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

        {/* Navigation Links - Gap-4 is 1rem */}
        <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          {["Inicio", "Nosotros", "Desarrollos", "Blog", "Contacto"].map((item) => (
            <Link
              key={item}
              href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "text-sm uppercase tracking-[0.2em] transition-all hover:text-primary text-foreground/90 font-normal"
              )}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full border border-current flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-70 text-foreground"
            title="Language"
          >
            <span className="text-[10px] font-bold">ES</span>
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
              <span className="text-xs tracking-widest font-bold">CONTACTO</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
