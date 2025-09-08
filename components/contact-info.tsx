import { MapPin, Mail, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Stablo</h2>
        <p className="text-muted-foreground leading-relaxed">
          Have something to say? We are here to help. Fill up the form or send email or call phone.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
      
          <div>
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-muted-foreground">1734 Sanfransico, CA 93063</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
  
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-muted-foreground">hello@stablotemplate.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">

          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <p className="text-muted-foreground">+1 (987) 4587 899</p>
          </div>
        </div>
      </div>
    </div>
  )
}
