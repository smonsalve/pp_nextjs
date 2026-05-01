'use client'

import { motion } from 'framer-motion'

const ABOUT_PARAGRAPHS = [
  'Ingeniero de Sistemas y emprendedor con más de 13 años construyendo productos de software. He trabajado desde aplicaciones web hasta sistemas de datos a escala, siempre enfocado en el impacto real.',
  'Actualmente me especializo en la intersección entre desarrollo de software moderno e inteligencia artificial: construir sistemas que no solo funcionen, sino que aprendan y mejoren con el tiempo.',
  'Creo que el buen software se construye con claridad, iteración rápida y mucha curiosidad. Este sitio es parte de ese proceso de aprendizaje continuo.',
]

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

export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-24 px-4">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p
          variants={item}
          className="text-xs tracking-widest uppercase text-gray-400 mb-3"
        >
          Sobre mí
        </motion.p>
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8"
        >
          13+ años construyendo software
        </motion.h2>
        {ABOUT_PARAGRAPHS.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={item}
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 last:mb-0"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}
