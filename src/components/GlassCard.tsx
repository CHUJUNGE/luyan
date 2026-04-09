import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
import { fadeInUp } from '../lib/motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  index?: number
  hover?: boolean
}

export default function GlassCard({ children, className, index = 0, hover = true }: GlassCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={clsx(
        'glass-card rounded-xl p-6',
        hover && 'transition-all duration-300 hover:border-accent-blue/30 hover:shadow-[0_8px_32px_rgba(47,58,79,0.10)] hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
