import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProjectsGrid } from "@/components/projects-grid"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Activities } from "@/components/activities"

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-3 py-2 rounded-md"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="min-h-dvh">
        <Hero />
        <About />
        <Skills />
        <ProjectsGrid />
        <Experience />
        <Education />
        <Activities />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
