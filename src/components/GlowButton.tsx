import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function GlowButton({
  children,
  onClick,
  variant = 'primary',
  className,
  disabled = false,
  type = 'button',
}: GlowButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'relative inline-flex items-center gap-2 px-7 py-3 rounded-2xl font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer select-none',
        variant === 'primary' && [
          'bg-accent-blue text-white',
          'shadow-[0_4px_18px_rgba(124,183,255,0.40)]',
          'hover:bg-accent-light hover:shadow-[0_8px_28px_rgba(124,183,255,0.50)]',
        ],
        variant === 'secondary' && [
          'bg-white text-neutral-300 border border-neutral-400/25',
          'shadow-[0_2px_12px_rgba(47,58,79,0.06)]',
          'hover:border-accent-blue/40 hover:text-accent-blue hover:shadow-[0_6px_20px_rgba(124,183,255,0.18)]',
        ],
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {children}
    </motion.button>
  )
}
