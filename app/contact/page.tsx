import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Stablo team. We are here to help with any questions or feedback.",
}

export default function ContactPage() {
  return (
    <div className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">We are here to help.</p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
