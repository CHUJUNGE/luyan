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
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'relative inline-flex items-center gap-2 px-7 py-3 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer select-none',
        variant === 'primary' && [
          'bg-accent-blue text-white',
          'shadow-[0_0_20px_rgba(79,114,201,0.4)]',
          'hover:bg-accent-light hover:shadow-[0_0_30px_rgba(110,168,255,0.6)]',
        ],
        variant === 'secondary' && [
          'bg-transparent text-neutral-300 border border-neutral-400/30',
          'hover:border-accent-light/60 hover:text-accent-light hover:shadow-[0_0_20px_rgba(79,114,201,0.2)]',
        ],
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {children}
    </motion.button>
  )
}
