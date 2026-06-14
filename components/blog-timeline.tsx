"use client";

import Link from "next/link";

const blogPosts = [
  {
    title: "Deploying Your React Portfolio",
    excerpt:
      "Learn how to deploy your React portfolio using GitHub Actions for continuous deployment.",
    date: "5 July 2024",
    tags: ["webdev", "github", "actions"],
    url: "https://medium.com/@thusalapi/how-i-deployed-my-portfolio-using-github-actions-0386722ad0b3",
  },
  {
    title: "Intern Interviews Journey",
    excerpt:
      "My experience with software engineering intern interviews including sample questions and preparation tips.",
    date: "21 July 2024",
    tags: ["interviews", "internships", "questions"],
    url: "https://medium.com/@thusalapi/software-engineering-intern-interviews-a-technical-journey-c2d003e50cbb",
  },
  {
    title: "How Docker Achieves Isolation Through Containerization",
    excerpt:
      "Understanding Docker containerization technology and how it enables application isolation and portability.",
    date: "23 April 2025",
    tags: ["docker", "devops", "containerization"],
    url: "https://rootcode.io/blog/how-docker-achieves-isolation-through-containerization",
  },
];

const timelineEvents = [
  {
    year: "2022",
    month: "Feb",
    title: "Started SE Journey",
    subtitle: "Software Engineering @ SLIIT",
    description:
      "Began my Software Engineering degree at SLIIT, diving deep into programming fundamentals.",
    type: "education",
  },
  {
    year: "2022",
    month: "Jun",
    title: "Competition Enthusiast",
    subtitle: "Hackathons & Ideathons",
    description:
      "Started actively participating in hackathons, ideathons, and coding competitions.",
    type: "competition",
  },
  {
    year: "2023",
    month: "Aug",
    title: "Freelance Career Launch",
    subtitle: "Digital Marketing & Development",
    description:
      "Launched my freelance career specializing in digital marketing and online presence.",
    type: "freelance",
  },
  {
    year: "2023",
    month: "Oct",
    title: "Web Development Specialist",
    subtitle: "Full-Stack Development",
    description:
      "Expanded services to include comprehensive web development and digital consultation.",
    type: "development",
  },
  {
    year: "2024",
    month: "Aug",
    title: "Software Engineer Intern",
    subtitle: "Rootcode",
    description:
      "Worked as a Software Engineer Intern at Rootcode, gaining hands-on experience in full-stack development.",
    type: "internship",
  },
  {
    year: "2025",
    month: "Aug",
    title: "Associate Software Engineer",
    subtitle: "Rootcode",
    description:
      "Promoted to Software Engineer at Rootcode, taking on greater ownership of architecture decisions and delivering complex features across the full stack.",
    type: "career",
  },
  {
    year: "2026",
    month: "Jun",
    title: "Software Engineer",
    subtitle: "Rootcode",
    description:
      "Promoted to Software Engineer at Rootcode, taking on greater ownership of architecture decisions and delivering complex features across the full stack.",
    type: "career",
    current: true,
  },
];

export function BlogAndTimeline() {
  return (
    <section id="blog" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Blog Section */}
        <div className="mb-24">
          <div className="mb-12 space-y-4">
            <p className="text-sm font-medium text-primary tracking-wide uppercase">
              Latest Articles
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Writing & Insights
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Sharing knowledge about web development, interviews, and
              technology trends.
            </p>
          </div>

          <div className="grid gap-6">
            {blogPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h3>
                  <span className="text-sm text-foreground/60 whitespace-nowrap">
                    {post.date}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-secondary text-foreground/70 rounded border border-border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://medium.com/@thusalapi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Read more on Medium →
            </a>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="pt-24 border-t border-border">
          <div className="mb-16 space-y-4">
            <p className="text-sm font-medium text-primary tracking-wide uppercase">
              Career Path
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              My Journey
            </h2>
          </div>

          <div className="space-y-8">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Timeline line */}
                {idx !== timelineEvents.length - 1 && (
                  <div className="absolute left-3 md:left-5 top-10 bottom-0 w-0.5 bg-border" />
                )}

                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center ${
                    event.current
                      ? "border-primary bg-primary"
                      : "border-border bg-background"
                  }`}
                >
                  {event.current && (
                    <div className="w-2 h-2 bg-background rounded-full" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                    <span className="text-sm font-bold text-primary">
                      {event.year}
                    </span>
                    <span className="text-sm text-foreground/60">
                      {event.month}
                    </span>
                    {event.current && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-primary text-primary-foreground rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-primary font-medium">{event.subtitle}</p>
                  <p className="text-foreground/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
