/**
 * cn — Class Name utility
 *
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 * This is THE standard pattern in Next.js + Tailwind projects.
 *
 * Example:
 *   cn('px-4 py-2', isActive && 'bg-blue-500', 'px-6')
 *   → 'py-2 bg-blue-500 px-6'  (px-4 is overridden by px-6 via tailwind-merge)
 */
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
