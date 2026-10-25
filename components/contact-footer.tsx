"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/thusalapi" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thusalapiyarisi" },
  { name: "Twitter", url: "https://twitter.com/thusalapov" },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/23903279/thusala-piyarisi",
  },
];

export function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-20 md:pt-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="06"
          label="Contact"
          title="Working on something hard? Let's talk."
          description="I'm open to conversations about SaaS architecture, backend systems, research collaborations, and interesting engineering roles."
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-20 md:pb-28">
          <a
            href="mailto:thusalapi@gmail.com"
            className="group inline-flex items-center gap-3 font-mono text-xl sm:text-2xl md:text-3xl text-foreground hover:text-primary transition-colors break-all"
          >
            thusalapi@gmail.com
            <ArrowUpRight className="w-6 h-6 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="https://calendly.com/thusalapi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/85 transition-colors shrink-0"
          >
            Book a 30-min call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <footer className="border-t border-border py-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} Thusala Piyarisi · Built with Next.js
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
