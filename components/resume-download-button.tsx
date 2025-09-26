import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"

type Props = {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  className?: string
  label?: string
}

export function ResumeDownloadButton({ variant = "default", className = "", label = "Download Resume" }: Props) {
  if (!profile.resumeUrl) return null

  return (
    <Button asChild variant={variant} className={className} aria-label="Download Resume (opens in a new tab)">
      <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </Button>
  )
}
