type Project = {
  name: string
  description: string
  bullets: string[]
  tech?: string[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    name: "FixLit – Smart Lighting Control System",
    description: "Energy-saving IoT solution using ESP32-CAM and OpenCV for automated lighting control.",
    bullets: [
      "App-based control with customizable presets (Warm, Cool, Relaxed modes)",
      "Integrated computer vision for ambient light detection/adjustment with security protocols",
    ],
    tech: ["ESP32-CAM", "OpenCV", "IoT", "Computer Vision"],
    // link: "https://github.com/ManglamX/fixlit" // add actual link if available
  },
  {
    name: "Alumni Website Development",
    description: "Dynamic website for Electronics Engineering batch of 1999 alumni with profiles, search, and events.",
    bullets: ["Profile management and search functionality", "Event management system"],
    tech: ["HTML", "CSS", "JavaScript", "ReactJS", "AngularJS"],
    // link: "https://..." // add actual URL
  },
  {
    name: "Alcohol Detection and Accident Prevention System",
    description: "Safety system with automated motor shutdown on alcohol detection.",
    bullets: ["Firebase for data logging and automated email alerts", "Practical IoT application in automotive safety"],
    tech: ["Arduino", "Firebase", "Email Alerts"],
  },
  {
    name: "Bluetooth-Controlled Robotic Car",
    description: "Arduino Uno and ESP32-based robotic vehicle with Bluetooth connectivity.",
    bullets: ["Wireless control interface for remote operation"],
    tech: ["Arduino Uno", "ESP32", "Bluetooth"],
  },
  {
    name: "Voice-Controlled Lighting Automation",
    description: "Automated project room lighting system with voice command integration.",
    bullets: ["Mobile app interface for manual backup", "IoT + Voice recognition"],
    tech: ["IoT", "Voice Recognition", "Mobile App"],
  },
]

export function ProjectsCurated() {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-semibold">Projects (Selected)</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <article key={p.name} className="rounded-lg border p-5">
            <header className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.tech && <p className="mt-1 text-sm text-muted-foreground">{p.tech.join(" · ")}</p>}
              </div>
              {p.link ? (
                <a href={p.link} className="text-sm underline underline-offset-4" target="_blank" rel="noreferrer">
                  View
                </a>
              ) : null}
            </header>
            <p className="mt-3">{p.description}</p>
            <ul className="mt-3 list-disc pl-5 leading-relaxed">
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
