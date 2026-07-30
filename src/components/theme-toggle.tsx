import { AnimatePresence, motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { useTheme } from "@/hooks/use-theme"
import { EASE_OUT } from "@/lib/ease"

/**
 * Hand-built light/dark toggle (framer-motion + our own useTheme hook).
 *
 * beUI's registry ThemeToggle was tried first (bunx shadcn add
 * @beui/theme-toggle) and it did install cleanly, but it's built on
 * `next-themes` + the `motion` package — a second theme-state source and
 * a second animation library that would fight this app's hand-rolled
 * useTheme hook (which drives the exact :root / prefers-color-scheme /
 * .dark / .light token scheme this brief specifies). Per the brief's own
 * fallback, hand-building a simple toggle was the cleaner path.
 */
export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const reduceMotion = useReducedMotion()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="relative size-11 overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          className="flex items-center justify-center"
          initial={reduceMotion ? false : { opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: EASE_OUT }}
        >
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
