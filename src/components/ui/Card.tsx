import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  className = '',
  hover = true,
  onClick,
  padding = 'md',
}: CardProps) {
  return (
    <motion.div
      className={`
        glass-card
        ${paddingClasses[padding]}
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `.trim()}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  )
}
