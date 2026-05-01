# Backlog — Sitio personal Next.js

**30 tickets · 6 épicas · 108 story points**

Leyenda: ✅ Completado · 🔄 En progreso · ⬜ Pendiente

---

## 🟣 SETUP — Configuración inicial & arquitectura

| ID | Título | Prio | SP | Estado |
|----|--------|------|----|--------|
| SETUP-01 | Crear repo GitHub con estructura de ramas (main, develop, feature/*) | Alta | 2 | ✅ |
| SETUP-02 | Inicializar Next.js 14 con App Router, TypeScript y Tailwind CSS | Alta | 3 | ✅ |
| SETUP-03 | Configurar ESLint, Prettier y Husky para pre-commit hooks | Alta | 2 | ✅ |
| SETUP-04 | Definir estructura de carpetas, convenciones de naming y alias de imports | Media | 2 | ✅ |
| SETUP-05 | Configurar variables de entorno (.env.example) y validación con Zod | Media | 2 | ✅ |

**Épica completa ✅**

---

## 🔵 CORE — Layout & páginas principales

| ID | Título | Prio | SP | Estado |
|----|--------|------|----|--------|
| CORE-01 | Crear layout principal con Navbar responsiva y Footer | Alta | 3 | ⬜ |
| CORE-02 | Desarrollar página de inicio (Hero, About, Skills) | Alta | 4 | ⬜ |
| CORE-03 | Crear página de contacto con formulario y validación | Media | 3 | ⬜ |
| CORE-04 | Implementar modo oscuro (dark mode) con next-themes | Media | 2 | ⬜ |
| CORE-05 | Crear componentes UI reutilizables (Button, Card, Badge, Modal) | Media | 3 | ⬜ |

### CORE-01 — Detalles
**Aprenderás:** Next.js Layouts, Server Components, Tailwind responsive  
**Subtareas:**
- [ ] Crear `src/components/layout/Navbar.tsx` con links de navegación
- [ ] Crear `src/components/layout/Footer.tsx` con links sociales
- [ ] Integrar Navbar y Footer en `src/app/layout.tsx`
- [ ] Responsivo: menú hamburguesa en mobile
- [ ] Active link highlight según ruta actual (usePathname)

### CORE-02 — Detalles
**Aprenderás:** Static generation, Framer Motion, next/image  
**Subtareas:**
- [ ] Hero section con nombre, título y CTA
- [ ] Sección About con texto y foto optimizada con next/image
- [ ] Grid de skills con iconos tecnológicos
- [ ] Animaciones de entrada con Framer Motion

### CORE-03 — Detalles
**Aprenderás:** React Hook Form, Server Actions, Resend  
**Subtareas:**
- [ ] Formulario con react-hook-form + validación zod
- [ ] Server Action para procesar el formulario
- [ ] Integrar Resend para envío de emails
- [ ] Toast de confirmación con sonner

### CORE-04 — Detalles
**Aprenderás:** next-themes, CSS variables, System preference  
**Subtareas:**
- [ ] Instalar y configurar next-themes
- [ ] Toggle en Navbar
- [ ] Respetar preferencia del sistema operativo

### CORE-05 — Detalles
**Aprenderás:** shadcn/ui, CVA (class-variance-authority), component design  
**Subtareas:**
- [ ] Configurar shadcn/ui
- [ ] Button con variantes (primary, secondary, ghost, destructive)
- [ ] Card, Badge, Skeleton components
- [ ] Documentar uso en comentarios

---

## 🟢 BLOG — CMS y contenido dinámico

| ID | Título | Prio | SP | Estado |
|----|--------|------|----|--------|
| BLOG-01 | Configurar sistema de blog con archivos MDX locales | Alta | 4 | ⬜ |
| BLOG-02 | Página de lista de posts con filtros por categoría y búsqueda | Media | 3 | ⬜ |
| BLOG-03 | Página individual de post con tabla de contenidos y syntax highlighting | Media | 4 | ⬜ |
| BLOG-04 | Sistema de tags y páginas por categoría | Baja | 2 | ⬜ |
| BLOG-05 | Sistema de comentarios con Giscus (GitHub Discussions) | Baja | 2 | ⬜ |
| BLOG-06 | RSS feed y sitemap.xml autogenerado | Baja | 2 | ⬜ |

### BLOG-01 — Detalles
**Aprenderás:** MDX, @next/mdx, frontmatter, Static content generation  
**Subtareas:**
- [ ] Instalar y configurar @next/mdx
- [ ] Crear estructura `content/blog/*.mdx`
- [ ] Parser de frontmatter (título, fecha, tags, descripción, published)
- [ ] Tipos TypeScript para post metadata (ya en `src/types/blog.ts`)
- [ ] Función `getAllPosts()` y `getPostBySlug()` en `src/lib/blog.ts`

### BLOG-03 — Detalles
**Aprenderás:** Dynamic routes [slug], generateMetadata, rehype-pretty-code  
**Subtareas:**
- [ ] Ruta dinámica `app/blog/[slug]/page.tsx`
- [ ] Syntax highlighting con rehype-pretty-code + shiki
- [ ] Tabla de contenidos autogenerada
- [ ] generateMetadata para SEO por post
- [ ] Reading time estimado

---

## 🟡 MEDIA — Galería de fotos y videos

| ID | Título | Prio | SP | Estado |
|----|--------|------|----|--------|
| MEDIA-01 | Galería de fotos con grid masonry y next/image | Media | 4 | ⬜ |
| MEDIA-02 | Lightbox para ver fotos en pantalla completa | Media | 3 | ⬜ |
| MEDIA-03 | Sección de videos con reproductor y thumbnails | Media | 3 | ⬜ |
| MEDIA-04 | Upload de imágenes con UploadThing | Baja | 4 | ⬜ |
| MEDIA-05 | Filtros por categoría/álbum con URL search params | Baja | 2 | ⬜ |

### MEDIA-01 — Detalles
**Aprenderás:** next/image, blur placeholder, lazy loading, masonry CSS  
**Subtareas:**
- [ ] Grid masonry responsivo con CSS columns
- [ ] Componente Image con next/image y blur placeholder
- [ ] Lazy loading automático
- [ ] Datos de fotos en `src/constants/gallery.ts`

---

## 🔴 AUTH — Autenticación e interacción de usuarios

| ID | Título | Prio | SP | Estado |
|----|--------|------|----|--------|
| AUTH-01 | Autenticación con Auth.js v5 (Google + GitHub OAuth) | Alta | 4 | ⬜ |
| AUTH-02 | Base de datos con Postgres + Prisma ORM | Alta | 4 | ⬜ |
| AUTH-03 | Perfil de usuario con edición de información | Media | 3 | ⬜ |
| AUTH-04 | Sistema de roles: admin puede gestionar contenido | Media | 4 | ⬜ |
| AUTH-05 | Guestbook donde usuarios autenticados dejan mensajes | Media | 3 | ⬜ |
| AUTH-06 | Rate limiting y protección anti-spam con Upstash Redis | Baja | 2 | ⬜ |

### AUTH-01 — Detalles
**Aprenderás:** Auth.js v5, OAuth providers, Session management, Middleware  
**Subtareas:**
- [ ] Instalar auth.js (`npm install next-auth@beta`)
- [ ] Configurar `src/auth.ts` con providers Google y GitHub
- [ ] Crear `src/middleware.ts` para protección de rutas
- [ ] Componentes `SignIn` y `SignOut` en `src/components/auth/`
- [ ] Variables en `.env.local`: AUTH_SECRET, AUTH_GOOGLE_*, AUTH_GITHUB_*

### AUTH-02 — Detalles
**Aprenderás:** Prisma ORM, PostgreSQL, schema design, migraciones  
**Subtareas:**
- [ ] Crear instancia en Neon (neon.tech — gratuito)
- [ ] `npm install prisma @prisma/client`
- [ ] Schema inicial: User, Session, Account, Post, Comment
- [ ] `npx prisma migrate dev --name init`
- [ ] `src/lib/prisma.ts` con singleton client

---

## 🟤 DEVOPS — CI/CD & performance

| ID | Título | Prio | SP | Estado |
|----|--------|------|----|--------|
| DEVOPS-01 | Despliegue automático en Vercel con preview deployments | Alta | 2 | ⬜ |
| DEVOPS-02 | Pipeline CI con GitHub Actions (lint, type-check, build) | Alta | 3 | ✅ |
| DEVOPS-03 | Tests unitarios con Vitest + React Testing Library | Media | 3 | ⬜ |
| DEVOPS-04 | Monitoreo de errores con Sentry | Media | 2 | ⬜ |
| DEVOPS-05 | Optimizar Core Web Vitals — Lighthouse > 90 | Media | 3 | ⬜ |
| DEVOPS-06 | Caching con Redis e ISR (Incremental Static Regeneration) | Baja | 3 | ⬜ |
| DEVOPS-07 | Documentación: README, ADRs, CONTRIBUTING.md | Baja | 2 | ✅ |

### DEVOPS-01 — Detalles
**Aprenderás:** Vercel deployment, Preview deployments, Environment variables  
**Subtareas:**
- [ ] Conectar repo en vercel.com → New Project → Import from GitHub
- [ ] Configurar variables de entorno en Vercel Dashboard
- [ ] Verificar que cada PR genera preview URL automática
- [ ] Configurar dominio personalizado (opcional)

### DEVOPS-03 — Detalles
**Aprenderás:** Vitest, React Testing Library, coverage  
**Subtareas:**
- [ ] `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react`
- [ ] Configurar `vitest.config.ts`
- [ ] Tests para `src/utils/cn.ts`
- [ ] Tests de componentes UI básicos
- [ ] Agregar job `test` al pipeline de CI

---

## Orden de desarrollo sugerido

```
Sprint 1 (Semana 1-2):  SETUP ✅ → DEVOPS-01 → CORE-01 → CORE-02
Sprint 2 (Semana 3-4):  CORE-03 → CORE-04 → CORE-05 → BLOG-01
Sprint 3 (Semana 5-6):  BLOG-02 → BLOG-03 → MEDIA-01 → MEDIA-02
Sprint 4 (Semana 7-8):  AUTH-01 → AUTH-02 → AUTH-05 → AUTH-03
Sprint 5 (Semana 9-10): MEDIA-03 → MEDIA-04 → AUTH-04 → DEVOPS-03
Sprint 6 (Semana 11+):  BLOG-04 → BLOG-05 → BLOG-06 → DEVOPS-04-06
```

## Progreso

- ✅ Completados: 7 / 30
- 🔄 En progreso: 0 / 30  
- ⬜ Pendientes: 23 / 30
- 📊 Story points completados: 17 / 108
