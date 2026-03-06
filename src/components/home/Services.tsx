import Image from 'next/image'
import Button from '@/components/ui/Button'
import SectionWrapper from '@/components/ui/SectionWrapper'

const services = [
  {
    title: 'Garden Bed',
    tagline: 'Bring your yard to life',
    description:
      'Custom raised beds and in-ground gardens bursting with color. From cottage-style perennials to structured modern designs — we design and install it all.',
    features: ['Custom design consultation', 'Soil preparation & amendment', 'Seasonal planting plan', 'Optional maintenance program'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    imageAlt: 'Colorful garden bed with flowers in bloom',
    href: '/builder/plant?type=garden-bed',
    cta: 'Build a Garden Bed',
  },
  {
    title: 'Container Garden',
    tagline: 'Perfect for patios & balconies',
    description:
      'No yard? No problem. Stunning container arrangements for patios, balconies, entryways, or anywhere you want a touch of green.',
    features: ['Curated container selection', 'Plant pairing & arrangement', 'Balcony & patio friendly', 'Low-maintenance options'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    imageAlt: 'Beautiful container garden on a sunny patio',
    href: '/builder/plant?type=container',
    cta: 'Build a Container Garden',
  },
]

export default function Services() {
  return (
    <SectionWrapper bg="cream" id="services">
      <div className="text-center mb-16">
        <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal">
          Pick your garden style
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <p className="text-sage text-sm font-medium mb-1">{service.tagline}</p>
              <h3 className="text-2xl font-semibold text-charcoal mb-3">{service.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-charcoal/70">
                    <svg className="w-4 h-4 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={service.href} variant="primary" fullWidth>
                {service.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
