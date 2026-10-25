"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          Thusala Piyarisi
        </Link>

        <div className="flex gap-8 items-center">
          <Link
            href="#about"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#publications"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Research
          </Link>
          <Link
            href="#blog"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <a
            href="mailto:thusalapi@gmail.com"
            className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
