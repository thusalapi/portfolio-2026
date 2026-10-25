"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/thusalapi" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thusalapiyarisi" },
  { name: "Medium", url: "https://medium.com/@thusalapi" },
  { name: "IEEE", url: "https://ieeexplore.ieee.org/author/801414121539297" },
];

const facts = [
  { value: "3+ yrs", label: "Shipping production software" },
  { value: "2", label: "IEEE publications" },
  { value: "10+", label: "Products shipped" },
  { value: "7+", label: "Clients served" },
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur font-mono text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Software Engineer @ Rootcode
              <span className="hidden sm:inline">· Sri Lanka</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
                Thusala Piyarisi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-snug max-w-2xl text-pretty">
                I build multi-tenant SaaS platforms and{" "}
                <span className="text-foreground">
                  research how to keep them customizable at scale
                </span>{" "}
                without fragmenting the codebase.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://calendly.com/thusalapi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/85 transition-colors"
              >
                Book a call
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="#experience"
                className="inline-flex items-center h-11 px-5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                View experience
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-xl overflow-hidden border border-border bg-secondary order-first md:order-last">
            <Image
              src="/profile.png"
              alt="Thusala Piyarisi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Facts */}
        <dl className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {facts.map((fact) => (
            <div key={fact.label} className="p-5 md:p-6 bg-background">
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-mono text-2xl md:text-3xl font-medium text-foreground tracking-tight">
                {fact.value}
              </dd>
              <dd className="mt-1 text-xs md:text-sm text-muted-foreground">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
