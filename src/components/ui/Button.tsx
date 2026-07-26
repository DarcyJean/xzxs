import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyan' | 'glass'
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
    'bg-brand-blue text-white hover:bg-blue-500 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30',
  secondary:
    'bg-white/10 text-white hover:bg-white/20 border border-white/10',
  outline:
    'border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-[#070F1E]',
  ghost:
    'text-brand-cyan hover:bg-white/5',
  cyan:
    'bg-brand-cyan text-[#070F1E] font-bold hover:brightness-110 shadow-lg shadow-brand-cyan/25 hover:shadow-xl hover:shadow-brand-cyan/30',
  glass:
    'glass text-white hover:text-brand-cyan hover:border-brand-cyan/30',
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
