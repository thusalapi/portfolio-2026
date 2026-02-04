"use client";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - About text */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Building for Impact
              </h2>
            </div>

            <p className="text-base text-foreground/70 leading-relaxed">
              I'm a full-stack developer from Sri Lanka with a passion for
              solving complex problems through elegant code. My journey in
              software engineering began in 2022 at SLIIT, and I've since
              developed expertise across modern web technologies, microservices
              architecture, and scalable systems.
            </p>

            <p className="text-base text-foreground/70 leading-relaxed">
              At Rootcode, I contribute to enterprise-level software solutions
              while continuously exploring new technologies. I believe that
              great software combines technical excellence with thoughtful user
              experience design—every line of code should have purpose.
            </p>

            <p className="text-base text-foreground/70 leading-relaxed">
              Beyond coding, I'm competitive by nature. I've participated in
              hackathons and coding competitions. This mindset drives me to ship
              quality work, think innovatively, and lead teams effectively.
            </p>
          </div>

          {/* Right side - Skills & Experience */}
          <div className="space-y-8">
            {/* Core Competencies */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "Microservices",
                  "Web Development",
                  "Problem Solving",
                  "Team Leadership",
                  "Startup Strategy",
                  "Digital Marketing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground/80 rounded-full text-sm font-medium border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Tech Stack
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">
                    Frontend
                  </p>
                  <p className="text-foreground">React, Three.js, Next.js</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">
                    Backend
                  </p>
                  <p className="text-foreground">
                    Node.js, Nest.js, Java, Spring Boot
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">
                    Databases
                  </p>
                  <p className="text-foreground">MongoDB, MySQL, PostgreSQL</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">
                    Other
                  </p>
                  <p className="text-foreground">Docker, Microservices, AWS</p>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="p-4 bg-primary/5 border border-border rounded-lg">
              <p className="text-sm font-medium text-primary mb-1">
                Current Role
              </p>
              <p className="text-foreground font-semibold">
                Associate Software Engineer @ Rootcode
              </p>
              <p className="text-foreground/60 text-sm mt-1">
                Enterprise-level software solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
