import { SectionHeading } from "@/components/section-heading";

const focusAreas = [
  "Multi-tenant SaaS architecture",
  "Microservices & backend systems",
  "Full-stack product engineering",
  "Applied software engineering research",
];

const stack = [
  { label: "Languages", items: "TypeScript, JavaScript, Java" },
  { label: "Frontend", items: "React, Next.js, Three.js" },
  { label: "Backend", items: "Node.js, NestJS, Spring Boot" },
  { label: "Data", items: "PostgreSQL, MySQL, MongoDB" },
  { label: "Infra", items: "Docker, AWS" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="01"
          label="About"
          title="Engineering for systems that have to last"
        />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
          <div className="space-y-5 text-muted-foreground">
            <p>
              I&apos;m a software engineer at{" "}
              <a
                href="https://rootcode.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Rootcode
              </a>{" "}
              in Sri Lanka, working on enterprise software across the full
              stack — from service boundaries and data models to the interfaces
              people use every day.
            </p>
            <p>
              Much of my recent work sits where engineering meets research: how
              a multi-tenant SaaS platform can give every customer deep
              customization without splintering a shared codebase. That work
              led to{" "}
              <a
                href="#publications"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                two peer-reviewed IEEE papers
              </a>{" "}
              in 2026.
            </p>
            <p>
              I care about software that is predictable in production: clear
              boundaries, observable behaviour, and code the next engineer can
              change with confidence. Before Rootcode I ran a freelance practice
              shipping products for small businesses, which taught me to own
              outcomes end to end.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Focus
              </h3>
              <ul className="space-y-2.5">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Stack
              </h3>
              <dl className="divide-y divide-border border-y border-border">
                {stack.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[6rem_1fr] gap-4 py-2.5 text-sm"
                  >
                    <dt className="font-mono text-xs text-muted-foreground pt-0.5">
                      {row.label}
                    </dt>
                    <dd className="text-foreground">{row.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
