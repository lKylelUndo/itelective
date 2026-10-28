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

  const isActiveLink = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper">
      <div className="wrap flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          Kyle Ando<span className="text-ember">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-x-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "border-b-2 py-1 text-[15px] transition-colors hover:text-ember",
                  isActive
                    ? "border-ember text-ink"
                    : "border-transparent text-urn"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          className="p-2 text-ink transition-colors hover:text-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-16 border-b border-hairline bg-paper transition-all duration-200 ease-out lg:hidden",
          open ? "visible opacity-100" : "invisible -translate-y-1 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 py-3" aria-label="Mobile">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-hairline py-3 text-[15px] transition-colors last:border-b-0 hover:text-ember",
                  isActive ? "text-ember" : "text-ink"
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
