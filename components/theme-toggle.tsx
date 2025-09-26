'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const currentTheme = theme === 'system' ? resolvedTheme : theme

  function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      aria-label="Toggle theme"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      {currentTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}


