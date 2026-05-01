'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/constants'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-950 dark:bg-gray-950 text-white flex items-center justify-center px-4">
      <motion.div
        className="max-w-2xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm tracking-widest uppercase text-gray-400 dark:text-gray-400 mb-4"
        >
          Systems Engineer · Data Science · AI
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {SITE_CONFIG.author.name}
        </motion.h1>
        <motion.p variants={item} className="text-lg text-gray-400 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          {SITE_CONFIG.description}
        </motion.p>
        <motion.div variants={item} className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/blog"
            className="bg-white text-gray-950 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Ver blog →
          </Link>
          <Link
            href="/contacto"
            className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:border-white/60 transition-colors"
          >
            Contacto
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
