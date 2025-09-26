"use client"

export function Activities() {
  return (
    <section id="activities" aria-labelledby="activities-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 id="activities-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
          Achievements & Activities
        </h2>
        <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
          <li>IDFC First Bank Scholarship Recipient — Awarded Rs. 1 Lakh for academic excellence</li>
          <li>Walk In Pitch 100X.VC 2024 — Successfully pitched MistVision Project at startup competition</li>
          <li>Active participant in college technical events, hackathons, and competitions</li>
          <li>Member of Project Cell CRCE with focus on IoT development and innovation</li>
          <li>Contributed to projects with practical applications in Full‑stack, IoT, and Cybersecurity</li>
        </ul>
      </div>
    </section>
  )
}
