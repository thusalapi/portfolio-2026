"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/thusalapi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thusalapiyarisi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.442-.103.249-.129.597-.129.946v5.417h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.252 1.547 4.252 4.868v4.872zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.954-1.715 1.184 0 1.915.76 1.915 1.715 0 .953-.731 1.715-1.954 1.715zm1.586 11.597H3.587V9.017h3.336v11.435zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: "Medium",
      url: "https://medium.com/@thusalapi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:thusalapi@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-24 flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                Welcome, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Thusala Piyarisi
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                Full-Stack Developer & Problem Solver
              </p>
            </div>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-lg">
              I architect scalable solutions that bridge business vision and
              technical excellence. Specializing in modern full-stack
              development, microservices, and leading teams to ship products
              that matter.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="text-foreground/60 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://calendly.com/thusalapi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Schedule a Call
              </a>
              <Link
                href="#projects"
                className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors duration-200"
              >
                View Work
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  10+
                </p>
                <p className="text-sm text-foreground/60">Projects Shipped</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  3+
                </p>
                <p className="text-sm text-foreground/60">Years Building</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  7+
                </p>
                <p className="text-sm text-foreground/60">Clients Served</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-secondary/50 border border-border">
              <Image
                src="/profile.png"
                alt="Thusala Piyarisi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
