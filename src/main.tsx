import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { RootLayout } from "@/routes/root-layout"
import { LibraryHome } from "@/routes/library-home"
import { BookToc } from "@/routes/book-toc"
import { Reader } from "@/routes/reader"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LibraryHome /> },
      { path: ":book", element: <BookToc /> },
      { path: ":book/:chunkId", element: <Reader /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  </StrictMode>,
)
