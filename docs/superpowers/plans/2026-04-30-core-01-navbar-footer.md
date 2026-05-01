# CORE-01 Navbar & Footer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a sticky Navbar with responsive slide-in drawer and a minimal Footer, integrated into the root layout.

**Architecture:** `Navbar.tsx` is a Server Component shell that composes two Client Components — `NavLinks.tsx` (desktop links, active highlight) and `MobileMenu.tsx` (hamburger + slide-in drawer). `Footer.tsx` is a Server Component. All nav/social data comes from constants — no hardcoding in components.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, lucide-react (icons), `usePathname` from `next/navigation`

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Install | `lucide-react` | Icon library (Github, Linkedin, Mail, Menu, X) |
| Create | `src/components/layout/Footer.tsx` | Server Component — social icons + copyright row |
| Create | `src/components/layout/NavLinks.tsx` | Client Component — desktop nav links with active highlight |
| Create | `src/components/layout/MobileMenu.tsx` | Client Component — hamburger button + slide-in drawer |
| Create | `src/components/layout/Navbar.tsx` | Server Component — sticky shell composing NavLinks + MobileMenu |
| Modify | `src/app/layout.tsx` | Add `<Navbar />` above `{children}` and `<Footer />` below |

---

## Task 1: Install lucide-react

**Files:**
- Modify: `package.json` (via npm)

- [ ] **Step 1: Install the package**

```bash
npm install lucide-react
```

- [ ] **Step 2: Verify TypeScript can resolve it**

```bash
npm run type-check
```

Expected: no errors. If you see `Cannot find module 'lucide-react'`, restart your TypeScript server.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore(deps): instalar lucide-react para iconos"
```

---

## Task 2: Create Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

The Footer is a Server Component (no `'use client'` directive). It reads `SOCIAL_LINKS` and `SITE_CONFIG` from constants and renders them — no props needed.

- [ ] **Step 1: Create the file**

```tsx
// src/components/layout/Footer.tsx
import type { ComponentType } from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { SOCIAL_LINKS, SITE_CONFIG } from '@/constants'
import type { SocialLink } from '@/types'

const ICON_MAP: Record<SocialLink['platform'], ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Twitter,
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICON_MAP[link.platform]
            return (
              <a
                key={link.platform}
                href={link.href}
                target={link.platform === 'email' ? undefined : '_blank'}
                rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {SITE_CONFIG.author.name}
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Run type-check**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat(layout): agregar Footer con links sociales y copyright"
```

---

## Task 3: Create NavLinks (desktop nav)

**Files:**
- Create: `src/components/layout/NavLinks.tsx`

This is a Client Component because `usePathname()` is a client-only hook. It renders the horizontal desktop nav (hidden on mobile via `hidden md:flex`).

- [ ] **Step 1: Create the file**

```tsx
// src/components/layout/NavLinks.tsx
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
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
```

- [ ] **Step 2: Run type-check**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/NavLinks.tsx
git commit -m "feat(layout): agregar NavLinks con active-link highlight"
```

---

## Task 4: Create MobileMenu (hamburger + slide-in drawer)

**Files:**
- Create: `src/components/layout/MobileMenu.tsx`

Client Component. Manages `isOpen` state. Two `useEffect` hooks: one closes the drawer when the route changes, the other binds the Escape key and locks body scroll while open. The drawer uses CSS `transition-transform` — no animation library needed.

- [ ] **Step 1: Create the file**

```tsx
// src/components/layout/MobileMenu.tsx
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

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Escape key + body scroll lock
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

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs',
          'bg-white dark:bg-gray-950 shadow-xl',
          'flex flex-col pt-16 px-6',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
                className={cn(
                  'text-lg transition-colors',
                  isActive
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
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
```

- [ ] **Step 2: Run type-check**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/MobileMenu.tsx
git commit -m "feat(layout): agregar MobileMenu con drawer deslizante"
```

---

## Task 5: Create Navbar shell

**Files:**
- Create: `src/components/layout/Navbar.tsx`

Server Component. Renders the sticky bar, the site name as a home link, and composes `NavLinks` and `MobileMenu`. No `'use client'` — the interactivity lives inside the children.

- [ ] **Step 1: Create the file**

```tsx
// src/components/layout/Navbar.tsx
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
```

- [ ] **Step 2: Run type-check**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat(layout): agregar Navbar sticky con frosted-glass"
```

---

## Task 6: Integrate into root layout

**Files:**
- Modify: `src/app/layout.tsx`

Add `<Navbar />` before `{children}` and `<Footer />` after. Wrap `{children}` in a `<main>` tag for semantic HTML.

- [ ] **Step 1: Update `src/app/layout.tsx`**

Replace the `<body>` content:

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SITE_CONFIG } from '@/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author.name }],
  creator: SITE_CONFIG.author.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Run type-check and lint**

```bash
npm run type-check && npm run lint
```

Expected: no errors, no warnings.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(layout): integrar Navbar y Footer en el layout raíz"
```

---

## Task 7: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Production build**

```bash
npm run build
```

Expected: build completes with no errors. You may see warnings about missing pages (`/blog`, `/galeria`, etc.) — those are fine, those routes don't exist yet.

- [ ] **Step 2: Start dev server and smoke test**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:

| Check | Expected |
|-------|----------|
| Navbar visible | Sticky at top, frosted-glass background, "Sergio Monsalve" on left, links on right |
| Active link on `/` | "Inicio" has underline + bold |
| Scroll page | Navbar stays fixed, content scrolls under it |
| Resize to mobile (<768px) | Desktop links hide, hamburger appears |
| Tap hamburger | Drawer slides in from the right, overlay appears |
| Tap overlay | Drawer closes |
| Press Escape | Drawer closes |
| Tap a drawer link | Drawer closes, navigates to route |
| Footer visible | Social icons on left, copyright on right |
| Social icon links | GitHub/LinkedIn open new tab, Email opens mail client |

- [ ] **Step 3: Update BACKLOG.md**

In `BACKLOG.md`, change the CORE-01 row status from `⬜` to `✅`.

- [ ] **Step 4: Final commit**

```bash
git add BACKLOG.md
git commit -m "chore: marcar CORE-01 como completado en el backlog"
```
