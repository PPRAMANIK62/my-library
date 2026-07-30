import { create } from "zustand"

/**
 * Whether the ⌘K command palette is open, lifted out of the component so
 * other UI (e.g. the reader's prev/next keyboard shortcuts) can check it
 * and avoid stealing keystrokes while the palette has focus.
 */
interface CommandMenuState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useCommandMenuStore = create<CommandMenuState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}))
