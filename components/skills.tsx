"use client"

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 id="skills-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
          Skills
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium">Programming Languages</h3>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
              <li>Java, Python, C, C++, JavaScript</li>
              <li>HTML, CSS, SQL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Cybersecurity</h3>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
              <li>Network Security, Ethical Hacking</li>
              <li>Vulnerability Assessment</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">IoT & Hardware</h3>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
              <li>Arduino IDE, Arduino Uno</li>
              <li>ESP32, ESP32‑CAM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium">Databases</h3>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
              <li>Firebase, MongoDB</li>
              <li>PostgreSQL, MySQL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Frameworks & Libraries</h3>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
              <li>React, Angular</li>
              <li>Java AWT</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Tools & OS</h3>
            <ul className="mt-2 text-sm text-muted-foreground grid gap-1">
              <li>OpenCV, Canva, Excel, Keil uVision</li>
              <li>Linux, Windows</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
