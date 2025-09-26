"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 id="experience-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
          Experience
        </h2>

        <div className="mt-6 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                IoT Lead — Project Cell CRCE
                <span className="block text-sm text-muted-foreground">
                  Fr. Conceicao Rodrigues College of Engineering, Mumbai • June 2025 – Present
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="grid gap-2">
                <li>Leading IoT initiatives and technical projects within the college’s council project cell</li>
                <li>Mentoring junior students in IoT development and hardware programming</li>
                <li>Coordinating between different technical teams for project execution</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Intern — Apraava Energy
                <span className="block text-sm text-muted-foreground">Rajkot, Gujarat • Jan 2025 – July 2025</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="grid gap-2">
                <li>
                  Assisted in the AMI (Advanced Metering Infrastructure) project, working on WFM, HES, and MDM platforms
                  for data validation, data entry, and inventory management
                </li>
                <li>
                  Gained end‑to‑end exposure to smart meter data flow through lab testing, field operations, and network
                  management
                </li>
                <li>Learned and applied corporate workflows and operational practices in the energy sector</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
