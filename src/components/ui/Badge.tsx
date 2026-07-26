import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'green' | 'blue' | 'gray' | 'light'
  size?: 'sm' | 'md'
}

const variantClasses = {
  green: 'bg-brand-light text-brand-green',
  blue: 'bg-brand-lightBlue text-brand-blue',
  gray: 'bg-gray-100 text-gray-600',
  light: 'bg-white/80 text-brand-green',
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
