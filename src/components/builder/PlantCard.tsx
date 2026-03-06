import Image from 'next/image'
import type { Plant } from '@/lib/data/plants'

interface PlantCardProps {
  plant: Plant
  selected: boolean
  onToggle: (id: string) => void
}

const careLevelColor = {
  Easy: 'text-forest bg-mint',
  Medium: 'text-amber-700 bg-amber-50',
  Advanced: 'text-red-700 bg-red-50',
}

export default function PlantCard({ plant, selected, onToggle }: PlantCardProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(plant.id)}
      className={`relative rounded-2xl overflow-hidden text-left transition-all duration-200 group ${
        selected
          ? 'ring-2 ring-forest shadow-md scale-[1.01]'
          : 'ring-1 ring-gray-200 hover:ring-sage hover:shadow-sm'
      }`}
    >
      {/* Check badge */}
      {selected && (
        <div className="absolute top-3 right-3 z-10 w-6 h-6 bg-forest rounded-full flex items-center justify-center shadow">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      <div className="relative h-36 bg-gray-100">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <div className="p-4 bg-white">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-semibold text-sm text-charcoal leading-tight">{plant.name}</h4>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${
              careLevelColor[plant.careLevel]
            }`}
          >
            {plant.careLevel}
          </span>
        </div>
        <p className="text-xs text-charcoal/40 italic mb-2">{plant.scientificName}</p>
        <p className="text-xs text-charcoal/60 leading-relaxed">{plant.description}</p>
        <div className="flex items-center gap-1 mt-3">
          <svg className="w-3 h-3 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
          </svg>
          <span className="text-xs text-charcoal/50">{plant.sunlight}</span>
        </div>
      </div>
    </button>
  )
}
