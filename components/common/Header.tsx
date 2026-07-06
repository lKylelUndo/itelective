"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-tight text-primary hover:opacity-90 transition-opacity">
          Kyle Ando
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-x-8 text-[14px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden absolute left-0 w-full bg-background border-b border-border/80 transition-all duration-300 ease-in-out z-40",
          open ? "top-16 opacity-100 visible" : "top-12 opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-y-4 py-8 px-6 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "w-full text-center py-2 font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
