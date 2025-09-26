"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export function ProjectsGrid() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 id="projects-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
            Selected Projects
          </h2>
          <a href="https://github.com/ManglamX" className="text-sm text-primary hover:underline">
            All repos →
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.slug} className="flex flex-col overflow-hidden">
              <div className="relative h-44 w-full border-b">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex items-center gap-2">
                  {p.demo && (
                    <Button asChild size="sm">
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {p.repo && (
                    <Button asChild variant="outline" size="sm">
                      <a href={p.repo} target="_blank" rel="noopener noreferrer">
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
