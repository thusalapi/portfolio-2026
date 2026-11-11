import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const blogPosts = [
  {
    title: "How Docker Achieves Isolation Through Containerization",
    excerpt:
      "Understanding Docker containerization technology and how it enables application isolation and portability.",
    date: "Apr 2025",
    publisher: "Rootcode",
    url: "https://rootcode.io/blog/how-docker-achieves-isolation-through-containerization",
  },
  {
    title: "Intern Interviews Journey",
    excerpt:
      "My experience with software engineering intern interviews including sample questions and preparation tips.",
    date: "Jul 2024",
    publisher: "Medium",
    url: "https://medium.com/@thusalapi/software-engineering-intern-interviews-a-technical-journey-c2d003e50cbb",
  },
  {
    title: "Deploying Your React Portfolio",
    excerpt:
      "Learn how to deploy your React portfolio using GitHub Actions for continuous deployment.",
    date: "Jul 2024",
    publisher: "Medium",
    url: "https://medium.com/@thusalapi/how-i-deployed-my-portfolio-using-github-actions-0386722ad0b3",
  },
];

export function Writing() {
  return (
    <section id="writing" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="06"
          label="Writing"
          title="Notes & articles"
          description="Occasional write-ups on infrastructure, tooling, and the craft of software engineering."
        />

        <ul className="divide-y divide-border border-y border-border">
          {blogPosts.map((post) => (
            <li key={post.url}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid md:grid-cols-[10rem_1fr_auto] gap-x-10 gap-y-2 py-6"
              >
                <p className="font-mono text-xs text-muted-foreground pt-1">
                  {post.date} · {post.publisher}
                </p>
                <div className="space-y-1.5">
                  <h3 className="text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://medium.com/@thusalapi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          All posts on Medium
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
