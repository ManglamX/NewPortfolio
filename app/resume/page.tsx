import { AboutResume } from "@/components/about-resume"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { ProjectsCurated } from "@/components/projects-curated"
import { ProjectsGithub } from "@/components/projects-github"
import { Activities } from "@/components/activities"
import { ContactDetails } from "@/components/contact-details"
import { HeroResume } from "@/components/hero-resume"

export default function ResumePage() {
  return (
    <main className="min-h-dvh">
      <HeroResume />
      <section id="about" className="container mx-auto px-4 py-12">
        <AboutResume />
      </section>

      <section id="skills" className="container mx-auto px-4 py-12">
        <Skills />
      </section>

      <section id="experience" className="container mx-auto px-4 py-12">
        <Experience />
      </section>

      <section id="education" className="container mx-auto px-4 py-12">
        <Education />
      </section>

      <section id="projects" className="container mx-auto px-4 py-12">
        <ProjectsCurated />
        <div className="mt-12">
          <ProjectsGithub username="ManglamX" />
        </div>
      </section>

      <section id="activities" className="container mx-auto px-4 py-12">
        <Activities />
      </section>

      <section id="contact" className="container mx-auto px-4 py-12">
        <ContactDetails />
      </section>
    </main>
  )
}
