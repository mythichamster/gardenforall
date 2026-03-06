'use client'

import { useState } from 'react'
import { faqs } from '@/lib/data/faqs'

const categories = ['General', 'Pricing', 'Installation', 'Maintenance']

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = faqs.filter((f) => f.category === activeCategory)

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat)
              setOpenIndex(0)
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-forest text-white shadow-sm'
                : 'bg-white text-charcoal/60 hover:bg-mint hover:text-forest border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {filtered.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium text-charcoal">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-sage flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6 text-sm text-charcoal/60 leading-relaxed border-t border-gray-50 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
