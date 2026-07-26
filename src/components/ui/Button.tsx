import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-green text-white hover:bg-brand-green-dark shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/30',
  secondary:
    'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30',
  outline:
    'border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white',
  ghost:
    'text-brand-green hover:bg-brand-light',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 font-semibold
    transition-all duration-300 cursor-pointer
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim()

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
