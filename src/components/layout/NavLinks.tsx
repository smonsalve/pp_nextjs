'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/constants'
import { cn } from '@/utils/cn'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'text-sm transition-colors',
              isActive
                ? 'text-gray-900 dark:text-white font-semibold border-b-2 border-gray-900 dark:border-white pb-0.5'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
