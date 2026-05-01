# Guía de contribución

## Flujo de trabajo

1. Crea una rama desde `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/SETUP-01-nombre-descriptivo
   ```

2. Desarrolla y commitea con Conventional Commits:
   ```bash
   git add .
   git commit -m "feat(setup): inicializar proyecto Next.js con App Router"
   ```
   El hook `commit-msg` valida el formato automáticamente.

3. Push y abre un PR hacia `develop`:
   ```bash
   git push origin feature/SETUP-01-nombre-descriptivo
   ```

4. El pipeline de CI debe pasar (lint + type-check + build).

5. Merge del PR → `develop`. Cuando `develop` esté estable, merge → `main`.

## Convenciones de naming

| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| Componentes | PascalCase | `NavBar.tsx` |
| Hooks | camelCase con `use` prefix | `useScrollPosition.ts` |
| Utils | camelCase | `formatDate.ts` |
| Constantes | UPPER_SNAKE_CASE | `MAX_POSTS_PER_PAGE` |
| Tipos/Interfaces | PascalCase | `PostMeta` |
| Rutas (carpetas) | kebab-case | `app/blog-posts/` |

## Alias de imports

Usar siempre `@/` en lugar de rutas relativas:

```typescript
// ✅ Correcto
import { cn } from '@/utils/cn'
import { SITE_CONFIG } from '@/constants'

// ❌ Evitar
import { cn } from '../../../utils/cn'
```
