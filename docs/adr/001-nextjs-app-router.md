# ADR 001 — Usar Next.js 14 con App Router

**Estado:** Aceptada  
**Fecha:** 2025-05-01  
**Autor:** Sergio Monsalve

## Contexto

Necesito un framework para construir mi sitio personal que me permita aprender tecnologías modernas de React y tener un entorno real donde practicar.

## Decisión

Usar **Next.js 14 con App Router** como framework principal.

## Razones

- App Router es el futuro de Next.js — el Pages Router está en modo mantenimiento
- Server Components reducen el JS enviado al cliente significativamente
- Soporte nativo de Layouts, Loading states, Error boundaries y Streaming
- Integración perfecta con Vercel para despliegue

## Alternativas consideradas

- **Remix:** Excelente framework, pero menor adopción y ecosistema que Next.js
- **Astro:** Ideal para sitios de contenido estático, pero menos apropiado para aprender patrones React avanzados
- **Vite + React SPA:** Sin SSR ni SSG — perdería las ventajas de rendimiento y SEO

## Consecuencias

- Curva de aprendizaje adicional por la distinción Server/Client Components
- Necesito aprender los nuevos patrones de data fetching (no más getServerSideProps)
- El proyecto estará atado a la evolución de Next.js (aceptable dado el respaldo de Vercel)
