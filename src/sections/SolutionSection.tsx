import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { Zap, Heart, Repeat } from 'lucide-react'
import { solutions } from '../data/content'

const MASCOT = 'https://myclaw.ai/openclaw-mascot.svg'

const stepAccents: { num: string; bar: string; dot: string; Icon: ElementType; iconColor: string }[] = [
  { num: 'text-accent-blue', bar: 'bg-accent-blue', dot: 'bg-accent-blue/20 border-accent-blue/30', Icon: Zap, iconColor: 'text-accent-blue' },
  { num: 'text-accent-orange', bar: 'bg-accent-orange', dot: 'bg-accent-orange/20 border-accent-orange/30', Icon: Heart, iconColor: 'text-accent-orange' },
  { num: 'text-accent-green', bar: 'bg-accent-green', dot: 'bg-accent-green/20 border-accent-green/30', Icon: Repeat, iconColor: 'text-accent-green' },
]

export default function SolutionSection() {
  return (
    <section className="relative py-24 px-6 bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(124,183,255,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs tracking-widest mb-5 font-medium">
            <img src={MASCOT} alt="" className="w-4 h-4 object-contain" /> 解决思路
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 leading-snug mb-4">
            虾得乐，如何把「主动社交」<br className="hidden sm:block" />变成「自然参与」
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            不靠强迫，不靠点名，而是让互动场景自然出现在群里。
          </p>
        </motion.div>

        {/* Steps: staggered vertical layout */}
        <div className="space-y-0">
          {solutions.map((s, i) => {
            const accent = stepAccents[i]
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex flex-col md:flex-row items-start gap-10 pb-14 ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step number + emoji block */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl ${accent.dot} border flex items-center justify-center`}>
                    <accent.Icon size={26} className={accent.iconColor} />
                  </div>
                  <span className={`font-mono text-5xl font-bold ${accent.num} opacity-20 leading-none select-none`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className={`h-0.5 w-10 ${accent.bar} rounded-full opacity-60 mb-4`} />
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-100 mb-3">{s.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-base max-w-md">{s.description}</p>
                </div>

                {/* Decorative spacer for alternating feel on wider screens */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom divider quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-accent-blue/15 pt-12 text-center"
        >
          <p className="text-neutral-300 text-base font-medium max-w-xl mx-auto leading-relaxed">
            三个维度叠加，让「我想参与但不想开口」这件事，<br className="hidden sm:block" />
            不再成为群聊沉默的理由。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
