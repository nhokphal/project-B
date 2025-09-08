"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    // Handle success/error states here
  }

  return (
    <Card className="glass-strong border-0">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              required
              className="glass border-white/20 focus:border-primary/50 h-12"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email Address"
              required
              className="glass border-white/20 focus:border-primary/50 h-12"
            />
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              required
              rows={6}
              className="glass border-white/20 focus:border-primary/50 resize-none"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base group">
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
