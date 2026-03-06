'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import StepProgress from './StepProgress'
import PlantCard from './PlantCard'
import Button from '@/components/ui/Button'
import { plants } from '@/lib/data/plants'

type GardenType = 'garden-bed' | 'container' | ''
type GardenStyle = 'Colorful' | 'Minimalist' | 'Native' | 'Edible' | ''

const STEPS = ['Garden Type', 'Style', 'Plants', 'Request']

const gardenTypes = [
  {
    id: 'garden-bed' as GardenType,
    label: 'Garden Bed',
    description: 'Raised beds or in-ground plantings for yards and outdoor spaces.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    id: 'container' as GardenType,
    label: 'Container Garden',
    description: 'Perfect for patios, balconies, and entryways — no yard needed.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
]

const gardenStyles = [
  { id: 'Colorful' as GardenStyle, label: 'Colorful', emoji: '🌸', description: 'Bold, vibrant blooms in a mix of colors.' },
  { id: 'Minimalist' as GardenStyle, label: 'Minimalist', emoji: '🌿', description: 'Clean lines, muted tones, architectural plants.' },
  { id: 'Native' as GardenStyle, label: 'Native', emoji: '🌾', description: 'California natives, drought-tolerant, low-maintenance.' },
  { id: 'Edible' as GardenStyle, label: 'Edible', emoji: '🍅', description: 'Vegetables, herbs, and fruits you can harvest.' },
]

export default function BuilderWizard() {
  const searchParams = useSearchParams()
  const initialType = (searchParams.get('type') as GardenType) || ''

  const [step, setStep] = useState(initialType ? 1 : 0)
  const [gardenType, setGardenType] = useState<GardenType>(initialType)
  const [style, setStyle] = useState<GardenStyle>('')
  const [selectedPlants, setSelectedPlants] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', address: '', notes: '' })

  const filteredPlants = plants.filter(
    (p) =>
      (!gardenType || p.types.includes(gardenType as 'garden-bed' | 'container')) &&
      (!style || p.styles.includes(style))
  )

  const togglePlant = (id: string) => {
    setSelectedPlants((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-mint rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-charcoal mb-3">Design request sent!</h2>
        <p className="text-charcoal/60 mb-2">
          We've received your garden design request and will be in touch within 1 business day.
        </p>
        <p className="text-charcoal/40 text-sm mb-8">
          {selectedPlants.length} plant{selectedPlants.length !== 1 ? 's' : ''} selected ·{' '}
          {style} style · {gardenType === 'garden-bed' ? 'Garden Bed' : 'Container Garden'}
        </p>
        <Button href="/" variant="secondary">
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-10">
        <StepProgress steps={STEPS} currentStep={step} />
      </div>

      {/* Step 0: Garden type */}
      {step === 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-charcoal text-center mb-2">
            What type of garden are you building?
          </h2>
          <p className="text-charcoal/50 text-center text-sm mb-8">
            Choose the option that best fits your space.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {gardenTypes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setGardenType(t.id)
                  setStep(1)
                }}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-forest hover:shadow-sm text-center transition-all duration-200 group"
              >
                <span className="text-charcoal/40 group-hover:text-forest transition-colors">{t.icon}</span>
                <div>
                  <div className="font-semibold text-charcoal">{t.label}</div>
                  <div className="text-xs text-charcoal/50 mt-1">{t.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Style */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-semibold text-charcoal text-center mb-2">
            What's your garden style?
          </h2>
          <p className="text-charcoal/50 text-center text-sm mb-8">
            This helps us narrow down the best plant selections for you.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {gardenStyles.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setStyle(s.id)
                  setStep(2)
                }}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 bg-white hover:border-forest transition-all duration-200 ${
                  style === s.id ? 'border-forest shadow-sm' : 'border-gray-200'
                }`}
              >
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <div className="font-semibold text-sm text-charcoal">{s.label}</div>
                  <div className="text-xs text-charcoal/50 mt-1 leading-snug">{s.description}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <button onClick={() => setStep(0)} className="text-sm text-charcoal/40 hover:text-charcoal">
              ← Back
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Plant selection */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-semibold text-charcoal text-center mb-2">
            Pick your plants
          </h2>
          <p className="text-charcoal/50 text-center text-sm mb-8">
            Select as many as you like — we'll work with you to create the perfect combination.
          </p>

          {filteredPlants.length === 0 ? (
            <p className="text-center text-charcoal/40 py-8">
              No plants match this combination. Try a different style.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPlants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  selected={selectedPlants.includes(plant.id)}
                  onToggle={togglePlant}
                />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-8">
            <button onClick={() => setStep(1)} className="text-sm text-charcoal/40 hover:text-charcoal">
              ← Back
            </button>
            <Button
              onClick={() => setStep(3)}
              disabled={selectedPlants.length === 0}
            >
              Continue ({selectedPlants.length} selected)
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Request form */}
      {step === 3 && (
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-charcoal text-center mb-2">
            Request your design
          </h2>
          <p className="text-charcoal/50 text-center text-sm mb-8">
            We'll reach out within 1 business day to discuss your garden plan.
          </p>

          {/* Summary */}
          <div className="bg-mint rounded-2xl p-4 mb-6 text-sm text-charcoal/70">
            <strong className="text-charcoal">Your selections: </strong>
            {gardenType === 'garden-bed' ? 'Garden Bed' : 'Container Garden'} ·{' '}
            {style} style ·{' '}
            {plants
              .filter((p) => selectedPlants.includes(p.id))
              .map((p) => p.name)
              .join(', ')}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Smith"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">Address / City *</label>
              <input
                type="text"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="123 Oak St, Palo Alto, CA"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Additional Notes
              </label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Any details about your space, budget, or preferences…"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition resize-none"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-sm text-charcoal/40 hover:text-charcoal"
              >
                ← Back
              </button>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
