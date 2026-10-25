import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Publications } from '@/components/publications'
import { BlogAndTimeline } from '@/components/blog-timeline'
import { ContactFooter } from '@/components/contact-footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <BlogAndTimeline />
      <ContactFooter />
    </>
  )
}
