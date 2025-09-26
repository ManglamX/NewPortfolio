"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 id="hero-title" className="text-pretty text-3xl md:text-5xl font-semibold tracking-tight">
              Hi, I'm{" "}
              <span className="text-primary">Manglam Jaiswal</span>
            </h1>
            <div className="mt-4 space-y-2">
              <p className="text-xl text-muted-foreground font-medium">
                Full Stack Developer · Cybersecurity · IoT & Data Science
              </p>
              <p className="text-lg text-muted-foreground">
                B.E. Electronics & Computer Science (Cybersecurity Honors)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Third‑year at Fr. Conceicao Rodrigues College of Engineering. IoT Lead at Project Cell. I build
                secure, data‑driven products with experience from Apraava Energy.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="#projects">See Projects</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact" aria-label="Contact Manglam">
                  Contact
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border">
              <Image
                src="/portrait-of-manglam-jaiswal.jpg"
                alt="Portrait of Manglam Jaiswal"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
