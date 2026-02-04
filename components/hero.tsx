'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen pt-24 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div
          className={`space-y-4 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm md:text-base font-medium text-primary tracking-wide uppercase">
            Full-Stack Developer & Problem Solver
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Transform Ideas into Elegant Solutions
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            I build scalable, user-centric applications that drive business success. Specialized in modern web development, microservices architecture, and creating seamless digital experiences from concept to deployment.
          </p>
        </div>

        <div
          className={`flex gap-4 justify-center transition-all duration-1000 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="mailto:thusalapi@gmail.com"
            className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div
          className={`pt-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-foreground/60 mt-2">Projects Shipped</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">3+</p>
              <p className="text-sm text-foreground/60 mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">700+</p>
              <p className="text-sm text-foreground/60 mt-2">Participants Beaten</p>
            </div>
          </div>
        </div>

        <div
          className={`pt-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg
            className="w-6 h-6 mx-auto text-foreground/40 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
