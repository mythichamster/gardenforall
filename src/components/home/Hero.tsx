import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[55vh] sm:min-h-[70vh] lg:min-h-screen flex items-start justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Beautiful lush garden with colorful flowers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/50 lg:hidden" />
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-40 lg:pt-72">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 mb-8">
          <span className="text-sm font-medium text-charcoal">Serving the San Francisco Bay Area</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-loose mb-6 text-charcoal">
          Beautiful gardens
          <br />
          <span className="text-sage">Without the overwhelm</span>
          <br />
          Or the sticker shock
        </h1>

        <p className="text-lg sm:text-xl text-charcoal max-w-2xl mx-auto mb-10">
          Answer a few questions about your style. We handle design, installation, and a full year of care so it stays alive — guaranteed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
