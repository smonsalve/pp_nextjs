# CORE-02 Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder home page with three animated sections — Hero, About, and Skills — using Framer Motion for scroll-triggered and mount animations.

**Architecture:** `page.tsx` stays a Server Component that composes three Client Components (`HeroSection`, `AboutSection`, `SkillsSection`). Each section is `'use client'` only because Framer Motion requires the client runtime. Skills data lives in `src/constants/skills.ts` — no hardcoding in components.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, Framer Motion

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Install | `framer-motion` | Animation library |
| Create | `src/constants/skills.ts` | Typed skills data: categories + items |
| Create | `src/components/home/HeroSection.tsx` | Dark hero — name, bio, CTAs, mount animation |
| Create | `src/components/home/AboutSection.tsx` | About — paragraphs, scroll animation |
| Create | `src/components/home/SkillsSection.tsx` | Skills — grouped icon grid, scroll stagger |
| Modify | `src/app/page.tsx` | Replace placeholder with three sections |

---

## Task 1: Install framer-motion

**Files:**
- Modify: `package.json` (via npm)

- [ ] **Step 1: Install the package**

```bash
npm install framer-motion
```

- [ ] **Step 2: Verify TypeScript resolves it**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore(deps): instalar framer-motion para animaciones"
```

---

## Task 2: Create skills constants

**Files:**
- Create: `src/constants/skills.ts`

- [ ] **Step 1: Create the file**

```ts
// src/constants/skills.ts

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

- [ ] **Step 2: Run type-check**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/constants/skills.ts
git commit -m "feat(constants): agregar datos de skills por categoría"
```

---

## Task 3: Create HeroSection

**Files:**
- Create: `src/components/home/HeroSection.tsx`

The hero fills the viewport (`min-h-screen`) with a dark background. A Framer Motion container with `staggerChildren: 0.1` sequences the eyebrow, name, bio, and CTA buttons on mount. No scroll trigger — animates immediately when the page loads.

- [ ] **Step 1: Create the file**

```tsx
// src/components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/constants'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <motion.div
        className="max-w-2xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm tracking-widest uppercase text-gray-400 mb-4"
        >
          Systems Engineer · Data Science · AI
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {SITE_CONFIG.author.name}
        </motion.h1>
        <motion.p variants={item} className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          {SITE_CONFIG.description}
        </motion.p>
        <motion.div variants={item} className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/blog"
            className="bg-white text-gray-950 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Ver blog →
          </Link>
          <Link
            href="/contacto"
            className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:border-white/60 transition-colors"
          >
            Contacto
          </Link>
        </motion.div>
      </motion.div>
    </section>
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
git add src/components/home/HeroSection.tsx
git commit -m "feat(home): agregar HeroSection con animación de entrada"
```

---

## Task 4: Create AboutSection

**Files:**
- Create: `src/components/home/AboutSection.tsx`

Three paragraphs defined as inline constants at the top of the file — no props, no external data. Framer Motion `whileInView` with `once: true` so the animation plays once as the section scrolls into view.

- [ ] **Step 1: Create the file**

```tsx
// src/components/home/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'

const ABOUT_PARAGRAPHS = [
  'Ingeniero de Sistemas y emprendedor con más de 13 años construyendo productos de software. He trabajado desde aplicaciones web hasta sistemas de datos a escala, siempre enfocado en el impacto real.',
  'Actualmente me especializo en la intersección entre desarrollo de software moderno e inteligencia artificial: construir sistemas que no solo funcionen, sino que aprendan y mejoren con el tiempo.',
  'Creo que el buen software se construye con claridad, iteración rápida y mucha curiosidad. Este sitio es parte de ese proceso de aprendizaje continuo.',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-24 px-4">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p
          variants={item}
          className="text-xs tracking-widest uppercase text-gray-400 mb-3"
        >
          Sobre mí
        </motion.p>
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8"
        >
          13+ años construyendo software
        </motion.h2>
        {ABOUT_PARAGRAPHS.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={item}
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 last:mb-0"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </section>
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
git add src/components/home/AboutSection.tsx
git commit -m "feat(home): agregar AboutSection con animación scroll"
```

---

## Task 5: Create SkillsSection

**Files:**
- Create: `src/components/home/SkillsSection.tsx`

Reads `SKILLS` from `src/constants/skills.ts`. Each category group triggers its own `whileInView` stagger — cards slide up + fade in one by one with 0.05s between each.

- [ ] **Step 1: Create the file**

```tsx
// src/components/home/SkillsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/constants/skills'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function SkillsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-12">
          Stack técnico
        </p>
        <div className="flex flex-col gap-12">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                {group.category}
              </p>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.label}
                    variants={item}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center gap-2"
                  >
                    <span className="text-2xl" role="img" aria-label={skill.label}>
                      {skill.icon}
                    </span>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
git add src/components/home/SkillsSection.tsx
git commit -m "feat(home): agregar SkillsSection con grid animado por categoría"
```

---

## Task 6: Update page.tsx

**Files:**
- Modify: `src/app/page.tsx`

Replace the entire placeholder file with a clean Server Component that composes the three sections. No imports from `@/constants` needed here — sections handle their own data.

- [ ] **Step 1: Replace `src/app/page.tsx`**

```tsx
// src/app/page.tsx
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import SkillsSection from '@/components/home/SkillsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </>
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
git add src/app/page.tsx
git commit -m "feat(home): componer página de inicio con Hero, About y Skills"
```

---

## Task 7: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Production build**

```bash
npm run build
```

Expected: build completes with no errors.

- [ ] **Step 2: Start dev server and smoke test**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:

| Check | Expected |
|-------|----------|
| Hero loads | Dark background, name centered, eyebrow + bio + two buttons |
| Hero animation | Elements slide up + fade in sequentially on page load |
| About section | White background, label + heading + 3 paragraphs |
| About animation | Content fades in as you scroll down to the section |
| Skills section | Gray background, 3 category groups with icon cards |
| Skills animation | Cards stagger in as each group scrolls into view |
| Mobile (<768px) | Skills grid shows 2 columns instead of 4 |
| No layout breaks | Navbar stays sticky, Footer visible at bottom |

- [ ] **Step 3: Update BACKLOG.md**

In `BACKLOG.md`, change the CORE-02 row from `⬜` to `✅`.

- [ ] **Step 4: Final commit**

```bash
git add BACKLOG.md
git commit -m "chore: marcar CORE-02 como completado en el backlog"
```
