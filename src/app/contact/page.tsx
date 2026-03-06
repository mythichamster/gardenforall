import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — GardenForAll',
  description: 'Get in touch with GardenForAll for personalized garden design in the San Francisco Bay Area.',
}

const serviceAreas = [
  'Palo Alto', 'Menlo Park', 'Mountain View', 'Sunnyvale',
  'San Jose', 'Cupertino', 'Los Altos', 'Santa Clara',
]

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">Let's Talk</p>
          <h1 className="text-4xl font-semibold text-charcoal mb-4">Get in Touch</h1>
          <p className="text-charcoal/60 max-w-md mx-auto">
            Have questions or ready to start? We'd love to hear about your space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm">
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-3">Email Us</h3>
              <a
                href="mailto:support@gardenforall.com"
                className="text-forest text-sm hover:underline"
              >
                support@gardenforall.com
              </a>
              <p className="text-charcoal/50 text-xs mt-2">We respond within 1 business day</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-3">Service Area</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="bg-mint text-forest text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-charcoal/50 text-xs mt-3">
                Don't see your city? Reach out — we may still be able to help.
              </p>
            </div>

            <div className="bg-forest rounded-3xl p-6 text-white">
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-white/70 text-sm">
                Your initial design consultation is completely free — no pressure, no obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
