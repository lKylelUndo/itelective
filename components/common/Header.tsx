"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ToggleTheme";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-4 relative">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">Kyle Ando</h1>

        {/* Desktop */}
        <nav className="lg:flex hidden items-center gap-x-6 text-[14px]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
          <ModeToggle />
        </nav>

        <button className="lg:hidden block" onClick={() => setOpen(!open)} aria-label={open ? "Close Menu" : "Open Menu"}>
          {open ? <X /> : <Menu />}
        </button>
   
      </div>
     
      <div
        className={`lg:hidden z-10 absolute left-0 w-full bg-background border-t transition-all duration-300 ease-in-out ${
          open
            ? "top-full opacity-100"
            : "top-[80%] opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/blogs" onClick={() => setOpen(false)}>
            Blogs
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
