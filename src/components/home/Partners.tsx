import SectionWrapper from '@/components/ui/SectionWrapper'

export default function Partners() {
  return (
    <SectionWrapper bg="white">
      <div className="text-center">
        <p className="text-charcoal/40 text-sm uppercase tracking-widest mb-8">
          Trusted by enterprise partners
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-charcoal/60 font-lexend">
              INTERO
            </span>
            <span className="text-xs text-charcoal/30">Real Estate Services</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-charcoal/60">
              B<span className="text-lg">W</span>
            </span>
            <span className="text-xs text-charcoal/30">Design & Architecture</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
