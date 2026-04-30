'use client'

import { useState, useEffect, useCallback } from 'react'
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
    text: "We have a small condo balcony and thought we couldn't have a real garden. The container garden they designed is stunning — lush, colorful, and totally manageable.",
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
        <svg key={i} className="w-4 h-4 text-charcoal fill-charcoal" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4 h-full">
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
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = useCallback(() => setCurrent((i) => (i + 1) % testimonials.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <SectionWrapper bg="mint" id="testimonials">
      <div className="text-center mb-16">
        <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">Happy Gardeners</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal">
          What our customers say
        </h2>
      </div>

      {/* Mobile: single-card carousel */}
      <div className="md:hidden">
        <div className="relative max-w-sm mx-auto">
          <TestimonialCard t={testimonials[current]} />
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-mint transition-colors"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-mint transition-colors"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-charcoal' : 'bg-charcoal/25'}`}
            />
          ))}
        </div>
      </div>

      {/* Tablet+: all cards in a row */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </SectionWrapper>
  )
}
