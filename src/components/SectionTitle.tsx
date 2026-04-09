import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp } from '../lib/motion'
import clsx from 'clsx'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={clsx(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-3xl md:text-4xl font-semibold text-neutral-100 leading-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          custom={1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
