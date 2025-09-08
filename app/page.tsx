import { HeroSection } from "@/components/hero-section"
import { FeaturedPosts } from "@/components/featured-posts"
import { CategoriesSection } from "@/components/categories-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturedPosts />
      <CategoriesSection />
      <NewsletterSection />
    </div>
  )
}
