import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/components/query-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Removed next/font/google usage for "Geist" (not a Google font).
// Using CSS font stacks defined in globals instead.

export const metadata: Metadata = {
  title: {
    default: "Stablo - Modern Blog Platform",
    template: "%s | Stablo",
  },
  description:
    "A modern, responsive blog platform built with Next.js, featuring glassmorphism design and premium content.",
  keywords: ["blog", "lifestyle", "technology", "personal growth", "modern design"],
  authors: [{ name: "Stablo Team" }],
  creator: "Stablo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stablo.vercel.app",
    title: "Stablo - Modern Blog Platform",
    description:
      "A modern, responsive blog platform built with Next.js, featuring glassmorphism design and premium content.",
    siteName: "Stablo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stablo - Modern Blog Platform",
    description:
      "A modern, responsive blog platform built with Next.js, featuring glassmorphism design and premium content.",
    creator: "@stablo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <QueryProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
