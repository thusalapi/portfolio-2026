'use client'

export function ContactFooter() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/thusalapi',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thusalapiyarisi',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/thusalapov',
      icon: 'twitter',
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/23903279/thusala-piyarisi',
      icon: 'stackoverflow',
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* CTA Section */}
        <div className="mb-20 bg-primary/5 border border-border rounded-2xl p-12 md:p-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-sm font-medium text-primary tracking-wide uppercase">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-foreground/70">
              Whether you're looking for a full-stack developer, need consultation, or want to collaborate on an exciting project, I'm always open to new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:thusalapi@gmail.com"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send an Email
              </a>
              <a
                href="https://calendly.com/thusalapi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Schedule a Call
              </a>
            </div>

            <p className="text-sm text-foreground/60 pt-4">
              I usually respond within 24 hours
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Thusala</h3>
              <p className="text-foreground/60 text-sm">
                Full-Stack Developer & Problem Solver from Sri Lanka
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary border border-border text-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon === 'github' && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 1.23c2.295-.315 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 002.856-3.915 10.019 10.019 0 01-2.8.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.948 4.948 0 00-8.506 4.513A14.025 14.025 0 011.671 3.149a4.844 4.844 0 001.532 6.61A4.955 4.955 0 011.456 9.59v.06c0 2.393 1.7 4.38 3.952 4.831a4.935 4.935 0 002.226.086 4.928 4.928 0 004.6 3.417A9.867 9.867 0 010 19.54a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === 'stackoverflow' && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.134v6.404h15.008zM6.111 19.731h7.778v-1.927H6.111v1.927zm.859-4.841h7.778v-1.927H6.97v1.927zm.859-4.843h7.778V8.217H7.829v1.83z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear} Thusala Piyarisi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://thusalapi.dev"
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                Website
              </a>
              <a
                href="mailto:thusalapi@gmail.com"
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                Email
              </a>
              <p className="text-sm text-foreground/60">
                Built with Next.js & React
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
