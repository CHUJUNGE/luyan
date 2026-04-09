import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, Folder, FileText } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { techBadges } from '../data/content'
import { fadeInUp } from '../lib/motion'

export default function TechSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="relative py-28 px-6 bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(141,223,195,0.10)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          title="不是一次性 Demo，而是有组织能力的群聊智能体原型"
          align="center"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <p className="text-neutral-400 leading-relaxed text-sm mb-8">
              虾得乐的重点不在于单个玩法本身，而在于它已经具备了承载多种群聊互动能力的原型结构。
              <br /><br />
              它不是简单的回复脚本，而是具备工程结构、模块组织和扩展基础的智能体系统。
              <br /><br />
              对我们来说，技术价值不只是"做出来"，而是"能继续长出来"。
            </p>

            <div className="grid grid-cols-1 gap-3">
              {techBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i + 1}
                  className="flex items-start gap-4 glass-card rounded-xl p-4 hover:border-accent-green/30 hover:shadow-[0_4px_20px_rgba(47,58,79,0.08)] transition-all duration-300"
                >
                  <CheckCircle2 size={18} className="text-accent-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-neutral-100 font-medium text-sm block">{badge.label}</span>
                    <span className="text-neutral-400 text-xs">{badge.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            className="bg-white rounded-2xl p-6 border border-neutral-100/40 shadow-[0_4px_24px_rgba(47,58,79,0.08)]"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-300/70" />
                <div className="w-3 h-3 rounded-full bg-accent-orange/60" />
                <div className="w-3 h-3 rounded-full bg-accent-green/60" />
              </div>
              <p className="text-xs text-neutral-400 font-mono ml-2 tracking-wider">PROJECT STRUCTURE</p>
            </div>
            <div className="font-mono text-sm space-y-1.5">
              {[
                { indent: 0, text: 'workspace-xiatiao/', type: 'dir' },
                { indent: 1, text: '.git/', type: 'dir' },
                { indent: 1, text: '.openclaw/', type: 'dir' },
                { indent: 1, text: 'AGENTS.md', type: 'file' },
                { indent: 1, text: 'BOOTSTRAP.md', type: 'file' },
                { indent: 1, text: 'HEARTBEAT.md', type: 'file' },
                { indent: 1, text: 'IDENTITY.md', type: 'file' },
                { indent: 1, text: 'memory/', type: 'dir' },
                { indent: 1, text: 'PERSONA.md', type: 'file' },
                { indent: 1, text: 'scripts/', type: 'dir' },
                { indent: 1, text: 'skills/', type: 'dir' },
                { indent: 1, text: 'SOUL.md', type: 'file' },
                { indent: 1, text: 'TOOLS.md', type: 'file' },
                { indent: 1, text: 'USER.md', type: 'file' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5"
                  style={{ paddingLeft: `${item.indent * 18}px` }}
                >
                  {item.type === 'dir'
                    ? <Folder size={13} className="text-accent-orange flex-shrink-0" />
                    : <FileText size={13} className="text-accent-blue/70 flex-shrink-0" />
                  }
                  <span className={item.type === 'dir' ? 'text-neutral-100 font-medium' : 'text-neutral-300'}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
