import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 px-3 py-1 rounded-full ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-gray-400'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
