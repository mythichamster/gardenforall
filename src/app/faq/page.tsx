import type { Metadata } from 'next'
import FaqAccordion from '@/components/faq/FaqAccordion'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'FAQs — GardenForAll',
  description: 'Answers to common questions about GardenForAll garden design, installation, pricing, and maintenance services.',
}

export default function FaqPage() {
  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">Support</p>
          <h1 className="text-4xl font-semibold text-charcoal mb-4">Frequently Asked Questions</h1>
          <p className="text-charcoal/60">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-forest font-medium hover:underline">
              Reach out to us directly.
            </a>
          </p>
        </div>

        <FaqAccordion />

        {/* CTA */}
        <div className="mt-16 text-center bg-mint rounded-3xl p-10">
          <h2 className="text-2xl font-semibold text-charcoal mb-3">Still have questions?</h2>
          <p className="text-charcoal/60 mb-6">Our team is happy to help you find the perfect garden solution.</p>
          <Button href="/contact">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
