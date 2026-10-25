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
    <section id="publications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            Research
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Publications
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Peer-reviewed research on customization and extensibility in
            multi-tenant SaaS architecture.
          </p>
        </div>

        {/* Publication List */}
        <div className="space-y-6">
          {publications.map((pub) => (
            <a
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {pub.venueShort} {pub.year}
                </span>
                <span className="text-xs text-foreground/60">{pub.type}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                {pub.title}
              </h3>

              <p className="text-sm text-foreground/70 mb-2">
                {authors.map((author, idx) => (
                  <span key={author}>
                    {author === "Thusala Piyarisi" ? (
                      <span className="font-semibold text-foreground">
                        {author}
                      </span>
                    ) : (
                      author
                    )}
                    {idx < authors.length - 1 && ", "}
                  </span>
                ))}
              </p>

              <p className="text-sm text-foreground/60 italic mb-4">
                {pub.venue}
              </p>

              <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                Read on IEEE Xplore →
              </span>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 pt-12 border-t border-border text-center">
          <a
            href="https://ieeexplore.ieee.org/author/801414121539297"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View IEEE Author Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
