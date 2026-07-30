import { create } from "zustand"
import { persist } from "zustand/middleware"

/**
 * Namespaced explicitly (not just "progress") so it doesn't collide with
 * whatever else ends up in localStorage as this app grows (theme uses its
 * own "library-app-theme" key; this one is scoped under the product name).
 */
const STORAGE_KEY = "reading-lamp/progress"

function progressKey(book: string, chunkId: string) {
  return `${book}:${chunkId}`
}

interface ProgressState {
  /** `${book}:${chunkId}` -> true, once a chunk has been visited. */
  readChunks: Record<string, true>
  /** book slug -> chunkId of the last chunk opened in that book. */
  lastOpened: Record<string, string>

  markRead: (book: string, chunkId: string) => void
  isRead: (book: string, chunkId: string) => boolean
  setLastOpened: (book: string, chunkId: string) => void
  /**
   * Convenience snapshot for one-off (non-reactive) reads, e.g. computing a
   * "Continue reading" href outside render. Components that need to
   * re-render as progress changes should select `readChunks` directly
   * (a plain selector call to this function won't subscribe them, since it
   * always returns the same function reference).
   */
  progressFor: (
    book: string,
    totalChunks: number,
  ) => { read: number; total: number }
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      readChunks: {},
      lastOpened: {},

      markRead: (book, chunkId) => {
        const key = progressKey(book, chunkId)
        set((state) =>
          state.readChunks[key]
            ? state
            : { readChunks: { ...state.readChunks, [key]: true } },
        )
      },

      isRead: (book, chunkId) =>
        Boolean(get().readChunks[progressKey(book, chunkId)]),

      setLastOpened: (book, chunkId) =>
        set((state) => ({
          lastOpened: { ...state.lastOpened, [book]: chunkId },
        })),

      progressFor: (book, totalChunks) => {
        const prefix = `${book}:`
        const read = Object.keys(get().readChunks).filter((key) =>
          key.startsWith(prefix),
        ).length
        return { read, total: totalChunks }
      },
    }),
    { name: STORAGE_KEY },
  ),
)
