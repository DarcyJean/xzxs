import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'cyan' | 'blue' | 'gray' | 'light'
  size?: 'sm' | 'md'
}

const variantClasses = {
  cyan: 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20',
  blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
  gray: 'bg-white/5 text-gray-400 border border-white/10',
  light: 'bg-white/10 text-white backdrop-blur-sm',
}

const sizeClasses = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export default function Badge({
  children,
  variant = 'green',
  size = 'sm',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `.trim()}
    >
      {children}
    </span>
  )
}
