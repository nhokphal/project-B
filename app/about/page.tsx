import type { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Stablo and our mission to create meaningful content.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Stablo</h1>
        <p className="text-xl text-foreground/70 text-pretty">
          We are here to help you discover meaningful stories and insights.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        <Card className="glass p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            At Stablo, we believe in the power of storytelling to inspire, educate, and connect people. Our platform
            brings together diverse voices and perspectives on lifestyle, technology, and personal growth.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            We curate high-quality content that matters, helping our readers navigate the complexities of modern life
            with wisdom and clarity.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass p-6">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Content</h3>
            <p className="text-foreground/70 leading-relaxed">
              Every article is carefully crafted and reviewed to ensure it provides real value to our readers.
            </p>
          </Card>

          <Card className="glass p-6">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Diverse Perspectives</h3>
            <p className="text-foreground/70 leading-relaxed">
              We feature writers from different backgrounds to bring you varied insights and experiences.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
