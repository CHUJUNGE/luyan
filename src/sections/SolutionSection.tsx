import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Heart, Repeat } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { solutions } from '../data/content'
import { fadeInUp } from '../lib/motion'

const icons = [Zap, Heart, Repeat]

export default function SolutionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="relative py-28 px-6 bg-bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(79,114,201,0.07)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          title="虾得乐，如何把「主动社交」变成「自然参与」"
          align="center"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {solutions.map((s, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={s.id}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i}
                className="relative"
              >
                <div className="glass-card rounded-xl p-7 h-full border border-transparent hover:border-accent-blue/25 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors flex-shrink-0">
                      <Icon size={18} className="text-accent-light" />
                    </div>
                    <span className="text-xs text-accent-light/60 tracking-widest font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-neutral-100 font-semibold text-lg mb-3">{s.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
