import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="glass mx-4 mb-4 rounded-2xl px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-foreground">Stablo</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A modern blog platform featuring premium content on lifestyle, technology, and personal growth.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Navigation</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Home
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Blog
                </Link>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Categories
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Categories</h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/categories/lifestyle"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Lifestyle
                </Link>
                <Link
                  href="/categories/technology"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Technology
                </Link>
                <Link
                  href="/categories/travel"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Travel
                </Link>
                <Link
                  href="/categories/personal-growth"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Personal Growth
                </Link>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Connect</h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-6 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Stablo. All rights reserved. Built with Next.js and love.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
