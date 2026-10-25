import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const publications = [
  {
    title:
      "An Annotation-Driven Extension Architecture for Deep Customization in Multi-Tenant Software-as-a-Service (SaaS) Platforms",
    venue:
      "2026 IEEE International Conference on Software Services Engineering (SSE)",
    venueShort: "IEEE SSE",
    year: 2026,
    type: "Conference Paper",
    url: "https://ieeexplore.ieee.org/document/11667151/",
  },
  {
    title:
      "The Multi-Tenant Customization Paradox: Formalising the Intrinsic Conflict Between Scalable Shared Codebases and Tenant-Specific Operational Customization in SaaS Architecture",
    venue:
      "2026 IEEE 50th Annual Computers, Software, and Applications Conference (COMPSAC)",
    venueShort: "IEEE COMPSAC",
    year: 2026,
    type: "Conference Paper",
    url: "https://ieeexplore.ieee.org/document/11645228/",
  },
];

const authors = [
  "Rivin Jayasuriya",
  "Thusala Piyarisi",
  "Sachila Awandya",
  "Shehan Wickramasooriya",
  "Samantha Thelijjagoda",
  "Dharshana Kasthurirathna",
];

export function Publications() {
  return (
    <section
      id="publications"
      className="py-20 md:py-28 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="04"
          label="Research"
          title="Publications"
          description="Peer-reviewed research on customization and extensibility in multi-tenant SaaS architecture."
        />

        <ol className="divide-y divide-border border-y border-border">
          {publications.map((pub) => (
            <li key={pub.url}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid md:grid-cols-[10rem_1fr_auto] gap-x-10 gap-y-3 py-8"
              >
                <div className="font-mono text-xs text-muted-foreground space-y-1">
                  <p className="text-foreground">
                    {pub.venueShort} {pub.year}
                  </p>
                  <p>{pub.type}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {authors.map((author, idx) => (
                      <span key={author}>
                        {author === "Thusala Piyarisi" ? (
                          <span className="text-foreground font-medium">
                            {author}
                          </span>
                        ) : (
                          author
                        )}
                        {idx < authors.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {pub.venue}
                  </p>
                </div>

                <ArrowUpRight className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </li>
          ))}
        </ol>

        <a
          href="https://ieeexplore.ieee.org/author/801414121539297"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          IEEE Xplore author profile
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
