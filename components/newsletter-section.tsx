import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Stay in the Loop</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get the latest articles, insights, and exclusive content delivered straight to your inbox. Join our
                community of curious minds.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="glass border-white/20 focus:border-primary/50"
                />
                <Button className="shrink-0 group">
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Weekly digest</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Exclusive content</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Early access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
