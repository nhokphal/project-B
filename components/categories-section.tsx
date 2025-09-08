import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Compass, Laptop, Heart, Plane } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Wellness, relationships, and living your best life",
    icon: Heart,
    count: 24,
    color: "text-black",
    bgColor: "bg-purple-100",
  },
  {
    name: "Technology",
    slug: "technology",
    description: "Latest trends, reviews, and tech insights",
    icon: Laptop,
    count: 18,
    color: "text-black",
    bgColor: "bg-blue-100",
  },
  {
    name: "Travel",
    slug: "travel",
    description: "Adventures, destinations, and travel tips",
    icon: Plane,
    count: 15,
    color: "text-black",
    bgColor: "bg-orange-100",
  },
  {
    name: "Personal Growth",
    slug: "personal-growth",
    description: "Self-improvement, mindfulness, and development",
    icon: Compass,
    count: 21,
    color: "text-black",
    bgColor: "bg-green-100",
  },
]

export function CategoriesSection() {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Explore Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into topics that matter to you. From lifestyle tips to tech insights, we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <Card className="glass group hover:glass-strong transition-all duration-300 hover:scale-105 border-0 text-center">
                  <CardContent className="p-6 space-y-4">
                    <div
                      className={`inline-flex p-3 rounded-2xl ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                    </div>

                    <Badge variant="secondary" className="text-xs">
                      {category.count} articles
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
