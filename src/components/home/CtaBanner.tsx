import Button from '@/components/ui/Button'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-forest py-20">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-sage/20" />
      <div className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-white/5" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Ready to grow something beautiful?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
          Start building your personalized garden today — it only takes a few minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/builder/plant"
            size="lg"
            className="bg-white text-forest hover:bg-mint"
          >
            Start Building
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/10"
          >
            Talk to Us First
          </Button>
        </div>
      </div>
    </section>
  )
}
