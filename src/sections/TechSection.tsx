import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { techBadges } from '../data/content'
import { fadeInUp } from '../lib/motion'

export default function TechSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="relative py-28 px-6 bg-bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(79,114,201,0.09)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          title="不只是概念，而是一个已经跑起来的 OpenClaw Bot"
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
              虾得乐已经基于 OpenClaw 完成实际搭建，并运行在飞书群聊场景中。
              <br /><br />
              它不是简单的回复脚本，而是具备工程结构、模块组织和扩展基础的智能体系统。
              <br /><br />
              我们在现场展示的不是录屏或假交互，而是真实可运行的群聊智能体。
            </p>

            <div className="grid grid-cols-1 gap-4">
              {techBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i + 1}
                  className="flex items-start gap-4 glass-card rounded-lg p-4 border border-transparent hover:border-accent-blue/20 transition-all duration-300"
                >
                  <CheckCircle2 size={18} className="text-accent-light mt-0.5 flex-shrink-0" />
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
            className="glass-card rounded-xl p-6 border border-accent-blue/10"
          >
            <p className="text-xs text-accent-light/60 font-mono mb-4 tracking-widest">PROJECT STRUCTURE</p>
            <div className="font-mono text-sm space-y-1.5">
              {[
                { indent: 0, text: 'luyan/', type: 'dir' },
                { indent: 1, text: 'src/', type: 'dir' },
                { indent: 2, text: 'components/', type: 'dir' },
                { indent: 2, text: 'sections/', type: 'dir' },
                { indent: 2, text: 'pages/', type: 'dir' },
                { indent: 3, text: 'HomePage.tsx', type: 'file' },
                { indent: 3, text: 'BoardPage.tsx', type: 'file' },
                { indent: 2, text: 'data/', type: 'dir' },
                { indent: 3, text: 'content.ts', type: 'file' },
                { indent: 2, text: 'lib/', type: 'dir' },
                { indent: 3, text: 'feishu.ts', type: 'file' },
                { indent: 3, text: 'motion.ts', type: 'file' },
                { indent: 2, text: 'App.tsx', type: 'file' },
                { indent: 2, text: 'main.tsx', type: 'file' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1"
                  style={{ paddingLeft: `${item.indent * 16}px` }}
                >
                  <span className="text-accent-blue/40 select-none">
                    {item.indent > 0 ? '├─ ' : ''}
                  </span>
                  <span className={item.type === 'dir' ? 'text-accent-light' : 'text-neutral-300'}>
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
