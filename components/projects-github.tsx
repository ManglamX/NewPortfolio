"use client"

import useSWR from "swr"

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function ProjectsGithub({ username = "ManglamX" }: { username?: string }) {
  const { data, error, isLoading } = useSWR<Repo[]>(
    username ? `https://api.github.com/users/${username}/repos?per_page=12&sort=updated` : null,
    fetcher,
  )

  if (error) return null

  return (
    <div>
      <h3 className="text-xl font-semibold">More from GitHub</h3>
      {isLoading && <p className="mt-3 text-muted-foreground">Loading repositories…</p>}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border p-5 hover:bg-muted transition"
          >
            <h4 className="font-medium">{repo.name}</h4>
            {repo.language && <p className="text-sm text-muted-foreground mt-1">{repo.language}</p>}
            {repo.description && <p className="mt-2 text-sm">{repo.description}</p>}
          </a>
        ))}
      </div>
    </div>
  )
}
