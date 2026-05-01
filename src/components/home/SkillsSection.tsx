'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/constants/skills'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function SkillsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-12">
          Stack técnico
        </p>
        <div className="flex flex-col gap-12">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                {group.category}
              </p>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.label}
                    variants={item}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center gap-2"
                  >
                    <span className="text-2xl" role="img" aria-label={skill.label}>
                      {skill.icon}
                    </span>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
