import Link from 'next/link'
import { SITE_CONFIG } from '@/constants'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          {SITE_CONFIG.author.name}
        </Link>
        <NavLinks />
        <MobileMenu />
      </div>
    </header>
  )
}
