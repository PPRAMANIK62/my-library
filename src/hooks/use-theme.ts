import { useCallback, useEffect, useState } from "react"

export type Theme = "light" | "dark" | "system"

const STORAGE_KEY = "library-app-theme"

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system"
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return isTheme(stored) ? stored : "system"
}

function systemPrefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
}

/**
 * Applies the resolved theme to <html>.
 *
 * "system" removes any explicit class so the plain CSS
 * `prefers-color-scheme` media query in index.css decides the look.
 * "light" / "dark" add an explicit class that overrides it — this is
 * what the theme toggle sets, and it's what gets persisted.
 */
function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove("dark", "light")
  if (theme !== "system") root.classList.add(theme)
}

/**
 * Reading Lamp theme state: system-preference-aware, manually overridable,
 * persisted to localStorage. Dark is the product's primary/default-feel
 * mode, but the toggle can force either mode explicitly.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Keep in sync if the OS theme changes while "system" is selected.
  useEffect(() => {
    if (theme !== "system") return
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => applyTheme("system")
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleTheme = useCallback(() => {
    const isDark = theme === "dark" || (theme === "system" && systemPrefersDark())
    setTheme(isDark ? "light" : "dark")
  }, [theme, setTheme])

  const resolvedTheme: "light" | "dark" =
    theme === "system" ? (systemPrefersDark() ? "dark" : "light") : theme

  return { theme, resolvedTheme, setTheme, toggleTheme }
}
