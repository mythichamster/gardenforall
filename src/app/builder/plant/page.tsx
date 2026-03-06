import type { Metadata } from 'next'
import { Suspense } from 'react'
import BuilderWizard from '@/components/builder/BuilderWizard'

export const metadata: Metadata = {
  title: 'Build Your Garden — GardenForAll',
  description: 'Design your personalized Bay Area garden step by step. Choose your style, pick your plants, and request a free consultation.',
}

export default function BuilderPage() {
  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sage font-medium text-sm uppercase tracking-widest mb-3">
            Garden Builder
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-charcoal">
            Design your perfect garden
          </h1>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-10">
          <Suspense fallback={<div className="py-20 text-center text-charcoal/40">Loading builder…</div>}>
            <BuilderWizard />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
