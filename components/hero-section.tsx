import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative px-4 pt-20 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  ✨ Welcome to Stablo
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Stories That
                  <span className="text-primary"> Inspire</span> and
                  <span className="text-secondary"> Transform</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Discover premium content on lifestyle, technology, and personal growth. Join thousands of readers who
                  trust Stablo for insightful articles and expert perspectives.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Reading
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group bg-transparent">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">200+</div>
                  <div className="text-sm text-muted-foreground">Articles Published</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Expert Writers</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="glass rounded-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sI3K9AhBcvkWZ9KWPnAOVvDfPttS16.png"
                  alt="Featured article preview"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-bounce">
                <div className="text-2xl">📚</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 animate-pulse">
                <div className="text-2xl">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
