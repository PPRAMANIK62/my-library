import { useReducedMotion as useFramerReducedMotion } from "framer-motion"

/**
 * House rule: every Framer Motion usage in this app must go through this
 * hook (directly, or via the <Reveal> wrapper) so that users with
 * `prefers-reduced-motion` get instant/near-instant transitions instead
 * of motion. Wraps framer-motion's own hook to normalize the initial
 * `null` (unknown-yet) value to `false`.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false
}
