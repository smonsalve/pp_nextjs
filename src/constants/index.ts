import type { NavLink, SocialLink } from '@/types'

export const SITE_CONFIG = {
  name: 'Sergio Monsalve',
  title: 'Sergio Monsalve — Systems Engineer & AI Developer',
  description:
    'Systems Engineer and entrepreneur with 13+ years of experience in software development, data science, and AI-driven solutions.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  author: {
    name: 'Sergio Monsalve',
    email: 'smonsalve@gmail.com',
    location: 'Medellín, Colombia',
  },
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/blog', label: 'Blog' },
  { href: '/galeria', label: 'Galería' },
  { href: '/guestbook', label: 'Guestbook' },
  { href: '/contacto', label: 'Contacto' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'github', href: 'https://github.com/smonsalve', label: 'GitHub' },
  {
    platform: 'linkedin',
    href: 'https://linkedin.com/in/smonsalve',
    label: 'LinkedIn',
  },
  { platform: 'email', href: 'mailto:smonsalve@gmail.com', label: 'Email' },
]
