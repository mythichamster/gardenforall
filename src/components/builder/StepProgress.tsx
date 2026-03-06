interface StepProgressProps {
  steps: string[]
  currentStep: number
}

export default function StepProgress({ steps, currentStep }: StepProgressProps) {
  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                i < currentStep
                  ? 'bg-forest text-white'
                  : i === currentStep
                  ? 'bg-forest text-white ring-4 ring-forest/20'
                  : 'bg-gray-100 text-charcoal/30'
              }`}
            >
              {i < currentStep ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span
              className={`mt-1.5 text-xs font-medium hidden sm:block ${
                i === currentStep ? 'text-forest' : 'text-charcoal/40'
              }`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-12 sm:w-20 h-px mx-1 mb-5 transition-all duration-300 ${
                i < currentStep ? 'bg-forest' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
