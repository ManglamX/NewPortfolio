"use client"

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 id="education-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
          Education
        </h2>

        <div className="mt-6 grid gap-6">
          <div>
            <h3 className="font-medium">Bachelor of Engineering — Electronics & Computer Science</h3>
            <p className="text-sm text-muted-foreground">
              Fr. Conceicao Rodrigues College of Engineering (MU) • Expected 2027
            </p>
            <p className="text-sm text-muted-foreground">Honors in Cybersecurity • Expected 2027</p>
          </div>

          <div>
            <h3 className="font-medium">Higher Secondary Certificate (HSC)</h3>
            <p className="text-sm text-muted-foreground">St. Michael’s Convent School • 2021 – 2023</p>
          </div>

          <div>
            <h3 className="font-medium">Secondary School Certificate (SSC)</h3>
            <p className="text-sm text-muted-foreground">Fatima School • 2009 – 2021</p>
          </div>
        </div>
      </div>
    </section>
  )
}
