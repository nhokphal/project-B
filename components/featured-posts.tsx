import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredPosts = [
  {
    id: 1,
    title: "Lessons Of Happiness I learned from a Mountain Village",
    excerpt:
      "Discovering life's simple pleasures and profound wisdom through the lens of rural mountain community living.",
    category: "TRAVEL",
    categoryColor: "bg-orange-500 text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bIewq4pyllS7pd0gUiPmTg0kqRZKlE.png",
    author: {
      name: "Joshua Wood",
      avatar: "/thoughtful-man.png",
    },
    date: "September 25, 2022",
    readTime: "8 min read",
    slug: "mountain-village-happiness",
  },
  {
    id: 2,
    title: "There's Nothing New About Undermining Women's Autonomy",
    excerpt:
      "Exploring the historical patterns and modern manifestations of challenges to women's independence and decision-making power.",
    category: "LIFESTYLE",
    categoryColor: "bg-purple-500 text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bIewq4pyllS7pd0gUiPmTg0kqRZKlE.png",
    author: {
      name: "Erika Oliver",
      avatar: "/diverse-woman-portrait.png",
    },
    date: "September 23, 2022",
    readTime: "6 min read",
    slug: "undermining-womens-autonomy",
  },
  {
    id: 3,
    title: "Escape Fantasies of the Tech Billionaires",
    excerpt:
      "An in-depth look at how technology leaders envision the future and their plans for humanity's next chapter.",
    category: "TECHNOLOGY",
    categoryColor: "bg-blue-500 text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bIewq4pyllS7pd0gUiPmTg0kqRZKlE.png",
    author: {
      name: "Erika Oliver",
      avatar: "/diverse-woman-portrait.png",
    },
    date: "September 21, 2022",
    readTime: "12 min read",
    slug: "tech-billionaire-fantasies",
  },
  {
    id: 4,
    title: "Architectural Engineering Wonders of the modern era for your Inspiration",
    excerpt: "Exploring cutting-edge architectural designs that push the boundaries of engineering and creativity.",
    category: "TECHNOLOGY",
    categoryColor: "bg-blue-500 text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0O00G55sSvzV38XoFADdid4rSUdBXj.png",
    author: {
      name: "Mario Sanchez",
      avatar: "/thoughtful-man.png",
    },
    date: "October 21, 2022",
    readTime: "10 min read",
    slug: "architectural-engineering-wonders",
  },
  {
    id: 5,
    title: "5 Effective Brain Recharging Activities No One is Talking About",
    excerpt:
      "Discover lesser-known methods to refresh your mind and boost cognitive performance in our fast-paced world.",
    category: "LIFESTYLE",
    categoryColor: "bg-purple-500 text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0O00G55sSvzV38XoFADdid4rSUdBXj.png",
    author: {
      name: "Joshua Wood",
      avatar: "/thoughtful-man.png",
    },
    date: "October 21, 2022",
    readTime: "7 min read",
    slug: "brain-recharging-activities",
  },
  {
    id: 6,
    title: "I Moved Across the Country and Never Looked Back",
    excerpt: "A personal journey of transformation, courage, and finding home in unexpected places.",
    category: "TRAVEL",
    categoryColor: "bg-orange-500 text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wW7t1HE3De2wiSoEsf2E3kcHyyd4vT.png",
    author: {
      name: "Joshua Wood",
      avatar: "/thoughtful-man.png",
    },
    date: "October 19, 2022",
    readTime: "9 min read",
    slug: "moved-across-country",
  },
]

export function FeaturedPosts() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="bg-white group-hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-200 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-4 space-y-3 flex-1">
                  <div className="text-xs font-semibold tracking-wide uppercase">
                    <span
                      className={`${
                        post.category === "TRAVEL"
                          ? "text-orange-500"
                          : post.category === "LIFESTYLE"
                            ? "text-purple-500"
                            : post.category === "PERSONAL GROWTH"
                              ? "text-teal-600"
                              : "text-blue-500"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-black text-balance leading-tight group-hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center space-x-2 pt-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback className="bg-gray-200 text-black text-xs">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-xs">
                      <span className="font-medium text-black">{post.author.name}</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/blog">
            <Button
              variant="outline"
              size="default"
              className="group bg-white border-gray-300 text-black hover:bg-gray-50 px-6 py-2 rounded-md font-medium"
            >
              View all Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
