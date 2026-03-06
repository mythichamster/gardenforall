'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

const serviceAreas = [
  'Palo Alto', 'Menlo Park', 'Mountain View', 'San Jose',
  'Sunnyvale', 'Cupertino', 'Los Altos', 'Other Bay Area',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-2">Message received!</h3>
        <p className="text-charcoal/60">We'll be in touch within 1 business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(650) 555-0100"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
          />
        </div>
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-charcoal mb-1.5">
            Your City *
          </label>
          <select
            id="area"
            name="area"
            required
            value={form.area}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
          >
            <option value="">Select your city…</option>
            {serviceAreas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
        >
          <option value="">Select a service…</option>
          <option value="garden-bed">Garden Bed</option>
          <option value="container">Container Garden</option>
          <option value="maintenance">Ongoing Maintenance</option>
          <option value="unsure">Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your space and what you're hoping to create…"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition resize-none"
        />
      </div>

      <Button type="submit" fullWidth size="lg">
        Send Message
      </Button>
    </form>
  )
}
