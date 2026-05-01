# CORE-01 — Navbar & Footer Design Spec

**Date:** 2026-04-30  
**Ticket:** CORE-01  
**Status:** Approved

---

## Goal

Build a sticky Navbar with responsive navigation and a minimal Footer, integrated into the root layout. This establishes the visual frame for the entire site.

---

## Component Architecture

Three files under `src/components/layout/`, plus the Footer:

| File | Type | Responsibility |
|------|------|----------------|
| `Navbar.tsx` | Server Component | Outer shell — sticky bar, logo, composes NavLinks and MobileMenu |
| `NavLinks.tsx` | Client Component | Desktop nav links with active-link highlight via `usePathname` |
| `MobileMenu.tsx` | Client Component | Hamburger button + slide-in drawer + nav links for mobile |
| `Footer.tsx` | Server Component | Social icons + copyright, one row centered |

**Why the split:** `NavLinks` and `MobileMenu` need `usePathname` (a client-only hook) and `useState` for drawer state. Everything else has no browser interactivity and stays on the server to minimize client JS.

---

## Navbar Visual Design

- **Position:** `sticky top-0 z-50` — stays visible as the user scrolls
- **Background:** `backdrop-blur-md` with a semi-transparent white/dark background, giving a frosted-glass effect over page content
- **Layout:** flex row, full width, constrained inner container (`max-w-6xl mx-auto px-4`)
- **Left:** Site name (`Sergio Monsalve`) as a link to `/` — acts as the logo
- **Right (desktop):** Nav links inline, horizontal — hidden on mobile (`hidden md:flex`)
- **Right (mobile):** Hamburger icon button — visible only on mobile (`flex md:hidden`)

---

## Active Link Highlight

Uses `usePathname()` from `next/navigation` to compare the current route against each `NavLink.href`.

- Active link: bottom border underline (`border-b-2 border-gray-900 dark:border-white`) + slightly bolder text
- Inactive link: standard gray, hover darkens

---

## Mobile Drawer

Triggered by the hamburger button in `MobileMenu.tsx`.

**Behavior:**
- Slides in from the right, covering ~75% of screen width (`w-3/4 max-w-xs`)
- A semi-transparent dark overlay (`bg-black/50`) covers the remaining screen
- Nav links stack vertically inside the drawer with comfortable tap targets
- Active link is highlighted (same style as desktop)
- **Close triggers:** tapping the overlay, pressing `Escape`, or clicking a nav link

**Animation:** CSS `transition-transform` with `translate-x-full` (closed) → `translate-x-0` (open). No animation library needed.

**Accessibility:** `aria-expanded` on the hamburger button, `role="dialog"` on the drawer, focus trap is handled by disabling scroll on `body` while open (`overflow-hidden`).

---

## Footer

- Single row: `flex items-center justify-between` — social icons on the left, copyright on the right
- Left: social icon links from `SOCIAL_LINKS` constant (GitHub, LinkedIn, Email)
- Right: `© 2026 Sergio Monsalve`
- Icons: `lucide-react` (install as dependency: `npm install lucide-react`)
- Padding: `py-8 px-4`

---

## Integration

Both `Navbar` and `Footer` are imported in `src/app/layout.tsx`:

```tsx
// src/app/layout.tsx
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## Data

- Nav links sourced from `NAV_LINKS` constant (`src/constants/index.ts`) — no hardcoding in components
- Social links sourced from `SOCIAL_LINKS` constant

---

## Out of Scope

- Dark mode toggle (CORE-04)
- shadcn/ui components (CORE-05)
- Authentication menu items (future AUTH tickets)
- Framer Motion animations (CORE-02)
