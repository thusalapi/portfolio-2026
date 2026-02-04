"use client";

import Link from "next/link";

const featuredProjects = [
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
    id: 2,
    title: "IsnocTalks",
    description:
      "A modern platform for coaching eSports players with live streaming, match analysis, and community features.",
    category: "Web App",
    tech: ["Next.js", "TypeScript", "Real-time Streaming"],
    github: "https://github.com/thusalapi/isnoctalks",
    demo: "https://isnoctalks.com",
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
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            Work & Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Selection of recent projects spanning full-stack development,
            e-commerce, and innovative solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mt-1">
                      {project.category}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 bg-secondary text-foreground/70 rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Demo →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance Projects */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Freelance & Commercial
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {freelanceProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
              >
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-foreground/70 text-sm mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-primary font-medium">
                  {project.tech}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="text-foreground/70 mb-4">Want to see more projects?</p>
          <a
            href="https://github.com/thusalapi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Visit GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
}
