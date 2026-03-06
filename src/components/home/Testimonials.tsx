import SectionWrapper from '@/components/ui/SectionWrapper'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Palo Alto, CA',
    rating: 5,
    text: 'GardenForAll completely transformed our backyard. The design process was fun and collaborative — they really listened to what we wanted. Our garden is now the envy of the neighborhood!',
    initials: 'SM',
  },
  {
    name: 'James L.',
    location: 'Menlo Park, CA',
    rating: 5,
    text: 'We have a small condo balcony and thought we couldn\'t have a real garden. The container garden they designed is stunning — lush, colorful, and totally manageable.',
    initials: 'JL',
  },
  {
    name: 'Priya K.',
    location: 'Mountain View, CA',
    rating: 5,
    text: 'The team was professional, on time, and incredibly knowledgeable. They suggested native plants I never would have thought of and the result looks amazing all year long.',
    initials: 'PK',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <SectionWrapper bg="mint" id="testimonials">
      <div className="text-center mb-16">
        <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">Happy Gardeners</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal">
          What our customers say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4"
          >
            <Stars count={t.rating} />
            <p className="text-charcoal/70 text-sm leading-relaxed flex-1">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal">{t.name}</div>
                <div className="text-xs text-charcoal/50">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
