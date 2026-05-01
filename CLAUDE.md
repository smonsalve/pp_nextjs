# CLAUDE.md — Contexto del proyecto para Claude Code

Este archivo le da contexto a Claude Code sobre el proyecto cuando trabajas desde la terminal.
Colócalo en la raíz del repo — Claude Code lo lee automáticamente al iniciar una sesión.

## Proyecto

**Sitio personal de Sergio Monsalve** construido con Next.js 14 como proyecto de aprendizaje.
El objetivo es dominar Next.js App Router mientras se construye algo con valor real.

- **Repo:** https://github.com/smonsalve/pp_nextjs
- **Dev:** http://localhost:3000
- **Deploy:** Vercel (próximo)

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript strict
- Tailwind CSS v4
- Zod (validación de env vars y forms)
- ESLint + Prettier
- Husky + lint-staged (pre-commit hooks)
- GitHub Actions (CI: lint → type-check → build)

**Próximamente:**
- Auth.js v5 (Google + GitHub OAuth)
- Prisma + Neon (PostgreSQL)
- Resend (emails)
- MDX (blog)

## Estructura de carpetas

```
src/
├── app/                  # Next.js App Router — rutas y layouts
│   ├── layout.tsx        # Layout raíz con metadata global
│   └── page.tsx          # Página de inicio /
├── components/
│   ├── ui/               # Componentes genéricos (Button, Card, Badge...)
│   ├── layout/           # Navbar, Footer
│   ├── blog/             # Componentes específicos del blog
│   ├── gallery/          # Galería de fotos/videos
│   ├── auth/             # Login, UserMenu, etc.
│   └── shared/           # Componentes compartidos entre features
├── constants/
│   └── index.ts          # NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG
├── hooks/                # Custom React hooks (useScrollPosition, etc.)
├── lib/
│   └── env.ts            # Validación de variables de entorno con Zod
├── styles/               # CSS global adicional
├── types/
│   ├── index.ts          # Tipos globales (NavLink, SocialLink, ApiResponse)
│   └── blog.ts           # PostMeta, Post
└── utils/
    └── cn.ts             # Utilidad: clsx + tailwind-merge
content/
└── blog/                 # Artículos en MDX (.mdx)
docs/
└── adr/                  # Architecture Decision Records
```

## Convenciones de código

### Imports — usar siempre alias @/
```typescript
// ✅ Correcto
import { cn } from '@/utils/cn'
import { SITE_CONFIG } from '@/constants'

// ❌ Evitar rutas relativas largas
import { cn } from '../../../utils/cn'
```

### Componentes — Server Components por defecto
```typescript
// Server Component (por defecto, sin 'use client')
export default function BlogPage() { ... }

// Client Component (solo cuando necesitas estado o eventos del browser)
'use client'
export default function SearchBar() { ... }
```

### Naming
| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| Componentes | PascalCase | `NavBar.tsx` |
| Hooks | camelCase + `use` prefix | `useScrollPosition.ts` |
| Utils | camelCase | `formatDate.ts` |
| Constantes | UPPER_SNAKE_CASE | `MAX_POSTS_PER_PAGE` |
| Tipos | PascalCase | `PostMeta` |
| Rutas (carpetas) | kebab-case | `app/blog/` |

### Conventional Commits (obligatorio — validado por Husky)
```
feat(blog): agregar página de lista de posts
fix(auth): corregir redirect después de login
docs: actualizar README
chore(deps): actualizar Next.js
refactor(ui): extraer Button como componente reutilizable
test(utils): agregar tests para formatDate
```

## Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo en localhost:3000
npm run build        # Build de producción
npm run lint         # ESLint
npm run lint:fix     # ESLint con auto-fix
npm run format       # Prettier en todo el proyecto
npm run format:check # Verificar formato (usado en CI)
npm run type-check   # tsc --noEmit
```

## Flujo de trabajo con Git

```
main     ← producción (protegida)
develop  ← integración (protegida)
feature/TICKET-ID-descripcion  ← trabajo diario
```

```bash
# Iniciar un ticket nuevo
git checkout develop && git pull origin develop
git checkout -b feature/CORE-01-navbar-footer

# Al terminar
git add -A
git commit -m "feat(layout): agregar Navbar responsivo y Footer"
git push origin feature/CORE-01-navbar-footer
# → Abrir PR en GitHub hacia develop
```

## Backlog

Ver `BACKLOG.md` para los 30 tickets organizados por épica.
Estado actual: **SETUP-01 a SETUP-05 completados** ✅

## Variables de entorno

Copiar `.env.example` a `.env.local` y completar los valores.
Nunca commitear `.env.local` — está en `.gitignore`.

## Lo que Claude Code puede hacer en este proyecto

- Crear componentes en `src/components/`
- Agregar rutas en `src/app/`
- Editar constantes, tipos y utils
- Correr `npm run lint`, `npm run type-check`, `npm run build` para verificar
- Crear archivos MDX en `content/blog/`
- Actualizar `BACKLOG.md` cuando se completa un ticket
