import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <div>
      {/* Text section — sticky and transparent so image scrolls up behind it */}
      <section className="z-10 flex items-center justify-center portrait:bg-white landscape:sticky landscape:top-0 landscape:min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center pt-16 portrait:pt-24 portrait:pb-8">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-black/10 rounded-full px-4 py-2 mb-8">
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
            Answer a few questions about your style. We handle design, installation, and maintenance. You simply enjoy your garden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Image section — scrolls up behind the sticky text */}
      <section className="relative z-0 w-full aspect-video landscape:min-h-screen">
        <Image
          src="/images/hero.png"
          alt="Beautiful lush garden with colorful flowers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>
    </div>
  )
}
