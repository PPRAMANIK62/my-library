import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { EASE_OUT } from "@/lib/ease"

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds, for future list/grid entrances. */
  delay?: number
}

/**
 * Shared "enter" wrapper: a small fade + slight rise used for continuity
 * and wayfinding when a view mounts (e.g. the app shell on page load).
 * Not for decoration — keep usage to 1-2 elements per view.
 *
 * Respects prefers-reduced-motion via useReducedMotion(): reduced-motion
 * users get an instant, motionless mount instead.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.35, ease: EASE_OUT, delay }
      }
    >
      {children}
    </motion.div>
  )
}
