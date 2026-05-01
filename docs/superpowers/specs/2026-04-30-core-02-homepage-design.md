# CORE-02 — Homepage (Hero, About, Skills) Design Spec

**Date:** 2026-04-30
**Ticket:** CORE-02
**Status:** Approved

---

## Goal

Build the home page (`/`) with three sections: Hero, About, and Skills. Replace the current placeholder `page.tsx` with a polished, animated page that represents Sergio's identity as an engineer.

---

## Component Architecture

```
src/app/page.tsx                    # Server Component — composes the three sections
src/components/home/
  HeroSection.tsx                   # 'use client' — Framer Motion animations
  AboutSection.tsx                  # 'use client' — Framer Motion animations
  SkillsSection.tsx                 # 'use client' — Framer Motion animations
src/constants/skills.ts             # Skill data: categories, labels, emoji icons
```

`page.tsx` remains a Server Component — it imports and renders the three sections with no interactivity of its own. Each section is `'use client'` only because Framer Motion requires the client runtime.

---

## Dependency

Install Framer Motion before implementation:

```bash
npm install framer-motion
```

---

## Section 1: Hero

**Visual:**
- Full-width dark section: `bg-gray-950 text-white`, minimum viewport height (`min-h-screen`)
- Centered layout: content centered both vertically and horizontally
- Eyebrow: `Systems Engineer · Data Science · AI` — uppercase, letter-spaced, muted gray (`text-gray-400`)
- Name: `Sergio Monsalve` — large, bold, white
- Bio: one sentence from `SITE_CONFIG.description`
- CTAs: `Ver blog →` (solid white button, dark text) and `Contacto` (ghost button with white border)

**Animation:**
- Eyebrow, name, bio, and CTA group each animate in sequentially
- Each element: slide up 20px + fade in (`y: 20 → 0`, `opacity: 0 → 1`)
- Staggered 0.1s apart using Framer Motion `variants` with `staggerChildren: 0.1`
- Duration: 0.5s, easing: `easeOut`
- Plays once on mount (not on scroll)

---

## Section 2: About

**Visual:**
- Light background: `bg-white dark:bg-gray-950` (dark mode-compatible for CORE-04)
- Centered container: `max-w-2xl mx-auto px-4 py-24`
- Label: `Sobre mí` — small, uppercase, letter-spaced, muted gray
- Heading: `13+ años construyendo software`
- Body: 2–3 short paragraphs covering background, current focus, and motivation
- Text content defined as inline constants at the top of `AboutSection.tsx` (too long for `SITE_CONFIG`)

**Animation:**
- Heading and each paragraph animate on scroll into view
- Each element: slide up 20px + fade in
- `whileInView`, `viewport: { once: true }` — plays only once per page load
- Stagger: 0.1s between heading and paragraphs

---

## Section 3: Skills

**Visual:**
- Alternating background: `bg-gray-50 dark:bg-gray-900` — visually separates from About
- Centered container: `max-w-4xl mx-auto px-4 py-24`
- Label: `Stack técnico` — small, uppercase, letter-spaced, muted gray
- Three category groups, each with:
  - Category heading (e.g., `Languages`) — small, bold, muted
  - Responsive grid of cards: 2 columns on mobile (`grid-cols-2`), 4 columns on desktop (`md:grid-cols-4`)
  - Each card: white background, `border border-gray-200`, rounded corners, centered emoji icon + skill label

**Skills data** (`src/constants/skills.ts`):
```ts
export interface SkillItem {
  label: string
  icon: string
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    items: [
      { label: 'Python', icon: '🐍' },
      { label: 'TypeScript', icon: '⚡' },
      { label: 'SQL', icon: '🗃️' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { label: 'Next.js', icon: '▲' },
      { label: 'React', icon: '⚛️' },
      { label: 'FastAPI', icon: '🚀' },
    ],
  },
  {
    category: 'Data & AI',
    items: [
      { label: 'ML / AI', icon: '🤖' },
      { label: 'PostgreSQL', icon: '🐘' },
      { label: 'Docker', icon: '🐳' },
    ],
  },
]
```

**Animation:**
- Each category group animates on scroll (`whileInView`, `once: true`)
- Cards within a group stagger in: slide up + fade in, 0.05s between each card
- Category label animates in just before its cards

---

## Data Sources

| Data | Source |
|------|--------|
| Author name, bio | `SITE_CONFIG` from `src/constants/index.ts` |
| Nav links for CTAs | Hardcoded hrefs (`/blog`, `/contacto`) |
| Skills | `SKILLS` from `src/constants/skills.ts` |

No props are passed between `page.tsx` and the sections — each section reads directly from constants.

---

## Out of Scope

- Dark mode toggle (CORE-04)
- Photo in About section (decided: text-only)
- Blog post previews on home page (future)
- shadcn/ui components (CORE-05)
