import SectionWrapper from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Tell us about your space, style preferences, and goals. We\'ll ask the right questions to understand exactly what you\'re looking for.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Customize',
    description:
      'Browse our curated plant selections and design styles. Mix and match to create a garden that\'s uniquely yours — we help at every step.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Enjoy',
    description:
      'Sit back while our team installs your dream garden. We\'ll handle ongoing maintenance too, so it stays beautiful year-round.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <SectionWrapper bg="white" id="how-it-works">
      <div className="text-center mb-16">
        <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">The Process</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal">
          Your garden in three simple steps
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-mint" style={{ left: '16.67%', right: '16.67%' }} />

        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center group">
            <div className="relative z-10 w-20 h-20 rounded-full bg-mint flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-white transition-all duration-300">
              {step.icon}
            </div>
            <div className="text-xs font-bold text-sage/60 uppercase tracking-widest mb-2">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">{step.title}</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
