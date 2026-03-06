interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  bg?: 'white' | 'cream' | 'mint' | 'forest'
}

const bgClasses = {
  white: 'bg-white',
  cream: 'bg-cream',
  mint: 'bg-mint',
  forest: 'bg-forest',
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  bg = 'cream',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgClasses[bg]} py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
