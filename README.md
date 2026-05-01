# Sergio Monsalve — Sitio Personal

Sitio personal construido con Next.js 14 como proyecto de aprendizaje y portafolio profesional.

## Stack tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Validación | Zod |
| Linting | ESLint + Prettier |
| Git hooks | Husky + lint-staged |
| CI/CD | GitHub Actions + Vercel |
| DB (próximo) | PostgreSQL (Neon) + Prisma |
| Auth (próximo) | Auth.js v5 |

## Inicio rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/smonsalve/pp_nextjs.git
cd pp_nextjs

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run lint:fix     # ESLint con auto-fix
npm run format       # Formatear con Prettier
npm run format:check # Verificar formato (usado en CI)
npm run type-check   # Verificar tipos TypeScript
```

## Estructura del proyecto

```
pp_nextjs/
├── .github/
│   ├── workflows/ci.yml          # Pipeline CI
│   └── pull_request_template.md
├── content/
│   └── blog/                     # Artículos en MDX
├── docs/
│   └── adr/                      # Architecture Decision Records
├── public/                       # Assets estáticos
└── src/
    ├── app/                      # Next.js App Router
    │   ├── layout.tsx            # Layout raíz con metadata global
    │   ├── page.tsx              # Página de inicio
    │   └── globals.css
    ├── components/
    │   ├── ui/                   # Componentes genéricos (Button, Card...)
    │   ├── layout/               # Navbar, Footer, Sidebar
    │   ├── blog/                 # Componentes de blog
    │   ├── gallery/              # Galería de fotos/videos
    │   ├── auth/                 # Componentes de autenticación
    │   └── shared/               # Componentes compartidos entre features
    ├── constants/                # Configuración y constantes
    ├── hooks/                    # Custom React hooks
    ├── lib/
    │   └── env.ts                # Validación de variables de entorno
    ├── types/                    # Tipos TypeScript globales
    └── utils/
        └── cn.ts                 # Utilidad para clases de Tailwind
```

## Flujo de trabajo con Git

```
main          ← producción (protegida, solo merge via PR)
  └── develop ← integración (protegida, solo merge via PR)
        └── feature/TICKET-ID-descripcion  ← tu trabajo diario
```

### Conventional Commits

Los commits siguen [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(blog): agregar página de lista de posts
fix(auth): corregir redirect después de login
docs: actualizar README con instrucciones de setup
chore(deps): actualizar Next.js a 14.2
```

## Arquitectura y decisiones técnicas

Ver [`docs/adr/`](./docs/adr/) para los Architecture Decision Records.

## Despliegue

El proyecto se despliega automáticamente en Vercel:
- **Producción:** cada push a `main`
- **Preview:** cada Pull Request genera una URL única

## Licencia

MIT
