/**
 * Environment variable validation with Zod.
 * This file runs at startup — if a required var is missing,
 * the app fails fast with a clear error instead of a cryptic runtime bug.
 *
 * Usage: import { env } from '@/lib/env'
 *        console.log(env.NEXT_PUBLIC_APP_URL)
 */
import { z } from 'zod'

const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().url().optional(),
  AUTH_SECRET: z.string().min(1).optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.email().optional(),
  UPLOADTHING_TOKEN: z.string().optional(),
})

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: z.string().default('Sergio Monsalve'),
})

/**
 * Server-side env vars — never exposed to the browser.
 * Throws at build time if required variables are missing.
 */
export const serverEnv = serverSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  AUTH_SECRET: process.env.AUTH_SECRET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
})

/**
 * Client-side env vars — safe to expose to the browser.
 * All must be prefixed with NEXT_PUBLIC_.
 */
export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
})

/** Combined export for convenience in Server Components */
export const env = { ...serverEnv, ...clientEnv }
