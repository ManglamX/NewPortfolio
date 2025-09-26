import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/data/profile"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <Card>
          <CardHeader>
            <CardTitle id="contact-title" className="text-2xl tracking-tight">
              Get in touch
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>I’m open to collaboration and new opportunities. The fastest way to reach me is by email or phone.</p>
            <ul className="mt-4 grid gap-2">
              <li>
                <a className="text-primary hover:underline" href="mailto:ecs.crce.10127@gmail.com">
                  ecs.crce.10127@gmail.com
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href="tel:+918052615183">
                  +91 8052615183
                </a>
              </li>
              <li className="text-muted-foreground">Mumbai, Maharashtra</li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://www.linkedin.com/in/manglam-jaiswal-0b2822290"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              {profile.resumeUrl ? (
                <li>
                  <a
                    className="text-primary hover:underline"
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume (opens in a new tab)"
                  >
                    Download Resume
                  </a>
                </li>
              ) : null}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
