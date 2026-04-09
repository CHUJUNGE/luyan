import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AlertCircle, Users, UserX } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { problems } from '../data/content'
import { fadeInUp } from '../lib/motion'

const icons = [AlertCircle, Users, UserX]

export default function ProblemSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="problems" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="我们想解决的，不是「没人说话」，而是工作群里参与成本过高。"
          align="center"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {problems.map((p, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i}
                className="glass-card rounded-xl p-7 group hover:border-accent-blue/25 hover:shadow-[0_0_30px_rgba(79,114,201,0.1)] transition-all duration-300 border border-transparent"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-5 group-hover:bg-accent-blue/20 transition-colors">
                  <Icon size={20} className="text-accent-light" />
                </div>
                <h3 className="text-neutral-100 font-semibold text-lg mb-3">{p.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="text-center text-neutral-300 mt-12 text-base font-medium"
        >
          所以我们真正要做的，不是更吵的群聊，而是更容易参与的群聊。
        </motion.p>
      </div>
    </section>
  )
}
