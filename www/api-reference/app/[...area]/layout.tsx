import SidebarProvider from "@/providers/sidebar"
import Sidebar from "@/components/Sidebar"
import clsx from "clsx"
import "../../css/globals.css"
import BaseSpecsProvider from "@/providers/base-specs"
import Navbar from "@/components/Navbar"
import ColorModeProvider from "@/providers/color-mode"
import { Inter } from "next/font/google"
import { Roboto_Mono } from "next/font/google"

export const metadata = {
  title: "Medusa API Reference",
  description: "Check out Medusa's API reference",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx("h-full w-full")}>
      <body
        className={clsx(
          inter.variable,
          robotoMono.variable,
          "bg-docs-bg dark:bg-docs-bg-dark font-base text-body-regular h-full w-full",
          "text-medusa-text-subtle dark:text-medusa-text-subtle-dark"
        )}
      >
        <ColorModeProvider>
          <BaseSpecsProvider>
            <SidebarProvider>
              <div>
                <Navbar />
                <div className="xl:min-w-xl mx-auto flex w-full max-w-xl">
                  <Sidebar />
                  <main className="lg:w-api-ref-main relative w-full flex-1 pl-2">
                    {children}
                    <div className="bg-docs-bg-surface dark:bg-docs-bg-surface-dark w-api-ref-code absolute top-0 right-0 z-0 h-full"></div>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          </BaseSpecsProvider>
        </ColorModeProvider>
      </body>
    </html>
  )
}
