export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Manglam Jaiswal. All rights reserved.</p>
        <p className="text-muted-foreground">Built with Next.js & Tailwind</p>
      </div>
    </footer>
  )
}
