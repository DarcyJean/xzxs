import { motion } from 'framer-motion'

interface ChipProps {
  children: string
  selected?: boolean
  onClick?: () => void
  icon?: string
}

export default function Chip({
  children,
  selected = false,
  onClick,
  icon,
}: ChipProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
        transition-all duration-200 border-2 cursor-pointer
        ${
          selected
            ? 'bg-brand-green text-white border-brand-green shadow-md shadow-brand-green/20'
            : 'bg-white text-gray-600 border-gray-200 hover:border-brand-green hover:text-brand-green'
        }
      `.trim()}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: selected ? 1.02 : 1,
      }}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-xs"
        >
          ✓
        </motion.span>
      )}
    </motion.button>
  )
}
