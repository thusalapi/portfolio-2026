import { SectionHeading } from "@/components/section-heading";

type Role = {
  title: string;
  date: string;
  description: string;
  current?: boolean;
};

const experience: { org: string; url?: string; period: string; roles: Role[] }[] = [
  {
    org: "Rootcode",
    url: "https://rootcode.io",
    period: "2024 — Now",
    roles: [
      {
        title: "Software Engineer",
        date: "Jun 2026",
        current: true,
        description:
          "Promoted to Software Engineer, taking on greater ownership of architecture decisions and delivering complex features across the full stack.",
      },
      {
        title: "Associate Software Engineer",
        date: "Aug 2025",
        description:
          "Joined the engineering team full-time, contributing to production systems, collaborating across disciplines, and deepening expertise in full-stack development and microservices.",
      },
      {
        title: "Software Engineer Intern",
        date: "Aug 2024",
        description:
          "Gained hands-on experience in full-stack development on client-facing products.",
      },
    ],
  },
  {
    org: "Independent",
    period: "2023",
    roles: [
      {
        title: "Full-Stack Developer & Consultant",
        date: "Oct 2023",
        description:
          "Expanded the practice into end-to-end web development and digital consultation for small and growing businesses.",
      },
      {
        title: "Freelance Digital Marketing",
        date: "Aug 2023",
        description:
          "Launched a freelance practice helping businesses build their online presence.",
      },
    ],
  },
  {
    org: "SLIIT",
    period: "2022",
    roles: [
      {
        title: "Software Engineering Degree",
        date: "Feb 2022",
        description:
          "Studied software engineering fundamentals and competed regularly in hackathons, ideathons, and coding competitions.",
      },
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="02" label="Experience" title="Where I've worked" />

        <div className="divide-y divide-border border-y border-border">
          {experience.map((entry) => (
            <div
              key={entry.org}
              className="grid md:grid-cols-[10rem_1fr] gap-4 md:gap-10 py-8 md:py-10"
            >
              <div className="space-y-1">
                <p className="font-mono text-xs text-muted-foreground">
                  {entry.period}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {entry.org}
                    </a>
                  ) : (
                    entry.org
                  )}
                </h3>
              </div>

              <ol className="relative space-y-7 md:border-l md:border-border md:pl-8">
                {entry.roles.map((role) => (
                  <li key={role.title} className="relative">
                    <span
                      aria-hidden
                      className={`hidden md:block absolute -left-[2.3rem] top-2 w-2 h-2 rounded-full ring-4 ring-background ${
                        role.current ? "bg-emerald-500" : "bg-border"
                      }`}
                    />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-base font-medium text-foreground">
                        {role.title}
                      </h4>
                      <span className="font-mono text-xs text-muted-foreground">
                        {role.date}
                      </span>
                      {role.current && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                      {role.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
