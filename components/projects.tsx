import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

type FeaturedProject = {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  status: string;
  highlight?: boolean;
};

const featuredProjects: FeaturedProject[] = [
  {
    id: 0,
    title: "Suwa",
    description:
      "A self-hosted clinic management system for small medical and diagnostic centres, built with a real clinic as design partner and now running in production there. A shared patient registry backs two cores: billing with A4 invoices and POS receipts, and a schema-driven lab report engine that produces verified PDFs with calculated results and automatic Normal / Low / High flags.",
    category: "Healthcare",
    tech: ["Next.js", "PostgreSQL", "Drizzle", "React PDF", "Docker"],
    github: "https://github.com/thusalapi/Suwa",
    status: "Live",
    highlight: true,
  },
  {
    id: 2,
    title: "IsnocTalks",
    description:
      "A modern platform for coaching eSports players with live streaming, match analysis, and community features.",
    category: "Web App",
    tech: ["Next.js", "TypeScript", "Real-time Streaming"],
    github: "https://github.com/thusalapi/isnoctalks",
    demo: "https://isnoc-talks.vercel.app/",
    status: "Live",
    highlight: true,
  },
  {
    id: 5,
    title: "Upstack",
    description:
      "A Sims-style isometric browser game where my own avatar climbs from a bedroom to the summit of a tech career. Setbacks like \"Rejected\" and \"Imposter syndrome\" fly in from shadowy Doubts. You dodge them, then turn the ones that land into lessons that become stair steps to the next island. Includes needs bars, a pie menu, an action queue and procedural skeletal animation.",
    category: "Game",
    tech: ["Three.js", "Vite", "WebAudio", "Vercel"],
    github: "https://github.com/thusalapi/upstack",
    demo: "https://upstack-mu.vercel.app/",
    demoLabel: "Play the game",
    status: "Live",
    highlight: true,
  },
  {
    id: 1,
    title: "KamuLK",
    description:
      "A comprehensive food delivery platform with microservices architecture, real-time tracking, and seamless payment integration.",
    category: "Full-Stack",
    tech: ["MERN Stack", "Microservices", "Real-time Tracking"],
    github: "https://github.com/thusalapi/KAMU-microservice",
    demo: "https://kamulk.vercel.app",
    status: "Live",
  },
  {
    id: 3,
    title: "Portfolio (3D)",
    description:
      "An immersive 3D portfolio website showcasing skills and projects with modern animations and interactive UI.",
    category: "Portfolio",
    tech: ["Three.js", "React", "Animations"],
    github: "https://github.com/thusalapi/portfolio",
    demo: "https://thusala.me",
    status: "Live",
  },
  {
    id: 4,
    title: "ShoeTalks",
    description:
      "A modern e-commerce platform for sneaker enthusiasts with advanced filtering and recommendation systems.",
    category: "E-commerce",
    tech: ["React", "Node.js", "E-commerce"],
    github: "https://github.com/thusalapi/shoetalks",
    demo: "https://shoetalks.vercel.app",
    status: "Live",
  },
];

const freelanceProjects = [
  {
    title: "Unisonic",
    description:
      "3D product visualization for premium furniture e-commerce with AR preview.",
    tech: "React + Three.js",
    demo: "https://unisonic.lk",
  },
  {
    title: "Milkyway Resort",
    description: "Luxury resort website with booking system and virtual tours.",
    tech: "JavaScript + PHP",
    demo: "https://milkyway-resort.web.app",
  },
  {
    title: "Bright Power",
    description:
      "Digital transformation for solar energy company with lead generation.",
    tech: "WordPress + Custom PHP",
    demo: "https://brightpower.lk",
  },
  {
    title: "Tech Cloud Store",
    description:
      "Invoicing and inventory system with POS integration for mobile repair shop.",
    tech: "JavaScript + PHP",
    demo: "https://techcloudstore.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="03"
          label="Projects"
          title="Selected work"
          description="Products I've designed and built end to end, from architecture through to production."
        />

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden mb-16">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`group relative flex flex-col p-6 md:p-8 bg-background hover:bg-secondary/60 transition-colors ${
                project.highlight ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")} · {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "Live" ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>

              <p className="font-mono text-xs text-muted-foreground mb-6">
                {project.tech.join(" · ")}
              </p>

              <div className="mt-auto flex gap-5 text-sm">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {project.demoLabel ?? "Live site"}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Source
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Freelance Projects */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
            Client work
          </h3>

          <ul className="divide-y divide-border border-y border-border">
            {freelanceProjects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] md:grid-cols-[12rem_1fr_12rem_auto] items-baseline gap-x-6 gap-y-1 py-4"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </span>
                  <span className="hidden md:block text-sm text-muted-foreground">
                    {project.description}
                  </span>
                  <span className="hidden md:block font-mono text-xs text-muted-foreground">
                    {project.tech}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all self-center" />
                  <span className="md:hidden col-span-2 text-sm text-muted-foreground">
                    {project.description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://github.com/thusalapi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          More on GitHub
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
