'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants'
import { cn } from '@/utils/cn'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('overflow-hidden')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div className="flex md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Abrir menú"
        className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <Menu size={22} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs',
          'bg-white dark:bg-gray-950 shadow-xl',
          'flex flex-col pt-16 px-6',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg transition-colors',
                  isActive
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
