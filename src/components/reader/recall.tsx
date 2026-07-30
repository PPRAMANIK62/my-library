import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useId, useState, type ReactNode } from "react"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { EASE_OUT } from "@/lib/ease"

interface RecallProps {
  question: ReactNode
  children: ReactNode
}

/**
 * Retrieval-practice block: poses a question, hides the answer behind an
 * animated disclosure toggle (button + aria-expanded/aria-controls, so it
 * stays keyboard/screen-reader accessible like the native <details> it replaces).
 */
export function Recall({ question, children }: RecallProps) {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const contentId = useId()

  return (
    <div className="my-6 rounded-lg border border-dashed border-border px-5 py-4">
      <div className="font-sans text-sm font-bold text-foreground">
        Quick recall
      </div>
      <div className="mt-2 font-serif text-base leading-relaxed text-foreground [&_p]:my-2 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
        {question}
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((prev) => !prev)}
        className="mt-3 flex cursor-pointer items-center gap-1.5 font-sans text-sm font-medium text-accent select-none"
      >
        <motion.span
          className="flex"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: EASE_OUT }}
        >
          <ChevronRight className="size-4" />
        </motion.span>
        {open ? "Hide answer" : "Reveal answer"}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="mt-2 border-t border-border pt-3 font-serif text-base leading-relaxed text-muted-foreground [&_p]:my-2 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
