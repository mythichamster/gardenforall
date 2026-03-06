import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=1920&q=80"
          alt="Beautiful lush garden with colorful flowers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-sm font-medium">Serving the San Francisco Bay Area</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6">
          Transform Your Outdoor
          <br />
          <span className="text-sage">Space Into a Garden</span>
          <br />
          You'll Love
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          We handle the design, installation, and maintenance — you simply enjoy a stunning garden tailored to your space and style.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/builder/plant?type=garden-bed" size="lg">
            Build a Garden Bed
          </Button>
          <Button href="/builder/plant?type=container" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-forest">
            Build a Container Garden
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
