import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/favicon.svg"
        alt="GardenForAll logo"
        width={32}
        height={32}
        className={invert ? 'invert' : undefined}
      />
      <span className={`text-xl font-semibold ${invert ? 'text-white' : 'text-forest'}`}>
        GardenForAll
      </span>
    </Link>
  )
}
