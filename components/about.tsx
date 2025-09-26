export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 id="about-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
          About
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6 md:gap-8">
          <p className="leading-relaxed text-muted-foreground">
            I’m a third-year Bachelor of Engineering student at Fr. Conceicao Rodrigues College of Engineering,
            specializing in Electronics and Computer Science with Honors in Cybersecurity. I have a strong interest in
            full-stack development, cybersecurity, and the Internet of Things (IoT). Currently, I serve as the IoT Lead
            at our college club, Project Cell, where I guide and contribute to tech-driven projects focused on solving
            real-world problems. I’ve also completed an internship at Apraava Energy, where I gained practical exposure
            to industry practices and enhanced my technical and problem-solving skills. I thrive in collaborative
            environments and am always eager to take on new challenges, learn continuously, and grow as a developer and
            innovator.
          </p>
          <ul className="grid gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> Full‑stack (React, Angular, JS/TS)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> Cybersecurity (Network, VA, EH)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> IoT & Hardware (ESP32/Arduino)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> Databases (Firebase, MongoDB, SQL)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
