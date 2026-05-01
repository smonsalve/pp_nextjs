/**
 * Global TypeScript types for the project.
 * Feature-specific types live in their own files (e.g. types/blog.ts).
 */

/** Standard API response wrapper */
export type ApiResponse<T = void> =
  | { success: true; data: T }
  | { success: false; error: string }

/** Navigation link used in Navbar and Footer */
export interface NavLink {
  href: string
  label: string
  external?: boolean
}

/** Social media links */
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email'
  href: string
  label: string
}
