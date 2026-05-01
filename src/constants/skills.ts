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
