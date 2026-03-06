import Link from 'next/link'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Garden Bed', href: '/builder/plant?type=garden-bed' },
  { label: 'Container Garden', href: '/builder/plant?type=container' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-semibold mb-1">GardenForAll</div>
            <div className="text-sm text-white/60 mb-4">Sprinkle magic, Cultivate joy</div>
            <p className="text-sm text-white/70 max-w-xs">
              Personalized garden design and installation for the San Francisco Bay Area.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <a
              href="mailto:support@gardenforall.com"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              support@gardenforall.com
            </a>
            <p className="text-sm text-white/60 mt-3">
              Serving the Bay Area:<br />
              Palo Alto · Menlo Park · Mountain View · San Jose · Sunnyvale
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} GardenForAll. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
