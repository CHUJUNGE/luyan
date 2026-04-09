import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessagesSquare, ScrollText, ShieldQuestion } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { features } from '../data/content'
import { fadeInUp } from '../lib/motion'

const iconMap: Record<string, ElementType> = {
  MessagesSquare,
  ScrollText,
  ShieldQuestion,
}

export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="relative py-28 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(143,214,255,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title="核心功能" align="center" />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = iconMap[f.iconName] ?? MessagesSquare
            return (
              <motion.div
                key={f.id}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i}
                className="glass-card rounded-xl p-7 border border-transparent hover:border-accent-blue/25 hover:shadow-[0_0_30px_rgba(79,114,201,0.12)] transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5 group-hover:bg-accent-blue/20 transition-colors">
                  <Icon size={24} className="text-accent-light" />
                </div>
                <h3 className="text-neutral-100 font-semibold text-xl mb-3">{f.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">{f.description}</p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-accent-light/70 bg-accent-blue/8 border border-accent-blue/15 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
