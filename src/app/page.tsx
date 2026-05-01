import { SITE_CONFIG } from '@/constants'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          {SITE_CONFIG.author.name}
        </h1>
        <p className="mb-2 text-xl text-gray-600 dark:text-gray-400">
          Systems Engineer · Data Science · AI
        </p>
        <p className="mb-8 text-gray-500 dark:text-gray-500">
          {SITE_CONFIG.author.location}
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/blog"
            className="rounded-lg bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Ver blog →
          </a>
          <a
            href="/contacto"
            className="rounded-lg border border-gray-300 px-6 py-3 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Contacto
          </a>
        </div>
        <p className="mt-12 text-sm text-gray-400">
          🚧 Sitio en construcción — aprendiendo Next.js 14
        </p>
      </div>
    </main>
  )
}
